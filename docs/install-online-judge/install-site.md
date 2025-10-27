---
sidebar_position: 2
---

# Install Site

:::info
<b>Original source:</b>
- [DMOJ Documentations](https://docs.dmoj.ca/#/)
- [VNOI Documentations](https://vnoi-admin.github.io/vnoj-docs/#/)
:::

## Installing the prerequisites

```bash title="Terminal (Root permissions)"
$ apt update
$ apt install git gcc g++ make python3-dev python3-pip libxml2-dev
$ apt install libxslt1-dev zlib1g-dev gettext curl redis-server
$ curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
$ apt install nodejs
$ npm install -g sass postcss-cli postcss autoprefixer
```

## Creating the database

Next, we will set up the database using MariaDB. The TomChienXuOJ is only tested to work with MySQL, and it is unlikely to work with anything else. Please visit [the MariaDB site](https://mariadb.org/download/?t=repo-config) and follow the download instructions.

When asked, you should select the latest MariaDB version.
```bash title="Terminal (Root permissions)"
$ apt update
$ apt install mariadb-server libmysqlclient-dev
```

The next step is to set up the database itself. You should execute the commands listed below to create the necessary database and user.
```bash title="Terminal (Root permissions)"
$ sudo mariadb
MariaDB> CREATE DATABASE dmoj DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;
MariaDB> GRANT ALL PRIVILEGES ON dmoj.* TO 'dmoj'@'localhost' IDENTIFIED BY '<mariadb user password>';
MariaDB> exit

# Add time zone data to the database. A few pages require this.
$ mariadb-tzinfo-to-sql /usr/share/zoneinfo | sudo mariadb -u root mysql
```

## Creating environments, modules and libraries

Now that you are done, you can start installing the site. First, create a virtual environment and activate it. Here, we'll create a virtual environment named `vnojsite`.
```bash title="Terminal"
$ python3 -m venv vnojsite
$ . vnojsite/bin/activate
```

You should see `(vnojsite)` prepended to your shell. Henceforth, `(vnojsite)` commands assume you are in the code directory, with the virtual environment active.

:::info[About virtual environments]
The virtual environment will help keep the modules needed separate from the system package manager, and save you many headaches when updating. Read more about virtual environments [here](https://docs.python.org/3/tutorial/venv.html).
:::

Now, fetch the site source code:
```bash title="Terminal (Environment activated)"
# You can replace the "site" directory to your own configuration.

# If you want to install VNOI's OJ:
(vnojsite) $ git clone --recursive https://github.com/VNOI-Admin/OJ.git site

# Our freshly customized OJ:
(vnojsite) $ git clone --recursive https://github.com/dookkii/TomChienXuOnlineJudge.git site

(vnojsite) $ cd site
```

Install Python dependencies into the virtual environment.
```bash title="Terminal (Environment activated)"
(vnojsite) $ pip3 install -r requirements.txt
(vnojsite) $ pip3 install -r additional-requirements.txt
```

Install Node.js packages:
```bash title="Terminal (Environment activated)"
(vnojsite) $ npm install
```

You will now need to configure `dmoj/local_settings.py`. You should make a copy of [this sample settings file](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/local_settings.py) and read through it, making changes as necessary. Most importantly, you will want to update MariaDB credentials.

:::info[About debug mode (In installation process)]
Leave debug mode on for now, we'll disable it later after we've verified that the site works.
:::

:::info[Site configurations in setting files]
Generally, it's recommended that you add your settings in `dmoj/local_settings.py` rather than modifying `dmoj/settings.py` directly. `settings.py` will automatically read `local_settings.py` and load it, so write your configuration there.
:::

## Compiling assets

TomChienXuOJ uses `sass` and `autoprefixer` to generate the site stylesheets. TomChienXuOJ comes with a `make_style.sh` script that may be run to compile and optimize the stylesheets.
```bash title="Terminal (Environment activated)"
(vnojsite) $ bash make_style.sh
```

Now, collect static files into `STATIC_ROOT` as specified in `dmoj/local_settings.py`.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py collectstatic
```

You will also need to generate internationalization files.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py compilemessages
(vnojsite) $ python3 manage.py compilejsi18n
```

## Setting up Celery

The TomChienXuOJ uses Celery workers to perform most of its heavy lifting, such as batch rescoring submissions. We will use Redis as its broker, though note that other brokers that Celery supports will work as well.

Start up the Redis server, which is needed by the Celery workers.
``` bash title="Terminal (Root permissions)"
$ service redis-server start
```

Configure `local_settings.py` by uncommenting `CELERY_BROKER_URL` and `CELERY_RESULT_BACKEND`. By default, Redis listens on localhost port `6379`, which is reflected in `local_settings.py`. You will need to update the addresses if you changed Redis' settings.

We will test that Celery works soon.

## Setting up database tables

We must generate the schema for the database, since it is currently empty.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py migrate
```

Next, load some initial data so that your install is not entirely blank.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py loaddata navbar
(vnojsite) $ python3 manage.py loaddata language_small
(vnojsite) $ python3 manage.py loaddata demo
```

:::danger[Warning]
Keep in mind that the `demo` fixture creates a superuser account with a **username** and **password** of `admin`. If your site is exposed to others, you should change the user's password or remove the user entirely.
:::

You should create an admin account with which to log in initially.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py createsuperuser
```

## Running the server

Now, you should verify that everything is going according to plan.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py check
```

At this point, you should attempt to run the server, and see if it all works.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py runserver 0.0.0.0:8000
```

You should <kbd>Ctrl</kbd>+<kbd>C</kbd> to exit after verifying.

:::danger[Do not use `runserver` in production!]
We will set up a proper web-server using `nginx` and `uWSGI` soon.
:::

You should also test to see if `bridged` runs.
```bash title="Terminal (Environment activated)"
(vnojsite) $ python3 manage.py runbridged
```

If there are no errors after about 10 seconds, it probably works. You should <kbd>Ctrl</kbd>+<kbd>C</kbd> to exit.

Next, test that the Celery workers run.
```bash title="Terminal (Environment activated)"
(vnojsite) $ celery -A dmoj_celery worker
```

You can <kbd>Ctrl</kbd>+<kbd>C</kbd> to exit.

## Setting up uWSGI

`runserver` is insecure and not meant for production workloads, and should not be used beyond testing. In the rest of this guide, we will be installing `uwsgi` and `nginx` to serve the site, using `supervisord` to keep `site` and `bridged` running. It's likely other configurations may work, but they are unsupported.

First, copy our `uwsgi.ini` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/uwsgi.ini). You should change the paths to reflect your install.

You need to install `uwsgi`.
```bash title="Terminal (Environment activated)"
(vnojsite) $ pip3 install uwsgi
```

To test, run:
```bash title="Terminal (Environment activated)"
(vnojsite) $ uwsgi --ini uwsgi.ini
```

If it says workers are spawned, it probably works. You <kbd>Ctrl</kbd>+<kbd>C</kbd> to exit.

## Setting up supervisord

You should now install `supervisord` and configure it.
```bash title="Terminal (Root permissions)"
$ apt install supervisor
```

Copy our:
- `site.conf` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/site.conf) to `/etc/supervisor/conf.d/site.conf`
- `bridged.conf` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/bridged.conf) to `/etc/supervisor/conf.d/bridged.conf`
- `celery.conf` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/bridged.conf) to `/etc/supervisor/conf.d/celery.conf`

and fill in the fields.

Next, reload supervisord and check that the site, bridged, and celery have started.
```bash title="Terminal (Root permissions)"
$ supervisorctl update
$ supervisorctl status
```

If all three processes are running, everything is good! Otherwise, peek at the logs and see what's wrong.

## Setting up nginx

Now, it's time to set up `nginx`.

```bash title="Terminal (Root permissions)"
$ apt install nginx
```

You should copy the sample `nginx.conf` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/nginx.conf), edit it and place it in wherever it is supposed to be for your nginx install.

:::info[Where to locate `nginx.conf` file?]
Typically, `nginx` site files are located in `/etc/nginx/conf.d`. Some installations might place it at `/etc/nginx/sites-available` and require a symlink in `/etc/nginx/sites-enabled`.
:::

Next, check if there are any issues with your nginx setup.
```bash title="Terminal (Root permissions)"
$ nginx -t
```

If not, reload the `nginx` configuration.
```bash title="Terminal (Root permissions)"
$ service nginx reload
```

You should be good to go. Visit the site at where you set it up to verify.

If it does not work, check `nginx` logs and `uwsgi` log `stdout`/`stderr` for details.

:::danger[WARNING]
Now that your site is installed, remember to set `DEBUG` to `False` in `dmoj/local_settings.py`. Leaving it `True` is a security risk.
:::

## Configuration of event server

Create `config.js` inside directory websocket with the following content:
```js title="config.js"
const config = {
  get_host: '127.0.0.1',
  get_port: 15100,
  post_host: '127.0.0.1',
  post_port: 15101,
  http_host: '127.0.0.1',
  http_port: 15102,
  long_poll_timeout: 29000
};

export default config;
```

This assumes you use `nginx`, or there be dragons. You may need to shuffle ports if they are already used.

- `get_port` should be the same as the port for `/event/` in `nginx.conf`.
- `http_port` should be the same as the port for `/channels/` in `nginx.conf`.
- `post_port` should be the same as the port in `EVENT_DAEMON_POST` in `dmoj/local_settings.py`.

:::info[`EVENT_DEAMON_*` configurations in setting files]
You need to configure `EVENT_DAEMON_GET` and `EVENT_DAEMON_POLL`. You need to uncomment the relevant section in the nginx configuration.
:::

Need to install the dependencies.
```bash title="Terminal (Environment activated)"
(vnojsite) $ pip3 install websocket-client
```

Now copy `wsevent.conf` [(link)](https://github.com/VNOI-Admin/vnoj-docs/blob/master/sample_files/wsevent.conf) to `/etc/supervisor/conf.d/wsevent.conf`, changing paths, and then update `supervisor` and `nginx`.
```bash title="Terminal (Root permissions)"
$ supervisorctl update
$ supervisorctl restart bridged
$ supervisorctl restart site
$ service nginx restart
```
---
sidebar_position: 3
---

# Install Judge

:::info
**Original source:** [Hướng dẫn cài đặt hệ thống chấm điểm trực tuyến VNOJ sử dụng Docker](https://github.com/VietThienTran/DeploymentTools/blob/main/VNOJ/readme.md) <br/>
**Author:** [Trần Viết Thiện](https://github.com/VietThienTran)
:::

## Install docker

Find out more at [Install the Compose plugin](https://docs.docker.com/compose/install/linux/)!

```bash title="Terminal (Root permissions)"
$ sudo apt-get update
$ sudo apt-get install docker-compose-plugin
```

## Setting up judge configuration on admin site

Access your online judge admin site and navigate to the **Judge** section.

Create judges and save their judge ID and key (case in point, create three judges named **Yuri**, **Naomi**, **Sayuki**).

## Create compilation environment

Download the compilation environment (execute this on both Local Server and Remote Judge):

```bash title="Terminal (Root permissions)"
$ git clone https://github.com/VNOI-Admin/judge-server
$ cd judge-server/.docker
$ sudo apt install make
$ sudo make <judge-tier>
```

You can replace `<judge-tier>` with `tiervnoj`, `tier1`, `tier2`, or `tier3`. Higher tiers include more languages but have larger sizes.

## Create judge on the server

Create configuration files for each judge with the format `<judge-name>.yml` (**Yuri**, **Naomi**, **Sayuki**) and include the following information

```yaml title="<judge-name>.yml | Yuri.yml, Naomi.yml, Sayuki.yml"
id: <judge-name>
key: <judge-key>
problem_storage_globs:
  - /problems/*
```

Note: Replace `<judge-name>` and `<judge-key>` with the IDs and keys you previously created on the web.

In this example, we will run **Yuri** on the Local Server.

## Build docker image

```bash title="Terminal (Root permissions)"
$ sudo docker run \
    --name <judge-name> \
    --network="host" \
    -v <directory-to-problem-data-storage>:/problems \
    --cap-add=SYS_PTRACE \
    -d \
    --restart=always \
    vnoj/judge-<judge-tier>:latest \
    run -p 9999 -c /problems/<judge-name>.yml localhost -A 0.0.0.0 -a 9111
```

Notes:
- For each judge, replace `<judge-name>`, `<judge-name>.yml` (judge config), and `9111` (PID) with unique values for each instance.
- Judges running on the same Local Server must have different IDs (case in point, replace `9111` with `9112`, `9113`, etc.).
- Adjust the file path to the online judge's problem data storage directory, change `<directory-to-problem-data-storage>` to your own configuration.

## Check the status of the judge

Open Docker logs to verify the installation result of the judge:

```bash title="Terminal (Root permissions)"
$ sudo docker logs -ft <judge-name>
```
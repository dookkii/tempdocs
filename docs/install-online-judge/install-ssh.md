---
sidebar_position: 1
---

# Install SSH
:::info
**[Linux SSH Connection Deployment]** This blog post discusses the Linux SSH connection method, which is also compatible with VSCode.

This blog post is based on this Youtube video:
**How to SSH into any VirtualBox VM with VS Code**, by Code Different:
<center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/L-B60APJ1Xs?si=TVh413fml6VwHdP0" title="How to SSH into any VirtualBox VM with VS Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
:::

<br/>

If you're using Virtual Machines, you must set the "**Network: Attached to:**" option to "**Bridged Adapter**". Otherwise, the connection won't work.

<center>
  ![VM-network-settings.png](/img/VM-network-settings.png)
</center>

To check the availability of the SSH System, use the following command:

```bash
$ sudo systemctl status ssh
```

There're 3 cases:
- Active;
- Inactive;
- Error Occurred.

:::warning
If an error occurs, you probably haven’t installed the SSH Service Package yet.
:::

To install them, use the following command with Administrator Permissions:

```bash title="Terminal (Root permissions)"
$ sudo apt install openssh-server
```

If it is inactive, activate it with this command:

```bash title="Terminal (Root permissions)"
$ sudo systemctl enable ssh --now
```

Recheck the status with the first command. If it shows **Active**, then you’re good to go!

Connect with:
```bash title="Terminal"
(user)@(ip)
```

To get the static IP, use:
```bash title="Terminal"
$ hostname -I
```
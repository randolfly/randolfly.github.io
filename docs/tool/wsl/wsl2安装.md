---
date: 2022-08-13
tag:
  - wsl
  - windows
  - linux
category:
  - skill
  - wsl
---

# wsl2安装

# wsl2 安装

## 安装 WSL

[安装 WSL | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install)

[旧版 WSL 的手动安装步骤 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual)

1. 启用 WSL 子系统

```shell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

2. 启用虚拟机功能

```shell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

**重新启动** 计算机，以完成 WSL 安装并更新到 WSL 2。

3. [下载 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
4. 设置 WSL 版本

```shell
wsl --set-default-version 1
```

5. 安装对应版本 Linux

## 升级 WSL2

本文适用于已经安装 WSL1 的系统。

0. 查看当前 WSL 版本号
---------------

打开 PowerShell，执行命令

```
wsl -l -v
```

可以看到 WSL 版本号。如果 WSL 版本号是 1，则需要进行一些操作，才能升级到 WSL2。

1. 检查运行 WSL2 的系统要求
------------------

WSL2 对系统版本有一定要求，键盘选择 **Win + R**，输入 **winver**，点击回车，便可查看当前系统的详细版本。对照下图，看一下是否满足要求，如果不满足要求，则需要对系统进行升级。

![](https://pic2.zhimg.com/v2-42dc211488e829c75975808d579e6041_b.jpg)

2. 启用虚拟机功能
----------

WSL2 需要使用虚拟机，因此需要在系统中启动虚拟机功能。

打开 PowerShell，执行命令 ：

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

重新启动系统。

启动系统后，最好在检查一下虚拟机是否以启动。通过以下方式进行检查，

打开 `控制面版`，查看方式可选择 ` 大图标`，在点击 ` 程序与功能`—>` 启用或关闭 Windows 功能 `，检查下图中红框圈出内容是否均以打对勾；若没有，则需要打对勾并点击确定。

如果没有 Hyper-V 这一项，请查看文章`win10 家庭中文版安装 Hyper-V`。

![](https://pic4.zhimg.com/v2-4e22d87c158bc69b9b5ef79fb72ca99f_b.jpg)

另外，在检查一下 ` 任务管理器`中 -` 性能 `-CPU 中的` 虚拟化 `是否已开启，如果未开启，请参考文章` 在 BIOS 中打开虚拟机 `

![](https://pic3.zhimg.com/v2-bdb6cddfe4bfbaa524706b5ee764545e_r.jpg)

3. 下载 Linux 内核更新包
-----------------

1. 根据系统进行选择：

> x64：[https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi](https://link.zhihu.com/?target=https%3A//wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
> arm64：[https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.ms](https://link.zhihu.com/?target=https%3A//wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi)

2. 运行上一步下载的更新包。

4. 设置分发版版本
----------

打开 PowerShell，执行命令 ：

```
wsl --set-version 分发版名称 版本号
```

例如，将 Ubuntu18.04 设置为 WSL2 的命令为 `wsl --set-version Ubuntu-18.04 2`

该步骤会花一些时间，如果安装成功，会出现 ` 转移成功`。

如果出现 `Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS`，则说明 BIOS 中虚拟机未打开，请参考另一篇文章 ` 在BIOS 中打开虚拟机`。

**说明**

 WSL2 是基于虚拟机的，所以可以在后台运行各种任务，比如 Docker 等等，但是带来的相应问题就是会占用一部分内存，使用 `wsl --shutdown` 可以再不使用的时候停止它，以节约资源。

**参考**：

1. [https://docs.microsoft.com/en-us/windows/wsl/install-win10#set-your-distribution-version-to-wsl-1-or-wsl-2](https://link.zhihu.com/?target=https%3A//docs.microsoft.com/en-us/windows/wsl/install-win10%23set-your-distribution-version-to-wsl-1-or-wsl-2)
2. [https://www.cnblogs.com/stulzq/p/13926936.html](https://link.zhihu.com/?target=https%3A//www.cnblogs.com/stulzq/p/13926936.html)

## 参考

- [WSL1升级为WSL2 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/356397851)
- [安装 WSL | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install)

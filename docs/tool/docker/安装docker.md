---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - docker
---


# 安装 Docker

## Ubuntu
* [ubuntu 20.04 LTS 安装 docker](#ubuntu-2004-lts-安装docker)
	* [零：卸载旧版本](#零：卸载旧版本)
	* [一：设置仓库](#一：设置仓库)
		* [更新 apt 包索引。](#更新-apt-包索引。)
		* [安装依赖包:](#安装依赖包)
		* [添加 GPG 密钥](#添加gpg密钥)
		* [添加软件源](#添加软件源)
	* [二：安装 Docker Engine-Community](#二：安装-docker-engine-community)
	* [三：测试](#三：测试)
	* [四：免 sudo 运行 & 镜像加速](#四：免sudo运行镜像加速)
		* [免 sudo](#免sudo)
		* [docker 镜像加速](#docker镜像加速)
	* [五：参考资料](#五：参考资料)

### 零：卸载旧版本

Docker 的旧版本被称为 docker，docker.io 或 docker-engine 。如果已安装，请卸载它们：

```
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

当前称为 Docker Engine-Community 软件包 docker-ce 。

### 一：设置仓库

在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker 。

#### 更新 Apt 包索引。

```
$ sudo apt update
```

#### 安装依赖包:

```
sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

#### 添加 GPG 密钥

添加 Docker 的官方 GPG 密钥：

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

如果你在阿里云上部署，可能使用阿里云的镜像源（在下面），添加阿里云的证书会更好一些。添加阿里云证书:

```
$ curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

#### 添加软件源

对于 amd64 架构的计算机，添加清华大学 TUNA 软件仓库:

```
sudo add-apt-repository \
   "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

你也可以使用阿里云的软件仓库:

```
sudo add-apt-repository \
    "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
```

如果你对你的网络比较有信心，也可以使用官方的软件仓库:

```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
```

如果你是 ARM 架构，请运行:

```
echo "deb [arch=armhf] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
     $(lsb_release -cs) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list
```

### 二：安装 Docker Engine-Community

更新 apt 包索引。

$ sudo apt update

安装最新版本的 Docker Engine-Community

```
$ sudo apt install docker-ce
```

### 三：测试

> **注意：**如果你的网络和我一样不好使，请先行进行镜像加速再测试。

输入:

```
$ sudo docker run hello-world
```

如果 docker 和你问好——或者说出现类似以下输出:

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Already exists 
Digest: sha256:7d91b69e04a9029b99f3585aaaccae2baa80bcf318f4a5d2165a9898cd2dc0a1
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

就说明安装完事了。

### 四：免 Sudo 运行 & 镜像加速

#### 免 Sudo

参考如下方法将用户添加到 docke 组

```
$ sudo usermod -aG docker [你的用户名]
```

重启 docker

```
$ sudo systemctl restart docker
```

(然而我的机器上发生了很诡异的事——我重启 docker 服务后依然不能以普通用户启动 docker。重启机器后才能免 sudo 运行。)

#### Docker 镜像加速

我用了阿里云的免费加速

> [https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

后续设置按照阿里云网页内提示即可，不再赘述。

### 五：参考资料

-[Windows10 安装 WSL2 Ubuntu20.04 并设置 docker 环境](https://blog.csdn.net/kingsleyluoxin/article/details/105725042)
-[Ubuntu Docker 安装](https://www.runoob.com/docker/ubuntu-docker-install.html)
-[Docker CE 镜像 阿里云开发者社区](https://developer.aliyun.com/mirror/docker-ce?spm=a2c6h.13651102.0.0.3e221b11TQHd3u)
-[Docker Community Edition 镜像使用帮助 清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)



## Windows 安装






## 参考

- [ubuntu 20.04 LTS 安装docker - 进步号无人货运飞船 - 博客园 (cnblogs.com)](https://www.cnblogs.com/songxi/p/12788249.html)

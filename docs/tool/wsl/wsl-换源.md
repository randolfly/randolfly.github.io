---
date: 2022-06-06
tag:
  - wsl
  - windows
  - linux
category:
  - skill
  - wsl
---


# Wsl 换源

## 定义

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/weixin_41529012/article/details/117226884)

1. 找到 wsl 镜像源
-

首先，我们找到自己的 wsl 镜像源所在的地方，在 cmd 中输入 **\\wsl$**
![](https://img-blog.csdnimg.cn/20210524164536858.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
按 enter 可以看到自己的 wsl 在这里了
![](https://img-blog.csdnimg.cn/20210524164626658.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
如果不想以后难找，可以通过给一个网络映射添加网络位置，这样就可以直接进入啦
![](https://img-blog.csdnimg.cn/20210524165240436.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
完成之后就在网络位置可以看见快捷进入的文件夹了
![](https://img-blog.csdnimg.cn/20210524165313937.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
打开文件夹，进入 etc/apt 文件夹，可以看见 sources.list 这一个文件，里面就是 WSL-Ubuntu 默认的 apt 源是国外的源。
![](https://img-blog.csdnimg.cn/20210524170509855.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)

2. 替换镜像源
--

以下附各类国内镜像源：
阿里云：

```
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```


##### 2.1 可以直接用记事本打开

直接将国内镜像 ctrl+c、ctrl+v 放入到 sources.list 里面
![](https://img-blog.csdnimg.cn/20210524170615113.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)

##### 2.2 通过 Sudo 进行修改

首先 cd 到镜像源目录下，为了~确保~ 防止出现错误，用 cp 进行备份
![](https://img-blog.csdnimg.cn/20210524171022995.png)
使用 sudo 管理员权限，使用 vim 进行修改：
![](https://img-blog.csdnimg.cn/20210524171311393.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20210524171222281.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
先不要按 i、a、o 进入编辑模式，如果按了可以通过 esc 取消。
我们先通过按 **ggdG** 这几个字母将里面的内容全部删除，

> 注：通过按下 gg 后发现光标移动到文件首行了。其中，gg 为跳转到文件首行；dG 为删除光标所在行以及其下所有行的内容。d 为删除，G 为跳转到文件末尾行；

![](https://img-blog.csdnimg.cn/20210524171846803.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
然后按 i、a、o 将镜像源复制进去就行啦。
最后按 esc，再按下: wq! 就可以退出啦
![](https://img-blog.csdnimg.cn/20210524172158419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)

3. 更新镜像源列表
----

一次输入以下命令就可以更新啦

```
sudo apt-get update
sudo apt-get upgrade
```

![](https://img-blog.csdnimg.cn/20210524172428436.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTUyOTAxMg==,size_16,color_FFFFFF,t_70)
我的因为更新过了，所以很快就结束了，没有装过的，可能会等几分钟，耐心等待就可以了。

## 参考

- [(15条消息) 教你如何将WSL系统更换国内源？+固定路径+国内镜像源+详细教程_满目星辰-CSDN博客_wsl换源](https://blog.csdn.net/weixin_41529012/article/details/117226884)

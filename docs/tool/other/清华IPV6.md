---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - other
---


# 清华 IPV6


## 定义


**更新 WIN10 以后，在实验室不能直接上 IPV6 需要安装 ISATAP 隧道，查找资料，记录如下，windows 下配置亲测可用
**

**一、什么是 ISATAP 隧道?** 

ISATAP 全名是 Intra-Site Automatic Tunnel Addressing Protocol，是一种 IPv6 隧道技术，使用户可以在 IPv4 网络上访问 IPv6 资源。
**二、清华大学 ISATAP 隧道信息** 
清华大学 ISATAP 隧道路由器的 IPv4 地址是：isatap.tsinghua.edu.cn
用户设置 ISATAP 隧道的接入点为：isatap.tsinghua.edu.cn
清华大学 ISATAP 隧道 IPv6 地址前缀为：2402:f000:1:1501::/64
**三、清华大学 ISATAP 隧道配置方法** 
**1．Windows 环境（以 win7 为例）**
以管理员身份运行 cmd 命令，进入命令行模式 C:\>
输入 netsh
输入 int ipv6 isatap（说明：进入 isatap 配置模式） 
输入 set router isatap.tsinghua.edu.cn
输入 set state enable（说明：激活 isatap 隧道） 
输入 exit（说明：退出 netsh）

右键点击桌面 “计算机” 图标，选择 “管理”，展开“服务和应用程序”，选择“服务”，确认“ip helper” 服务已开启。

此后，通过 ipconfig 应该可以看到一个  2402:f000:1:1501: 为前缀的 v6 地址，hostid 为 0:5efe:x.x.x.x， 其中 x.x.x.x 为您的真实的 IPv4 地址，即可访问 IPv6 资源。 
**2．Linux 环境**
Linux 内核版本在 2.2.0 以后通常支持 IPv6，请查看是否存在 / proc/net/if_inet6 文件，以确定您的系统是否支持 IPv6，如果该文件不存在，可尝试如下命令加载 IPv6 模块： 
＃modprobe ipv6
成功加载后就可以配置 IPv6 了： 
#ifconfig  eth0  inet6 add IPV6ADDR  (IPV6ADDR 为要临时设备的 IPv6 地址)
#route -A inet6  add default  gw  IPV6GATEWAY dev ethX  (为网络设备 ethX 添加 IPv6 网关 IPV6GATEWAY 地址)
＃ping6 ipv6.tsinghua.edu.cn

如果 Fedora9 换成了 2.6.25kernel 都是支持 ISATAP 方式的 ipv6tunnel 接入的。配置方法如下：
（1）首先要保证 kernel 支持 ipv6
（2）接着编辑 / etc/sysconfig/network，增加下面这行
IPV6_DEFAULTGW=youripv6gateway
（3）然后再编辑 / etc/sysconfig/network-scripts/ifcfg-sit1, 内容如下： 
DEVICE=sit1
ONBOOT=yes
IPV6INIT=yes
IPV6TUNNELIPV4=yourisataptunnelIP
IPV6TUNNELIPV4LOCAL=yourlocalipv4ip
IPV6ADDR=youripv6address
（4）最后是 ifupsit1
需注意，ifup-sit 不会创建对应的 sit1 设备，先得手动创建以后才有效的。

这样 ISATAP 就配置好了！ 
**3．Mac OSX 环境**
（1）下载 ISATAP client for Mac OS X
地址：[http://www.momose.org/macosx/isatap.html](http://www.momose.org/macosx/isatap.html "ISATAP client for Mac OSX")
（2）解压 ISATAP client
% cd /usr/local
% sudo tar xfz ~/Downloads/macosx-isatap-*.tar.gz
（3）更改权限 
% sudo chown -R root:wheel /usr/local/isatap
% sudo chmod -R 644 /usr/local/isatap/isatap.kext
（4）配置 ISATAP
配置 ist0 和得到 IPv4 地址（你需要制定现在使用的网卡，比如 en0） 
注：config-ist.sh 有一行需要更改以适应清华 ipv6，将第 50 行改为： 
${ifconfig} ist0 inet6 2001:da8:200:900e:0:5efe:${v4addr} prefixlen 64
然后再执行： 
% sudo ./config-ist.sh en0
指定 ISATAP router
% sudo ./ifconfig ist0 isataprtr 59.66.4.50
% sudo ./rtsold.sh &amp;
设置路由表 
% sudo route delete -inet6 default
注：在执行上面命令之前可以用 netstat -r 查看 ipv6 路由表上是否有 default 这一项，没有则不用执行上面命令 
% sudo route add -inet6 default -interface ist0
启动 IPv6
% sudo ifconfig ist0 up
关闭 IPv6
% sudo ifconfig ist0 down

这样 ISATAP 就配置好了！


## 参考

- [(12条消息) 清华大学 IPV6 设置_jzz3933的博客-CSDN博客_清华ipv6](https://blog.csdn.net/jzz3933/article/details/80732207)

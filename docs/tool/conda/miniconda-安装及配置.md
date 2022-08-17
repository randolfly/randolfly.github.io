---
date: 2022-06-06
tag:
  - miniconda
  - conda
  - python
category:
  - tool
  - conda
---

# miniconda 安装及配置

# Miniconda 安装及配置


## 下载 Miniconda

[https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

下载的时候最好不要下载太新的，选 2019 年 9 月之前的版本，因为这个时间之后的 conda 就停止了镜像源的服务 。见这里： [tBcAAIB3IEgEWCRIBAAA4BMIEgEAAACAIUEiAAAAADAkSAQAAAAAhgSJAAAAAMCQIBEAAAAAGBIkAgAAAABDgkQAAAAAYEiQCAAAAAAMCRIBAAAAgKFQkAgAAAAAfDZBIgAAAAAwJEgEAAAAAIb+Bf4uwfIFeot1AAAAAElFTkSuQmCC](.//)

## Conda 命令不存在

下载好了之后，如果在命令行里面输入 conda 报错，将环境变量改一下，注意是系统变量，将自己电脑中的对应的这三个路径添加进去： [Kx7PmSJjLmIAAAAASUVORK5CYII=](.//)

然后重启电脑打开，再次在命令行中输入 conda 应该就没问题了。

## 添加镜像源

查看已有镜像源： `conda config --get channels` 添加镜像源： `conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/` `conda config --set show_channel_urls yes`

更多关于镜像源的操作： [https://www.mscto.com/python/608457.html](https://www.mscto.com/python/608457.html)

## 创建虚拟环境

`conda create -n main python=3.7` 创建一个虚拟环境名为 main 的 python 版本为 3.7 的虚拟环境

## 更多操作

[conda 环境操作指令以及设置国内镜像](https://blog.csdn.net/weixin_43141320/article/details/105744732)

[ubuntu 安装与卸载 miniconda](https://blog.csdn.net/weixin_43141320/article/details/108343528)

[导出环境配置并快速配置](https://blog.csdn.net/weixin_43141320/article/details/106644682)

[win10 卸载 CUDA10.0 重新安装 10.2 以及 torch1.6-gpu 和 tf2.2-gpu 环境的配置](https://blog.csdn.net/weixin_43141320/article/details/107977407)

[ubuntu16.04 安装 anaconda、conda 的激活、pip 安装包提速、conda 安装包提速、虚拟环境的创建](https://blog.csdn.net/weixin_43141320/article/details/106295141)

[vscode 配置 python 环境以及使用 json 文件配置默认解释器、代码自动保存、pydesigner、kite](https://blog.csdn.net/weixin_43141320/article/details/105943590)

[爬虫的常用库的安装](https://blog.csdn.net/weixin_43141320/article/details/106993580)

[python 的 pyqt5 安装及其在 pycharm 中的使用](https://blog.csdn.net/weixin_43141320/article/details/105742153)

[批量快速安装 python 第三方库 如何查看和更改第三方库的默认安装路径](https://blog.csdn.net/weixin_43141320/article/details/104819827)

安装 jupyter-notebook: `pip install jupyter-notebook` [Jupyter Notebook 介绍、安装及使用教程](https://www.jianshu.com/p/91365f343585)

[jupyter-notebook 添加、查看、删除 python 虚拟环境的 kernel](https://blog.csdn.net/weixin_43141320/article/details/106296893)

[如何更改 jupyter notebook 的主题？](https://blog.csdn.net/weixin_43141320/article/details/106469231)

[jupyter-notebook 安装、python3.5 环境下输入 jupyter-notebook，python3.6 输入 ipython kernel install… 报错](https://blog.csdn.net/weixin_43141320/article/details/106571721)

[阿里源](https://developer.aliyun.com/mirror/pypi?spm=a2c6h.13651102.0.0.3e221b115ucO5u)

个人觉得没必要更改默认路径，因为打开的路径是你运行 jupyter-notebook 命令的路径，想在一个特定的路径下打开 jupyter-notebook 直接在命令行中切换过去就好了，如果非要改，那就。。。： [如何更改 jupyter notebook 打开的默认路径](https://blog.csdn.net/weixin_43141320/article/details/104863182)


## 参考

- [windows中安装miniconda与环境配置_wxl-CSDN博客](https://blog.csdn.net/weixin_43141320/article/details/107955115)

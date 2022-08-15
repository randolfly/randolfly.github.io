---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - conda
---


# Miniconda 安装及配置


## 下载 Miniconda

[https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)

下载的时候最好不要下载太新的，选 2019 年 9 月之前的版本，因为这个时间之后的 conda 就停止了镜像源的服务 。见这里： [https://blog.csdn.net/yixieling4397/article/details/100551813](https://blog.csdn.net/yixieling4397/article/details/100551813) 比如我下载的是这个版本： ![](data:image/png;base64,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)

## Conda 命令不存在

下载好了之后，如果在命令行里面输入 conda 报错，将环境变量改一下，注意是系统变量，将自己电脑中的对应的这三个路径添加进去： ![](data:image/png;base64,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)

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

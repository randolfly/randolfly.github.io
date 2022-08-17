---
date: 2022-06-06
tag:
  - jupyter
category:
  - tool
  - jupyter
---

# jupyter 美化

# Jupyter 美化


## 定义

直接使用别人配置好的界面：
- [dunovank/jupyterlab_legos_ui: legos light ui and syntax theme for jupyterlab (modeled after jupyter-themes style) (github.com)](https://github.com/dunovank/jupyterlab_legos_ui)
- [dunovank/jupyterlab_darkside_ui: Darkside ui and syntax theme for jupyterlab (github.com)](https://github.com/dunovank/jupyterlab_darkside_ui)

**jupyterthemes**！

![](https://pic4.zhimg.com/v2-a23c50d997cb1841b965ea5df7a3c513_r.jpg)

GitHub 地址：[https://github.com/dunovank/jupyter-themes](https://link.zhihu.com/?target=https%3A//github.com/dunovank/jupyter-themes)

安装步骤：
-----

当然，前提是你已经安装过了 jupyter notebook！如果没有的话，就直接安装 Anaconda 吧，里面自带了 jupyter notebook。

在 cmd 中使用 pip 安装：

```
# install jupyterthemes
pip install jupyterthemes

# upgrade to latest version
pip install --upgrade jupyterthemes
```

官方的安装到这里就结束了。但是我在进行了上面的操作之后，还是不行，打开 notebook 之后，代码都不能运行了。后来经过排查，发现是 notebook 版本太低，这也是安装 jupyterthemes 的时候最常见的问题。
于是，我们对我们的 notebook 进行升级，在 cmd 中输入：

```
conda upgrade notebook
```

升级之后，再重新安装一下 jupyterthemes，即可安装成功。

然后，我们就可以调整我们的样式了。

调整样式：
-----

首先，我们看看有哪些样式可供选择。
在 cmd 中，我们允许命令：

```
jt -l
```

便可查看样式列表：

![](https://pic2.zhimg.com/v2-0592270b963d9e7bc4946e98508e91b1_b.jpg)

想更改样式，直接在 cmd 中输入 **jt -t 主题名** 即可。
下面我随便展示一下其中的几个：

①chesterish：
------------

![](https://pic4.zhimg.com/v2-95256c493633f087cb11b9821036f467_r.jpg)

②grade3：
--------

![](https://pic4.zhimg.com/v2-4da952f822856b0c67944217948d3d2b_r.jpg)

③gruvboxd：
----------

![](https://pic3.zhimg.com/v2-668771828d97de9cea18a1449344430a_r.jpg)

④gruvboxl：
----------

![](https://pic3.zhimg.com/v2-a990e264cb58b374dc4b33ece554c7d2_r.jpg)

⑤monokai：
---------

![](https://pic4.zhimg.com/v2-abe173266ce29a4b9e5c245c86352f13_r.jpg)

是不是酷炫了许多？！

但是，我还是不太满意，因为有一些 **字体不够美观，输出区的字体太小了**，这个时候就需要借助 **jupyterthemes** 中的各种 **命令** 来调整了。

下面贴出主要的几个命令（全部命令去 GitHub 上查看）：

**cl optionsargdefault**List Themes-l—Code Font-f—Code Font-Size-fs11Notebook Font-nf—Notebook Font Size-nfs13Text/MD Cell Font-tf—Text/MD Cell Fontsize-tfs13Output Area Fontsize-ofs8.5Toolbar Visible-T—Name & Logo Visible-N—Kernel Logo Visible-kl—Reset Default Theme-r—

具体每个命令什么作用就顾名思义了，不用我翻译了。
注意，**所有的命令行，前面都要用 `jt` 来开头**，这样才代表是 jupyterthemes 的命令。

经过我的反复调试，我终于调整到了我看得舒服的样式，下面 **分享一下我的个性化命令**：

```
jt -t gruvboxd -f fira
```

得到的样子是这样的：

![](https://pic2.zhimg.com/v2-f22b07dd57863f15ca0fa5169e0c1a11_r.jpg)

**字体美观，大小合适，甚合朕意！**

当然，每个人审美不同，大家可以根据自己的喜好进行调整。

## 参考

- [dunovank/jupyter-themes: Custom Jupyter Notebook Themes (github.com)](https://github.com/dunovank/jupyter-themes)
- [dunovank/jupyterlab_legos_ui: legos light ui and syntax theme for jupyterlab (modeled after jupyter-themes style) (github.com)](https://github.com/dunovank/jupyterlab_legos_ui)
- [dunovank/jupyterlab_darkside_ui: Darkside ui and syntax theme for jupyterlab (github.com)](https://github.com/dunovank/jupyterlab_darkside_ui)

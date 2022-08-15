---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - git
---


# Git 加速访问


## 定义

加速国内 github 访问。

### 代理

使用 hub.fastgit.org 在线代理。

#### 1、**[https://fastgit.org](https://link.zhihu.com/?target=https%3A//fastgit.org)**

这个呢是大家可以参看 [https://doc.fastgit.org/zh-cn/#%E5%85%B3%E4%BA%8E-fastgit](https://link.zhihu.com/?target=https%3A//doc.fastgit.org/zh-cn/%2522%2520%255Cl%2520%2522%25E5%2585%25B3%25E4%25BA%258E-fastgit)

说明，我就不转述了， FastGit 仅仅是 GitHub 的代理，仅仅需要替代远程地址即可。

##### 1.1、git Clone 加速，以 NTLK 和 NLTK_data 为例：

原始网址：

```
https://github.com/nltk/nltk.git
https://github.com/nltk/nltk_data.git
```

使用代理加速网址只要把 [http://github.com](https://link.zhihu.com/?target=http%3A//github.com) 替换成 [http://hub.fastgit.org](https://link.zhihu.com/?target=http%3A//hub.fastgit.org) 即可

```
https://hub.fastgit.org/nltk/nltk.git
https://hub.fastgit.org/nltk/nltk_data.git
```

##### 1.2、Release 和源码存档的下载

```
https://github.com/nltk/nltk/archive/3.5.zip
```

替换成如下：

```
https://download.fastgit.org/nltk/nltk/archive/3.5.zip
```

##### 源代码的下载

原始 NLTK_data:

```
https://github.com/nltk/nltk_data/archive/gh-pages.zip
```

替换成：

```
https://hub.fastgit.org/nltk/nltk_data/archive/gh-pages.zip
```

原始 nltk:

```
https://github.com/nltk/nltk/archive/develop.zip
```

替换成：

```
https://hub.fastgit.org/nltk/nltk/archive/develop.zip
```

##### 1.3、对 Raw 的代理

下载链接中的

```
https://raw.githubusercontent.com/
```

替换为为

```
https://raw.fastgit.org/
```

#### 2、[https://gitclone.com](https://link.zhihu.com/?target=https%3A//gitclone.com)

----

加速 git clone

NLTK 原地址

```
git clone https://github.com/nltk/nltk.git
git clone https://github.com/nltk/nltk_data.git
```

替换成

```
git clone http://gitclone.com/github.com/nltk/nltk_data.git
git clone http://gitclone.com/github.com/nltk/nltk.git
```

即可

更详细使用说明请参阅 [https://gitclone.com/docs/intro](https://link.zhihu.com/?target=https%3A//gitclone.com/docs/intro)

#### 3、[https://gitee.com/mirrors](https://link.zhihu.com/?target=https%3A//gitee.com/mirrors)

这个是国内 github 的镜像，速度超快。按 github 上项目的名称搜索即可，不过可能会有有些项目没有镜像

## FastGithub 全局代理

[下载软件](https://github.com/dotnetcore/FastGithub/releases/tag/2.0.6)，安装可以全局代理

## 参考

- None

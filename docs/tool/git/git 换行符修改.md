---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - git
---


# Git 换行符修改

> 又名：[windows下git显示文件被修改，实际没有改动的问题解决办法](https://www.cnblogs.com/lxwphp/p/10632353.html)


## 问题：

从 git 上拉取服务端代码，然后只修改了一处地方，准备提交时，用 diff 软件查看，却发现整个文件都被修改了；或者只是打开了一个文件，并未修改内容，却发现 git 中 change 了这个文件。这是 git 自动转换换行符导致的问题

## 解决方案

==禁用 git 的自动换行功能==



### 方法 2
使用 cmd 进行 bash 修改吗，原理也是修改.gitconf 文件。输入以下命令：

```shell

git config --global core.autocrlf false

git config --global core.filemode false

git config --global core.safecrlf true
```

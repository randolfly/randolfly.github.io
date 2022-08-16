---
date: 2022-06-06
tag:
  - git
  - encoding
category:
  - skill
  - git
---


# Git 目录中文乱码

> - tags:

## 定义

问题：**git status 不能显示中文**

## 解决

终端输入：
```shell
git config --global core.quotepath false
```


## 参考

- [git 显示中文和解决中文乱码 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/133706032)

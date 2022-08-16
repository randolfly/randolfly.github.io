---
date: 2022-06-06
tag:
  - miniconda
  - conda
  - python
  - pip
category:
  - skill
  - conda
---


# Pip 不存在解决方案


## 问题描述

今天 安装其它 python 包时，提示说 pip 10.0.1 可用，就更新了一下，但是 更新过程中出现了错误，如图所示

![](https://img-blog.csdn.net/20180427140408254)

具体报错为：
```shell
Traceback (most recent call last):
  File "D:\Work\Conda\Scripts\pip3-script.py", line 6, in <module>
    from pip._internal.cli.main import main
ModuleNotFoundError: No module named 'pip'
```

因为这个错误导致 pip 找不到，

## 解决方案

可以首先执行  `python -m ensurepip`  然后执行 `python -m pip install --upgrade pip` 即可更新完毕。

如下图所示

![](https://img-blog.csdn.net/20180427140554364)

## 参考

- [解决 ModuleNotFoundError: No module named 'pip'_未来战警-CSDN博客](https://blog.csdn.net/wwangfabei1989/article/details/80107147)

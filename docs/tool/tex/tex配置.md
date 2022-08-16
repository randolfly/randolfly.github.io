---
date: 2022-06-06
tag:
  - tex
  - 字体
  - config
  - install
category:
  - skill
  - tex
---


# Tex 配置

> - tags:

## 定义

::: note note
注意不要用*texlive*了，**MikTeX**太香了
:::



Windows 安装 texlive 后可能会出现问题，这里对其做一定的收集和整理，解决安装问题。

**找不到字体 (SimSun)**

这是由于没有找到 "fonts.conf" 路径。解决方案如下：

在用户环境变量中新建环境变量 **FONTCONFIG_FILE**，输入 fonts. conf 的路径。我这里是："D:\Work\TeX\texlive\2020\texmf-var\fonts\conf\fonts.conf"。

附上测试 tex 代码：

```tex
\documentclass{ctexart}

\begin{document}
张荣侨，hello world.
\end{document}
```



## 参考

- [TinyTeX+VSCode打造Latex编辑环境 | hq's blog (stevehu.cn)](http://blog.stevehu.cn/2019/05/01/TinyTex-VSCode/)

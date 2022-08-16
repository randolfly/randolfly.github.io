---
date: 2022-06-06
tag:
  - markdown
  - equation
  - typora
category:
  - skill
  - other
---


# Markdown 公式引用

## 定义

在 markdown 使用公式的时候，有时需要引用一些公式，在 typora 中可以很方便的实现，参考下面结果。

使用关键字==\label{}==和==\eqref{}==可以实现这一效果。


$$

\begin{aligned}
&\ddot{\theta}=f(\underline{\theta})+g(\underline{\theta})(u+d(t)) \\
&\ddot{x}=-\frac{4}{3} l \sec \theta \ddot{\theta}-\frac{\mu_{p}}{m l} \sec \theta \dot{\theta}+g \tan \theta
\end{aligned}
\label{as}

$$


based on equation $\eqref{as}$, present a robust adaptive control architecture.

>obsidian 似乎不支持


## Obsidian 实现


$$
\begin{aligned}
&\ddot{\theta}=f(\underline{\theta})+g(\underline{\theta})(u+d(t)) \\
&\ddot{x}=-\frac{4}{3} l \sec \theta \ddot{\theta}-\frac{\mu_{p}}{m l} \sec \theta \dot{\theta}+g \tan \theta
\end{aligned}

$$

^eqn-test

使用 **块链接** 功能，例如 `^eqn-test` 进行链接：[^eqn-test](./#^eqn-test)



## 参考

- [markdown 公式引用_Galoa的博客-CSDN博客_markdown引用公式](https://blog.csdn.net/Galoa/article/details/79921551)

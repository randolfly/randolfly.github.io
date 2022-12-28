---
date: 2022-12-22
tag:
  - 系统辨识
  - 线性时不变系统
category:
  - library
  - control
  - 系统辨识
  - SystemIdentificationTheory
---

# Chap2 Time-invariant linear systems


## 冲激响应和传递函数

**时不变**和**线性**是一个经久不衰的假设了，我们不再过多赘述

一个线性时不变的因果系统可以通过冲激响应进行描述，具体如下：

[p41r179](.//)

使用卷积的形式，我们在知道 $g(t)$ 和 $u(s)$ 之后，可以完整地描述出系统的所有输出，因此这是一个合理的系统描述

引入注记符号：
- $q$ : forward shift operator：$q u (t)= u(t+1)$
- $q^{-1}$ : backward shift operator: $q^{-1} u (t) = u(t-1)$

根据前面卷积式子，我们可以将其重构为下面形式：

[p47r138](.//)

我们可以引入符号 $G (q) = \sum_{k=1}^{\infty} g (k) q^{-k}$ ，称其为transfer operator / transfer function


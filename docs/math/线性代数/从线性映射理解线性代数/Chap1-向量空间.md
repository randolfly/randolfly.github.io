---
date: 2022-08-09
tag:
  - math
  - 线性代数应该这样学
  - linearAlgebra
category:
  - library
  - math
  - 线性代数
  - 从线性映射理解线性代数
---

# Chap1 向量空间

# Chap1 向量空间


## 定义

在给定了一个域 F 后，考虑向量空间定义为一个带有加法和标量乘法的集合 V，使得其满足这样的一些性质：

首先定义加法和标量乘法

::: tip definition
定义加法和标量乘法：
- 集合V上的加法是一个函数，将每一对$u,v \in V$对应到V中的一个元素$u+v$
- 集合V上的标量乘法是一个函数，将每一个标量$\lambda \in F$和$v \in V$对应到V中的一个元素$\lambda v \in V$
:::


从而我们可以定义一个向量空间

::: tip definition
向量空间是带有**加法**和**标量乘法**的集合V，满足下面的性质：
- 交换性：$\forall u,v \in V, u+v=v+u$
- 结合性：
$$
\begin{array}{c}
	\forall u,v,w\in V, a,b\in F\\
	\left( u+v \right) +w=u+\left( v+w \right)\\
	\left( ab \right) v=a\left( bv \right)\\
\end{array}
$$

- 加法单位元：$\exists 0\in V, \forall v\in V, v+0=v$
- 加法逆元：$\,\,\forall v\in V,\exists w\in V, v+w=0$
- 乘法单位元：$\forall v\in V, 1v=v$
- 分配性质：
$$
\begin{array}{c}
	\forall a,b\in F\quad u,v\in V\\
	a\left( u+v \right) =au+av\\
	\left( a+b \right) v=av+bv\\
\end{array}
$$

:::


不难根据定义证明，**加法单位元** 和 **加法逆元** 唯一

存在了一个空间，进一步可以定义扩充向量空间的集合，这就引入了子空间。

::: tip definition
如果一个向量空间V的子集U（采用和V相同的加法和标量乘法）也是向量空间，那么称U是V的子空间
:::


也就是说，根据前面的定义，子空间需要满足下面几个条件：
- 加法单位元
- 加法封闭性
- 标量乘法封闭性

注意标量乘法封闭性使得加法逆元自然成立 (-1)，其余的结合性、交换性、分配律在 V 上成立自然在其子集 U 上成立

## 向量空间上的运算

考虑集合的子集构成子空间的条件后，我们可以将集合上的运算也类似平移到向量空间上。这带来了下面的定义：

::: tip definition
子空间的和
假设$U_1,\cdots ,U_m$都是V的子集，那么定义$U_1,\cdots ,U_m$的和为其中元素所有可能的和偶成的集合，即：

$$
U_1+\cdots +U_m=\left\{ u_1+\cdots +u_m|u_1\in U_1,\cdots ,u_m\in U_m \right\} 
$$

:::


从上面可以看出，子空间的并和子空间的和是两个概念，子空间的并一般不是子空间（一个显然的例子是 x 轴点和 y 轴点的和）。

这里子空间的和效果上类似于集合论中子集的并，性质是相似的：
- 子空间的和是包含这些子空间的最小子空间
- 子集的并集是包含这些子集的最小子集

从上面的定义来看，子空间的和需要非常多的计算，我们感兴趣的是具有唯一性的情形，也就是 $U_1+\cdots +U_m$ 中每个向量都可以惟一的表示成 $u_1+\cdots +u_m$，这引入了 **直和** 的定义

::: tip definition
直和的定义
假设$U_1,\cdots,U_m$都是V的子空间
- 和$U_1+\cdots +U_m$称为直和，如果$U_1+\cdots +U_m$中的每个元素都可以惟一的表示成$u_1+\cdots +u_m$，其中每个$u_i$属于$U_i$
- 若$U_1+\cdots +U_m$是直和，那么使用$U_1\oplus \cdots \oplus U_m$来表示直和
:::


根据我们的设计，直和的定义要求空间中的每个向量都能惟一的表示成一个恰当的和。而事实上，不需要考虑所有向量，我们的结果表明只需要考虑 0 是否可以惟一的写成一个恰当的和/加法单位元。

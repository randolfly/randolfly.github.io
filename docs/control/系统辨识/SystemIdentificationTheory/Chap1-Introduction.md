---
date: 2022-11-26
tag:
  - 系统辨识
  - intro
category:
  - library
  - control
  - 系统辨识
  - SystemIdentificationTheory
---

# Chap1 Introduction





> Inferring models from observations and studying their properties is really what science is about.
> [Balakrishnan_2002_System identification](.//)

## 动态系统

系统辨识处理的对象是数学上建立的动态系统模型：通过观察实际系统得到的数据，我们推断出建立的动态系统模型的参数和结构。因此，研究系统辨识的第一步就是理解动态系统

[p24r102](.//)
^fig-1-1

如图 [^fig-1-1](./#^fig-1-1) 所示，一个动态系统一般由3大部份组成：

- 输入u
- 输出y
- 扰动
	- 可测扰动w
	- 不可测扰动v

其中可测扰动和输入之间的区别在研究系统辨识的时候是不太重要的，我们可以不做进一步区分

**dynamic**: 系统当前输出不仅依赖当前激励，还依赖以往时刻的激励
**model**: 我们对系统的描述方式，和真实的物理系统具有“可悲的透明障壁”，所以没有True model，只有useful model

## 研究的典型问题——ARX Model And Least Square Method

我们介绍一个典型的估计问题，其可以反映本书想要处理的中心问题

### Model

记系统在时间t的输出输出为 $u(t)$ 和 $y(t)$，那么一个最基础的关于输入输出的关系式可以写为：


$$

y(t)+a_{1}y(t-1)+\cdots+a_{n}y(t-n)=b_{1}u(t-1)+\cdots b_{m}u(t-m)

$$

^eq-1-1

注意这里我们将这个系统表示为*离散时间*模式，这主要是因为我们采样的数据是离散的，所以表示为离散模型更加自然。

一个自然的且更有用的对式子 [eq-1-1](./) 的表示形式为：


$$

\begin{aligned}
	\theta &=\left[ \begin{matrix}
	a_1&		\cdots&		a_n&		b_1&		\cdots&		b_m\\
\end{matrix} \right] ^T\\
	\varphi \left( t \right) &=\left[ \begin{matrix}
	-y\left( t-1 \right)&		\cdots&		-y\left( t-n \right)&		u\left( t-1 \right)&		\cdots&		u\left( t-m \right)\\
\end{matrix} \right] ^T\\
	y\left( t \right) &=\varphi \left( t \right) ^T\theta\\
\end{aligned}

$$

^eq-1-2

为了突出计算 $y(t)$ 依赖于参数 $\theta$，可以将式子表示为：


$$

\hat{y}(t|\theta) = \varphi ^T\left( t \right) \theta

$$


现在我们考虑如何在给定了一定数据的情况下估计出尽可能准确的系统模型

### Least Square Method

假定我们现在不知道系统参数 $\theta$，但是我们记录了一定时间长度 ($1\leq t \leq N$) 的系统输入输出：


$$

Z^N=\left\{ u\left( 1 \right) ,y\left( 1 \right) ,\cdots ,u\left( N \right) ,y\left( N \right) \right\}

$$

^eq-1-6

那么一个显然的方式就是在模型 [eq-1-2](./) 基础上，选取 $\theta$ 来使得计算的估计输出 $\hat{y}\left( t|\theta \right)$ 和测量值尽可能地接近，这里使用Least Square Method


$$

\underset{\theta}{\min}V_N\left( \theta ,Z^N \right)

$$

^eq-1-7

其中：


$$

V_N\left( \theta ,Z^N \right) =\frac{1}{N}\sum_{t=1}^N{\left( y\left( t \right) -\hat{y}\left( t|\theta \right) \right) ^2}=\frac{1}{N}\sum_{t=1}^N{\left( y\left( t \right) -\varphi ^T\left( t \right) \theta \right) ^2}

$$

^eq-1-8

通过minimize 式子 [eq-1-7](./)，得到：


$$

\hat{\theta}_N=\mathrm{arg} \underset{\theta}{\min}\,\,V_N\left( \theta ,Z^N \right)

$$

^eq-1-9

注意到 $V_{N}$ 对 $\theta$ 是quadratic的，从而求解其极小值简单地通过求导得到：


$$

\begin{aligned}
	0&=\frac{\mathrm{d}}{\mathrm{d}\theta}V_N\left( \theta ,Z^N \right) =\frac{2}{N}\sum_{t=1}^N{\varphi \left( t \right) \left( y\left( t \right) -\varphi ^T\left( t \right) \theta \right)}\\
	\Rightarrow \hat{\theta}_N&=\left[ \sum_{t=1}^N{\varphi \left( t \right)}\varphi ^T\left( t \right) \right] ^{-1}\sum_{t=1}^N{\varphi \left( t \right)}y\left( t \right)\\
\end{aligned}

$$

^eq-1-11

从而一旦确定了 $\varphi(t)$，理论上的最优解就可以直接求出

### Example 估计方程例子

考虑这样一个简单的模型：


$$

y\left( t \right) +ay\left( t-1 \right) =bu\left( t-1 \right)

$$


基于式子 [^eq-1-1](./#^eq-1-1) 和式子 [^eq-1-11](./#^eq-1-11)，可以得到理想的估计为：


$$

\left[ \begin{array}{c}
	\hat{a}_N\\
	\hat{b}_N\\
\end{array} \right] =\left[ \begin{matrix}
	\sum{y^2\left( t-1 \right)}&		-\sum{y\left( t-1 \right) u\left( t-1 \right)}\\
	-\sum{y\left( t-1 \right) u\left( t-1 \right)}&		\sum{u^2\left( t-1 \right)}\\
\end{matrix} \right] ^{-1}\left[ \begin{array}{c}
	-\sum{y\left( t \right) y\left( t-1 \right)}\\
	\sum{y\left( t \right) u\left( t-1 \right)}\\
\end{array} \right]

$$


其中所有的 $\sum$ 代表t从1→N求和，为了简单起见，一个常用的convention是将超出采样长度范围的数据结果置为0，在这里我们有 $y(0)=0$


---

总之，根据上面的例子，我们可以得到系统辨识的基本流程所需的3个基本步骤：

1. 一个数据集
	1. 比如 $Z^N$ [^eq-1-6](./#^eq-1-6)
2. 一组待选模型
	1. 比如前面的 [^eq-1-1](./#^eq-1-1)
3. 一个利用数据集来评估待选模型的规则
	1. 比如最小二乘法

[Balakrishnan_2002_System identification](.//)

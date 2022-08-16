---
date: 2022-08-10
tag:
  - paper
  - unread
  - Adaptive-sliding-mode
  - Euler–Lagrange-systems
  - Switching-gain
  - Uncertainty
  - ASMC
category:
  - library
  - zotero
  - paper_note
---

# @royAdaptiveSlidingMode2020

# royAdaptiveSlidingMode2020

## MetaInfo

::: note 文献标题

 On adaptive sliding mode control without a priori bounded uncertainty
:::

::: note Abstract

Adaptive Sliding Mode Control (ASMC) aims to adapt the switching gain in such a way to cope with possibly unknown uncertainty. In state-of-the-art ASMC methods, a priori boundedness of the uncertainty is crucial to ensure boundedness for the switching gain and uniformly ultimately boundedness. A priori bounded uncertainty might impose a priori bounds on the system state before obtaining closed-loop stability. A design removing this assumption is still missing in literature. A positive answer to this quest is given by this note where a novel ASMC methodology is proposed which does not require a priori bounded uncertainty. An illustrative example is presented to highlight the main features of the approach, after which a general class of Euler–Lagrange systems is taken as a case study to show the applicability of the proposed design.
:::


## Contents

### 问题描述

#### 问题背景

- A design challenge in sliding mode control is to tackle uncertainties in the system to be controlled without prior knowledge about them
	- Based on this, lead to #ASMC, the switching-gain is adapted to cope with possibly unknown uncertainty.

#### 前人工作

- increase monotonically the switching-gain
	- lead to high gain
- Another way
	- increasing-decreasing ASMC
		- [@plestanNewMethodologiesAdaptive2010](./@plestanNewMethodologiesAdaptive2010.md)
	- equivalent control ASMC

#### 前人缺陷

- Most work assume the uncertainty or its time-derivative to be *upper bounded by a constant*
	- such prior constant upper bound might be restrictive hence it requires the states have a upper bound before obtaining system stability
	- Illustrative example
		- shows that if *initial K0 is not high enough, the instablity might arise*
		- ![Pasted image 20220809150741](./assets/Pasted-image-20220809150741.png)


#### 本文工作

#### 本文意义

### 实验方法

#### 控制方法

在 [@plestanNewMethodologiesAdaptive2010](./@plestanNewMethodologiesAdaptive2010.md) 提出的方法基础上：


$$
\begin{array}{l}
	\tau \left( t \right) =-K\mathrm{sgn} \left( s\left( t \right) \right)\\
	\dot{K}\left( t \right) =\begin{cases}
	\bar{K}\left| s\left( t \right) \right|\mathrm{sgn} \left( \left| s\left( t \right) \right|-\epsilon \right)\\
	\mu\\
\end{cases}\qquad \begin{array}{c}
	\mathrm{if} K\left( t \right) \geqslant \mu\\
	\mathrm{if} K\left( t \right) <\mu\\
\end{array}\\
\end{array}
$$

^eqn-raw-sm

提出新的方法：

考虑这样一个 scalar system：


$$
\dot{q}(t)=-cq(t)+\tau (t)+d(q,t)
$$


其中 $c>0$ 是未知的，$\tau$ 是控制输入，$d$ 代表建模误差和与时间相关的扰动

根据选择的滑模变量，有：


$$
\dot{s}=\frac{\partial s}{\partial t}+\frac{\partial s}{\partial q}\dot{q}=\frac{\partial s}{\partial t}+\underset{a\left( q,t \right)}{\underbrace{\frac{\partial s}{\partial q}\left( -cq+d \right) }}+\underset{b\left( q,t \right)}{\underbrace{\frac{\partial s}{\partial q}}}\tau 
$$


假定

$$
\left| a\left( q,t \right) \right|\leqslant K_{0}^{*}+K_{1}^{*}\left| q \right|,\forall q,\forall t\geqslant 0
$$


::: note note
这里我个人觉得其实不是很好的假设，还是没有脱离上界限制，无非是修改成了**可变大小**的上界，这个可变大小如何界定是一个问题
:::


从而提出：


$$
\begin{array}{l}
	\tau \left( t \right) =-\varLambda s\left( t \right) -\rho \left( t \right) \mathrm{sgn} \left( s\left( t \right) \right)\\
	\rho \left( t \right) =\hat{K}_0\left( t \right) +\hat{K}_1\left( t \right) \left| q\left( t \right) \right|\\
	\dot{\hat{K}}_0\left( t \right) =\left| s\left( t \right) \right|-\alpha _0\hat{K}_0\left( t \right)\\
	\dot{\hat{K}}_1\left( t \right) =\left| s\left( t \right) \right|\left| q\left( t \right) \right|-\alpha _1\hat{K}_1\left( t \right)\\
\end{array}
$$


#todo 进一步分析可以以后再做，看这篇文章主要是为了找一下 #ASMC 相关研究的论文

### 优点缺点

#### 优点

#### 缺点

### 个人评价

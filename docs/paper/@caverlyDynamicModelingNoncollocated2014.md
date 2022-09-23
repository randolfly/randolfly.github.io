---
date: 2022-09-20
tag:
  - paper
  - Cable-actuated-systems
  - Closed-loop-systems
  - dynamics
  - Manipulators
  - Modeling
  - motion-control
  - Motion-control
  - parallel-robots
  - Parallel-robots
  - passivity-based-control
  - Payloads
  - Winches
category:
  - library
  - zotero
  - paper_note
---

# @caverlyDynamicModelingNoncollocated2014


# caverlyDynamicModelingNoncollocated2014

## MetaInfo

::: note 文献标题

 Dynamic Modeling and Noncollocated Control of a Flexible Planar Cable-Driven Manipulator
:::

::: note Abstract

This paper investigates the dynamic modeling and passivity-based control of a planar cable-actuated system. This system is modeled using a lumped-mass method that explicitly considers the change in cable stiffness and winch inertia that occurs when the cables are wound around their respective winches. In order to simplify the modeling process, each cable is modeled individually and then constrained to the other cables. Exploiting the fact that the payload is much more massive than the cables allows the definition of a modified output called the μ -tip rate. Coupling the μ-tip rate with a modified input realizes the definition of a passive input-output map. The two degrees of freedom of the system are controlled by four winches. This overactuation is simplified by employing a set of load-sharing parameters that effectively reduce four inputs to two. The performance and robustness of the controllers are evaluated in the simulation.
:::


## Contents

### 问题描述

#### 问题背景

#### 前人工作

- group A ^pre-group-A


#### 本文工作

### 实验方法

#### 前提条件

[p2r28](.//)

#### 系统动力学

##### 基本假设
[p2r28](.//)
^img-system-model

参考 [系统模型](./)，作者使用了 4 根绳索来完成平面机构的建立

> [Caverly_Forbes_2014_Dynamic Modeling and Noncollocated Control of a Flexible Planar Cable-Driven](.//)

给出了下面几个假设：

::: note Assumption
- payload 在平面上移动
- 绳索 tension 远比绳索集中质量上的重力大，因此忽略重力
- payload 质量远比绳索大，因此可以解耦动力学

:::


##### 单索模型

参考 [系统模型](./)，给出参考系定义：

- $\mathcal{F}_{i}$ ：惯性系
- $\mathcal{F}_{w,1}$ ：绑定在第 1 个 winch 上的坐标系
- $\mathcal{F}_{1}$ ：第 1 根绳索绑定在 payload 上的坐标系





### 优点缺点

#### 优点

#### 缺点

### 个人评价

## 参考

##### 引文



##### 脚注

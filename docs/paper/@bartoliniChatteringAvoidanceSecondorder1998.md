---
date: 2022-08-03
tag:
  - paper
  - unread
  - Change-detection-algorithms
  - Control-systems
  - Motion-control
  - Nonlinear-systems
  - Optimal-control
  - Signal-generators
  - Sliding-mode-control
  - Uncertain-systems
  - Uncertainty
  - Velocity-control
category:
  - library
  - zotero
  - paper_note
---

# @bartoliniChatteringAvoidanceSecondorder1998

# bartoliniChatteringAvoidanceSecondorder1998

## MetaInfo

::: note 文献标题

 Chattering avoidance by second-order sliding mode control
:::

::: note Abstract

Relying on the possibility of generating a second-order sliding motion by using, as control, the first derivative of the control signal instead of the actual control, a new solution to the problem of chattering elimination in variable structure control (VSC) is presented. Such a solution, inspired by the classical bang-bang optimal control strategy, is first depicted and expressed in terms of a control algorithm by introducing a suitable auxiliary problem involving a second-order uncertain system with unavailable velocity. Then, the applicability of the algorithm is extended, via suitable modifications, to the case of nonlinear systems with uncertainties of more general types. **The proposed algorithm does not require the use of observers and differential inequalities** and can be applied in practice by exploiting such commercial components as peak detectors or other approximated methods to evaluate the change of the sign of the derivative of the quantity accounting for the distance to the sliding manifold.
:::

****
## Contents

### 问题描述

#### 问题背景

- chattering in sliding-mode-control

some people **replace sign function with smooth approximation** to counteract the chattering effect, nevertheless, [booknote?type=annotation&book=null&id=190286ce-ab48-7cd7-f509-d0033c869faa&page=2&rect=43](.//)


#### 问题难点

- [booknote?type=annotation&book=null&id=aba3b02e-7e76-4fb3-f139-7f073c841a1c&page=2&rect=43](.//)

#### 前人工作

- some people **replace sign function with smooth approximation** to counteract the chattering effect
	- [booknote?type=annotation&book=null&id=190286ce-ab48-7cd7-f509-d0033c869faa&page=2&rect=43](.//)
- [booknote?type=annotation&book=null&id=4549f861-e289-287f-dc20-d06ca25c94b9&page=2&rect=43](.//)
	- ideal high-frequency observer control signal is filtered by high-gain fast dynamic part of system
- **proceduce addressed within a general framework with reference to known nonlinear systems**
	- give a n-degree system (smooth and like [Lipschitz 条件](./../math/杂项/Lipschitz-条件.md))

#### 本文工作

- [booknote?type=annotation&book=null&id=bf7226f4-e8ed-5807-4563-281b08debd5a&page=2&rect=306](.//)

#### 本文意义

- It does not require the introduction of any observer.
- The differential inequalities are replaced by algebraic inequalities.
- The convergence to the sliding manifold of the state trajectories takes place in a ﬁnite time


### 实验方法


### 优点缺点

#### 优点

#### 缺点

### 个人评价

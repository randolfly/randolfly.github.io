---
date: 2022-08-09
tag:
  - default
category:
  - library
  - zotero
  - paper_note
---


# liuSecondOrderSlidingMode2021

## MetaInfo

::: note 文献标题

 Second-Order Sliding Mode Control Design Subject to an Asymmetric Output Constraint
:::

::: note Abstract

In this brief, a novel second-order sliding mode (SOSM) control method is developed to solve the asymmetric output constraint problem by using a power integrator and barrier Lyapunov function (BLF). The new BLF is first constructed based on the asymmetric constraint condition. A novel SOSM algorithm is then constructed for the nonlinear systems with an asymmetric output constraint. Under the proposed SOSM algorithm, the output of the resulting closed-loop system will never escape from the asymmetric constraint. Finally, a pendulum system is adopted to verify the validity of the theoretical results.
:::


## Contents

### 问题描述

#### 问题背景


1. First order sliding mode (FOSM) has 2 obstacles
	1. [the discontinuous high-frequency switching signals bring some undesired chatteringinto the closed-loop system](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=34e89885-aff8-d227-ca17-30a67282b9b3&page=1&rect=48.960,382.689,300.024,417.720)
	2. [since the relative degreein FOSM is restricted to one, which inevitably causes somedifﬁculties to design the sliding surface](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=a87a3b24-22c5-09cd-5559-6efe95ccbf47&page=1&rect=48.960,358.776,300.029,393.807)
		1. especially for high-order nonlinear systems
2. pratical system has confined outputs
	1. eg. the sideslip angle of an electric vehicle should be constrained within a small range


#### 问题难点

**[The control design problem under output constraints](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=0cca055a-ca3e-096b-6d49-03bf13da042b&page=1&rect=58.922,251.180,281.939,262.298)**

#### 前人工作

results can be divided into 2 types:
1. [using some numerical techniques](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=33ee881e-8dc9-11b4-f98b-17cd27bf253b&page=1&rect=406.968,596.754,544.680,607.872)
	1. complicated since implementation depend on computationally intensive algorithms
2. [so-called BLF, such as the works in [6], [7].which was applied to the traditional FOSM algorithm forsolving the output constraint problem](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=86ff57b8-1ab9-c37d-2831-1e6ea0351183&page=1&rect=311.976,536.976,563.038,572.007)
	1. [homogeneous propertywidely-used in the SOSM control design does not hold for theBLF.](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=14ed1ff5-e36e-c2cc-951a-5e4b9d93d827&page=1&rect=311.976,489.158,563.037,524.190)^blf-fault

Inspired by [^blf-fault](@liuSecondOrderSlidingMode2021.md#^blf-fault)
- [developed aSOSM algorithm to ﬁnite-time stabilize the nonlinear systemswith a symmetrical output constraint](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=4843dcfa-51f0-9132-daaa-b6c5b69157bb&page=1&rect=311.976,465.245,563.043,500.276)
	- [that these asymmetric output constraintproblems cannot be solved by the method in [9] since thetan-type BLF designed in [9] can only be constructed bysymmetrical constraints.](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=5042f35c-7eee-5b92-5bfe-330cbd6770e9&page=1&rect=311.976,393.514,563.031,440.498)
#### 本文工作

- [develops a SOSM method for the asymmetricoutput constraint problem](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=e74b7a7e-59b7-5e8a-330b-1200941b30fb&page=1&rect=311.976,369.601,563.041,392.680)
	- [a new BLF is constructedto force the system output within the constraint](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=0d291312-8795-4b0f-03f3-0402898fa423&page=1&rect=311.976,357.649,563.024,380.719)
	- [a novel SOSM controller is designed by embedding the BLFwith a power integrator](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=e4b5bdb1-0d4e-d3a2-dc29-a988563ae8ac&page=1&rect=311.976,333.736,563.036,356.815)
	- [simulation resultsshow the effectiveness of the proposed method](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=bd719c23-a35d-68ae-90ae-7add11fe2863&page=1&rect=311.976,309.832,563.040,332.902)

#### 本文意义

- [ﬁrst work to deal with the asymmetrical output con-straint problem by using the SOSM control method and theBLF](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=199a17c6-da02-d1b5-b310-db06d218c526&page=1&rect=311.976,262.005,563.030,297.036)
- [implanting the designed BLF with a power integrator,the homogeneous property of the closed-loop system holds.](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=2074524a-85cf-80c1-d69b-2491da5ab7f7&page=1&rect=311.976,226.140,563.005,249.210)
- [The output of the considered system can be driven tozero within a ﬁnite time and never escape from the constraint;](obsidian://booknote?type=annotation&book=IEEE%20Transactions%20on%20Circuits%20and%20Systems%20II%20Express%20Briefs-2021/Liu%20et%20al_2021_Second-Order%20Sliding%20Mode%20Control%20Design%20Subject%20to%20an%20Asymmetric%20Output.pdf&id=3012c8f1-d5d5-461c-3ef7-92bb9ac14625&page=1&rect=311.976,250.053,563.038,273.123)

### 实验方法

#### Preliminaries and Problem Statement

> Notion:
> - $\delta_1$ and $\delta_2$ are positive constants
> - $\mathbb{D} _1=\left\{ s_1:-\delta _1<s_1<\delta _2 \right\}$
> - $\mathbb{D} _2=\mathbb{D} _1\times \mathbb{R}$
> - $\lfloor x\rceil^{\alpha}$ denotes $\left| x \right|^{\alpha}\mathrm{sign}\left( x \right)$
> 	- $\alpha >0$

##### Preliminaries

- ![Pasted image 20220803105659.png](paper\assets\Pasted image 20220803105659.png)

##### Problem Statement

nonlinear system:
$$\dot{x}=G\left( t,x \right) +H\left( t,x \right) u,\qquad s=s\left( t,x \right) $$
^eqn-nonlinear-system

where $x\in \mathbb{R}^n, u\in \mathbb{R}$ is state and input, $s(t,x)$ is output function(i.e., the sliding variable)

#todo


#### Construct BLF and SOSM Controller


#### Application to Pendulum System



### 优点缺点

#### 优点

#### 缺点

### 个人评价

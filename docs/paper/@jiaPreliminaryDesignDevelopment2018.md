---
date: 2022-12-21
tag:
  - paper
  - Free floating
  - Gimbal
  - Gravity compensation
  - Ground verification
  - Micro-gravity
category:
  - library
  - zotero
  - paper_note
---

# @jiaPreliminaryDesignDevelopment2018


# jiaPreliminaryDesignDevelopment2018

## MetaInfo

::: note 文献标题

 Preliminary design and development of an active suspension gravity compensation system for ground verification
:::

::: note Abstract

A new active suspension gravity compensation system (ASGCS) is developed to offload the gravity of spacecraft or satellites for ground verification. The ASGCS is of six degrees of freedom (6-DOF), including a compensation stage of 3-DOF translation and a gimbal of 3-DOF rotation. A buffer-assisted pinion-rack mechanism is developed to substitute the traditional cable suspension unit, which enables the proportion of gravity compensation is tunable. A new 3-DOF gimbal that is suitable for objects of various sizes and arbitrary shape is developed. Hence, the test object attached to the ASGCS can be free-floating as it is in the outer space. Furthermore, a prototype of the ASGCS is developed, and the dynamic model and kinematic model are derived. Experiments are conducted with the aid of a 6-DOF hybrid coordinate manipulator. The results demonstrate that the ASGCS successfully tracks 6-DOF trajectories of a typical docking task and compensates for 95% of the gravity.
:::


## Contents

北航开发的主动悬吊方式的航天器零重力卸载系统，该装置具体有6自由度，用于模拟空间飞行器缩尺模型的低重力环境。

装置分为4大模块，分别为支撑框架、悬吊支撑模块、重力卸载模块和万向架。
- 悬吊支撑模块的X, Y方向的驱动机构提供X, Y方向的平动自由度，位置跟随通过重力卸载模块中与弹簧缓冲器固连的倾角传感器反馈相对位置偏差并进行主动控制
- 重力卸载模块通过伺服电机控制末端Z方向的位置跟随，并结合重力卸载模块中的重力缓冲器实现对末端竖直方向卸载力的控制
	- 控制补偿的力是通过控制弹簧的长度来实现的
- 末端连接的万向架释放三个旋转自由度

[Pasted image 20221221101537](.//)

[Pasted image 20221221101544](.//)


## 参考

##### 引文



##### 脚注

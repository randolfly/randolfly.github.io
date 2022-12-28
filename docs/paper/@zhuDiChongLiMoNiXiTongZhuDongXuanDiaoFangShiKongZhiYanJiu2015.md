---
date: 2022-12-21
tag:
  - paper
  - constant tension
  - H∞ controller
  - H∞控制
  - low gravity
  - lunar rover
  - parameter uncertainty
  - robust control
  - time delay
  - torque motor
  - 低重力
  - 力矩电机
  - 参数不确定
  - 延时
  - 恒张力
  - 月球巡视车
  - 鲁棒控制
category:
  - library
  - zotero
  - paper_note
---

# @zhuDiChongLiMoNiXiTongZhuDongXuanDiaoFangShiKongZhiYanJiu2015


# zhuDiChongLiMoNiXiTongZhuDongXuanDiaoFangShiKongZhiYanJiu2015

## MetaInfo

::: note 文献标题

 低重力模拟系统主动悬吊方式控制研究
:::

::: note Abstract

为了简化低重力模拟系统设计难度,方便巡视车得到更准确的测试结果,在主动悬吊方式下提出了直接对力回路进行控制并辅以位置控制的方案。在建立系统模型过程中考虑了影响系统鲁棒稳定性的参数不确定与可转化为乘性不确定性的延时问题,并实现了不确定性的分离;根据系统受到巡视车带来的干扰、减速器摩擦力矩与本身不确定性等问题,针对性地设计了H∞控制器对系统综合,通过实验检验,控制器有效抑制了不确定性与干扰的影响,系统的控制精度得到了保证。
:::


## Contents


哈尔滨工业大学研制了一种基于摆杆式恒拉力机构的垂直悬吊低重力模拟装置，主要应用于月球重力环境下月面巡视器的模拟。[^2]

缓冲机构利用弹簧拉伸为巡视车平衡工作点提供拉力，此时吊索对等效摆杆拉力为目标拉力。
- 当巡视车工作在上下颠簸的路面时，首先在电机做出反应之前，弹簧带动摆杆的摆动先抵消巡视车的部分扰动，以避免吊索张力迅速变化使得低重力系统动态误差不满足巡视车测试要求
- 拉力传感器测量的实际绳索索力与目标力比较，通过控制器给电机下达指令，电机利用收放绳索补偿巡视车竖直方向位置偏移导致的实际绳索索力变化，使实际绳索索力能够稳定在目标力附近，且动态误差尽量小以减少对巡视车性能测试结果的影响

[Pasted image 20221221104425](.//)

使用H-inf 方法进行控制，在巡视车越障的时候的外力曲线输出变化：

[Pasted image 20221226152132](.//)



## 参考

##### 引文



##### 脚注

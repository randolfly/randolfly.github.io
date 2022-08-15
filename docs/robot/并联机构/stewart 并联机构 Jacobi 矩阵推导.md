---
date: 2022-08-09
tag:
  - default
category:
  - library
  - 机器人
  - 并联机构
---


# Stewart 并联机构 Jacobi 矩阵推导


## 定义

推导与 Stewart 类似的并联机构的 (逆) Jacobi 矩阵。

**问题描述**

在底部坐标系固定的情况下，已知上部平板的广义速度 $\dot{\vec{u}}$，计算六根支链的速度 $\dot{\vec{l}}$，即计算 Jacobi 矩阵 $J$ 使得：$\dot{\vec{l}} = J \dot{\vec{u}}$

**预先假设**

系统的广义坐标 $\vec{u}=[x, y, z, a, b, c]$，前三个分量代表位移，后三个代表姿态变化，分别表示为 $u_m$ 和 $u_\theta$。可以使用四元数或者 Euler 角等进行描述，参考 [RPY角和Euler角](../RPY角和Euler角.md)

**问题求解**

注意到：
$$
l=Rp+t-b
$$
其中 $l$ 代表一根支链矢量，$R$ 为由底部坐标系转换到顶部坐标系的姿态变换矩阵，$t$ 代表位置变化矢量，$p$ 和 $b$ 分别表示支链连接点在上下两个坐标系中的坐标表示。为了书写方便，在后文中，除非特殊说明，所有小写英文字母代表向量，大写代表矩阵。

因此两边同时对时间微分有：
$$
\dot{\vec{l}}=\dot{Rp}+\dot{t}-\dot{b}=\dot{R}p+\dot{t}
$$
注意到，[旋转矩阵求导](../旋转矩阵求导.md)，应该有：
$$
\dot{R} = S(\omega) R
$$
其中 $S(x)$ 代表矢量 $x$ 生成的反对称矩阵。因此得到：
$$
\dot{\vec{l}}=S(\omega) R p+\dot{t}=-R p \times \omega+\dot{u_m}
$$
需要考虑角速度 $\omega$ 和广义角度微分 $\dot{u_\theta}$ 之间的关系，参考 [角速度和广义角度微分关系](../角速度和广义角度微分关系.md)，满足：
$$
\omega = E u_{\theta}
$$
因此最终结果有：
$$
\dot{\vec{l}}=-R p \times \omega+\dot{u_m}=[I_{3\times 3} -S(Rp)E]\dot{u}
$$
当描述方式为==RPY 时 $E=I$==，那么化简为：
$$
J=[I_{3\times 3} -S(Rp)I] = [I_{3\times 3} -S(Rp)]
$$
显然的，使用 RPY 角会使得整个计算过程变得更加简单，因此大家一般都是用 RPY 角更加方便。


::: note 
collapse: open
title: Note
注意这里只是一般形式下满足$E=I$的结果，在Euler角下也可以实现$E=I$，比如ZYX情况下后面两个轴转动角度为0情况。
:::



## 参考

- None

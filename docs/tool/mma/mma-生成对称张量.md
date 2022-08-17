---
date: 2022-06-06
tag:
  - mma
  - math
  - mat
  - tensor
  - symmetric
category:
  - tool
  - mma
---

# mma 生成对称张量

# 生成对称张量


## 对称张量
```mathematica
SymmetrizedArray[{{1, 3} -> w2, {2, 1} -> w3, {3, 2} -> w1}, {3, 3}, 
 Symmetric[{1, 2}]]
 Normal[%]
```
生成结果:


$$

\left(
\begin{array}{ccc}
 0 & \text{w3} & \text{w2} \\
 \text{w3} & 0 & \text{w1} \\
 \text{w2} & \text{w1} & 0 \\
\end{array}
\right)

$$


## 非对称张量

**例子**

```mathematica
SymmetrizedArray[{{1, 3} -> w2, {2, 1} -> w3, {3, 2} -> w1}, {3, 3}, 
 Antisymmetric[{1, 2}]]
Normal[%]
```

生成矩阵结果：


$$

\left(
\begin{array}{ccc}
 0 & -\text{w3} & \text{w2} \\
 \text{w3} & 0 & -\text{w1} \\
 -\text{w2} & \text{w1} & 0 \\
\end{array}
\right)

$$


其中 Antisymmetric 表示了张量在位置处的反对称性。

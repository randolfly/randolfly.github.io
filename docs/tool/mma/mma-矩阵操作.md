---
date: 2022-06-06
tag:
  - mma
  - math
  - mat
category:
  - skill
  - mma
---


# Mma 矩阵操作


Mathematica 的矩阵和 Julia、Matlab 有所不同，因此特做总结。

## 生成矩阵

矩阵实际上是二重嵌套的列表，可以看成 [张量](./../../math/线性代数/张量.md) 的二维形式，但其表示形式和其余语言有所不同，e.g.:

```mathematica
mat = {{1, 0, 0}, {1, c\[Phi], -s\[Phi]}, {0, s\[Phi], c\[Phi]}};
mat // MatrixForm
mat[2](.//)
mat.{0, 1, 0}
```

得到的结果如下：


$$

\begin{aligned}
ans1 = & \left(
\begin{array}{ccc}
 1 & 0 & 0 \\
 1 & \text{c$\phi $} & -\text{s$\phi $} \\
 0 & \text{s$\phi $} & \text{c$\phi $} \\
\end{array}
\right)\\

ans2 = & \quad (1, c\phi, -s\phi)\\

ans3 = & \quad (0, c\phi, s\phi)
\end{aligned}

$$


因此可以注意到，其矩阵存储为行的，level=2 的内部向量被安排为第 2 行的矩阵分量。

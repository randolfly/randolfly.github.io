---
date: 2022-08-13
tag:
  - mma
  - derivate
  - math
  - mat
  - 符号计算
category:
  - skill
  - mma
---

# mma推导函数微分矩阵

# Mma 推导函数微分矩阵

## 定义

对于一些数学推导问题，如果手推可能会比较麻烦，这时使用 mma 进行符号推导可以加快计算速度，并且验算手算结果

比如下面的这个例子：


$$
\begin{array}{c}
	F=|l_s-l_{k+N}|^2+\mu \sum_{i=1}^N{\left( l_{k+i}-l_{k+i-1} \right) ^2}\\
	F=\frac{1}{2}x^THx+f^Tx\\
\end{array}
$$

为了求解 H 和 f，可以考虑使用 mma 进行计算。

计算代码如下：

```mathematica
M = 10;
Lseq = Table[L[k], {k, 1, M}];
LseqShift = Table[L[k], {k, 0, M - 1}];
QpProb = ( Ls - L[M])*( Ls - L[M]) + 
   mu*Total[Map[Function[x, x^2], Lseq - LseqShift]];
QpInfo = CoefficientArrays[D[QpProb, {Lseq}], Lseq];
fSeq = Normal[QpInfo[1](.//)] // MatrixForm
Hseq = Normal[QpInfo[2](.//)] // MatrixForm
```

注意这里首先对 F 进行了微分然后求解的结果。

最终问题结果为：

理论计算：


$$
\begin{aligned}
	H&=\hat{H}+\hat{H}^T\\
	\hat{H}&=\left( \begin{matrix}
	2\lambda&		&		&		\\
	-2\lambda&		\cdots&		&		\\
	&		\cdots&		2\lambda&		\\
	&		&		-2\lambda&		1+\lambda\\
\end{matrix} \right)\\
\end{aligned}
$$



$$
f=\left( \begin{array}{c}
	-2\mu l_k\\
	0\\
	\vdots\\
	-2l_s\\
\end{array} \right) 
$$

mma 计算：


$$
\left(
\begin{array}{cccccccccc}
 4 \mu & -2 \mu & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
 -2 \mu & 4 \mu & -2 \mu & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
 0 & -2 \mu & 4 \mu & -2 \mu & 0 & 0 & 0 & 0 & 0 & 0 \\
 0 & 0 & -2 \mu & 4 \mu & -2 \mu & 0 & 0 & 0 & 0 & 0 \\
 0 & 0 & 0 & -2 \mu & 4 \mu & -2 \mu & 0 & 0 & 0 & 0 \\
 0 & 0 & 0 & 0 & -2 \mu & 4 \mu & -2 \mu & 0 & 0 & 0 \\
 0 & 0 & 0 & 0 & 0 & -2 \mu & 4 \mu & -2 \mu & 0 & 0 \\
 0 & 0 & 0 & 0 & 0 & 0 & -2 \mu & 4 \mu & -2 \mu & 0 \\
 0 & 0 & 0 & 0 & 0 & 0 & 0 & -2 \mu & 4 \mu & -2 \mu \\
 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & -2 \mu & 2 \mu +2 \\
\end{array}
\right)
$$



$$
\left(
\begin{array}{c}
 -2 L(0) \mu \\
 0 \\
 0 \\
 0 \\
 0 \\
 0 \\
 0 \\
 0 \\
 0 \\
 -2 \text{Ls} \\
\end{array}
\right)
$$


这里的 L(0) 就是 $l_k$，可以注意到，和理论计算相符合

## 参考

- None

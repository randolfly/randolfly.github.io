---
date: 2022-08-02
tag:
  - convex-optimization
  - math
  - mat
category:
  - library
  - 数学
  - 优化
---

# schur complement

# Schur Complement


## 定义

舒尔补被定义为：

假设 A, B, C, D 是 4 个复矩阵，设：


$$
M=\left[ \begin{matrix}
	A&		B\\
	C&		D\\
\end{matrix} \right] 
$$

那么如果 D 是可逆的，记 M 对 D 的 schur complement(舒尔补) 为：

$$
M/D\equiv A-BD^{-1}C
$$

对应的，如果 A 是可逆的，记其对 A 的舒尔补为：

$$
M/A\equiv D-CA^{-1}B
$$


如果 A 或者 D 是奇异的，那么将其==替换为广义逆== 即可

## 背景

舒尔补出现在对矩阵 M 进行块矩阵的高斯分解的过程中，如下所示：


$$
M=\left[ \begin{matrix}
	A&		B\\
	C&		D\\
\end{matrix} \right] \rightarrow \left[ \begin{matrix}
	A&		B\\
	C&		D\\
\end{matrix} \right] \left[ \begin{matrix}
	I&		0\\
	-D^{-1}C&		I\\
\end{matrix} \right] =\left[ \begin{matrix}
	A-BD^{-1}C&		B\\
	0&		D\\
\end{matrix} \right] 
$$


进一步进行消元：


$$
\left[ \begin{matrix}
	A-BD^{-1}C&		B\\
	0&		D\\
\end{matrix} \right] \rightarrow \left[ \begin{matrix}
	I&		-BD^{-1}\\
	0&		I\\
\end{matrix} \right] \left[ \begin{matrix}
	A-BD^{-1}C&		B\\
	0&		D\\
\end{matrix} \right] =\left[ \begin{matrix}
	A-BD^{-1}C&		0\\
	0&		D\\
\end{matrix} \right] 
$$


这引入了矩阵 M 的 [LU decomposition - Wikipedia](https://en.wikipedia.org/wiki/LDU_decomposition)，有：


$$
M=\left[ \begin{matrix}
	A&		B\\
	C&		D\\
\end{matrix} \right] =\left[ \begin{matrix}
	I&		-BD^{-1}\\
	0&		I\\
\end{matrix} \right] \left[ \begin{matrix}
	A-BD^{-1}C&		0\\
	0&		D\\
\end{matrix} \right] \left[ \begin{matrix}
	I&		0\\
	-D^{-1}C&		I\\
\end{matrix} \right] 
$$


从而可以将 $M^{-1}$ 表示为舒尔补的逆和 $D^{-1}$ 的组合，假定其存在，则：


$$

\begin{aligned}
M^{-1}=\left[\begin{array}{ll}
A & B \\
C & D
\end{array}\right]^{-1} &=\left(\left[\begin{array}{cc}
I_{p} & B D^{-1} \\
0 & I_{q}
\end{array}\right]\left[\begin{array}{cc}
A-B D^{-1} C & 0 \\
0 & D
\end{array}\right]\left[\begin{array}{cc}
I_{p} & 0 \\
D^{-1} C & I_{q}
\end{array}\right]\right)^{-1} \\
&=\left[\begin{array}{cc}
I_{p} & 0 \\
-D^{-1} C & I_{q}
\end{array}\right]\left[\begin{array}{rr}
\left(A-B D^{-1} C\right)^{-1} & 0 \\
0 & D^{-1}
\end{array}\right]\left[\begin{array}{cc}
I_{p} & -B D^{-1} \\
0 & I_{q}
\end{array}\right] \\
&=\left[\begin{array}{cc}
\left(A-B D^{-1} C\right)^{-1} & -\left(A-B D^{-1} C\right)^{-1} B D^{-1} \\
-D^{-1} C\left(A-B D^{-1} C\right)^{-1} & D^{-1}+D^{-1} C\left(A-B D^{-1} C\right)^{-1} B D^{-1}
\end{array}\right] \\
&=\left[\begin{array}{cc}
(M / D)^{-1} & -(M / D)^{-1} B D^{-1} \\
-D^{-1} C(M / D)^{-1} & D^{-1}+D^{-1} C(M / D)^{-1} B D^{-1}
\end{array}\right]
\end{aligned}

$$

## 性质

#### 块矩阵逆


$$
M^{-1}=\frac{1}{AD-BC}\left[ \begin{matrix}
	D&		-B\\
	-C&		A\\
\end{matrix} \right] 
$$

如果 $AD-BC$ 不是零

::: note note
这里不是0怎么理解？
:::


#### 块矩阵行列式


$$
\det \left( M \right) =\det \left( A \right) \det \left( D-CA^{-1}B \right)
\\
\det \left( M \right) =\det \left( D \right) \det \left( A-BD^{-1}C \right) 
$$


#### 正定性质

::: note note
应用在优化理论！
:::


如果 X 具有这样的形式：


$$
X=\left[ \begin{matrix}
	A&		B\\
	B^T&		C\\
\end{matrix} \right] 
$$

那么有：
- 如果 A 可逆，则 X 正定<=>A 和 X/A 正定
	- $X\succ 0\Leftrightarrow A\succ 0,X/A=C-B^TA^{-1}B\succ 0$
- 如果 C 可逆，则 X 正定<=>C 和 X/C 正定
	- $X\succ 0\Leftrightarrow C\succ 0,X/C=A-BC^{-1}B^T\succ 0$

半正定同理

上面的结论可以通过考虑这样一个优化问题来证明：

假设 quadratic function 
$$
f\left( x,y \right) =x^TAx+2x^TBy+y^TCy
$$

（其中 A, C 是对称的）是对 (x,y) 凸的，这意味着：


$$
\left[ \begin{matrix}
	A&		B\\
	B^T&		C\\
\end{matrix} \right] \succeq 0
$$


我们考虑函数 
$$
g\left( x \right) =\mathrm{inf}_yf\left( x,y \right) =x^T\left( A-BC^gB^T \right) x
$$

其中 $C^g$ 是 C 的广义逆，那么根据 minimization rule，g 是凸的，则意味着：


$$
A-BC^gB^T\succeq 0
$$



对奇异的情形：

**仅对半正定有**：
- $X\succeq 0\Leftrightarrow A\succeq 0,C-B^TA^gB\succeq 0,\left( I-AA^g \right) B=0$
- $X\succeq 0\Leftrightarrow C\succeq 0,A-BC^gB^T\succeq 0,\left( I-CC^g \right) B^T=0$

其中 $A^g$ 代表 A 的 [广义逆](./../线性代数/广义逆.md)


## 参考

##### 引文

- [Schur complement - Wikipedia](https://en.wikipedia.org/wiki/Schur_complement)

##### 脚注

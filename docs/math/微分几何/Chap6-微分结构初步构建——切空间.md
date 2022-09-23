---
date: 2022-09-07
tag:
  - math
  - 线性代数
  - Topology
  - 切空间
  - 微分流形
category:
  - library
  - math
  - 微分几何
---

# Chap6 微分结构初步构建——切空间


## 构造切空间

### 切空间引入

事先声明，在本节中，除非特别声明，我们说的流形都指的是 (实)d 维 [可微流形](./Chap4-微分流形.md)

设 M 是一个流形，我们定义一个无限维的 R 上的向量空间为：


$$

C^{\infty} \coloneqq \left\{ f:M\to \mathbb{R}|f \text{ is smooth} \right\}

$$


并在向量空间上附带一个逐元素的运算，即：$\forall p \in M$ ：


$$

\begin{align}
(f+g)(p) \coloneqq & f(p)+g(p) \\
(\lambda f)(p) \coloneqq & \lambda (f(p))
\end{align}

$$


容易验证他是一个向量空间，且很容易向内得到子空间定义 $C^{\infty}(U)$

我们定义一个 M 上的光滑曲线为光滑映射：$\gamma : \mathbb{R}\to M$，其中 $\mathbb{R}$ 被看成一个 1 维的流形

我们可以开始考虑通过曲线来探索流形上的微分结构了：

::: tip 方向导数


考虑一个 M 上的光滑曲线 $\gamma : \mathbb{R}\to M$，且其通过点 $p \in M$。不失一般性，我们取 $\gamma(0)=p$。可以定义在 P 点沿着 $\gamma$ 的方向导数算子 (directional derivative operator) 为线性映射：


$$

\begin{align}
X_{\gamma,p}: C^{\infty}(M) & \xrightarrow{\sim} \mathbb{R} \\
	f & \mapsto (f\circ \gamma )'(0)
\end{align}

$$


其中 $\mathbb{R}$ 被认为是一个定义在 $\mathbb{R}$ 上的一维流形

:::

^def-directional-derivative-operator

可以发现，这个复合映射是 $\mathbb{R}\to \mathbb{R}$ 的，因此可以按照分析学理论求得微分

在微分几何中，$X_{\gamma,p}$ 被称为曲线 $\gamma$ 在点 $p \in M$ 的切向量 (tangent vector)。直觉上，$X_{\gamma,p}$ 是曲线 $\gamma$ 在 p 点的速度。考虑曲线 $\delta(t)\coloneqq \gamma(2t)$，那么有，$\forall f \in C^{\infty}(M)$：


$$

X_{\delta,p}(f)=(f\circ \delta)'(0)=2(f\circ \gamma)'(0)=2X_{\gamma,p}(f)

$$


这表明至少对 scalar 拉伸来说，其表现像是一个速度

有了切向量，我们可以定义切空间了。

::: tip 切空间


M 是一个流形，$p \in M$，M 在 p 点的切空间是一个在 $\mathbb{R}$ 上的向量空间，定义为：


$$

T_{p}M\coloneqq \left\{ X_{\gamma,p} | \gamma \text{ is a smooth curve through p} \right\}

$$


其上的加法：


$$

\begin{align}
\oplus:T_pM\times T_{p}M & \to T_{p}M \\
(X_{\gamma,p},X_{\delta, p}) & \to X_{\gamma,p} \oplus X_{\delta, p}
\end{align}

$$


其上的数乘：


$$

\begin{align}
\odot: \mathbb{R} \times T_{p}M & \to T_{p}M \\
(\lambda, X_{\gamma,p}) & \to \lambda \odot X_{\gamma,p}
\end{align}

$$


这两个运算都是逐元素定义的， 即 $\forall f\in C^{\infty}(M)$：


$$

\begin{align}
(X_{\gamma,p} \oplus X_{\delta,p})(f) & \coloneqq X_{\gamma,p}(f) + X_{\delta,p}(f) \\
(\lambda \odot X_{\gamma, p}) & \coloneqq \lambda X_{\lambda,p}(f)
\end{align}

$$


:::

^def-tangent-space

我们需要证明定义是 well-defined，那么我们需要证明通过集合上运算的结果也是集合的元素：

取 $X_{\gamma,p},X_{\delta,p} \in T_{p}M$，$\lambda \in \mathbb{R}$，我们证明：$X_{\gamma,p} \oplus X_{\delta, p} \in T_{p}M$，$\lambda \odot X_{\gamma,p} \in T_{p}M$

取 $(U,x)$ 是 M 上的一个 chart，U 是 p 的一个邻域

我们构造地给出一个曲线：


$$

\sigma(t)\coloneqq x^{-1}((x\circ \gamma)(t) + (x\circ \delta)(t) - x(p))

$$


容易验证，构造的曲线是复合条件的光滑曲线，从而取 $f\in C^{\infty}(U)$ ：


$$

\begin{align}
X_{\sigma,p}(f) & = (f\circ \sigma)'(0)\ \\
	  & = [(f\circ x^{-1}) \circ ((x\circ \gamma)(t) + (x\circ \delta)(t) - x(p))]'(0) \\
\end{align}

$$


注意到，$(f\circ x^{-1}): \mathbb{R}^d\to \mathbb{R}$，剩下部分也是多元变量，因此我们可以利用多元变量的链式法则：


$$

\begin{align}
X_{\sigma, p}(f) & = [(x^a \circ \gamma](.//)+(x^a \circ\delta) - x^a(p))'(0) \\
	  & = [(x^a \circ \gamma](.//)+(x^a \circ\delta))'(0) \\
	 & = (f\circ x^{-1}\circ x \circ \gamma）'(0) + f\circ x^{-1}\circ x \circ \delta)'(0) \\
	 & = (X_{\gamma,p} \oplus X_{\delta,p})(f)
\end{align}

$$


另一个思路是一样的，构造 $\sigma(t)\coloneqq \gamma(\lambda t)$

::: note remark
我们可以给出一个略微不同但是等价的切空间定义：考虑一个光滑曲线的集合：


$$

S= \left\{ \gamma:I\to M|\text{ with } I \subseteq \mathbb{R} \text{ open}, 0\in I, \text{ and} \gamma(0)=p \right\}

$$


在 S 上定义等价关系：


$$

\gamma \sim \delta \coloneqq (x\circ \gamma)'(0) = (x\circ \delta)'(0)

$$


其中 x 在一个包含 p 的 chart $(U,x)$ 上。我们可以定义：


$$

T_{p}M \coloneqq S \backslash \sim

$$


:::


### 微分操作


::: tip algebra

我们称在域 K 上的一个 algebra 是一个四元组 $(A,+,\cdot,\bullet)$，其中 $(A,+,\cdot)$ 是一个 K-vector space，定义 $\bullet$ 是一个 A 上的product，即一个 (K-)bilinear map：$\bullet: A\times A\to A$

我们可以定义一个在 $C^{\infty}(M)$ 上的 product 为：


$$

\begin{align}
\bullet:C^{\infty}(M) \times C^{\infty}(M) & \to C^{\infty}(M) \\
	(f,g) & \mapsto f \bullet g
\end{align}

$$


其中 $(f \bullet g)(p) \coloneqq \underbrace{ f(p) \cdot g(p) }_{ in ~ \mathbb{R} }$，从而我们构造了一个 $\mathbb{R}$ 上的 algebra

我们说一个 algebra $(A,+,\cdot, \bullet)$ 是：
- associative(结合)：if $\forall v,w,z \in A: v \bullet (w \bullet z) = (v \bullet w) \bullet z$
- unital(单位元)：if $\exists 1\in A: \forall v\in A, 1 \bullet v = v \bullet 1 =v$
- commutative/abelian(可交换)：if $\forall v,w\in A: v \bullet w = w \bullet v$

:::

^def-algebra

我们定义了代数是为了引出真正很有用的一类代数：李代数 (Lie-algebra)，其中一般记为 $[v,w]$

::: tip 李代数


称一个李代数 A 是一个代数，其中的 product，被称为李括号 (lie bracket) 满足下面性质：
- 反对称性：$\forall v\in A: [v,v]=0$
- Jacobi identity：$\forall v,w,z \in A: [v,[w,z]]+[w,[z,v]]+[z,[v,w]]=0$


1. 注意其中的0代表的是A中的加法逆元，并不是scalar
2. 注意product是一个双线性映射，因此bilinear operation
:::

^def-lie-algebra

根据对称性和双线性性有：


$$

\begin{align}
[v+w,v+w] & =[v,v]+[v,w]+[w,v]+[w,w] \\
	 & = [v,w] + [w,v] \\
	 & = 0
\end{align}

$$


这表示了 $\forall v,w\in A, [v,w]=-[w,v]$，从而一个 (非平凡的) 李代数不可能是 unital 的

::: note note
应该是commutative 且 unital？
:::



V 是一个 K 上的向量空间，我们可以说明：$(End(V),+,\cdot, \bullet)$ 是一个 unital 的非交换的 K 上的代数，定义：


$$

\begin{align}
\bullet \coloneqq [-,-]: End(V)\times End(V) & \to End(V) \\
(\phi,\psi) & \mapsto [\phi,\psi]\coloneqq \phi\circ \psi - \psi \circ \phi
\end{align}

$$


可以证明，$(End(V),+,\cdot,\bullet)$ 是一个 K 上的李代数。在这个意义下，这里的李括号被称为 commutator(交换子)

::: info theorem
一般来说，给定一个可结合代数 $(A,+,\cdot,\bullet)$，如果有：


$$

[v,w]\coloneqq v \bullet w - w \bullet v

$$


那么 $(A,+,\cdot,\bullet)$ 是一个李代数

:::

^theorem-construct-lie-algebra

---

介绍了李代数的简单定义，下面给出微分的操作：

::: tip derivation


A 是一个代数，A 上的一个 derivation 是一个线性映射 $D:A \xrightarrow{\sim} A$ 且满足 莱布尼茨规则 (Leibniz rule)：


$$

\forall v,w\in A, D(v \bullet w) = D(v) \bullet w + v \bullet D(w)

$$


:::

^def-derivation

注意到上面的 derivation 定义实际上可以拓展到映射 $A\to B$ 上。如果有合适的结构，我们可以定义下面的映射：


$$

D(v \bullet_{A} w)=(D(v) \bullet_{B} w) +_{B} (v \bullet_{B} D(w))

$$


但是你会发现这么定义存在问题，因为右边的 $\bullet_{B}$ 作用到了 A 的元素上。为了让这样的运算成立，我们需要将 B 上装备一个 A 元素构成的 product，这类结构我们称之为 **bimodule**，将在后面遇到

举例来说，一个常见的 derivation operator 就是在 $C^{\infty}(\mathbb{R})$ 上的微分操作，但是注意，求二阶导这个 operator 并不是一个 derivation operator

::: details example
我们再次考虑前面定义在李代数 $(End(V), +, \cdot, [-,-])$ 上的操作。固定一个 $\xi \in End(V)$，我们定义：


$$

\begin{align}
D_{\xi} \coloneqq [\xi,-]: End(V) & \to End(V) \\
	 \phi & \mapsto [\xi,\phi]=\xi \circ \phi - \phi \circ \xi
\end{align}

$$


那么我们说这个 $D_{\xi}$ 就是其上的一个 derivation：


$$

\begin{align}
D_{\xi}([\phi,\psi]) & \coloneqq [\xi,[\phi,\psi]] \\
	 & = -[\phi,[\psi,\xi]]-[\psi,[\xi,\phi]]\quad(\text{Jacobi identity}) \\
	 & = [\phi,[\xi,\psi]]+[)
\end{align}

$$


这表明定义的 $[-,-]$ 仍然是一个 derivation，从而定义是 well-defined。又注意到 [[Chap6 微分结构初步构建——切空间](.//)，从而 $(Der_{K}(A),+,\cdot, [-,-])$ 构造了 K 上的一个李代数

:::
ad-note
似乎可以一直这么签到构造上去？
```

---

::: tip derivation on manifold


我们可以针对一个流形 M，取点 $p \in U \subseteq M$，其中 U 是一个开集。可以定义在 p 点的 U 上的 derivation 为一个 $\mathbb{R}$ 线性映射 $D:C^{\infty}(U) \xrightarrow{\sim} \mathbb{R}$ 且满足：


$$

D(fg)=D(f)g(p)+f(p)D(g)

$$


我们类似的记 $Der_{p}(U)$ 为过 p 点的在 U 上的 derivation 构成的 $\mathbb{R}$-vector space，其中的 operation 也是逐元素定义

:::

^def-derivation-on-manifold

::: note note
注意，这里的derivation和前面的derivation不同了
:::


根据我们的定义，一个 [切向量](./) $X_{\gamma,p}$ 就是一个过 p 点的在 $U\subseteq M$ 的 derivation，其中 U 是 p 的一个邻域。更进一步可以发现：


$$

T_{p}M\coloneqq Der_{p}(U)

$$


我们可以证明，其定义不依赖邻域 U 的选取

### 切空间的基

下面是一个很有用的定理：

::: info theorem
M 是一个流形，取 $p \in M$，从而：


$$

dim T_{p}M = dim M

$$


:::

^theorem-dim-tangent-space

::: note remark
注意，左右两边的dim具有不同的涵义：
- 左边的是一个集合的dim，其定义为Hamel basis的势
- 右边是一个流形的dim，其定义为同胚的$R^d$的维数
:::


不失一般性，我们取一个 chart $(U,x)$ 使得 $x(p)=0 \in \mathbb{R}^{dimM}$，定义 $dim M$ 个 cueve $\gamma_{a}: \mathbb{R}\to U$ 且通过 p 点，且要求：


$$

(x^b\circ \gamma_{a})(t)=\delta^b_{a}t \implies \begin{align}
\gamma_{a}(0) & =p \\
\gamma_{a}(t) & = x^{-1}\circ (0,\cdots, 0,t,0,\cdots,0)
\end{align}

$$


::: note note
实际上这么构造就是把$\mathbb{R}^{dimM}$下的各个坐标轴映射回M上，得到dimM根不同曲线
:::



其中 $t$ 在第 a 个位置，$1\leq a\leq dim M$。考虑一个 $f \in C^{\infty}(U)$ 在构造的 dimM 个 curve 上的运算：


$$

\begin{align}
X_{\gamma_{a}, p}(f) & \coloneqq (f\circ \gamma_{a})'(0) \\
	 & = (f\circ x^{-1}\circ x \circ \gamma_{a})'(0) \\
	 & = [x^b\circ \gamma_{a}](.//)'(0) \\
	 & = [\delta^b_{a}t](.//)'(0) \\
	 & = [\partial_{b}(f\circ x^{-1})(x(p))] \delta^b_{a} \\
	 & = \partial_{a}(f\circ x^{-1})(x(p))
\end{align}

$$


因此可以写为：


$$

\left( \frac{ \partial }{ \partial x^a } \right)_{p} \coloneqq X_{\gamma(a),p}

$$


其中 x 代表一个 chart map，据此我们可以得到一个 tangent space 上的基：


$$

\mathcal{B}=\left\{ \left( \frac{ \partial }{ \partial x^a } \right)_{p} \in T_{p}M | 1\leq a\leq dim M\right\}

$$


首先我们证明，$\mathcal{B}$ 可以扩充成 $T_{p}M$：

考虑 $X \in T_pM$，那么根据定义，存在一个 smooth curve $\sigma$ 使得：$X=X_{\sigma,p}$，对任意的 $f\in C^\infty(U)$，我们有：


$$

\begin{align}
X(f) & = X_{\sigma,p}(f) \\
	 & = (f\circ \sigma)'(0) \\
	 & = (f\circ x^{-1}\circ x\circ \sigma)'(0) \\
	 & = [x^b\circ \sigma](.//)'(0) \\
	 & = (x^b\circ \sigma)'(0) \left( \frac{ \partial }{ \partial x^{b} } \right) _{p}(f)
\end{align}

$$


记 $(x^b\circ\sigma)'(0)\coloneqq X^b \in \mathbb{R}$，我们有：


$$

X(f)=X^b \left( \frac{ \partial }{ \partial x^{b} } \right) _{p}

$$


这意味着可以扩充为 $T_{p}M$

考虑证明独立性，假定有：


$$

\lambda^a \left( \frac{ \partial }{ \partial x^{a} } \right) _{p}=0

$$


其中 0 是 $T_{p}M$ 中的加法单位元

注意到给定的 chart (U,x) 中，有 coordinate map $x^b: U\to \mathbb{R}$ 也是光滑的，从而 $x^b\in C^\infty(U)$，进而：


$$

\begin{align}
0 & = \lambda^a\left( \frac{ \partial }{ \partial x^{a} } \right) _{p}(x^b) \\
	 & = \lambda^a(\partial_{a} (x^b\circ x^{-1})(x(p))) \\
	 & = \lambda^a(\partial_{a }proj_{b})(x(p)) \\
	 & = \lambda^a \delta^b_{a} \\
	 & = \lambda^b
\end{align}

$$


从而 $\lambda^b=0, 1\leq b\leq dimM$，从而证明了构造的 $\mathcal{B}$ 是 $T_{p}M$ 的一组基，进而表明 $\left| \mathcal{B} \right|=dim M$

注意到，我们定义的基底是和选取的 chart 相关的，因此后面我们也要考虑修正 chart 改变带来的影响

::: tip co-ordinate basis


考虑切空间中的元素 $X \in T_{p}M$，给一个包含 p 的 chart $(U,x)$，如果：


$$

X=X^a\left( \frac{ \partial }{ \partial x^a } \right) _{p}

$$


那么实数 $X^a$ 被称为 X 相对 chart (U,x) 构造的切空间的分量 (component)，基底 $\left\{ \left( \frac{ \partial }{ \partial x^a } \right)_{p} \right\}$ 也被称为 co-ordinate basis

:::

^def-co-ordinate-basis

::: info theorem
考虑 $X \in T_{p}M$，有 2 个 chart $(U,x)$ 和 $(V,y)$ 都包含 p，那么：


$$

\left( \frac{ \partial }{ \partial x^a } \right) _{p} = \partial_{a}(y^b \circ x^{-1}) (x(p)) \left( \frac{ \partial }{ \partial y^b } \right)_{p}

$$


:::


不妨假设 $U=V$，考虑到 $\left\{ \left( \frac{ \partial }{ \partial x^a } \right)_{p} \right\}$ 构成了基底，那么：


$$

 \left( \frac{ \partial }{ \partial x^a } \right)_{p} = \lambda^b \left( \frac{ \partial }{ \partial y^b } \right)_{p}

$$

^eqn-tangent-space-change-base

从而将映射 $y^c \in C^{\infty}(U)$ 作用在上面：


$$

\begin{align}
\lambda^b \left( \frac{ \partial }{ \partial y^b } \right)_{p} & = \lambda^b \partial_{b}(y^c\circ y^{-1})(y(p)) \\
	 & = \lambda^b \delta^c_{b} \\
	 & = \lambda^c
\end{align}

$$


而针对左侧：


$$

\left( \frac{ \partial }{ \partial x^a } \right)_{p} (y^c) = \partial_{a}(y^c \circ x^{-1})(x(p))

$$


从而：


$$

\lambda^c=\partial_{a}(y^c \circ x^{-1})(x(p))

$$


将结果带入 [上式](./) 中可以得到结论

::: danger corollary
取 $X \in T_{p}M$，取两个 chart $(U,x)$ 和 $(V,y)$ 均包含 p，记 $X^a$ 和 $\bar{X}^a$ 是 X 分别相对于两个 chart 诱导出的基底的坐标，那么：


$$

\bar{X}^a=\partial_{b}(y^a \circ x^{-1})(x(p)) X^b

$$


:::


::: note remark
通过滥用符号，我们可以将上面式子写得更加令人熟悉。

我们记 $y^b: y^b\circ x^{-1}: x(U)\subseteq \mathbb{R}^{dimM} \to \mathbb{R}$，注意到这些是 dim M 个独立的实函数，因此我们可以将其结果拼起来，并认为映射 $x^1,\cdots, x^{dimM}$ 是其相关的自变量 (互相独立)。这一思想源自于：

考虑一个单例 (singleton) $\left\{ * \right\}$(即一个唯一元素的集合)，有映射 $x: \left\{ * \right\}\to A$，$y: A\to B$，那么映射 $y \circ x$ 和”映射”$y(x)$ 其实没有区别，这里滥用了映射符号，但想表达的意思是 x 这个映射和这个单例基本是一个东西，x 就是在 A 中选了一个元素

从而，我们可以进一步写出：


$$

y^b=y^b(x^1,\cdots, x^{dim M})

$$


从而：


$$

\begin{align}
\left( \frac{ \partial }{ \partial x^a } \right)_{p} & = \frac{ \partial y^b }{ \partial x^a }(x(p)) \left( \frac{ \partial }{ \partial y^b } \right)_{p} \\
\bar{X}^b & = \frac{ \partial y^b }{ \partial x^a }(x(p)) X^a
\end{align}

$$


和我们前面定义的张量换基基本一样：


$$

\begin{align}
e_{a} & = A^b_{a}\bar{e}_{b} \\
\bar{v}^b & = A^b_{a} v^a
\end{align}

$$


映射 y 代表了新的 co-ordiante，而 $A^b_{a}$ 则是 Jacobian 矩阵。利用这样的滥用符号，我们可以得到逆：


$$

B^b_{a} = (A^{-1})^b_{a}= \frac{ \partial x^b }{ \partial y^a } (y(p))

$$


:::


::: note remark
上面 components 根据 chart 转换而转换的角度给了我们一个新的定义切空间的想法：

> 毕竟是一个无情的映射机器，给一个chart 可以构造co-ordinate basis, 进而得到componenet，因此不妨将chart构造也纳入机器映射范围内

> 虽然切向量和切空间本身不依赖于chart选取，但是其上基的构造是依赖于chart 选取的，这里我们将切向量和其分量+基的组合做了等价代换，即在给定基的情况下，切向量<=>切向量的分量，这一意义下才衍生了下面的想法


定义：$\mathscr{A}:\left\{ (U,x)\in \mathscr{A} | p \in U \right\}$ 是 M 中包含 p 的 charts，定义且切向量 v 是一个一个映射：


$$

v: \mathscr{A}\to \mathbb{R}^{dim M}

$$


满足：


$$

v((V,y)) = A v((U,x))

$$


其中 A 是一个 Jacobian 矩阵：$y \circ x^{-1}: \mathbb{R}^{dimM}\to \mathbb{R}^{dimM}$，按照 componenets 展开有：


$$

[v((V,y))]^b = \frac{ \partial y^b }{ \partial x^a }(x(p)) [v((U,x))]^a

$$


切空间 $T_{p}M$ 则是定义了在 p 点所有切向量的集合，且附带了一个向量空间的结构

我们这里给出的是一个物理教材里常见矢量定义的数学上更加严格的版本，即：一个矢量是一组数，其在换基映射 $y=y(x)$ 下通过 Jacobian 矩阵改变：


$$

\bar{v}^b = \frac{ \partial y^b }{ \partial x^a } v^a

$$


关于这两个定义的详细比较，可以参考 Chapter 2 of Vector Analysis, by Klaus Jänich

:::



## 参考

##### 引文


##### 脚注

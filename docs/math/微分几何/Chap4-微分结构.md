---
date: 2022-09-04
tag:
  - Topology
  - math
  - 线性代数
  - manifold
  - 微分流形
category:
  - library
  - math
  - 微分几何
star: 5
sticky: 5
---

# Chap4 微分结构


## 微分定义


### 引入新结构

[^def-C0-compatible](./Chap3-Topological-manifolds-and-bundles.md#^def-c0-compatible) 中定义了 C0-compatible 的 atlas，我们知道任何 atlas 都是 C0-atlas。我们将进一步延展该概念，将其扩充到并不是很 trivial 的情形，得到流形上的微分

我们首先给出一个形式上的广义定义：

我们称一个流形上的 atlas $\mathscr{A}$ 是一个🌸-atlas 如果任意 2 个 chart $(U,x),(V,y)\in \mathscr{A}$ 是 🌸-compatible 的.

换句话说，要么 $U\cap V=\oslash$，要么 $U\cap \neq \oslash$，且从 $x(U\cap V)$ 到 $y(U\cap V)$ 的转移映射 (transition map) $y\circ x^{-1}$ 是 🌸的；C0-compatible 中的🌸就是 continious

[Chap4 微分结构 2022-09-04 14](.//)


注意到，我们新建立的这个转移映射 $y\circ x^{-1}$ 是建立在两个 $R^d$ 之间的，那么根据数学分析的思路，我们完全可以研究其很多性质：

- 🌸=C0：就是 C0-compatible
- 🌸= $C^k$ ：代表 k 次连续 (可微)
- 🌸= $C^{\infty}$ ：代表光滑
- 🌸= $C^{\omega}$ ：代表映射是 (real) analytic，比光滑更强
- 🌸=complex：如果 $\text{dim} M$ 是偶数，且转移映射是连续的，满足 Cauchy-Riemann equations，我们可以称 M 是一个复流形，它的 complex dimension 是 $\frac{1}{2} \text{dim} M$

::: note note
所谓的 Cauchy-Riemann equations 可以从下面这个角度来看：

我们知道 $R^2$ 和 $C$ 是同构的 (作为集合)，从而我们可以构造函数：


$$
\begin{array}{l}
	f:R^2\rightarrow R^2\\
	\left( x,y \right) \mapsto \left( u\left( x,y \right) , v\left( x,y \right) \right)\\
\end{array}
$$


其中 $u,v:R^{2}\rightarrow R$，这对应于函数：


$$
\begin{array}{l}
	f:C\rightarrow C\\
	x+iy\mapsto u\left( x,y \right) +iv\left( x,y \right)\\
\end{array}
$$


如果 u, v 是实可微的 (在 $(x_{0}, y_{0})$ 处)，那么我们可以说 $f=u+iv$ 在点 $z_{0}=x_{0}+iy_{0}$ 处事复可微的，当且仅当：


$$
\frac{\partial u}{\partial x}\left( x_0,y_0 \right) =\frac{\partial v}{\partial y}\left( x_0,y_0 \right) \land \frac{\partial u}{\partial y}\left( x_0,y_0 \right) =-\frac{\partial v}{\partial x}\left( x_0,y_0 \right) 
$$


这也可以简单地从可微角度推出来 [^1]：

[Chap4 微分结构 2022-09-04 14](.//)

这就是所谓的 Cauchy-Riemann equations。

:::


::: info whitney


对任意的 [maximal atlas](./Chap3-Topological-manifolds-and-bundles.md)，且为 $C^k$ atlas，$k\geqslant 1$，包含一个 $C^{\infty}$ atlas。进一步的，任意两个 maximal $C^k$ atlas ，如果具有一个相同的 $C^{\infty}$ atlas，那么他们是同一个 maximal $C^k$ atlas

:::


上述定理直接表明，如果我们在一个 manifold 上找到了一个 $C^1$ atlas，那么我们就可以说在这个 manifold 上可以找到一个 $C^{\infty}$ atlas，这意味着我们考虑流形上微分的时候，只需要考虑 $C^k(k=1)$ 的情况，其可以直接导出高维的情形。

为了方便说明，我们给出 $C^k$ manifold 的定义：

::: tip Ck manifold

一个 $C^k$ manifold 是一个三元组 $(M,\mathcal{O}, \mathscr{A})$，其中 $(M,\mathcal{O})$ 是一个拓扑流形，$\mathscr{A}$ 是一个 maximal $C^k$ atlas

:::

^def-ck-manifold

通过引入🌸-compatible 的定义，我们构造出了 (maximal) 🌸-atlas，但是如果不是 maximal 的情况，其显然可能存在不同的 atlas 构造，那么自然需要澄清 2 个 atlas 之间是不是 compatible 的，也就是：

::: tip atlas compatible


2 个🌸-atlas $\mathscr{A}, \mathscr{B}$ 是 compatible 的，如果 $\mathscr{A}\cup \mathscr{B}$ 还是一个🌸-atlas，否则就是 incompatible 的
:::

^def-atlas-compatible

::: details example
考虑流形 $\left( M,\mathcal{O} \right) =\left( \mathbb{R} ,\mathcal{O} _{\mathrm{std}} \right)$，考虑 2 个 atlas：$\mathscr{A} =\left\{ \left( \mathbb{R} ,\mathrm{id}_{\mathbb{R}} \right) \right\}$，$\mathscr{B} =\left\{ \left( \mathbb{R} ,x \right) \right\} , x:a\mapsto a^{\frac{1}{3}}$，显然这两个都是 atlas。注意到他们都只包含一个元素，从而必然满足相容条件，故 2 个都是 $C^{\infty}$ atlas（事实上，他们 2 个上面的唯一的 transition map 就是 $\text{id}_{\mathbb{R}}$）

考虑 2 个 atlas 的并集，即 $\mathscr{A} \cup \mathscr{B} =\left\{ \left( \mathbb{R} ,x \right) ,\left( \mathbb{R} ,\mathrm{id}_{\mathbb{R}} \right) \right\}$，那么 transition map 有：
- $\mathrm{id}_{\mathbb{R}}\circ x^{-1}=a\mapsto a^3$ 是光滑的
- $x\circ {\mathrm{id}_{\mathbb{R}}}^{-1}=a\mapsto a^{\frac{1}{3}}$ 在 0 点一阶导数都不存在
这表明 $\mathscr{A}, \mathscr{B}$ 不是 $C^1$ compatible 的

:::


上面例子告诉我们可以在一个实数轴上装备 2 个不同的 *且不相容* 的 $C^{\infty}$ atlas，这似乎会导致微分运算时候的不确定性，但下面一小节将会考虑这个问题，并给出一个正面的结论

### 微分流形

我们给出下面的对微分流形的定义：

::: tip differentiable map


$\phi: M\rightarrow N$ 是一个映射，其中 $\left( M,\mathcal{O} _M,\mathscr{A} _M \right)$ 和 $\left( N,\mathcal{O} _N,\mathscr{A} _N \right)$ 是 $C^k$ manifold。那么我们称映射 $\phi$ 是 $C^k$ differentiable at $p\in M$ ，如果：

对某些 chart $(U,x)\in \mathscr{A}_{M}, p\in U$，$(V,y)\in \mathscr{A}_{N}, \phi(p)\in V$，有映射 $y\circ \phi \circ x^{-1}$ 在 $x(p)\in x(U)\subseteq \mathbb{R}^{\text{dim} M}$ 是 k 阶连续可微的，即:

[Chap4 微分结构 2022-09-04 19](.//)

:::

^def-differentiable-map

注意上面的定义里面只要找到一对 chart 满足可微条件就可以了，我们自然需要考虑定义是不是 well-defined：

我们证明，如果 $y\circ \phi\circ x^{-1}$ 在 $x(p)$ 处通过 chart $\left( U,x \right) \in \mathscr{A} _M$ 和 $\left( V,y \right) \in \mathscr{A} _N$ 可微，那么 $\tilde{y}\circ \phi \circ \tilde{x}^{-1}$ 也是可微的，在点 $\tilde{x}\left( p \right)$ 对所有的 chart $\left( \tilde{U},\tilde{x} \right) \in \mathscr{A} _M$ 以及 $\left( \tilde{V},\tilde{y} \right) \in \mathscr{A} _N$ 且 $\phi \left( p \right) \in \tilde{V}$

[Chap4 微分结构 2022-09-04 20](.//)


考虑上面的示意图，注意到 chart $(U,x)$ 和 $(\tilde{U}, \tilde{x})$ 是同一个 atlas 中，从而映射 $\tilde{x}\circ x^{-1}$ 是 $C^k$ 可微的，类似的 $\tilde{y}\circ y^{-1}$ 是 $C^k$ 可微的。注意到：


$$
\tilde{y}\circ \phi \circ \tilde{x}^{-1}=\left( \tilde{y}\circ y^{-1} \right) \circ \left( y\circ \phi \circ \tilde{x}^{-1} \right) \circ \left( \tilde{x}\circ x^{-1} \right) ^{-1}
$$


因此该映射是 $C^k$ 可微的，证毕

既然我们的 $C^k$ 可微映射定义是 well-defined，这意味着我们可以对 $C^k$ atlas 进行分析

::: details example
考虑光滑流形 $\left( \mathbb{R} ^d,\mathcal{O} _{\mathrm{std}},\mathscr{A} _d \right)$ 和 $\left( \mathbb{R} ^{d'},\mathcal{O} _{\mathrm{std}},\mathscr{A} _{d'} \right)$，其中 $\mathscr{A} _d$ 和 $\mathscr{A} _{d'}$ 是 maximal atlas，且分别包含了 chart $\left( \mathbb{R} ^d,\mathrm{id}_{\mathbb{R} ^d} \right)$ 和 $\left( \mathbb{R} ^{d'},\mathrm{id}_{\mathbb{R} ^{d'}} \right)$。考虑映射 $f:\mathbb{R} ^d\rightarrow \mathbb{R} ^{d'}$，f 的可微性可以表示为：

[Chap4 微分结构 2022-09-04 20](.//)

这意味着如果 f 是光滑的，等价于 $\mathrm{id}_{\mathbb{R} ^{d'}}\circ f\circ \left( \mathrm{id}_{\mathbb{R} ^d} \right) ^{-1}=f$ 是光滑的

:::


::: details example
考虑 $\left( M,\mathcal{O} ,\mathscr{A} \right)$ 是一个 d 维光滑流形，取 $(U,x)\in \mathscr{A}$，那么映射 $x:U\rightarrow x\left( U \right) \subseteq \mathbb{R} ^d$ 是光滑的。实际上，我们有：

[Chap4 微分结构 2022-09-04 20](.//)

从而映射 $x:U\rightarrow x(U)$ 是光滑的，等价于映射 $\mathrm{id}_{x\left( U \right)}\circ x\circ x^{-1}=\mathrm{id}_{x\left( U \right)}$ 是光滑的，而这是显然的


:::


::: details example
进一步的，我们可以发现，coordinate maps: $x^i\coloneqq \mathrm{proj}_i\circ x:U\rightarrow \mathbb{R}$ 也是光滑的，事实上有：

[Chap4 微分结构 2022-09-04 20](.//)

注意到 $\mathrm{id}_{\mathbb{R}}\circ x^i\circ x^{-1}=\mathrm{proj}_i$，从而 $x_{i}$ 是光滑的

:::


### 微分结构的分类

::: tip diffeomorphism

如果映射 $\phi :M\rightarrow N$ 是 M, N 两个光滑流形之间的双射，如果 $\phi$ 和 $\phi^{-1}$ 都是光滑的，那么称 $\phi$ 是一个微分同胚映射 (diffeomorphism)

:::

^def-diffeomorphism

正如我们重申了多遍的，xx-morphism 就是保持结构的变换，这里的 diffeomorphism 就是在光滑流形之间保持结构的变换

::: tip diffeomorphic


两个流形 $\left( M,\mathcal{O} _M,\mathscr{A} _M \right)$，$\left( N,\mathcal{O} _N,\mathscr{A} _N \right)$ 被称为微分同胚 (diffeomorphic)，如果存在一个微分同胚映射 $\phi:M\rightarrow N$，我们记为：$M\cong _{\mathrm{diff}}N$

:::

^def-diffeomorphic

::: note remark
事实上，微分同胚也构成了一个等价关系，正如(拓扑)同胚之拓扑空间。在研究微分结构的前提下，我们可以将微分同胚的空间看成一样的
:::


既然这是一个等价关系，我们可以考虑一个很有趣的问题：

- how many smooth structures on a given topological space are there, up to diffeomorphism?

结论很神奇哈：微分同胚的数量取决于流形的维数！

::: info Radon-Moise


M 是一个流形，其维数 $\text{dim}=1,2,\text{or} 3$，那么在微分同胚的意义下，这里仅仅存在一个唯一的 M 上的光滑结构

:::


回顾我们之前构造的 $\left( \mathbb{R} ,\mathcal{O} _{\mathrm{std}} \right)$ ，其装备了 2 个不同的 atlas $\mathscr{A}$ 和 $\mathscr{B}$。如果将其分别扩充为 maximal atlas，那么我们得到了光滑流形 $\left( \mathbb{R} ,\mathcal{O} _{\mathrm{std}},\mathscr{A} _{\max} \right)$ 和 $\left( \mathbb{R} ,\mathcal{O} _{\mathrm{std}},\mathscr{B} _{\max} \right)$。显然，由于其具有 2 个不同的 atlas，那么这是 2 个不同的微分流形。但是根据上面的定理，$\text{dim}\mathbb{R}=1$，这表明这两个微分流形时同构的。

多么神奇，定义的抽象的微分结构居然依赖于其存在的几何实体，拓扑，很神奇吧！

但是上面的情形在 $\text{dim}\mathbb{R}>4$ 的时候就不一样了。对这种情形，我们使用一种被称为 *surgery theory* 的技术来分析问题。通过 cutting, replacing, gluing parts 来控制像 [fundament group](./Chap2-拓扑空间.md) 之类的不变量。总之，总体思想是对超过 4 维的流形进行“手术”来理解其情况，最终结论表明，在一个拓扑空间上，*只存在有限多的微分流形*

注意到我们故意避开了 4 维的情形，聪明的你可能有预感了，结果是：

如果 M 是一个非紧的拓扑流形，那么在 M 上可以有无限多的不互相微分同胚的结构，特别的，对 $(\mathbb{R},\mathcal{O}_{\text{std}})$ 就是如此

对紧的 4 维拓扑流形，有一些部分的结论，下面给一个例子：

如果对流形 $(M,\mathcal{O})$，$\text{dim}M=4$，且有 $b_{2}>18$，其中 $b_{2}$ 是 **second Betti number**，那么 M 上可以有可数多的不微分同胚的结构

Betti number 被定义在 homology groups (代数意义) 上，但是直观上可以这么理解：
- $b_{0}$ 是一个空间上的联通的部分的数目
- $b_{1}$ 是一个空间上的圆环洞 (1 维) 的数目
- $b_{2}$ 是一个空间的 2 维的洞的数目

上面的结论告诉我们，如果一个紧流形有超过 18 个 2 维洞，那么其上面仅仅有可数多个微分结构，但是其仍然是无穷的…😅



## 参考

##### 引 文

- [Smooth Manifolds](https://algebrology.github.io/smooth-manifolds/)

##### 脚注

[^1]: [Cauchy–Riemann equations - Wikipedia](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations)

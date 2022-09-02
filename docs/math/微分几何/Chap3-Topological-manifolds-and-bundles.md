---
date: 2022-09-02
tag:
  - Topology
  - math
  - 线性代数
  - manifold
  - bundle
category:
  - library
  - math
  - 微分几何
star: 10
sticky: 10
---

# Chap3 Topological manifolds and bundles


## 拓扑流形和 Bundle


### Manifold

::: tip manifold


一个 [paracompact](./Chap2-拓扑空间.md), [Hausdorff](./Chap2-拓扑空间.md) 的拓扑空间 $(M,\mathcal{O})$ 被称为 **d-dimensional(topological) manifold** 如果：

对 M 中任意点 $p\in M$，存在一个邻域 $U(p)$ 还有一个同胚 (homeomorphism)$x:U\left( p \right) \rightarrow x\left( U\left( p \right) \right) \subseteq \mathbb{R} ^d$。我们也表示为：$\text{dim} M=d$

:::

^def-manifold

直观上来看，一个 d 维拓扑流形指的是一个 (任意点) 局部类似于 $R^d$ 的拓扑空间。

::: note note
注意，我们目前实际上看到的是实拓扑流形，如果要考虑复的情形，只需要将同胚x改成映射到$C^d$上的开集就可
:::


::: info theorem
考虑 M 是一个 d 维拓扑流形，$U,V\subseteq M$ 且是开的，相交的 $U\cap V\ne \oslash$。如果 x，y 是 2 个 homeomorphism，且：


$$
\begin{array}{c}
	x:U\rightarrow x\left( U \right) \subseteq \mathbb{R} ^d\\
	y:V\rightarrow y\left( V \right) \subseteq \mathbb{R} ^{d'}\\
\end{array}
$$


那么 $d=d'$

:::


这个定理告诉我们，dimension 这个概念定义是没问题的，即 well-defined。它在任意一点 (任意连通的部分的一点) 上是相同的

类似定义子拓扑空间的思路，我们也可以定义子流形：

::: tip definition
$(M,\mathcal{O})$ 是一个拓扑流形，$N\subseteq M$，那么 $\left( N,\mathcal{O} |_N \right)$ 被称为 $(M,\mathcal{O})$ 的一个子流形 (如果它本身是一个流形)

:::

^def-sub-manifold

一些简单的关于子流形的例子：

- $S^1$ 是 $R^2$ 的子流形
- $S^2,C,T^2$ 是 $R^3$ 的子流形

同样的，拓扑空间可以 product，那么拓扑流形也可以这么操作：

::: tip definition
$\left( M,\mathcal{O} _M \right)$ 和 $\left( N,\mathcal{O} _N \right)$ 是 2 个维数为 m 和 n 的流形，那么 $\left( M\times N,\mathcal{O} _{M\times N} \right)$ 是一个维数为 $m+n$ 的流形

:::

^def-product-manifold

举例来说，我们有：

- $T^2=S^{1}\times S^1$ (可以证明其不仅是拓扑空间，还是拓扑流形)；进一步：$T^n\coloneqq \underset{n\,\,\mathrm{times}}{\underbrace{S^1\times S^1\times \cdots S^1}}$ 是一个 n 维流形
- $C=S^1\times \mathbb{R}$ 是一个 2 维流形

### Bundle












## 参考

##### 引文
##### 脚注

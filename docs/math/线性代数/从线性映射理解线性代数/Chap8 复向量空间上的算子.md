---
date: 2022-08-09
tag:
  - default
category:
  - library
  - 数学
  - 线性代数
  - 从线性映射理解线性代数
---


# Chap8 复向量空间上的算子

这一章主要是针对复空间上算子的结构进行整理，因此不一定具有内积了。

## 幂零算子和广义本征向量

首先来讨论算子幂的零空间。

::: info 
**递增的零空间序列**
设T∈L(V)，则：
$${0}=\mathrm{null} T^{0} \subset \mathrm{null} T^{1} \subset \cdots \subset \mathrm{null} T^{k} \subset \mathrm{null} T^{k+1}\subset \cdots$$
:::


这个结论是显然的。

显然由于我们研究的是有限空间，有下面这个结论：

::: info 
**零空间序列中的等式**
设$T\in \mathcal{L} \left( V \right)$，设m是非负整数使得$\mathrm{null}T^m=\mathrm{null}T^{m+1}$，则：
$$\mathrm{null}T^m=\mathrm{null}T^{m+1}=\mathrm{null}T^{m+2}=\mathrm{null}T^{m+3}=\cdots $$
:::


使用数学归纳法可以证明

上面的命题启发我们寻找这样的一个非负整数 m 使得 $\mathrm{null}T^m=\mathrm{null}T^{m+1}$，下面的命题表明这个等式至少在 m=T 的定义域的维数时成立.

::: info 
**零空间停止增长**
设$T\in \mathcal{L} \left( V \right)$，令n=dimV，则：$$\mathrm{null}T^n=\mathrm{null}T^{n+1}=\mathrm{null}T^{n+2}=\cdots $$
:::


基于上面的命题可以得到下面一个好的结论：

::: info 
设T∈L(V)，令n=dimV，则$V=\mathrm{null}T^n\oplus \mathrm{range}T^n$
:::

![Pasted image 20220313191310.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313191310.png)

你可以注意到，$V=\mathrm{null}T\oplus \mathrm{range}T$ 并不是对每个 T∈L(V) 都成立，因为这两个空间可能有交集，比如这样的映射，在 Pn(n 阶多项式空间) 下的一次微分算子，其零空间是 P1，值域是 Pn-1。上面的命题告诉我们，尽管 L 可能性质不会那么好，但 L<sup>n</sup>性质是好的，可以完成直和分解

### 广义本征向量

前面描述本征向量的时候提到，有的算子因为没有足够多的本征向量从而缺乏一个好的描述，因此本节引入 **广义本征向量**，可以帮助描述算子

为了理解为什么需要更多的本征向量，我来考察算子的不变子空间分解：我们想要找到一个好的直和分解有：$$V=U_1\oplus \cdots \oplus U_m$$
其中每个 Ui 都是 V 在 T 下的不变子空间。最简单的不变子空间是一维的，从而得到了下面的本征空间分解：$$V=E\left( \lambda _1,T \right) \oplus \cdots \oplus E\left( \lambda _m,T \right) $$
前面的谱定理表明，若 V 是内积空间，则 F=C 的时候每个正规算子都可以本征空间分解，F=R 时每个自伴算子都可以分解。这是因为这些形式的算子有足够的本征向量来构成 V 的一组基。但对不是这种特殊算子的情况，其本征向量可能不够，从而我们引入广义本征向量和广义本征空间来解决这个问题。

::: tip 
**广义本征向量**
设$T\in \mathcal{L}(V)$，λ是T的本征值，向量v∈V称为T相对λ的广义本征向量，如果v≠0且存在正整数j使得：$$\left( T-\lambda I \right) ^jv=0$$
:::


尽管我们定义的 j 是任意正整数，但马上可以证明，j=dimV 的时候每个广义本征向量都满足这个等式。在此之前，直接给出广义本征空间的概念：

::: tip 
**广义本征空间**
设T∈L(V)，且λ∈F，则T相应于λ的广义本征空间(记为G(λ,T))定义为T相应于λ的所有广义本征向量的集合，包括0向量
:::


这个空间有下面的刻画：

::: info 
**广义本征空间的性质**
设T∈L(V)，且λ∈F，则$$G\left( \lambda ,T \right) =\mathrm{null}\left( T-\lambda I \right) ^{\mathrm{dim}V}$$
:::


由于前面零空间的嵌套定理，很容易发现这个结论。

我们对广义本征向量，也可以证明其是线性无关的，即：

::: info 
**线性无关的广义本征向量**
设T∈L(V)，λ1,...,λm是T所有的不同的本征值，v1,...,vm分别为相应的广义本征向量，则v1,...,vm线性无关
:::

![Pasted image 20220313193634.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313193634.png)

现在已经初步有特征向量那味了，但为了真正起到不变子空间直和分解的作用，现在还需要研究幂零算子的性质

### 幂零算子

::: tip 
**幂零算子**
一个算子称为幂零的，如果他的某个幂为0
:::


根据前面零空间嵌套的定理，可以发现 $\mathrm{null}N^{\mathrm{dim}V}=V$，其中 $N\in \mathcal{L} \left( V \right)$ 是幂零算子

下面给出关于幂零算子的一个基的表示思路。注意这个思路是不限制作用域的，即 F=R 或者 C 都可以。

::: info 
**幂零算子的矩阵**
如果N是V上的幂零算子，则V有一个基使得N关于这个基的矩阵形如：
$$\left( \begin{matrix}
	0&		&		*\\
	&		\ddots&		\\
	&		&		0\\
\end{matrix} \right) $$
:::


证明思路如下：
![Pasted image 20220313194217.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313194217.png)

## 算子的分解

这一节将会根据前面的广义本征向量得到一个很有力的结论：**有限维的复向量空间上的每个算子都有足够多的广义本征向量来给出一个分解**

容易发现，若 T∈L(V)，则 nullT 和 rangeT 都在 T 下不变。进一步，T 的每个多项式的零空间和相空间在 T 下也不变。

下面给出复向量空间上算子的刻画

::: info 
**复向量空间上算子的刻画**
假设V是复向量空间，$T\in \mathcal{L} \left( V \right)$。设$\lambda _1,\cdots ,\lambda _m$是T的不同本征值，则：
- $V=G\left( \lambda _1,T \right) \oplus \cdots \oplus G\left( \lambda _m,T \right)$
- 每个$G\left( \lambda _j,T \right)$在T下都是不变的
- 每个$\left( T-\lambda _jI \right) |_{G\left( \lambda _j,T \right)}$都是幂零的
:::

![Pasted image 20220313200423.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313200423.png)

根据上面的思路，我们得到了一个很有意义的结论：**V 是一个复向量空间，T∈L(V)，则 V 有一个由 T 的广义本征向量组成的基**

上面的分解是一个强大的工具，包含在这个分解中的子空间的维数非常重要，我们给他一个名字:

::: tip 
**重数**
- 设T∈L(V)。T的本征值λ的重数定义为相应的广义本征空间G(λ,T)的维数
- 也就是说，T的本征值λ的重数等于$\mathrm{dim} \mathrm{null}\left( T-\lambda I \right) ^{\mathrm{dim}V}$
:::

![Pasted image 20220313200933.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313200933.png)

有的书也使用代数重数和几何重数这两个术语：
- 代数重数：$\mathrm{dim} \mathrm{null}\left( T-\lambda I \right) ^{\mathrm{dim}V}=\mathrm{dim}G\left( \lambda ,T \right)$
- 几何重数：$\mathrm{dim} \mathrm{null}\left( T-\lambda I \right) =\mathrm{dim}E\left( \lambda ,T \right)$

为了用矩阵的形式表示我们的结果，我们给出下面分块对角矩阵的定义：

::: tip 
**分块对角矩阵**
分块对角矩阵是形如：$$\left( \begin{matrix}
	A_1&		&		0\\
	&		\ddots&		\\
	0&		&		A_m\\
\end{matrix} \right) $$
的方阵，其中Ai是对角线上的方阵
:::


根据前面幂零算子基的表示和算子广义本征空间的直和分解，容易发现每个算子可以分解成下面的形式：

::: info 
V是**复向量空间**，T∈L(V)，设$\lambda_1,\cdots,\lambda_m$是T的所有互不相同的本征值，重数分别为d1,...,dm,则V有一个基使得T关于这个基有分块对角矩阵$$\left( \begin{matrix}
	A_1&		&		0\\
	&		\ddots&		\\
	0&		&		A_m\\
\end{matrix} \right) $$
其中每个$A_j$都是如下所示的$d_{j}\times d_j$的上三角矩阵$$\left( \begin{matrix}
	\lambda _1&		&		*\\
	&		\ddots&		\\
	0&		&		\lambda _m\\
\end{matrix} \right) $$
:::

![Pasted image 20220313201550.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313201550.png)

你可能会认为这个结果已经很好了，但事实上还有更好的结果！参考后面的若尔当标准型。

在此之前，我们先使用前面这个分解形式来说明，复向量空间上的每个可逆算子都有平方根。

### 平方根

前面介绍过，算子 $T\in \mathcal{L} \left( V \right)$ 的平方根是满足 $R^2=T$ 的算子 R。每个复数都有平方根，但复向量空间上的算子不一定有平方根。

我们首先证明，恒等算子加上一个幂零算子总有平方根

::: info 
**恒等算子加上一个幂零算子总有平方根**
设$N\in \mathcal{L} \left( V \right)$是幂零的，则(I+N)有平方根
:::

![Pasted image 20220313202209.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313202209.png)

这个证明是满 tricky 的，设计到如何解析平方根的问题，但我们不专门研究这个的只要知道可以就行了。

下面证明，C 上的可逆算子有平方根。
::: info 
**C上的可逆算子有平方根**
设V是复向量空间，如果$T\in \mathcal{L} \left( V \right)$是可逆的，则T有平方根
:::

![Pasted image 20220313202406.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313202406.png)

## 特征多项式和极小多项式

### 凯莱 - 哈密顿定理

如果 F=C，则下面定义把 V 上的每个算子和一个多项式联系在一起。

::: tip 
**特征多项式**
设V是复向量空间，T∈L(V)，令λ1,...,λm代表T所有互不相等的本征值，重数分别为d1,...,dm，则多项式：$$\left( z-\lambda _1 \right) ^{\mathrm{d}_1}\cdots \left( z-\lambda _m \right) ^{\mathrm{d}_m}$$
称为T的特征多项式
:::


特征多项式具有下面的性质：

::: info 
**特征多项式的次数和零点**
设V是复向量空间，T∈L(V)，则：
- T的特征多项式的次数等于dimV
- T的特征多项式的零点恰好是T的本征值
:::


这些性质是 T 的广义本征值分解的自然导出，利用特征多项，可以得到凯莱 - 哈密顿定理。

::: info 
**凯莱-哈密顿定理**
设V是复向量空间，T∈L(V).令q表示T的特征多项式，则q(T)=0
:::


也就是说 q 实际上是 T 对偶空间上的零映射，其依赖于 V 本身，也反映了对偶的对偶的性质:)
证明是蛮简单的，只要将空间 V 划分成广义特征空间的直和就可以了。

![Pasted image 20220313203039.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313203039.png)

另一个理解思路是 **高维空间下对角矩阵稠密**。可以构造一个极限对角矩阵序列逼近该矩阵，而对角矩阵是显然满足这个定理的。

### 极小多项式

基于特征多项式，下面引入和每个算子相联系的另一个重要的多项式。首先定义首一多项式，即最高次数的项的系数为 1 的多项式，进一步给出极小多项式

::: info 
**极小多项式**
设T∈L(V)，则存在唯一一个次数最小的首一多项式p使得p(T)=0
:::

![Pasted image 20220313203317.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313203317.png)

上面关于极小多项式的定义和证明表明，V 上每个算子的极小多项式的次数最多为 (dimV)^2，但由于是算子，结合凯莱 - 哈密顿定理，V 上每个算子的极小多项式的次数最多为 dimV。这是一个显著的改进。

![Pasted image 20220313203658.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313203658.png)

进一步，下面刻画了一个作用在是算子上等于 0 的多项式

::: info 
**q(T)=0表明q是极小多项式的倍式**
设T∈L(V)，q∈P(F)，则q(T)=0等价于q是T的极小多项式的多项式倍
:::

通过辗转相除法即可证明

下面得到了一个很有意义的结论：

::: info 
**特征多项式是极小多项式的多项式倍**
设F=C，T∈L(V)，则T的特征多项式是极小多项式的多项式倍
:::


这实际上在暗示我们极小多项式似乎是一个比特征多项式更准确的描述——特征多项式毕竟每一项的次数是按照广义本征空间的维数来估计的 (即 dimV)，但是不是不需要这么高维数呢？在后面的若尔当标准型中可以找到答案。

::: info 
**本征值是最小多项式的零点**
设T∈L(V)，则T的极小多项式的零点恰好是T的本征值
:::


![Pasted image 20220313204240.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313204240.png)

![Pasted image 20220313204358.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313204358.png)

极小多项式有一个简单的应用就是用来判定 T 的本征向量是否足够，具体来说就是：
V 有一个 T 的本征向量组成的基当且仅当 T 的极小多项式没有重复的零点

## 若尔当形

前面证明了，对每个 T∈L(V),V 是一个复向量空间，V 上有一个基使得 T 关于这个基又较好形式的上三角矩阵，但这不是极限，下面可以得到更好地结论。

首先从幂零算子入手（广义特征向量空间）

![Pasted image 20220313204705.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313204705.png)

![Pasted image 20220313204725.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313204725.png)

实际上，每个幂零矩阵都和上面例子性质类似，具体来说，存在有限个向量 v1,...vn∈V，使得 V 有一个形如 $N^{k}v_{j}\neq 0$ 的向量组成的基，其中 j 从 1 取到 n，k（以相反的顺序）从 0 取到使得 $N^{m_j}v_{j}\neq 0$ 的最大的非负整数 mj。

**对应于幂零算子的基**
设 N∈L(V) 是幂零的，则存在向量 $v_1,\cdots ,v_n\in V$ 和非负整数 $m_1,\cdots ,m_n$ 使得
- $N^{m_1}v_1,\cdots ,Nv_1,v_1,\cdots ,N^{m_n}v_n,\cdots ,Nv_n,v_n$ 是 V 的基
- $N^{m_1+1}v_1=\cdots =N^{m_n+1}v_n=0$

![Pasted image 20220313205229.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313205229.png)
![Pasted image 20220313205246.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313205246.png)

这个结论暗含了下面的几个事实
- n=dim null N
- $m_j\ge k,m_j\in \left\{ m_1,\cdots ,m_n \right\}$ 的个数为 $\mathrm{dim} \mathrm{null}N^k-\mathrm{dim} \mathrm{null}N^{k-1}$

这两个事实根据证明过程就可以看出来。第一个是因为在 range 之外不带 N 的向量个数就只有 dim nullN 个，第二个则是通过证明过程中首先对 rangeN 子空间的归纳证明。rangeN 子空间中满足 $m_{j}\geq k$ 的个数等于上面式子。在 N 不限制在 rangeN 上后，回到 V 空间，左边等价于 k 增加 1(因为自然地多了一个 N 导致多一个维度)，右边也是自然地 k 增加 1。而新增加的基不会计算在右边的部分，因为其只属于 null。这意味着在 rangeN 上成立可以推出在 N 上成立，小空间=>大空间

实际上，$N^{m_1}v_1,\cdots ,N^{m_n}v_n$ 是 nullN 的基

现在使用矩阵来描述上面的定理：

::: info 
**若尔当基**
设T∈L(V)，V的基称为T的若尔当基，如果T关于这个基有分块对角矩阵：$$\left( \begin{matrix}
	A_1&		&		\\
	&		\ddots&		\\
	&		&		A_p\\
\end{matrix} \right) $$
其中每个Aj形如：$$A_j=\left( \begin{matrix}
	\lambda _j&		1&		&		0\\
	&		\ddots&		\ddots&		\\
	&		&		\ddots&		1\\
	&		&		&		\lambda _j\\
\end{matrix} \right) $$
:::


根据前面性质，如果 V 是一个复向量空间，T∈L(V)，那么可以将 V 做 T 的广义特征向量空间直和分解，且每个广义特征向量空间在 $T-\lambda_{i}I$ 下是不变子空间。而 $T-\lambda_{i}I$ 是这个不变子空间上的幂零矩阵，可以分解为前面介绍的对于幂零算子的基。从而可以得到上面的 **若尔当分解** 的形式

### 若尔当分解的 Cyclic Decomposition

前面介绍过，对 C 上的向量空间 V 的任一算子 T 可以将 V 进行广义特征值分解。对每个广义特征空间进行考虑，记其为 U，并将 T-λI 用 A 表示，此时 A 在 U 上是幂零的

记 $U^i=\left\{ u\in U:A^iu=0 \right\}$，则我们构造了下面这样的幂零空间链条 (filtered chain)
$$0=U^0\subseteq U^1\subseteq \cdots \subseteq U^n=U$$

我们在下面的子商空间中进行分析：
$$U^1\quad U^2/U^1\quad \cdots \quad U^n/U^{n-1}$$
滥用记号记：
$$A:U^{i+1}/U^i\rightarrow U^i/U^{i-1}\quad v+U^i\rightarrow Av+U^{i-1}$$
这在 i>=1 的时候是单射 (即证明 $Av\in U^{i-1}\Longleftrightarrow v\in U^i, v+U^i\in U^{i+1}/U^i$)

从而我们构造了另外一个 $U^1$ 的滤链 (单射性质)
$$A^{n-1}\left( U^n/U^{n-1} \right) \subseteq \cdots \subseteq A\left( U^2/U^1 \right) \subseteq V^1$$

选取 $A^{n-1}\left( U^n/U^{n-1} \right)$ 的一组基 $v_{11},\cdots ,v_{s_11}$ 并将其扩充为 $A^{n-2}\left( U^{n-1}/U^{n-2} \right)$ 的一组基 $v_{11},\cdots ,v_{s_21}$.以此类推，我们可以得到一组基 $v_{11},\cdots ,v_{s 1}$，使得对任意 k 有 $$A^{n-k}\left( U^{n-k+1}/U^{n-k} \right) =\mathrm{span}\left( v_{11},\cdots ,v_{s_k1} \right) $$
令 $v_{ij}\in U$ 使得 $$A^{j-1}\left( v_{ij}+U^{j-1} \right) =v_{i1},\text{即}A^{j-1}v_{ij}=v_{i1}$$
这些 $v_{ij}$ 就是所要求的基底（即将商空间映射回原空间）。最后来看唯一性，可以发现每个特征值的 Jordan 标准型完全由：
$$\mathrm{dim}U^1\ge \mathrm{dim}U^2/U^1\ge \cdots \mathrm{dim}U^n/U^{n-1}$$
决定。

![Pasted image 20220313221229.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313221229.png)
![Pasted image 20220313221237.png](math\线性代数\从线性映射理解线性代数\assets\Pasted image 20220313221237.png)

## 参考

- [Jordan标准形的本质是什么？ - 知乎](https://www.zhihu.com/question/37226720)

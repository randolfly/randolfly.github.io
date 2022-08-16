---
date: 2022-08-13
tag:
  - tool
  - matlab
  - mma
  - ode
category:
  - skill
  - matlab
---

# 求解ODE

# 求解 ODE


## 定义

使用计算机方法求解一个 ODE 方程

### 可以得到解析解情形

对可以手算得到 ODE 方程的解析解的情形，没什么好说的

#### Mma

使用 Mathematica 符号计算 (DSolve) 求解 ODE 的解析解，效果挺好.

比如求解

$$
\begin{aligned}
	\ddot{x}+ae^x&=0\\
	\Rightarrow x&=\log \left( \frac{c_1\left( \tanh ^2\left( \frac{1}{2}\sqrt{c_1(c_2+t)^2} \right) -1 \right. )}{2a} \right)\\
\end{aligned}
$$

显然手解是不方便的

### 没有解析解，尝试数值解

#### Mma
数值解最先使用 Mathematica 尝试求解，因为定义简单方便，求解范围广。
这里的求解范围广包括边界条件类型广，从简单的数值边界条件到 BVP(Boundary value problem, 即边界为数值情况的符号等式，比如 y(start)=a y(end))，再到 Neumann 情形的边界条件 (类似 PDE 定义，比如 y'(start)=a y(end)+b)。

一个直观的例子是李家聪提出的，求解大变形的球面应力 - 变形映射关系，问题如下：

[小球膨胀理论计算](./assets/小球膨胀理论计算.docx)

具体问题形式为：

![Pasted image 20220228111015](./assets/Pasted-image-20220228111015.png)

求解代码参考：

```mathematica
xstart = 0.01;
xend =  1;
ic = {y'[xstart] == -5 y[xstart] + 3, y'[xend] == y[xend]}
nsol = NDSolve[{eqn, ic}, y, {x, xstart, xend}]
Plot[Evaluate[y[x] /. nsol], {x, xstart, xend}]
```

#### Matlab

matlab 求 ODE 数值解从基本问题到 BVP 都有包可以调用，但对复杂的 Neumann 似乎没办法，可以参考下面文章求解：

- [pde - Implementation of Neumann boundary condition with method of lines - 1D diffusion/reaction equation - Computational Science Stack Exchange](https://scicomp.stackexchange.com/questions/21692/implementation-of-neumann-boundary-condition-with-method-of-lines-1d-Diffusion)
- [amath.kaist.ac.kr/pde_lab/members/JaywanChung/MatlabLecture.pdf](http://amath.kaist.ac.kr/pde_lab/members/JaywanChung/MatlabLecture.pdf)
- ![10](./assets/10.1.1.390.7447.pdf)

#### Julia

等我学会了 julia 再填坑，但我觉得应该是可以的。

## 参考

- [求解边界值问题 - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/matlab/math/boundary-value-problems.html)
- [求解具有多边界条件的 BVP - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/matlab/math/solve-bvp-with-multiple-boundary-conditions.html)
- [pde - Implementation of Neumann boundary condition with method of lines - 1D diffusion/reaction equation - Computational Science Stack Exchange](https://scicomp.stackexchange.com/questions/21692/implementation-of-neumann-boundary-condition-with-method-of-lines-1d-Diffusion)
- [amath.kaist.ac.kr/pde_lab/members/JaywanChung/MatlabLecture.pdf](http://amath.kaist.ac.kr/pde_lab/members/JaywanChung/MatlabLecture.pdf)
- ![10](./assets/10.1.1.390.7447.pdf)

---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - mma
---


# Mathematica 表达式转 Matlab


## 定义

有时候我们希望将 mma 的表达式转换到 matlab 中编写数值程序，这时需要将预先计算的符号解转换到 matlab 中。

## 实现

结合写好的 mma 函数，实现方便的转换。

**函数代码**

![](assets/ToMatlab.m)


**使用方式**

1. 将该文件放置到 mma 的 `$Path` 中，比如: `F:\Software\Work\Mathematica\AddOns\ExtraPackages` 下

2. 直接调用函数

```mathematica
Import["ToMatlab.m", "Package"]
rotMat = EulerMatrix[{\[Alpha], \[Beta], \[Gamma]}, {3, 2, 
    3}];(*ZYZ Form*)
ToMatlab[rotMat /. {\[Alpha] -> a, \[Beta] -> b, \[Gamma] -> c}]
```

结果：

```mathematica
[cos(a) .* cos(b) .* cos(c) + (-1) .* sin(a) .* sin(c),(-1) .*  ...
  cos(c) .* sin(a) + (-1) .* cos(a) .* cos(b) .* sin(c),cos(a) .*  ...
\

  sin(b);cos(b) .* cos(c) .* sin(a) + cos(a) .* sin(c),cos(a) .*  ...
\

  cos(c) + (-1) .* cos(b) .* sin(a) .* sin(c),sin(a) .* sin(b);(-1)  ...
\

  .* cos(c) .* sin(b),sin(b) .* sin(c),cos(b)];
```

因此注意将换行的 `\` 去掉, 剩余部分可以直接调用。

::: note 
注意，对于表达式长的，可以直接 Export[path, expr]为文件，然后使用Vscode的正则表达式替换完成
:::



## 参考

- [ToMatlab Bugfix - Pastebin.com](https://pastebin.com/TcjErHVT)
- [Mathematica Expression to Matlab m-file Converter -- from Wolfram Library Archive](https://library.wolfram.com/infocenter/MathSource/577/#downloads)
- [export - Mathematica to Matlab - Mathematica Stack Exchange](https://mathematica.stackexchange.com/questions/166163/mathematica-to-matlab)

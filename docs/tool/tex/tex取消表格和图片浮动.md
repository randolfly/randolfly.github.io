---
date: 2022-06-06
tag:
  - tex
  - image
  - table
category:
  - skill
  - tex
---


# Tex 取消表格和图片浮动


## 定义

LaTeX 对于长篇幅论文（比如硕士博士学位论文，书籍）的排版确实比较犀利，可以不必太考虑表格和图片的位置。但是对于一般的论文，比如页数在 20 面左右的，经常出现表格和图片插在一个段落的文字中，或者出现跨大标题排版的问题。

## 方案

### 不管

正式论文里，对于图表的描述，常常使用「图 1 表示 blahblah」这样的句式；而不是「下图表示 blahblah」。因此，图表具体出现在什么位置，就不重要了。对此，LaTeX 也提供了好的方法：在 \caption 后面使用 \label 标注，引用时使用 \ref 自动产生图表对应的编号。

LaTeX 这样设计是有原因的。相对于正文文字，图表会占据相当大的一块地方。如果禁止浮动，严格按照源代码中的行文顺序排布，则很容易出现页面底部大片空白之类的现象。试想，有一幅图片高 4cm，当前页面版芯高 10cm，已排布的文章占据了 7cm 的版芯高度。此时如果禁止图片浮动，则图片必须排在下一页（不然版芯超高），且当前页会留下 3cm 的空白。

LaTeX 浮动算法相关介绍可参看：[LaTeX 中的浮动体：浮动算法 | 始终](https://liam.page/2017/04/30/floats-in-LaTeX-the-positioning-algorithm/)

### 手动管理

如果希望禁止浮动，可以使用 float 宏包，结合 H 选项。

```tex
\usepackage{float}
% ...
\begin{figure}[H]
% ...
\begin{table}[H]
% ...
```

\usepackage{placeins} + 在不希望向下再浮动的地方添加栅栏 \FloatBarrier


## 参考

##### 引文

- [LaTeX 中如何取消表格和图片浮动？ - 知乎](https://www.zhihu.com/question/25082703)

##### 脚注

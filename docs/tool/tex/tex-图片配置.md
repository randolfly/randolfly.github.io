---
date: 2022-06-06
tag:
  - tex
  - 图片
category:
  - skill
  - tex
---


# Tex 图片配置


## 问题

最近需要用 latex 插入多张图片，达到这么一个效果。

![](https://img-blog.csdn.net/20180601091728395?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

但是我原来只插入过一张图片（图片内容来源于网络；是国漫一人之下的宝儿姐。强推这部国漫~），代码如下，效果如图：

```tex
\begin{figure}[htbp]
\centering
\subfigure[1]{
\begin{minipage}{4.5cm}
\centering
\includegraphics[width=6cm]{4a.eps}
\caption{World Map}
\end{minipage}%
}%
\subfigure[2]{
\begin{minipage}{7cm}
\centering
\includegraphics[width=6cm]{4b.eps}
\caption{Concrete and Constructions}
\end{minipage}
}
\subfigure[1]{
\begin{minipage}{4.5cm}
\centering
\includegraphics[width=6cm]{4a.eps}
\caption{World Map}
\end{minipage}%
}%
\subfigure[2]{
\begin{minipage}{7cm}
\centering
\includegraphics[width=6cm]{4b.eps}
\caption{Concrete and Constructions}
\end{minipage}
}
\caption{side by side figure}
\end{figure}
```

![](https://img-blog.csdn.net/2018060109180739?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 解决方案

### M1：subfigure

所以我去网上搜索了一些资料，找到了一些关于在 latex 中插入多个图片的方法，首先我们来看第一种方法，也是我一开始用的方法：利用 latex 的 subfigure 排版，并排放置多张图。（使用宏包 \ usepackage{graphicx} 以及 \ usepackage{subfigure} 谢谢 @那些空洞的日子指出拼写错误）

源码如下，达到效果如下：

```tex
\begin{figure}[htbp]
\centering
\subfigure[pic1.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig1}
\end{minipage}%
}%
\subfigure[pic2.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}%
}%
\subfigure[pic3.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%
\subfigure[pic4.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%
\centering
\caption{ pics}
\end{figure}
```


其中 0.25\linewidth 是你插入图片的幅度（我理解为这副图的宽占 1/4 行，你下张图并排插入的话需要从 1/4 行处往后开始插），相当于 0.25 倍的当前 latex 中规定的一行的长度（感谢 @heathrine 指正），width=1in 是指图片的宽度。它可以在一个大图的框架里面插入多个小图，自动编号为 a,b,c,d.... 并对小图分别描述。

![](https://img-blog.csdn.net/20180601092933356?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

但是这个效果还不是我想要的。于是我就想用一个 subfigure 里面包裹两个 pic 看看效果

结果并没有达到我想要的效果。

![](https://img-blog.csdn.net/20180601093821879?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

这样的话就只是将其分成两个部分，只能对对应的两个部分进行描述，而不能对四张图每张都进行描述了。

**然后我在 latex 代码中每隔两个 subfigure 打一个回车键，奇妙的事情就发生了！**

```tex
\begin{figure}[htbp]
\centering

\subfigure[pic1.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig1}
\end{minipage}%
}%
\subfigure[pic2.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}%
}%
                 %这个回车键很重要 \quad也可以
\subfigure[pic3.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%
\subfigure[pic4.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%

\centering
\caption{ pics}
\end{figure}
```

然后效果图如下：

![](https://img-blog.csdn.net/20180601094259657?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

这样就达到了我的效果，既能将图片分成四个小图片，也能对四个小图片分别进行描述。

为什么打回车就能隔开了呢？因为文档 (下面那个链接) 里面说：One such is the spacing between figures. By default, the methods described below leave little or no space between two sub-figures. Therefore, horizontal space needs to be added manually (if required) using, e.g., the standard lengths \quad and \qquad or the \hspace command.

如果不用上述方式，用下面这种也能达到对应的效果。（PS：这种方式看起来简洁一些）

### M2：subfigure Simplified

```
\begin{figure}[htbp]
\centering
\subfigure[pic1.]{
\includegraphics[width=5.5cm]{111.eps}
%\caption{fig1}
}
\quad
\subfigure[pic2.]{
\includegraphics[width=5.5cm]{111.eps}
}
\quad
\subfigure[pic3.]{
\includegraphics[width=5.5cm]{111.eps}
}
\quad
\subfigure[pic4.]{
\includegraphics[width=5.5cm]{111.eps}
}
\caption{ pics}
\end{figure}
```

![](https://img-blog.csdn.net/20180601094608699?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2E2ODIyMzQy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

下面是一篇关于 latex 插入图片的文章，贴出来大家看一下：[点击打开链接](https://tug.org/TUGboat/tb34-1/tb106thurnherr.pdf)

另外，还有这么一种方法，大家也可以试一试：

```tex
\begin{figure}[htbp]
\centering
\subfigure[1]{
\begin{minipage}{4.5cm}
\centering
\includegraphics[width=6cm]{4a.eps}
\caption{World Map}
\end{minipage}%
}%
\subfigure[2]{
\begin{minipage}{7cm}
\centering
\includegraphics[width=6cm]{4b.eps}
\caption{Concrete and Constructions}
\end{minipage}
}
\subfigure[1]{
\begin{minipage}{4.5cm}
\centering
\includegraphics[width=6cm]{4a.eps}
\caption{World Map}
\end{minipage}%
}%
\subfigure[2]{
\begin{minipage}{7cm}
\centering
\includegraphics[width=6cm]{4b.eps}
\caption{Concrete and Constructions}
\end{minipage}
}
\caption{side by side figure}
\end{figure}
```

如不能正常并排排列，可以尝试改一下 width 参数。

---

来自评论区的小伙伴 @不染。的回复：po 主的代码很有用，解决了我的问题，不过现在通行的主要是 subfig 宏包代替 subfigure，而且使用 subfig 宏包注意把 po 主代码中的 \ subfigure 改成 \ subfloat.

大家也可以试试这种方法哈，感谢不染。

### M3：推荐方法
```tex

\begin{figure}[htbp]
\centering

\subfigure[pic1.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig1}
\end{minipage}%
}%
\hspace{10pt}
\subfigure[pic2.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}%
}%
\vspace{5pt}                 %这个回车键很重要 \quad也可以
\subfigure[pic3.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%
\hspace{10pt}
\subfigure[pic4.]{
\begin{minipage}[t]{0.25\linewidth}
\centering
\includegraphics[width=1in]{111.eps}
%\caption{fig2}
\end{minipage}
}%

\centering
\caption{ pics}
\end{figure}
```

## 参考

- [(14条消息) Latex中插入多张图片，实现并排排列或者多行多列排列_a6822342的博客-CSDN博客_latex图片并排放置](https://blog.csdn.net/a6822342/article/details/80533135)

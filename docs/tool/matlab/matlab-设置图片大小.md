---
date: 2022-10-11
tag:
  - default
category:
  - tool
  - matlab
---

# matlab 设置图片大小

## 定义

需要使用 matlab 控制图片大小，参考下面代码

## 方案

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [zhuanlan.zhihu.com](https://zhuanlan.zhihu.com/p/446968474)

MATLAB 中使用 plot 绘图后，可以手动调整大小，也可以在导出设置中，设置图片大小。但每个图都手动设置比较繁琐。采用代码设置更易于维护。

gcf 返回当前 Figure 对象的句柄值；

gca 返回当前 Axes 对象的句柄值；

gco 返回当前鼠标单击的句柄值，该对象可以是除 root 对象外的任意图形对象，并且 Matlab 会把当前图形对象的句柄值存放在 Figure CurrentObject 属性中。

### 设置 Figure 在整个电脑屏幕中的 位置及大小

```
set(gcf, 'unit', 'centimeters', 'position', [10 5 21 15]);
```

单位为厘米，大小为 21cm×15cm，图形起点坐标为（10cm，5cm），表示左下点离显示器左侧边界 10cm，离下侧边界 5cm。

或者

```
set(gcf, 'Position', [100 100 260 220]); 
```

参数 260 就对应的是图的长是 7cm。7cm，也就是 word 半个页面的大小，不需要到 word 里再调整大小。

也可以考虑长高比设置为 1:0.618，黄金分割比。

### 设置 Axis 在 Figture 中的边距、大小：

::: note note
这里直接使用 `tsubplot`即可
:::



```
set(gca,'Position', [.13 .17 .80 .74]);
```

设置坐标轴 距离画板（图形窗口 Figure）边距。

参数分别为 Axes 在 Figure 中 的左边界，下边界，宽度，高度。最小为 0，最大为 1（左边界，下边界为 0，上边界，右边界为 1。

这里的参数配合 Figure 大小 7cm，比较合适直接贴进 word 中。也可以自己调整。

或者

```
set(gca,'unit', 'centimeters', 'position', [10, 10, 6, 4]);

```

前两个值表示起始位置，后两个值表示大小。可自定义合适的大小。

如果设置了 axis off 命令，则不会显示坐标轴。

## 参考

##### 引文


##### 脚注

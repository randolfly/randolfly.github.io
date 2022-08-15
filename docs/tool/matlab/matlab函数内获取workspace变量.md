---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - matlab
---


# Matlab 函数内获取 Workspace 变量


## 定义

有时我们在编写函数的时候，希望从 workspace 获取一些变量的值，这样的话可以统一管理变量，有点类似于 global，这样程序比较好 debug

## 实现

只需要一句命令：

`xdata=evalin('base','x');`

这句话就是从 workspace 读取变量 x

下面是参考连接的原文：
- [evalin函数的运用](https://www.ilovematlab.cn/thread-238290-1-1.html)

首先在基本工作空间中产生 x 和 y 变量：

```matlab
x=0: pi/50:2*pi;
y=sin(x);
```

然后在函数 M 文件中调用这些数据来在界面上绘制曲线：

```matlab
function myfunc

hf=figure('units','normalized','name','evalinexample','position',[0.4 0.3 0.4 0.3]);

haxes=axes('parent',hf,'units','normalized','position',[0.10.1 0.8 0.8]);

%取得基本工作空间中的变量的值，保存到xdata和ydata中

xdata=evalin('base','x');

ydata=evalin('base','y');

% 在指定的坐标轴中绘图

axes(haxes);

plot(xdata,ydata);

assignin：将函数M文件中的变量的值传给指定的工作空间中的变量

assignin(ws, 'var', val);
```

将变量 val 的值赋给工作空间 ws 中的变量 var，如果变量 var 在工作空间中不存在，则创建该变量。

例如：

在上述 myfunc 函数的末尾添加如下语句，即可以在基本工作空间中产生新的变量 valueX 和 valueY，并把函数中的 xdata 和 ydata 变量的值赋给 valueX 和 valueY：

复制内容到剪贴板

代码:

`assignin('base','valueX',xdata);`
`assignin('base','valueY',ydata);`

## 参考

##### 引文

- [evalin函数的运用](https://www.ilovematlab.cn/thread-238290-1-1.html)

##### 脚注

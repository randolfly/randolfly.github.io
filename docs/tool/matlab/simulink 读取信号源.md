---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - matlab
---


# Simulink 读取信号源


## 定义

有时需要使用 simulink 读取 matlab workspace 中的信号数据进行测试，这是需要按照采样频率读取信号数据，这里有 2 中实现方式：

### S Function 实现



这没啥好说的，使用万能的 s function 读取数据就行

### Signal From Workspace

这个函数基于 **DSP System Toolbox**，可以将连续信号导入到 simulink 中

比如有这样一个信号：

```matlab
a = ([0:0.1:10;1:0.1:11])'
```

这里 a 是一个 101 x 2 的信号，可以如下导入信号：

![Pasted image 20211223215902.png](tool\matlab\assets\Pasted image 20211223215902.png)

**Signal From Workspace** 模块的配置为：

![Pasted image 20211223215946.png](tool\matlab\assets\Pasted image 20211223215946.png)

这表示按照 列顺序 (index=1) 读取 a 变量的数据，即一帧读取 2 列数据；Sample time 设置为 0.1 表示 0.1s 读一次数据，每一次读取 2 帧，因此最终信号每次读取 2x2=4 组信号。

其中结果为：

![Pasted image 20211223215916.png](tool\matlab\assets\Pasted image 20211223215916.png)

## 参考

- [Import signal from MATLAB workspace - Simulink](https://www.mathworks.com/help/releases/R2021a/dsp/ref/signalfromworkspace.html?s_tid=doc_srchtitle)

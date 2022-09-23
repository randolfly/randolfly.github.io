---
date: 2022-09-10
tag:
  - matlab
  - simulink
  - code
category:
  - tool
  - matlab
---

# 编程式运行simulink仿真


## 定义

我们期望可以使用编程式来运行 simulink 仿真，比如验证某个 simulink 程序计算结果是否满足期望条件，其 simulink 程序的输入条件是需要动态计算的

## 方案

使用 matlab 提供的 `sim` 函数进行编程式运行 simulink 仿真

### 简单方案

```matlab
simOut = sim('vdp')
```

直接一行命令即可运行

### 复杂方案

运行命令基本和 [简单方案](./#简单方案) 没有区别：

```matlab
simOut = sim('vdp','SimulationMode','normal',...
            'SaveState','on','StateSaveName','xout',...
            'SaveOutput','on','OutputSaveName','yout',...
            'SaveFormat', 'Dataset');
outputs = simOut. yout

x1 = (outputs.get('x1').Values);
```

如果模型具有输入，可以直接控制模型输入：

```matlab
% 打开模型
openExample('simulink/OpenTheModelExample');
open_system('ex_sldemo_househeat');
load_system('ex_sldemo_househeat')

mdl = 'sldemo_househeat';
in = Simulink.SimulationInput(mdl);
in = in.setBlockParameter('sldemo_househeat/Set Point','Value','300');
out = sim(in)
```

但如果希望控制和检查仿真的状态，可以使用下面代码：

```matlab
vdp
set_param(bdroot,'Solver','ode15s','StopTime','3000')
```

::: note note
打开一个模型，并设置 `Solver` 和 `StopTime` 参数。使用 `bdroot` 获取当前顶层模型。
如果有模型的话，可以直接输入模型
:::




## 参考

##### 引文

- [以编程方式运行仿真 - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/releases/R2022a/simulink/ug/using-the-sim-command.html)
- [Site Unreachable](https://www.mathworks.com/help/releases/R2022a/simulink/slref/set_param.html)
- [Site Unreachable](https://www.mathworks.com/help/releases/R2022a/simulink/slref/block-specific-parameters.html)
- [Site Unreachable](https://www.mathworks.com/help/releases/R2022a/simulink/slref/sim.html)

##### 脚注

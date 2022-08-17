---
date: 2022-06-06
tag:
  - tool
  - matlab
  - code
  - params
category:
  - tool
  - matlab
---

# matlab 函数默认参数

# Matlab 函数默认参数


## 需求

设计一个 y = kx + b 的函数，输入 k, x, b，返回 y ; 其中，k 默认取 1 （未被赋值时），x 和 b 取任意值。

## 实现

```matlab
function out = my_test(x,b,varargin)
    p = inputParser;            % 函数的输入解析器
    addParameter(p,'k',1);      % 设置变量名和默认参数
    parse(p,varargin{:});       % 对输入变量进行解析，如果检测到前面的变量被赋值，则更新变量取值
    out = p.Results.k*x + b;    % 在这里定义你自己的函数计算公式
end

```

测试：

```matlab
>> my_test(3,5)

ans =

     8

>> my_test(3,5,'k',2)

ans =

    11

```

## 总结

* 首先，使用 varargin （var-arg-in, 输入变量列表）用来接收任意个数的输入变量。
* 然后，构造 inputParser 输入解析器，通过 addParameter 向其中定义变量和默认取值。
* 再通过 parse 对输入变量列表 varargin 进行解析，当检测到前面定义的变量在 varargin 中被重新赋值时，则更新该变量。
* 最后，按照 p.Results.k 这样的形式，对变量进行引用，参与到自己定义的计算中，剩下的就跟普通函数的做法无异了。
* 调用函数时，若想重新为默认变量赋值，则按照 'k',2 （即 Name1,Value1,...,NameN,ValueN 这种字符串和数值组合形式）赋值即可。其实 Matlab 里的很多函数都采用到了这种形式，回忆下是不是这样？比如 plot 的曲线颜色、粗细等参数的设置。
* 值得一提的是，这种字符串和数值的输入变量赋值方式，可以不讲究顺序，所以非常方便！

## 参考

* [https://ww2.mathworks.cn/help/matlab/ref/inputparser.html](https://ww2.mathworks.cn/help/matlab/ref/inputparser.html)
* [https://ww2.mathworks.cn/help/matlab/ref/inputparser.addparameter.html](https://ww2.mathworks.cn/help/matlab/ref/inputparser.addparameter.html)
* [Matlab如何设置函数默认参数值 - GShang - 博客园 (cnblogs.com)](https://www.cnblogs.com/gshang/p/14532104.html)

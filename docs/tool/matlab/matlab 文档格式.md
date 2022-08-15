---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - matlab
---


# Matlab 文档格式

## 1 命名规则

### 1.1 变量

* 变量名使用下划线分割，小写字母开头
* 变量命名一般名词在前，动词在后，主题原则：==属性由大到小，修饰属性的放后面==
* 大范围使用的变量一定要有有意义的变量名，小范围使用的变量可以用短名称
* 通常短名称里面：i,j,k,m,n 代表整数，x,y,z 代表小数
* 代表某个对象的数量的变量：files_num, segments_num
* 变量要么全是单数，或者全是复数，避免用例如 point 和 points 代表两个不同的变量
* 表示某个对象编号时，可以采用这种命名方法：以 index 为后缀（table_index, employee_index）

```matlab
for file_index = 1:files_num
    ...... 
end

```

* 采用布尔变量时，尽量使 bool 变量为真时继续执行，例如我们要判断一个文件是否找到，我们应该定义 bool 变量：is_found，而不是 is_not_found。我们只需要判断 if is_found，而不是去判断 if ~is_not_found。

### 1.2 常量

* 常量，以及全局变量应该全部字母大写，并且用下划线分隔单词
* 当要定义一组类似的常量的时候，他们的前缀可以是相同的，例如要定义一组颜色的常量：`COLOR_RED, COLOR_GREEN, COLOR_BLUE`

### 1.3 结构体

* 结构体的名字应以大写字母开头
* 结构体的名字不需要包含在内部的变量名中：例如，要写成 `Segment.length`，而不是 `Segment.segmentLength`

### 1.4 函数

* 函数名要反映其功能
* 函数名应该通通小写，名词中间可以用下划线分隔开
* 函数名一定要清晰，有意义，例如，要写成 `compute_total_width()`，而不是 `compwid()`
* 如果只有一个输出的话，可以以输出量作为函数名字，例如：`mean()`
* 没有输出，或者只返回句柄的函数，应该以它具体做什么来命名，例如：`plot()`
* 以 get/set 做前缀，表示用来操作对象或者其属性的函数，例如：`get_obj(.); set_appdata(.)`
* 以 compute 做前缀，表示用于计算某个变量的函数，表示计算复杂程度很高，例如：`comput_weighted_average(); compute_spread()`
* 以 find 做前缀，表示查找某个元素，某一项的函数，例如：`find_oldest_record(.); find_heaviest_element(.);`
* 以 initialize 做前缀，表示构建某个对象的函数，例如：`initialize_problemstate(.);`
* 以 is 做前缀，表示布尔函数，另外还可以采用类似的：has,can,should 做前缀。例如：`is_overpriced(.); is_complete(.) ;has_license(.); can_evaluate(.); should_sort(.);`
* 更多类似的前缀：

```
get/set, add/remove, create/destroy, start/stop, insert/delete,
increment/decrement, old/new, begin/end, first/last, up/down, min/max,
next/previous, old/new, open/close, show/hide, suspend/resume, etc.

```

### 1.5 General

* 有时可以考虑在变量名中加入单位，以免引起混淆，例如弧度，incident_angle_radians
* 除了一些缩写很常见的单词以外，需使用完整单词以避免混淆
* 所有的命名要以英语进行，而不是其他语言

## 2 文件和组织方式（Files And Organization ）

### 2.1 M 文件

* 模块化，尽可能把大的程序抽象为一个个函数，以便于复用
* 让交互更清晰，尽可能避免过长的参数列表，或者过多的全局变量
* 尽可能用已有的函数，不要重复造轮子，不妨在实现一个功能前，多查阅一下文档
* 在不同文件中反复出现的代码，应该包装入一个函数
* 当一个函数仅在一个文件中出现，那么它应该作为子函数，写在同一个文件中
* 为每一个函数都编写一个测试脚本，这是最好的提高代码质量的办法

### 2.2 Class 文件

- 对于一个很具体的系统，可以考虑使用 Class 实现代码组织

## 3 表述（Statements）

### 3.1 变量和常量

* 为了保证可读性，所有的变量都不应该被复用（不能有两个用途，除非是内存不够）
* 相同类型或相关的变量应该一同声明，不相关的变量则不应该一同声明。例如：`persistent x, y, z； global REVENUE_JANUARY, REVENUE_FEBRUARY`
* 在文件开头的注释中说明重要的变量，例如：`% pointArray Points are in rows with coordinates in columns`.
* 在常量定义的末尾，通过注释说明其含义，用法或约束，例如：`THRESHOLD = 10; % Maximum noise level found by experiment.`

### 3.2 全局变量和常量

* 相比于全局变量，参数传递更有利于代码的清晰和可维护性。我们可以通过使用 persistent 或者 get***data 的方式来避免过多的使用全局变量。
* 减少使用全局常量，如有必要，可以通过将所有全局常量定义在一个 m 文件中，或者存在. mat 文件中

### 3.3 循环语句

* 循环变量应在循环前就完成初始化，例如：

```matlab
result = zeros(nEntries,1);
for index = 1:nEntries
   result(index) = foo(index);
end

```

* 尽量减少使用 break 和 continue，因为这不利于可读性
* 循环的最后一行可以添加注释，用于说明循环到此为止，并且说明循环中执行了哪些任务

### 3.3 条件语句

* 避免复杂的条件表达式，如有必要，可以引入临时的逻辑变量代替
* 通常情况下会执行的语句存放在 if 下，而异常情况则存放在 else 部分
* 一般不用使用 if 0 这样的表达，偶尔用来注释代码倒是也可以接受
* switch 语句中，需要包括 otherwise 这一项
* switch 变量最好是字符串

### 3.4 General

* 不要写密码（看不懂的东西）
* 多写括号
* 表达式中不要出现太多数字，并且某些经常需要进行修改的数字，应该定义为常量
* 避免出现 `THRESHOLD = .5`，而应该写成 `THRESHOLD = 0.5`

## 4 排版，注释和文档（Layout, Comments and Documentation）

### 4.1 排版

* 缩进有利于展示代码结构
* 内容要保持在前 80 列里
* 换行的位置要恰当，例如标点符号处，空格处，操作符处，并且新行的开头要与之前的表达式对齐：

```
totalSum = a + b + c + …
           d + e;
function (param1, param2,…
          param3)
setText ([‘Long line split’ …
         ‘into two parts.’]);

```

* 缩进大约为 3 个或者 4 个空格
* 一般来说，一行代码只应包括一行可执行语句

### 4.2 空格

* 在 =,& 和 | 的左右需要插入空格，例如：`simpleSum = firstTerm+secondTerm;`
* 在常用的操作符左右最好插入空格，但这是由争议的，例如：`simpleAverage = (firstTerm + secondTerm) / two;`
* 逗号后面加空格，例如：`foo(alpha, beta, gamma)`
* 代码块中间要用几个空行进行分隔，一般是用三行。也可以使用： %**_**_***，或者 %----

### 4.3 注释

* 经验表明，最好是在编写代码的同时，添加注释，而不是写完以后再加
* 注释要和代码一致，否则会误导读者。而又不能只是复述代码，注释要说明的是 how 和 why，而不是 what
* % 后面可以跟一个空格，注释的第一个字母可以大写
* 函数头的注释要便于对函数进行查找，以及说明函数用法
* 函数头的注释要说明对输入参数的具体要求，例如：

```
% ejectionFraction must be between 0 and 1, not a percentage.
% elapsedTimeSeconds must be one dimensional.

```

* 所有的注释要用英语书写

### 4.4 文档

* 差的文档也比没有文档要好
* 文档需要包括的内容有，运行的需求，功能，函数接口，测试方法等
* 最好是在写代码之前就先完成文档框架的搭建
* 使用专业的版本控制工具

## 5 函数头注释规范

参考博客：[matlab 函数规范](matlab%20函数规范.md)

通常，函数文件由函数声明行、H1 行、在线帮助文本区、编写和修改记录、函数主体等几个部分组成。格式如下：

> function 输出形参表 = 函数名 (输入形参表) 在线帮助文本区，其中第一行为 H1 行 编写和修改记录 函数主体

* H1 行是紧随函数声明行之后的以 “%” 开头的第一注释行。H1 行包括大写的函数名和函数功能简要描述，采用 lookfor 命令可在命令行窗口显示 H1 行的信息。建议在编写 H1 注释行时，尽量采用英文表述，这是为了之后的使用过程中关键词检索的方便。
* 在线帮助文本区是包括 H1 行以及 H1 行之后的连续的以 “%” 开头的注释行。通常包括函数输入变量和输出变量的含义以及调用说明。采用 help 命令可在命令行窗口显示在线帮助文本区的信息。
* 编写和修改记录与在线帮助文本区以一个空行相隔。该行以 “%” 开头，记录了编写及修改函数文件的作者、日期、版本等内容，以方便后来的使用查询或修改。
* 函数主体应与编写和修改记录以一个空行相隔。这部分内容包括了所有实现该函数文件功能的 MATLAB 指令。

如下是一个实例：

```matlab
function obj = Modified_ESN(u_seq, target_seq, varargin)
            %%
            % description:
            % param {nxl list{float}} u_seq: n次输入序列，每个形状为 1xl，默认n为train_length=100
            % param {nxk list{float}} target_seq: n次目标序列，每个形状为 1xk，默认n为train_length=100
            % param {*} varargin: 任意满足'name', value 形式的matlab参数
            % return {*}
            %%

            % 默认参数设置
            p = inputParser;
            addparameter(p, 'train_length', 100);
            addparameter(p, 'predict_length', 100);
            addparameter(p, 'washout_length', 10);
            addparameter(p, 'a', 0.5);
            addparameter(p, 'eta', 1.2);
            addparameter(p, 'res_size', 10);

            parse(p, varargin{:});

            obj.u_seq = u_seq;
            obj.target_seq = target_seq;
            obj.train_length = p.Results.train_length;
            obj.predict_length = p.Results.predict_length;
            obj.washout_length = p.Results.washout_length;
            obj.a = p.Results.a;
            obj.eta = p.Results.eta * 0.11; % 0.11 为经验的常数，试出来的
            obj.res_size = p.Results.res_size;

            % initialize esn params
            u_size = size(obj.u_seq);
            y_size = size(obj.target_seq);
            obj.input_size = u_size(2);
            obj.output_size = y_size(2);

            obj.Win = rand(obj.res_size, obj.input_size) - 0.5;
            obj.W = rand(obj.res_size, obj.res_size) - 0.5;
            obj.W = obj.W .* (obj.eta);

            disp('initialized ESN successfully!');
        end
```

## 参考文献

- Richard Johnson. MATLAB Programming Style Guidelines. 2002
- [科研小技巧——MATLAB的编码规范 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/150926389)

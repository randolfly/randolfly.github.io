---
date: 2022-06-06
tag:
  - tool
  - matlab
  - class
category:
  - tool
  - matlab
---

# matlab Class

# Matlab Class


## 定义

类的基本目的是定义封装数据的对象以及对该数据执行的操作，更本质上来看，类的目的是为了广播数据存在的。

下面是 matlab 一个简单的类定义，`BasicClass` 定义一个属性和对该属性中的数据执行操作的两个方法：

- `Value` - 此属性包含存储在类对象中的数值数据
- `roundOff` - 此方法将属性值舍入到两位小数
- `multiplyBy` - 此方法将属性值乘以指定数值

```matlab
classdef BasicClass
   properties
      Value {mustBeNumeric}
   end
   methods
      function r = roundOff(obj)
         r = round([obj.Value],2);
      end
      function r = multiplyBy(obj,n)
         r = [obj.Value] * n;
      end
   end
end
```

## 细节

**classdef**

用于定义 matlab 类的关键字

- `classdef ClassName` 开始类定义，`end` 关键字终止 `classdef` 块
- `classdef ClassName < SuperclassName1 & SuperclassName2 ...` 开始类定义并指定一个或多个超类
- `classdef (AttributeName1 = attributevalue, AttributeName2 = attributevalue, ...) ClassName` 开始类定义并指定可选的类属性
- 类文件夹名称以 `'@'` 字符开始，后跟类名称（例如 `@MyClass`）

**properties**

`properties` 开始属性定义块，`end` 关键字终止 `properties` 块。

- 属性不能与类具有相同的名称

**methods**

`methods` 开始方法定义块，`end` 关键字终止 `methods` 块。

**events**

`events` 开始事件定义块，`end` 关键字终止 `events` 块。此块包含类定义的事件名称。类定义可以包含多个事件块，每个块指定不同的属性设置，这些设置适用于该特定块中的事件。

**enumeration**

`enumeration` 开始枚举定义块，`end` 关键字终止 `enumeration` 块。

## 注意

### Handle 类和 Value 类

matlab class 默认继承于 Value 类，有时需要继承 Handle 类。

Value 类比较简单，其行为和普通的 Matlab 变量和 Struct 基本一致，一般用来定义==数据结构==。如果我们希望每次对对象的拷贝，得到的都是一个独立的对象，可以使用 Value 类。

Handle 类实际是一个访问实际数据的“指针”，从实用计算的角度来说，如果我们的数据体积比较大，我们希望这些数据在各个方法，函数之间的传递迅捷，不需要被局部拷贝的话，可以用 Handle 类来包装数据。MATLAB 的 Handle Graphics 是 MATLAB 中最大的一个 Handle 类的例子，图形的对象的体积比较大，把它们设计成句柄类，通过它们的句柄对它们进行控制。

此外，有一些实现的细节：

Value 类将拷贝视作新的对象，因此在不同 context 下，不能直接修改对象的值实现 context 的值传递。也就是说，除了类的构造函数，不能在函数中修改对象的属性，因为这并不会影响对象的值，这实际上改变的是==拷贝==。比如下面例子：

```matlab
classdef Modified_ESN

    properties
		...
        Wout % state->output matrix
    methods
    	function train_esn(obj)
    		...
    		obj.Wout = Yt * X_T / (X * X_T + obj.reg * eye(obj.res_size));
    	end
```

实际上并不会起效。应该为如下形式:

```matlab
classdef Modified_ESN<handle

    properties
		...
        Wout % state->output matrix
    methods
    	function train_esn(obj)
    		...
    		obj.Wout = Yt * X_T / (X * X_T + obj.reg * eye(obj.res_size));
    	end
```

参考 [Handle 类和Value 类的区别 – MATLAB 中文论坛 (ilovematlab.cn)](https://www.ilovematlab.cn/thread-223524-1-1.html#:~:text= Handle 类对象提供的是对实际数据的一个访问渠道，从实用计算的角度来说，如果我们的数据体积比较大，我们希望这些数据在各个方法，函数之间的传递迅捷，不需要被局部拷贝的话，可以用Handle 类来包装数据。 MATLAB,的Handle Graphics 是MATLAB 中最大的一个Handle 类的例子，图形的对象的体积比较大，把它们设计成句柄类，通过它们的句柄对它们进行控制。)


## 实例

可以参考我自己完成的一个比较基本的 class：

[Modified_ESN](.//)

## 参考

- [Create a Simple Class - MATLAB & Simulink (mathworks.com)](https://www.mathworks.com/help/releases/R2021a/matlab/matlab_oop/create-a-simple-class.html)
- [Class definition keywords - MATLAB classdef (mathworks.com)](https://www.mathworks.com/help/releases/R2021a/matlab/ref/classdef.html)
- [Subclass Definition - MATLAB & Simulink (mathworks.com)](https://www.mathworks.com/help/releases/R2021a/matlab/subclass-definition.html)
- [Subclass Syntax - MATLAB & Simulink (mathworks.com)](https://www.mathworks.com/help/releases/R2021a/matlab/matlab_oop/subclass-syntax.html)
- [Class Attributes - MATLAB & Simulink (mathworks.com)](https://www.mathworks.com/help/releases/R2021a/matlab/matlab_oop/class-attributes.html)
- [Handle 类和 Value 类的区别 – MATLAB 中文论坛 (ilovematlab.cn)](https://www.ilovematlab.cn/thread-223524-1-1.html#:~:text= Handle 类对象提供的是对实际数据的一个访问渠道，从实用计算的角度来说，如果我们的数据体积比较大，我们希望这些数据在各个方法，函数之间的传递迅捷，不需要被局部拷贝的话，可以用 Handle 类来包装数据。 MATLAB,的 Handle Graphics 是 MATLAB 中最大的一个 Handle 类的例子，图形的对象的体积比较大，把它们设计成句柄类，通过它们的句柄对它们进行控制。)

---
date: 2022-08-13
tag:
  - lambda
  - code
  - theory
category:
  - skill
  - other
---

# lambda 演算

# Lambda 演算

::: note note
collapse: open
title: Note
理解lambda演算重点在于在函数空间建立运算系统，使用函数空间思路理解计算
:::


作为一名有追求的程序员，对于 [计算机基础](https://coding.imooc.com/?c=algorithm) 的理论一定要有所了解。最近几年，随着分布式、云计算等技术的发展，函数式编程语言也趋于流行。如果要学习函数式编程，一定要深入理解它背后的理论知识。从收益的角度上讲，这些基础理论知识几十年不变，是十分值得花时间进行学习的。lambda 演算 (Lambda Calcus) 就属于这样一套理论，可以说它在函数式编程领域就如牛顿万有引力定律一样基础。接下来这篇文章我将主要介绍 lambda 演算的基本知识，最后我还会用尝试用 es6 的箭头函数来演示如何利用 lambda 演算来实现编程语言中的基本组成要素。

要了解一个事物，先了解它的历史一定是重中之重。lamda 表达式最初是由一个美国普林斯顿大学的数学家 Alonzo Church 在 1932 年所发明的。他也是 " 计算机科学之父 "——图灵的博士生导师。

我们都知道现代的计算机基本上都是基于图灵机的。在图灵机中，所有的计算过程其实都是基于状态的，这也是为什么我们平常写代码要声明并使用变量的原因：**变量主要作用就是用来存储状态**。而 Alonzo Church 所提出的 lamda 演算 (lamda calcus) 模型实际上是基于函数的。图灵机模型和 Lambda 演算模型虽然是两种不同的理论模型，但它们实际上是等价的，这也意味着，任何基于图灵机的计算机程序都能等价地翻译成基于 lambda 演算模型的程序。

lambda 演算是一套研究函数定义、函数应用和递归的形式系统。它基本的组成部分就是三种表达式: 1. 函数定义 2. 标识符引用 3. 函数应用。

那么到底什么是 lamda 表达式呢，它又是由哪些基本组成要素构成的呢？我们都知道在函数式编程语言里面，最基本的组成单位就是函数。lambda 表达式从定义上来讲可以看做是一个匿名的纯函数。ES6 中引入了箭头函数，它的本质实际上就是我们这里所说的 lambda 表达式:

```
const lambda = x => x + 1;
```

实际上现在大部分的编程语言都引入了 lambda 表达式这一特性，如 Java, c# 和 es6 等。我们通常将 lambda 表达式，看作是一个黑盒，只关心它的输入和输出。由于没有内部状态，用函数式编程的思想写代码就与用命令式语言写代码截然不同。作为一个纯函数，每一次运行定义好的 lambda 表达式的时候，结果都应该是一致的。

在纯粹的 lambda 演算中实际上是没有任何内置的数据结构和逻辑控制语句的，但是我们可以使用函数来建构整个编程语言的所有要素。

lambda 演算中的一些基本规则，可以类比到我们比较熟悉的 ES6 语法:

<table><thead><tr><th></th><th>lambda 表达式</th><th>ES6 箭头函数</th></tr></thead><tbody><tr><td>定义函数</td><td>λx.x</td><td>x =&gt; x</td></tr><tr><td>柯里化 curry</td><td>λx. λy.x+y</td><td>x =&gt; y =&gt; x + y</td></tr><tr><td>应用 application</td><td>(λx. λy.x+y) 5 1</td><td>(x =&gt; y =&gt; x + y) (5) (1)</td></tr></tbody></table>

在实现具体的逻辑之前，我们需要明确的一点是：在 lambda 演算中，lambda 表达式本身既可以是操作数也可以是函数，就好像一只鸡 (lambda 表达式），既可以吃虫子（另一个 lambda 表达式)，也可以被狐狸 (还有一个 lambda 表达式) 吃（请原谅我这糟糕的类比），它们统称为动物 (lambda 表达式）。归根结底就是，在这个封闭的概念世界里，只有一类事物，那就是 lambda 表达式 (函数)，我们可以利用这个最基础的概念生成其它的概念和运算逻辑。

在存粹的函数式编程世界里，没有 1,2,3 这样的数字也没有 ±*/ 这样的基本运算符，所以这些我们都需要自己手动去实现。

数字
--

首先作为一门计算机设计语言，数字是关键，所谓” 数是万物本源 “在计算机世界里简直就是真理。那么我们如何利用 lamda 表达式来表示数呢？在这里，我们采用函数调用次数来表示自然数，用这样的编码方式表示的自然数也叫 _ 邱奇数 _。

有了理论的指导，我们很容易就能写出下面的代码：

```
const ZERO = f => x => x;
const ONE = f => x => f(x);
const TWO = f => x => f(f(x));
...
```

有了数字后，然后还需要再定义一个转换函数，它可以将 `ZERO` 和 `ONE` 这种函数式定义转成我们所熟悉的数字，方便调试。

```
const toNumber = n => n(i => i+1)(0);
console.log(toNumber(ONE));
// 1
```

计算
--

经过上面的步骤，我们就定义的最基本的数字。有了这些数字，我们应该如何去做一些简单的加减乘除运算呢？既然数字表示的是调用函数次数的多少，那么在这里对于加法运算，我们也可以将它定义成调用函数的次数的相加。例如，要表示 1+2 等于 3 这一过程，输入的函数就应该调用三次。

```
const add = n => m => fn => x => m(fn)(n(fn)(x));

const TWO = add(ONE)(ONE);
const THREE = add(ONE)(TWO);
toNumber(THREE);
// 3
```

其中 n 和 m 表示 add 操作的两个操作数。

接着我们再来实现乘法，回顾一下大家小时候学习乘法的过程。`n * m` 的一个朴素定义可以表示成： n 个 m 相加。那么在这里，我们需要实现的就是先调用 n 次函数，将它的结果再调用 m 次。表示到代码中就像这样:

```
const multiply = n => m => fn => x => m(n(fn))(x);

const result = toNumber(multiply(TWO)(THREE));
console.log(result);
// 6
```

至于减法和除法，实现起来相对来说比较复杂，大家如果感兴趣的话，可以参考其他的资料进行学习。

控制语句
----

接下来我们再进一步考虑一下如何实现条件分支语句。条件分支语句中一个很重要的元素就是布尔值，先来定义 TRUE 和 FALSE 这两个基本的布尔值类型:

```
const TRUE = first => second => first;
const FALSE = first => second => second;
```

它表示的是从两个事物中选择其中一个事物，TRUE 表示选择的第一个，而 FALSE 与之相反，选择的是第二个。

定义好基本的布尔值类型，再实现条件分支语句就很简单了：

```
const ifElse = boolFn => first => second => boolFn(first)(second);
// ifElse(TRUE)(x)(y) ===> x
// ifElse(FALSE)(x)(y) ===> y
```

再增加一个转换函数：

```
const toBoolean = boolFn => boolFn(true)(false);

console.log(toBoolean(TRUE));
// true
```

大功告成，Bingo!

逻辑
--

利用上述定义的布尔值，推导出三大逻辑运算：与（and)、或（or)、非（not) 就顺理成章了。反转逻辑最简单，只要将上面定义条件分支语句的逻辑反过来就可以了。这与布尔值的定义也是强联系，如果说 TRUE 表示的是选择第一个分支条件，那么 not 就要反转这种逻辑:

```
const not = boolFn => first => second => boolFn(second)(first);
toBoolean(not(TRUE));
// false
```

至于或运算符，实质上应该是个带有两个操作数的运算，所以我们需要定义个高阶函数，需要调用两次，每次接收一个操作数。根据之前的定义，我们知道 TRUE 会返回第一个变量，FALSE 会返回第二个变量。而或运算 (or) 的意思是只要两个操作数中有一个 TRUE，就返回 TRUE。那么我们只要使变量应用的顺序和调用顺序一致，就能保证当 TRUE 作为第一个参数时，正好应用到 TRUE 函数上, 当 FALSE 作为第一个参数时，函数返回第二个参数的值。

```
const or = first => second => first(first)(second);
toBoolean(or(TRUE)(FALSE)); // true
toBoolean(or(FALSE)(FALSE)); // false
toBoolean(or(TRUE)(FALSE)) // true
```

与操作与或操作相似，我们要保证当两个操作数都是 TRUE 的时候才会返回 TRUE。将上面的实现逻辑反转一下，就能得到下面的代码：

```
const and = first => second => first(second)(first);
toBoolean(and(FALSE)(FALSE)); // false
toBoolean(and(FALSE)(TRUE)); // false
toBoolean(and(TRUE)(TRUE)); // true
```

这块逻辑可能比较绕，大家可以用心体会一下。

递归 (Y 组合子)
----------

我们先从一个最简单的递归定义说起，下面这个故事想必大家都有听说过:

> 从前有座山，山里有座庙，庙里有个老和尚和小和尚，有一天老和尚对小和尚讲故事，讲的什么故事呢？从前有座山，山里有座庙，庙里有个老和尚和小和尚…

这样一个不停的引用自身的概念，其实就是递归的简单定义。

有了递归的定义后，我们再来深入思考一下，如何用 lambda 表达式来实现递归的基本逻辑。

这里我举一个简单的斐波那契数列的例子 (1, 2, 6, 24…)，如果语言中已经支持递归，很容易可以写出这样的代码：

```
const factrial => n => n == 0 ? 1 : n * factrial(n - 1);
```

这里有一个问题，如果语言中不支持递归，那么在 lambda 表达式中，我们并不能直接利用 factorial 这个名字来引用其自身。

既然不能在函数声明里面使用未定义的函数名，那么我们可以将这个函数定义以参数的形式传进去：

```
const makeFactorial = factroial => n => n == 0 ? 1 : n * factroial(n - 1);
```

有了一个 makeFactorial 后，怎么使用呢? 假设，现在已经有了一个 seed 函数：

它其实啥都没干，不过我们可以利用 seed 函数生成 factorial0：

```
const seed = n => n;
```

很容易知道，factorial0 函数展开后是这样的:

```
const factorial0 = makeFactorial(seed)
```

我们知道这个函数在参数 n 等于 0 的时候结果是对的，而 n 等于其它数值的时候结果是 0，显然不正确。不过，别着急，我们可以利用 factorial0 进一步构造 factorial1：

```
const factorial0 = n => n == 0 ? 1 : n * (n => n)(n - 1);
```

它展开后:

```
const factorial1 = makeFactorial(factorial0)
```

这个函数在 n 等于 1 的时候结果等于 `1 * factorial0(0)`, 已知 n 等于 0 时候，factorial0 的结果是正确的，所以 factorial1 在 n 等于 0 和 n 等于 1 的时候也都能正常工作。

同样的原理，我们可以继续构造出 factorail2, factorial3, factorial4….

所以可以归纳出通用的 factorial 函数定义应该是长这个样子的：

```
const factorial1 = n => n == 0 ? 1 : n * factorial0(n - 1);
```

到这里，我们进一步思考🤔，有没有什么办法能让这个 makeFactorial 函数不停递归下去呢？

我们先定义一个基本循环函数:

这样当我用这个函数调用 makeFactorial 的时候，就会调用 makeFactorial(makeFactorial)，不过这样的定义好像缺少动力。要让它不停循环下去，我们可以让它再自身调用一次：

```
const factorialn = makeFactorial(makeFactorial(...)); // 无穷个makeFactorial
```

可以看到当你将 `x = x => x(x)` 代入到 `loop` 函数后，展开结果如下:

```
const loop = x => x(x);
```

是不是又回到之前的定义了？

不过这样一个函数在 javascript 中使用是不行的，因为在 javascript 中参数是计算完后再传入到函数中去的，所以我们要延迟参数的计算， 将代码改成如下:

```
const loop = (x => x(x))(x => x(x))
```

引入参数 y 后，只有最终展开到最后一层的时候，才会开始计算值，这也是延迟计算的思想。

有了这个 loop 函数后，我们最终的 factorial 函数就很容易构造了：

```
const loop = (x => x(x))(x => x(x))
```

我们在控制台试一下效果:

实际上上面定义的那个 `loop` 函数，它就叫做 **Y 组合子（Y combinator)**。这也是在 lambda 演算中非常著名的一个概念，它是在不支持递归的编程语言中实现递归的关键，也是学习 lambda 演算理论的一个难点。要彻底理解它可能还需要多花点时间思考。

至此，我们已经实现了数据，计算，逻辑和控制语句还有最重要的递归。这几个部分其实是编程语言中最核心的组成部分。从一个基本的组成元素——函数，再通过几个法则，就可以构建成整个计算机编程语言的核心要素，这就是 lambda 演算的神奇之处。

当然，整个 lambda 演算的理论要彻底理解肯定是不那么容易的，这篇文章也只是个人学习后的一些思路梳理，难免有所错漏。大家如果在阅读过程中，发现有不对的地方，欢迎交流指正。

## 参考

- [神奇的lambda表达式——函数式编程必学_慕课手记 (imooc.com)](https://www.imooc.com/article/details/id/291846#:~:text=lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BB%8E%E5%AE%9A%E4%B9%89%E4%B8%8A%E6%9D%A5%E8%AE%B2%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%81%9A%E6%98%AF%E4%B8%80%E4%B8%AA%E5%8C%BF%E5%90%8D%E7%9A%84%E7%BA%AF%E5%87%BD%E6%95%B0%E3%80%82%20ES6%E4%B8%AD%E5%BC%95%E5%85%A5%E4%BA%86%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%EF%BC%8C%E5%AE%83%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%AE%9E%E9%99%85%E4%B8%8A%E5%B0%B1%E6%98%AF%E6%88%91%E4%BB%AC%E8%BF%99%E9%87%8C%E6%89%80%E8%AF%B4%E7%9A%84lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F%3A%20const%20lambda%20%3D%20x,%3D%3E%20x%20%2B%201%3B%20%E5%AE%9E%E9%99%85%E4%B8%8A%E7%8E%B0%E5%9C%A8%E5%A4%A7%E9%83%A8%E5%88%86%E7%9A%84%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E9%83%BD%E5%BC%95%E5%85%A5%E4%BA%86lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%BF%99%E4%B8%80%E7%89%B9%E6%80%A7%EF%BC%8C%E5%A6%82Java%2C%20c%23%E5%92%8Ces6%E7%AD%89%E3%80%82)

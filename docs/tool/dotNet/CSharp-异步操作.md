---
date: 2022-08-16
tag:
  - CSharp
  - 异步
category:
  - skill
  - dotNet
---

# CSharp 异步操作

# CSharp 异步操作


## 定义

很多很多年前，有个叫 _DOS_ 的操作系统。

_DOS_ 通过一行一行命令运行程序。在同一时刻里，你只可能运行一个程序，这就是 **单进程系统**。

后来出现了 _Windows_，用户可以在系统中打开多个程序并使用它们。这就是 **多进程系统**。

**线程** 与 **进程** 的关系，就如同 **进程** 与 **系统** 的关系。一个 **系统** 可以存在多个 **进程** ，一个 **进程** 也可以存在多个 **线程** 。

今天的主题与 **多线程** 的原理关系不大，因此就不在其 **原理** 上进行更多的说明和解释了。

什么是单线程，什么是多线程
=============

还得记大约五、六年前，我去 _KFC_ 和 _McDonald's_ 就发现了一个有趣的区别。

在 _KFC_ 中，**收银** 与 **配餐** 是同一人。

顾客在点餐后，继续站在原地等待西餐，造成了 **KFC** 中常常能见到长长的队伍在排队。

在 _McDonald's_ ，这两件事是由两个不同的人负责的。

顾客在点餐完成后，带着号离开点餐的队伍，直接去等待配餐叫号。点餐的队伍人数比 _KFC_ 明显少了许多。

对比这两种模式，你会发现

* _KFC_ 的模式很容易积压一长排的顾客，让他们烦于等待而最终离开。
* _McDonald's_ 的模式不容易产生排长队的顾客，并且可以让顾客早早的进入叫号等餐环节。

我们把 **线程** 视作 **员工** ，把 **顾客** 视作 **任务**，于是这两个例子就可以非常形象的解释什么 **单线程** ，什么是 **多线程** 。

* _KFC_ 这种模式模式就是 **单线程** , 一个任务从头至尾由一 **线程** 完成，在一个任务完成之前，不接受第二个任务。
* _McDonald's_ 这种模式就是 **多线程** , 将一个任务拆分成不同的阶段（部分），并交给不同的 **线程** 分别处理。

什么是同步，什么是异步
===========

当你明白了 _KFC_ 和 _McDonald's_ 后，一切就很简单了。

**线程** 是 **员工**，**同步 / 异步** 就是顾客点餐的流程了。

* 顾客不能去一下洗手间，只能呆呆地站在那里等待配置的模式就是 **同步** 。
* 顾客支付以后，利用等待配置的时间去一下洗手间，找个座位的模式就是 **异步** 。

显而易见，**异步** 可以提供更高的效率，它可以利用 **等待** 的时间去完成一些事情。

在我们的代码中，一个 **顾客** 一边等待配置、一边做些别的事情，就是 **多线程** 了。

因此，**(单 / 多线程)** 与 **(同 / 异) 步** 是密不可分的两个概念。

实现异步
====

在正常情况下，我们写出来的代码都是 **同步** 的，上一行代码没做完就肯定不会执行第二行。

所以 **如何实现同步** 这个问题的答案与 **如何写一段代码** 是一样的。

那么，我们自然而然的就把目光放在了 **如何实现异步**，这一话题上了。

在 **.Net** 中，我们有几种 **异步** 的实现方案 :

* Thread
* BeginInvoke
* Task
* async / await

下面，我会介绍每种方案是如何实现的

Thread
------

首先，如上面所提到的，**异步** 的目标就是，先开始 **某个任务**，然后利用等待的时间去做点 **别的事情**。

很明显，这里有两个线程

* 一个负责 **某个任务**。
* 另一个负责 **别的事情**，并在完成 **别的事情** 后开始等待 **某个任务** 的完成。

利用这个思想，我们可以自己做一个异步的小例子了。

```c#
// 某个任务的结果
int resultOfSomeTask = 0;
Thread someTask = new Thread(new ThreadStart(() =>
{
    Thread.Sleep(1000);
    resultOfSomeTask = 100;
}));
someTask.Start();

DoSomething(1); // 做一些别的事情
DoSomething(2); // 做一些别的事情
DoSomething(3); // 做一些别的事情

// 每隔一会儿去看看 【某个任务】 是否完成了
while (true)
{
    if (someTask.ThreadState == ThreadState.Stopped)
        break;
    Thread.Sleep(1);
}

Assert.AreEqual(100, resultOfSomeTask);
```

**代码说明**

1. 我们利用 _Thread_ 创建一个线程，让它去完成 **某个任务**，我们模拟该任务需要 1 秒钟，并会产生一个 100 的结果
2. 使用 _Thread.Start_ 开始这个任务
3. 在 someTask 执行过程中，我们做作一些 **别的事情**
4. 利用一个轮询查看 _someTask_ 的状态，当完成后，我们发现已经得到了 100 这个结果。

上面例子中 _while(true)_ 部分，我们可以使用 _Thread.Join()_ 方法来代替以达到同样的效果。

```c#
// 某个任务的结果
int resultOfSomeTask = 0;
Thread someTask = new Thread(new ThreadStart(() =>
{
    Thread.Sleep(1000);
    resultOfSomeTask = 100;
}));
someTask.Start();

DoSomeThine(2); // 做一些别的事情
DoSomeThine(3); // 做一些别的事情
DoSomeThine(1); // 做一些别的事情

// 产生与 while(true) 同样的效果
// 当 someTask 完成后，才会继续进行
someTask.Join();

Assert.AreEqual(100, resultOfSomeTask);
```

这种异步的实现方式让开发者无法只关注在 **逻辑** 本身，代码中混入了大量的与线程有关的代码。

而且最不人性化的是，_Thread_ 要么没有参数，要么只给一个 _object_ 类型的参数，最草稿的是，它 **无法返回结果**，我们必须写一些额外的代码、逻辑去要主线程中得到子线程中的结果。

**题外话**

在实际生产环境中，我们往往使用 _ThreadPool_ 来开启线程。

毕竟每开一个线程，系统都会产生一相应的消耗来支持它。

_ThreadPool_ 可以开启有限个的线程，并对任务排队，仅当有线程空闲时，才会继续处理任务。

BeginInvoke
-----------

_BeginInvoke_ 是 _Delegate_ 上的一个成员，它与 _EndInvoke_ 一起使用可以实现异步操作。

* _BeginInvoke_ 相当于上面例子中 _Thread.Start()_ 的功能
* _EndInvoke_ 相当于上面例子中 _Thread.Join()_ 的功能

因为 _BeginInvoke_ 是 _Delegate_ 上的成员，所以我们先声明一个 _Delegate_

```c#
/// <summary>
/// 这是一个描述了一个使用整形并返回整形的委托类型。
/// 你可以使用直接使用 Func<int,int> 来作为委托的类型。
/// </summary>
/// <param ></param>
/// <returns></returns>
public delegate int TaskGetIntByInt(int i);
```

_BeginInvoke_ 的入参比较特别，它分为两个分部。

* 前面的几个参数，就是委托中定义的参数
* 后面两个参数，一个是异步任务完成时的回调，一个是可以向回调函数传入的额外参数，你可以传递任何你需要的内容至回调里，而避免了在进程内访问进程外成员的情况

下面是一个 _BeginInvoke_ 的例子

```c#
// 这是一个耗时1秒的任务，会返回入参的平方数
TaskGetIntByInt someTask = new TaskGetIntByInt(i =>
{
    Thread.Sleep(1000);
    return i * i;
});

// 定义一个函数，用于 someTask 完成时的回调
AsyncCallback callback = new AsyncCallback(ar =>
{
    string state = ar.AsyncState as string;
    Assert.AreEqual("Hello", state);
});

// 开始平方数运算的任务
// callback, "HelloWorld" 根据需求传入，你也可以传 null
IAsyncResult ar = someTask.BeginInvoke(10, callback, "HelloWorld");

// 开始一些别的任务
DoSomeThing(1);
DoSomeThing(2);
DoSomeThing(3);

// 等待 someTask 的运算结果，形如 Thread.Join()
int result = someTask.EndInvoke(ar);

Assert.AreEqual(100, result);
```

**代码说明**

**首先** 创建委托的实例，你可以使用其它类型上的成员来构造，也可以像示例中那样直接写一个内部方法。

**接下来** 使用 _BeginInvoke_ 开始异步调用。 **注意** 这里返回了一个 _IAsyncResult_ 类型。

你可以把这个 _IAsyncResult_ 理解为你在 _McDonald's_ 点好餐后的 **号** , 每个人的 **号** 都是不同的，每个顾客都可以用这个 **号** 领取你的美食。

在代码中，每次调用 _BeginInvoke_ 都会产生不同的 _IAsyncResult_，你可以用不同的 _IAsyncResult_ 去获取它们对应的结果。

_BeginInvoke_ 的时候，你还可以指定一个 **回调函数** ，还可以指定一个变量，供 **回调函数** 使用。

此时，_someTask_ 已经在子线程中运行了。同时，主线程继续执行了 3 个 _DoSomething()_ 方法。

当你需要 _someTask_ 的运行结果时，你只需要调用 **someTask.EndInvoke(IAsyncResult)** 。

* 当子线程已经完成后，调用 _EndInvoke_ 你可以立即得到结果。
* 当子线程尚未完成时，调用 _EndInvoke_ 会一直等待，等到子线程执行完成后，才可以得到结果。

**题外话**

若你的异步任务是一个耗时极长的任务，在主线程使用 _EndInvoke_ 会 **傻等** 很久。

此时，你可以将 _EndInvoke_ 方法在 _Callback_ 内执行。

将 _someTask_ 作为 **回调函数** 的参数传入，就可以在 **Callback** 内使用 _EndInvoke_ 得到结果。

```c#
TaskGetIntByInt someTask = new TaskGetIntByInt(i =>
{
    Thread.Sleep(3000);
    return i * i;
});

DoSomeThing(1);
DoSomeThing(2);
DoSomeThing(3);

AsyncCallback callback = new AsyncCallback(_ar =>
{
    // BeginInvoke 的最后一位参数可以通过 AsyncState 取得
    TaskGetIntByInt task = (TaskGetIntByInt)_ar.AsyncState;
    int result = task.EndInvoke(_ar);
    Assert.AreEqual(100, result);
});

IAsyncResult ar = someTask.BeginInvoke(10, callback, someTask);
```

对于一个 **异步** 任务的结果，我们往往有两种方法处理 :

* 在主线程中等待结果
* 在子线程中处理结果

对于一个耗时较短的任务，我们可以先利用 **异步** 将该任务放在子线程中执行。
再继续在主线程中处理其它任务，最后等待 **异步** 任务的完成。
这种方式就是 **在主线程中等待结果** 。

对于一个耗时较长的任务，如果在主线程中 **等待** 会有可能对终端用户带来不好的应用体验。

因此，我们不会在主线程中等待 **异步** 的完成。

我们在 **异步** 任务开启后，就可以早早通知用户 **你的任务正在处理中**。同时在子线程中，当任务完成后，你可以利用数据库等手段，将 **正在处理中的任务** 标为 **已完成**，并通知他们。

Task
----

从 **.Net4.0** 开始，_Task_ 成为了实现 **异步** 的主要利器。

_Task_ 的用法与 _JavaScript_ 中的 _Promise_ 非常接近。

_Task_ 表示一个 **异步** 任务。废话不多说，我们先写一个返回 _Task_ 的方法。

```c#
// Task<int> 表示这是一个返回 int 类型的 Task
private Task<int> AsyncPower(int i)
{
    // 返回一个任务
    // 使用 Task.Run 相当于先创建了一个 Task
    // 再 Start
    return Task<int>.Run(() =>
    {  
        // 该任务会耗时 1 秒钟
        Thread.Sleep(1000);
        // 1 秒钟后会返回参数的平方
        return i * i;
    });
}
```

与之前提到的相同，我们有两种方法处理这个 _Task_ 的结果 :

* 在主线程中等待结果
* 在子线程中处理结果

我们看看两种模式分别是如何实现的

在主线程中等待结果
---------

直接访问 _Task.Result_ 属性，就可以等待并得到 **异步** 任务的结果。

```c#
var task = AsyncPower(10);

// 这里会等 1 秒
int result = task.Result; 

// result = 100
```

> 怎么样 ? 是不是超级简单 ?

在子线程中处理结果
---------

使用方法 _ContinueWith_ 可以添加一个方法，在 _Task_ 完成后被执行。

这个 _ContinueWith_ 和 _JavaScript_ 里的 _Promise_ 的 _then_ 方法有着异曲同工的效果。

```c#
var task = AsyncPower(10);

task.ContinueWith(t => 
{
    int result = t.Result;
    // result = 100
});
```

> 怎么样 ? 是不是依然超级简单 ?

就像之前说的，_Task_ 用起来就像 _Promise_，_Promise_ 最大的特点就是可以用一步一步 _then_ 下去。

```c#
$.get("someurl")
    .then(rlt => foo(rlt))
    .then(rlt => bar(rlt));
```

_Task_ 的 _ContinueWith_ 也支持这样的编写方法 :

```c#
var task = AsyncPowe(10);
task.ContinueWith(t => 
{
    // some code here
}).ContinueWith(t => 
{
    // some code here
}).CondinueWith(t => {
    // some code here
});
```

async / await
-------------

这个 **.Net 4.5** 加入的关键字，让 **异步代码** 写起来和 **同步代码** 没什么区别了。

我们先看看下面的同步代码

```c#
int Power(int i)
{
    return i * i;
}

void Main()
{
    int result = Power(10);
    Console.WriteLine(result); // 100
    Console.ReadLine();
}
```

把上面的代码改成异步代码，只需要几个小小的改动 :

* 将 _Power_ 的返回值改为 _`Task<T>`_
* 修改返回结果，使用 _Task.Run_ 包装返回的结果
* 为调用 _Power_ 的代码前加上 _await_ 关键字
* 为有 _await_ 关键字的方法加上 _async_ 关键字

新的代码如下

```c#
Task<int> Power(int i)
{
    return Task<int>.Run(()=>
    {
        Thread.Sleep(100); // 模拟耗时
        return i * i;
    });
}

async void Main()
{
    Console.WriteLine("Hello");
    int result = await Power(10);
    Console.WriteLine(result); // 100
    Console.ReadLine();
}
```

运行一下，发现没什么区别。

如果你向控制台输出线程 ID 的话，你会发现 _Console.WriteLine("Hello")_ 和 _Console.WriteLine(result)_ 并不工作在同一个线程同。

**为什么会有这样的效果 ?**

因为 **编译器**，你会发现，和之前的异步实现不同，_async_ 和 _await_ 不是某个封装了复杂逻辑的类型，而是两个关键字。

关键字的意义就是编译过程。

在编译时，遇到 _async_ 就会知道这是一个存在着异步的方法，编译器向这个类型添加一些额外的成员来支持 _await_ 操作。

当遇到 _await_ 关键字时，编译器会从当前行截断，并向后面的代码编译到 _Task.ContinueWith_ 中去。

这样一来，看似同步的代码，经编译后，就会一拆为二。

前部分运行在主线程中，后部分运行在子线程中，分割点就是 _await_ 所在的代码行。

慎用异步
====

几种在 **.Net** 平台中使用 **异步** 的方法都介绍完了，希望大家能够对 **异步** 编程有了一定的了解和认识。

但是，在实际生产中，依赖要慎用异步。

**异步** 在带来性能提高的同时，还会带来一些更复杂的问题：

线程安全
----

线程间的切换并不是有着类似 **事务** 的特征，它无法保证两个线程对同一资源的读写的完整性。

而且大部分情况下，一个线程操作完，就会被挂机执行另一个线程，所以对于多个线程访问同一资源，需要考虑线程安全的问题。

换句话说，就是保证一个线程在执行一个最小操作时，另一个线程不允许操作该对象。

调试难
---

**异步** 的本质就是 **多线程** ，当你尝试用断点调试代码时，由于两个线程都在你的代码中运行，因此常常出现从这个线程的断点进入另一个线程的断点的情景。

需要依赖 **IDE** 中更多的工具和设置，才能解决上述的问题。

不统一的上下文
-------

**异步** 代码往往在子线程中运行。

**子线程** 很可能会使用在 **主线程** 中已经施放的资源。

比如

```c#
using(var conn = new SqlConnection("........"))
{
    conn.Open();

    // 假定一个根据用户名查询用户ID的方法
    Tast<int> task = UserService.AsyncGetUserId(conn, "Admin");

    task.ContinueWith(t => 
    {
        // 此时的 conn 已经被主线程释放了
        UserService.DoSomethingWithConn(conn);
    });
}
```

你需要使用一些额外的代码来解决这些问题。并且这些代码不一定具备通用性，往往要具体问题具体分析。

因此在实际任务中，到底选择 **同步** 还是 **异步** 要视具体情况而定。

今天本文介绍了几种实现 **异步** 的方法，不能说它们之间谁比谁更好一点，各有优劣。

篇幅原因，将不再对几种方案进行对比，会在以后的文章中详细地介绍各自优劣。

## 参考

- [多线程和异步有什么关联和区别？如何实现异步？ - 清水栞 - 博客园 (cnblogs.com)](https://www.cnblogs.com/ShimizuShiori/p/12834874.html)

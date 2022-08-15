---
date: 2022-07-08
tag:
  - default
category:
  - skill
  - adams
---


## 定义

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/haominshan/article/details/120712370)

我在做课设、大作业的时候经常要做机电联合仿真，这个过程中遇到了许多不同的困难，现在将这些问题记录下来，以备不时之需，也能和同志们分享学习。

后来的补充：强烈建议没有强制要求的同志不要用 ADAMS 仿真了，在这篇文章里你会看到我从各个角度吐槽这个软件难用，但是当时的课程设计要求我们使用 ADAMS 进行仿真。现在我本人已经转用 **Recurdyn** 进行机电联合仿真了，Recurdyn 的仿真性能更强，人机交互也更加优秀，还支持柔性零部件的有限元分析，有机电联合仿真需求的同志都可以尝试。我还犹豫过要不要把这个文章写完，但是转念一想还是得有始有终，因此把怎么使用 ADAMS 进行机电联合仿真补完。

::: note 
经过确认，Adams确实还存在计算的能量发散的问题。一个单摆为例，5s 100点能量为：

总能量：
![Pasted image 20220708165717.png](tool\adams\assets\Pasted image 20220708165717.png)

势能：
![Pasted image 20220708165759.png](tool\adams\assets\Pasted image 20220708165759.png)

确实存在能量不守恒;

如果加到1000点，还是存在能量不守恒：

![Pasted image 20220708170046.png](tool\adams\assets\Pasted image 20220708170046.png)
:::



## 方案

### 将 Solidworks 模型导入 ADAMS

第一种方法是 Solidworks 模型直接另存为 Parasolid(.x_t) 文件，然后在 ADAMS 中 File -> Import...。但是这样导入的装配体没有装配关系，需要在 ADAMS 中重新添加，很繁琐。

第二种方法是在 Solidworks 插件中选择 Solidworks Motion，然后在下面 Motion Study 中选择 Motion 分析，稍微拖动一下时间轴，点击计算，随后右键装配体选择输出到 ADAMS，这样会生成一个. adm 文件，在 ADAMS 中直接 Open 即可。这样导入的装配体装配关系已经设置完成了，直接进行下一步仿真即可。

![](https://img-blog.csdnimg.cn/c904aabf47184b1ca0b50fd4c2962694.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_11,color_FFFFFF,t_70,g_se,x_16) 从 Solidworks Motion 中导出的步骤

### 在 ADAMS 中建立机械系统和接口

在用了一段时间 ADAMS 之后，我只能说 ADAMS 非常难用，它的许多设计是违反用户的使用习惯的，界面的冗余太多，而真正有用的功能却往往藏在看不见的地方，更不必说匮乏又模糊的错误提示了。所以在使用 ADAMS 中，要特别小心，不然可能就得从导入模型开始重做。_（这也是为什么我要从 Solidworks 中导入带装配关系的模型，仿真也要用 Simulink 联合仿真，就是为了避开 ADAMS 这个折磨人的东西）_

第一步自然是打开 ADAMS。在 ADAMS 的使用过程中务必注意 ADAMS 的工作路径，一般来说 ADAMS 的默认工作路径都是 C 盘的 Users 文件夹，而 Files->Open Database **不会** 自动切换工作路径。如果工作路径不对，输出的所有控制框图和算例结果都不会出现在 ADAMS 模型文件夹内，所以设置好工作路径非常非常重要。除了开始界面能选择工作路径以外，Files->Select Directory 也能变更 ADAMS 的工作路径。

![](https://img-blog.csdnimg.cn/ec09639bc89f44b38f043aceffe61034.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_13,color_FFFFFF,t_70,g_se,x_16) 为什么是 Users？简直莫名其妙

![](https://img-blog.csdnimg.cn/7a95f73bf34542eaba3ba6823d54ae21.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16) 在开始界面修改工作路径

值得一提的是，ADAMS 在根目录 / controls/examples 中提供了几个例子，可以用来演示和熟悉 ADAMS 的各个功能。_（就连例程都是藏的严严实实的）_ 

我们这里不使用例程，使用 Solidworks 中导入的模型。

打开模型就能看到模型的线框图，右下角可以将线框图变为实体图。

![](https://img-blog.csdnimg.cn/c08614242a23411eb8fdacd1d6953f4a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_10,color_FFFFFF,t_70,g_se,x_16)

要实现视角的旋转、平移和缩放，要按下 R、T、Z 键后拖动鼠标。鼠标右键菜单能看到视角控制选项和显示选项以及对应功能的快捷键。

![](https://img-blog.csdnimg.cn/ea44be0f7dfe407c99e37924bdcb9ed9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_6,color_FFFFFF,t_70,g_se,x_16)

现在我们来看左边的大纲，Bodies 是从 Solidworks 中导入的零件，Connectors 是从 Solidworks 中导入的配合，可以看到他们的名字都很混乱。在大纲中右键点击，模型中对应的部分就会高亮显示，选择 Rename 改名。

![](https://img-blog.csdnimg.cn/df01103de09c493899938f7c6468c4f3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_6,color_FFFFFF,t_70,g_se,x_16)

注意，改名只能修改划出的部分，两个点中间的部分不能改！

![](https://img-blog.csdnimg.cn/0bf25067447f44b0bcede3dbca69f3c5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_9,color_FFFFFF,t_70,g_se,x_16)

双击可以显示零件或配合的详细信息， 在关节的详细信息中，我们可以看到这个关节连接了哪两个零件，和这个关节的类型。

![](https://img-blog.csdnimg.cn/7e4402a03e4346f6bf4ba48a9b54f071.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_7,color_FFFFFF,t_70,g_se,x_16)

现在我们回到大纲，可以看到 Motions、Forces、Elements、Measures 底下都是空的，这也正是我们进行机电联合仿真要设置的。选择 Elements 选项卡 System Elements 中的创建变量。

![](https://img-blog.csdnimg.cn/8f750884769b48f1b776ce561e3666f4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

 最上面的文本框可以给变量命名，变量的值是将来 [Simulink](https://so.csdn.net/so/search?q=Simulink&spm=1001.2101.3001.7020) 输入的，这里留着 0 就好。

![](https://img-blog.csdnimg.cn/f21a88ffccc748b988e1111cf83cfacf.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_9,color_FFFFFF,t_70,g_se,x_16)

我在这里设置了两个输入量，现在我们双击要设置运动的关节。

![](https://img-blog.csdnimg.cn/7caffcc2fae843e8b55bcf54fce2e316.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_5,color_FFFFFF,t_70,g_se,x_16)

选择 Impose Motion(s)。

![](https://img-blog.csdnimg.cn/9d5b8c41ea9d4c32ab80ca692e45b3ee.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_7,color_FFFFFF,t_70,g_se,x_16)

在弹出的对话框里，根据关节类型的不同，可以设置下面的六个自由度，我们这里要设置的是一个回转关节的速度，在 Rot Z" 里选择 velo(time) = ，点击表达式后的...。注意这里最上面的 Name 文本框不能用来改名字，你需要在设置完整个运动后重新 Rename。_（什么天才交互...）_

![](https://img-blog.csdnimg.cn/3a5f538bc8f841cdb172f66a668cf6e5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_13,color_FFFFFF,t_70,g_se,x_16)

在弹出的函数构建器里，选择 Data Element 类型的函数。

![](https://img-blog.csdnimg.cn/f170ddbdf74f4e65862314bb338b79c0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

随后选择 Algebraic Variable Value，即左下角的 VARVAL 函数，随后选择 Assist...

![](https://img-blog.csdnimg.cn/087ef5bfeb2f499ba21d5f30a398d5f8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

在弹出的对话框的文本框中右键点击，选择 ADAMS_Variable->Guesses，然后选择你刚刚创建的变量。_（这个时候你点左边大纲是没用的，__ 选择变量真的是非常离谱 __）_

![](https://img-blog.csdnimg.cn/08731399aa9b4fa9bd136f703a5a445b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

 点击 OK，确认一下函数表达式框里是正确的，这里对话框很多，一路 OK 点掉所有的对话框，注意 **不要** 点叉或者 Cancel 关闭对话框，否则你就得重来一遍了。这个时候我们可以重命名一下刚刚创建好的运动。我设置了两个变量，因此再创建好另一个关节的运动。

选择 Forces 选项卡，可以添加需要的力，这里我们以添加一个扭矩为例。

![](https://img-blog.csdnimg.cn/3a69ab3f356b4034bb78e44e44d075a6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

一般来说，需要的扭矩都应该这样设置：Run-time Direction 设置成 Body Fixed（不然力不会跟着机体动），Construction 选择 Pick Feature（不然指定不了力的方向）。然后选择要施加力的点和方向即可。_（就不能把更常用的选项放在默认选项上吗）_

![](https://img-blog.csdnimg.cn/90a650fa9ddb4f518183c694641726b4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

要修改这个力，也是在大纲中双击这个力，然后和添加运动时一样修改函数表达式即可。这里我们在仿真时不使用力，也就不进行修改了，直接把力删掉。

现在我们已经设置好了输入了，我建议你检查一下输入量是否都设置准确了，因为 ADAMS 会直接无视错误的函数表达式，而不会有任何报错。_（到底是怎么设计的人机交互啊）_

现在我们来设置输出量。我的这个模型要输出的是末端的位置，因此要首先在末端建立一个坐标点。选择 Bodies 选项卡，在 Construction 中选择建立一个坐标点。

![](https://img-blog.csdnimg.cn/06deab7ef529448886f08d102a29b076.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

同样要修改设置，一般应当选择 Add to Part，Orientation 选项我选择了 X-Axis，可以根据需要调整。然后选择坐标点所在的零件、位置和方向。 这里有个技巧，在选择方向的时候，可以点击左边大纲中的 cm(Center of Mass，质心) 来高亮质心，然后就能指向质心啦。

![](https://img-blog.csdnimg.cn/731e67dfb6e7459b88cc9e7fe2506a18.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

在创建坐标点的时候，没有选项让我们自己命名名字，创建好后需要我们自己去找它叫什么，然后我们可以给他改名。_（这里我发现他叫 MARKER_10010，到底为什么连名字都这么奇怪啊）_

接下来再创建变量来测量坐标点的位置。和建立输入量时一样，选择 Elements 选项卡，新建一个变量。但是作为输出量，我们要修改其函数表达式，选择 Displaments->Distance along X，再选择 Assist...。

![](https://img-blog.csdnimg.cn/c1a9c9a8b6134077a6c723ebcf977855.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

这里我发现 Guesses 里并没有我要找的坐标点。我们可以选择 Pick，在模型中点击要用的坐标点；或者选择 Browse，在数据库里找到要用的坐标点。

![](https://img-blog.csdnimg.cn/d76f261c9896491487d3b49c6a246eee.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_9,color_FFFFFF,t_70,g_se,x_16)

一路 OK 点掉所有的对话框，现在我们完成了输出变量的创建，是时候把 ADAMS 里的模型导入 Simulink 了。选择 Plugins 选项卡，点击 Controls，选择 Plant Export。 

![](https://img-blog.csdnimg.cn/64e317f9b09a451ba093552fa49150f0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

在弹出的对话框中，右键点击 Input Signal(s) 文本框，选择 ADAMS_Variable->Guesses，选择需要的变量，用相同方法设置好输出变量。

![](https://img-blog.csdnimg.cn/9555c6f7534e43ffbf81f0d9c9d53e88.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_18,color_FFFFFF,t_70,g_se,x_16)

在 Target Software 中选择 MATLAB。

![](https://img-blog.csdnimg.cn/e07e88963c9d46a2b035c6922be6f928.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_18,color_FFFFFF,t_70,g_se,x_16)

现在打开我们保存 ADAMS 文件的目录，可以看到有一个. m 文件生成了。_（还记得我最开始强调的选择好工作目录吗？如果没设置好，在这一步你就找不到. m 文件了，我当时就是一直做到这一步才发现的）_

![](https://img-blog.csdnimg.cn/42cbb2fdfddb49d9b6fa9d4ec04178eb.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_19,color_FFFFFF,t_70,g_se,x_16)

### 在 Simulink 中进行联合仿真

打开 MATLAB，运行这个. m 文件，可以看到工作区里多了一大堆东西。然后我们在命令行输入 adams_sys，ADAMS 创建的 Simulink 框图就会出现了。右边这个 adams_sub 环节就是刚刚建立完成的机械系统，可以看到他有两个输入一个输出，正如我们在 ADAMS 中所设置的。

![](https://img-blog.csdnimg.cn/b5ceeac5b16a453b94cc71f35a8ba6bc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

我们可以把这个框图复制到一张新建的框图里，然后我们要对 simulink 和 adams 之间的通信进行设置。双击 adams_sub，然后双击 ADAMS Plant（就是中间那个红的）。

![](https://img-blog.csdnimg.cn/896f95f7652e40bca7787b415712d2c7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_20,color_FFFFFF,t_70,g_se,x_16)

弹出一个对话框，Animation mode 里如果选择 interactive，那么 Simulink 开始仿真的时候 ADAMS 就会播放机械系统的运动动画，可以在调试完成后选上；另外，也需要适当降低 Communication interval，这样可以提高精确度；Simulation mode 也可以根据需要更改。

![](https://img-blog.csdnimg.cn/7aeab838a7504c2caa925b200a766f04.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAaGFvbWluc2hhbg==,size_12,color_FFFFFF,t_70,g_se,x_16)

然后你就可以绘制你的电气系统框图，进行机电联合仿真啦。

## 参考

#### 引文

- [CSDN Post](https://blog.csdn.net/haominshan/article/details/120712370)

#### 脚注

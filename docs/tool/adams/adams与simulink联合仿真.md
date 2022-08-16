---
date: 2022-07-08
tag:
  - adams simulink
category:
  - skill
  - adams
---


## 定义

Adams 的软件 UI 设计很糟糕，因此尽量不在 Adams 中做仿真；此外，如果希望做好的控制算法，还得在 Simulink 中做仿真，这就引出了本文的内容

## 方案

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [zhuanlan.zhihu.com](https://zhuanlan.zhihu.com/p/64786908)

### 前言


#### 4.1 创建新模型

打开软件，新建模型，选择 MKS 单位系统，这一步对最终结果影响不大，可根据自己使用习惯进行调整。

#### 4.2 创建电机主轴

![](https://pic4.zhimg.com/v2-b8c6dd1da0252f308fd81eb5fd19affb_r.jpg)

这里采用一个圆柱体来作为电机主轴的模型。选择创建【Cylinder】。

![](https://pic4.zhimg.com/v2-1935aa9aae992caa37c3be44c646eaeb_r.jpg)

选择新建部件，输入对应的外形参数，长【10 cm】，半径【1 cm】，然后分别先后点击【原点】和 X【轴上的一点】，完成圆柱体的创建，然后把新创建的圆柱体命名为【Shaft】。

![](https://pic3.zhimg.com/v2-61bcc628336a3effcd992d5f139a6446_r.jpg)

#### 4.3 创建约束

选择【YZ 平面】为工作平面；工作平面的选择为后续的约束以及力矩的定位提供方便。

![](https://pic3.zhimg.com/v2-e75661ecc6771ff0cfe581f39cb7330a_r.jpg)

选择添加【Revolute joint】

![](https://pic1.zhimg.com/v2-7ffea77a542be2dec75db570d401ed3c_r.jpg)

按照默认设定，依次选择【圆柱体】，【地面】和【坐标原点】，完成转动副的创建。

![](https://pic2.zhimg.com/v2-e6cb64762a5d9f45a483979786b82d31_r.jpg)

#### 4.4 添加旋转阻尼

选择添加一个【Rotiational Spring-Damper】

![](https://pic3.zhimg.com/v2-40ffd6c02550690c19cb3ffc4393adde_b.jpg)

勾选【阻尼系数 CT】在框中填上对应的阻尼系数【0.0001 (N*m*s/rad)】，然后依次点击【圆柱体】，【地面】以及【圆柱体质心】，完成【旋转阻尼】的创建。

![](https://pic3.zhimg.com/v2-f6a2f6b7caa1ffdaabb18682d479da76_r.jpg)

双击已经创建好的【旋转阻尼】，在刚度系数的下拉菜单中选择【no stiffness】

![](https://pic3.zhimg.com/v2-d1e47f4d2fb1a2945611ec439340cabe_r.jpg)

#### 4.5 创建状态变量

首先要创建一个新的【Marker】，

![](https://pic4.zhimg.com/v2-be6a2f7d3a9531d404e2c669e248ef67_r.jpg)

选择【通过 X 轴与 Y 轴】定义参考点，依次选择【坐标原点】，【圆柱体质心 X 轴】，【圆柱体质心 Y 轴】完成参考点的创建，将其重命名为【marker_ref】，这个参考点将用于轴角位移和角速度的测量。

![](https://pic1.zhimg.com/v2-de1e0d0ba651efbf77c83e87757315fc_r.jpg)

随后，如下图所示，创建 3 个状态变量，其中【moter_torque】为输入力矩，不需要修改内容，它的值会从 Simulink 中获取；【motor_theta】为轴的角位移，对应的公式为【AZ(Shaft.cm, marker_ref)】，【motor_omega】为轴的角速度，对应的公式为【WZ(Shaft.cm, marker_ref, marker_ref)】，这两者为输出变量。

::: note note
注意这里的WZ函数，其有3个参数：
- To Marker: Measure Prop to ground
- From Marker: Subtract Prop to ground
- About Marker: Measure Prop about Z axis in this frame

注意左下角全局坐标系的指向，这里的角速度可以写成下面的形式：
- WX(Shaft.cm)
- WZ(Shaft.cm, 0, marker_ref)

如果写成：
- WZ(Shaft.cm, marker_ref)

会得到结果为0，因为这里的意思是绕着全局的Z方向的角速度
:::



#### 4.6 创建力矩

选择创建一个力矩

![](https://pic1.zhimg.com/v2-059e700d58eedad3aa4d7a2ecd62377c_b.jpg)

按照默认的选项，依次点击【圆柱体】和【坐标原点】，完成力矩的创建。

![](https://pic4.zhimg.com/v2-8e621410d8ff2b0ad1a70e7e3a9ad7bb_r.jpg)

::: note note
注意这里力矩选择的是Space-Fixed，意味着力固定在空间中；实际上选择Body-Fixed会更好，固定在物体上
:::



双击新创建的力矩，输入公式【-VARVAL(motor_torque)】，此公式的意义在于把输入变量【motor_torque】的值赋给力矩，此处不可之间输入变量名，需要通过【VARVAL】函数进行转换，负号的添加取决于刚才参考点的选取，看情况选择是否添加。

![](https://pic3.zhimg.com/v2-5d52b38450096e10987e50de66032df6_r.jpg)

至此，Adams 模型的创建已经完成。

### Adams 与 Simulink 联合仿真


#### 5.1 导出 Adams 模型

在【tools】中选择【plugin manager】选择加载【Adams Control】插件

![](https://pic4.zhimg.com/v2-0edef29d9fd086c152e3a5c1991ed6a7_r.jpg)

在【Plugins】中选择【Adams Control】中的【Plant Export】

![](https://pic2.zhimg.com/v2-da84ba734c711ae28fa70e64c287cbd9_r.jpg)

在输入信号框中点击右键，选择【motor_torque】

![](https://pic2.zhimg.com/v2-505f1bdbdf9a377da2daa5671de1df85_r.jpg)

同样，在输出信号的框中点击右键，选择【motor_theta】和【motor_omega】

![](https://pic1.zhimg.com/v2-0db9a25a5b6f6096d6f82d1846657dbc_r.jpg)

在【target software】中选择【MATLAB】，最后窗口应如下图所示，点击【OK】，完成模型的导出。

![](https://pic3.zhimg.com/v2-81db2f245550a71afc5a83d97fe92f7a_r.jpg)

最终会得到以下这 4 个文件

![](https://pic3.zhimg.com/v2-5465f93ab6535c3873dfc7bdfe506426_r.jpg)

#### 5.2 MATLAB 部分

打开 MATLAB，运行导出的【*.m】文件，得到如下结果。

![](https://pic4.zhimg.com/v2-eb3078595bcc2bc10d07240b799c9947_r.jpg)

在【命令行】中输入【adams_sys】打开默认生成的 Simulink 模型，其中橙色模块就是导出的模型，这个 adams 子模块可以复制出来，连接到你的模型中，每次运行之前只需要先运行【*.m】文件即可。注意：若模型路径变化会产生警告，这个时候【*.slx】文件中的 adams 子模块不需要更改，但是需要重新导出一次模型，并运行新导出的【*.m】文件即可消除警告。

![](https://pic3.zhimg.com/v2-34a3e8603ce3822572a06cf603ac0972_r.jpg)

#### 5.3 搭建对应的联合仿真模型

Adams 子模块复制出来以后，代替原有的动力学模型，框图如下：

![](https://pic2.zhimg.com/v2-63f6984d3ab429c8e2b9635e0979d515_r.jpg)

仿真结果如下：

![](https://pic4.zhimg.com/v2-ba5148bbb7c4fa7906d3828c76e4cf5b_b.jpg)

#### 5.4 仿真结果对比

将两个模型放在一起比较：

![](https://pic2.zhimg.com/v2-482d3489f8a3583643e002887c4b29dd_r.jpg)

结果如下：

![](https://pic4.zhimg.com/v2-84eb77b2dd6404648f308332a79d083b_b.jpg)

### Adams 中查看结果
--

如果 Simulink 中的数据并不能满足你的需求，需要查看非输出变量的变化，或者说想要看到或者导出具体的机构运动动画的话，你需要先找到联合仿真以后生成的【*.res】文件。注意这个文件每仿真一次都会重新覆盖，有需要的记得复制到其他目录下保存。

![](https://pic3.zhimg.com/v2-191cd49f6c8d046ca7c2332c4e175a52_r.jpg)

然后将其导入，注意在导入的时候需要双击【Model Name】旁边灰色的框，然后选中里面的模型，再进行导入。

![](https://pic1.zhimg.com/v2-a138a57ba7a437ff115f389821aa22c8_r.jpg)

然后就可以在【postprocessor】中进行查看。

![](https://pic3.zhimg.com/v2-d40e52a706367592a49e7d027eb0ae7e_b.jpg)




## 参考

##### 引文

- [Adams与MATLAB_Simulink的联合仿真教程——以直流电机为例 - 知乎](https://zhuanlan.zhihu.com/p/64786908)
##### 脚注

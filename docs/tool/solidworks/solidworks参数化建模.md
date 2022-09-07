---
date: 2022-09-05
tag:
  - Solidworks
category:
  - tool
  - solidworks
---

# solidworks参数化建模


## 定义

使用 solidworks 设计零件参数尺寸的时候，引入参数化设计思想，可以方便修改零件尺寸大小，并使用函数来控制零件信息

## 方案

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [blog.csdn.net](https://blog.csdn.net/qq_45769063/article/details/106494702)

**知识点：投影曲线、曲面填充、扫描、外观设置**

![](https://img-blog.csdnimg.cn/20200602135015984.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzY5MDYz,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20200602135025761.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzY5MDYz,size_16,color_FFFFFF,t_70) 

**建模步骤**

1. 先在工具——方程式里输入一个直径的变量 A=120 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzJjZTNmMzNlNWRiNTQ0Y2U4MTU5ZDgzZGRmYmYzODI0LmpwZWc?x-oss-process=image/format,png)

2. 在前视基准面上草绘圆，画一条直径。直径等于变量 A。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2ViZmY0MmE2NGEwODQ2NDU4MjdlNmIwMDE1OGRkYWExLmpwZWc?x-oss-process=image/format,png)

3. 旋转，选择粉色区域。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2I1MWRlNmM3NTZjMjQ0MWViMzg2MjI1NjYxYTZlODhjLmpwZWc?x-oss-process=image/format,png)

4. 上视基准面上草绘图形，转换实体引用最外侧圆，转为构造线，隐藏球。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzI1OWM4NmViZTk2MzQ3NDBhMGFiMjU2YTQ5YTRmYzhkLmpwZWc?x-oss-process=image/format,png)

圆周阵列 8 个

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2Y5MzhjOTYyNjYzNTQyYmViMWE2ZDJlZjJkM2M2M2RjLmpwZWc?x-oss-process=image/format,png)

添加这两个重合

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzkxNjJiYWI2MjY1YjQ2ODViNGRhNjA2MmYxNzljYzVmLmpwZWc?x-oss-process=image/format,png)

圆角，半径 = A/10

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2NjMmI1MjlhZDZlYTRlM2ZhNjI4MWQyZTBjNjkzMDMyLmpwZWc?x-oss-process=image/format,png)

圆角，半径 = A/20

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzNiNzg0NDk3MTg2ZTRkZjFiZjZkMDJiM2FmOWY4ZDRiLmpwZWc?x-oss-process=image/format,png)

5. 显示球体，投影曲线，反转投影。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2U3MTJmN2ExYzdjNDRlNzhhYzk3MWM4ODAzMzY2MGY2LmpwZWc?x-oss-process=image/format,png)

隐藏球体

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2FkNzU5MzViZmZlYzQzY2ZhY2ViNWMxZGYyNzJiMGY0LmpwZWc?x-oss-process=image/format,png)

6. 曲面填充。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzM4MmU5ZGIwMzYzNDQ2OWVhYWMwYjQwY2I5YzUzYmNlLmpwZWc?x-oss-process=image/format,png)

7. 加厚，加厚两侧 1 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2Y4MjllZTNmNTgxOTRhODU5ODNmMTlmYjA4Zjk0NmM3LmpwZWc?x-oss-process=image/format,png)

8. 圆角，半径 1 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2Q4MDlmNjQxMjA5NTQxMTdhMGI3OTZmNmU0MmZlYmQwLmpwZWc?x-oss-process=image/format,png)

9. 上视基准面上草绘圆，直径 = A/3 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzcwZWFkMTEyYTE1NTQ4MDRhMDUyYTIyODBlYjQzYjQwLmpwZWc?x-oss-process=image/format,png)

10. 投影曲线，投影到粉色面上。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2JmNWNlZTNlN2Q3ZDQ4NzdiODZlZmM3M2EyMWViNWZkLmpwZWc?x-oss-process=image/format,png)

11. 前视基准面，草绘图形，竖直线的端点与投影曲线穿透。竖线 = A/40 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2L2M1NDU2ZTQ0N2FhNTQ2ZTNhZTM4MmE4M2I5MTlhMzU2LmpwZWc?x-oss-process=image/format,png)

12. 扫描，合并结果打钩。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzAyYjE4NmViYjcwZjRmOGQ4OTEzOTU0OWJhMGZjMWQ3LmpwZWc?x-oss-process=image/format,png)

13. 完全圆角。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzgzM2ZlZGJkZGRiOTQ4ODNhYWM2ZmYwNDY5NTY1Yzc2LmpwZWc?x-oss-process=image/format,png)

14. 根部圆角，半径 2 。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzM5NzUyNDgxODdhMjQ1M2Y4YmExZDRlYTZiODBiYzI2LmpwZWc?x-oss-process=image/format,png)

15. 完成，上色。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzA1M2Q5MjM4NDIwYzRmZjQ5YTczMzA1YzdlMDQ4MTgxLmpwZWc?x-oss-process=image/format,png)

16. 添加外观。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2Lzg5NDBlMzQ4NzYxZjRkNjZiM2M2YzE3MTk3MTQ2ZmU2LmpwZWc?x-oss-process=image/format,png)

17. 渲染一下。

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzMwMGJmNDliNTRhOTQ2ODE5MTZjOGFkMmYxYjI0YmVhLmpwZWc?x-oss-process=image/format,png)

![](https://imgconvert.csdnimg.cn/aHR0cDovLzViMDk4OGU1OTUyMjUuY2RuLnNvaHVjcy5jb20vaW1hZ2VzLzIwMTgxMDE2LzM1ZmY1Y2NmNWJhMzRiN2JhZDE2ZGQ1N2E2N2QxNTI5LmpwZWc?x-oss-process=image/format,png)

自己做的一个例子：

![](https://img-blog.csdnimg.cn/20200602135724932.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzY5MDYz,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/2020060213562577.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzY5MDYz,size_16,color_FFFFFF,t_70)

## 参考

##### 引文

- [SOLIDWORKS——参数化建模_有情怀的机械男的博客-CSDN博客_solidworks参数化建模](https://blog.csdn.net/qq_45769063/article/details/106494702)
- ![solidworks 参数化建模](https://www.bilibili.com/video/BV1ra411c7Lt/?vd_source=aafb5a8e788c21e9a0e94a277e4a9933)



##### 脚注

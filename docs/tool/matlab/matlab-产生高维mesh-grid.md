---
date: 2022-06-06
tag:
  - tool
  - matlab
  - mesh
  - grid
  - ndgrid
  - pagetimes
category:
  - skill
  - matlab
---


# Matlab 产生高维 Mesh Grid


## 定义

有的时候，我们需要产生 mesh 网格来做分析，比如研究参数空间上某个指标的变化。这时，matlab 中的 `meshgrid` 只能产生 2 维的网格，并不方便使用

## 方案

### 使用 Ndgrid

背景参考 [并联机构正运动学求解报告](.//)
为了产生 Stewart 平台在空间中的 6 维参数变化 (动平台位姿变化)，得到了下面的代码。

```matlab
clear all
  
% 生成1e6组数据
  
% Stewart平台Config信息
fix_points = importdata('data\config.txt');
p = fix_points(1:6,:)';
b = fix_points(7:end,:)';
  
% 生成数据信息
% % 训练集数据
% simu_num = 10;
% pos_limit = 100;
% angle_limit = 20;
% % 测试集数据
simu_num = 4;
% % 大变化范围
% pos_limit = 150;
% angle_limit = 30;
  
% % 中等变化范围
% pos_limit = 100;
% angle_limit = 20;
  
% 小变化范围
pos_limit = 10;
angle_limit = 2;
  
% 生成变量网格
x_range = linspace(-pos_limit, pos_limit, simu_num);
y_range = linspace(-pos_limit, pos_limit, simu_num);
z_range = 500 + linspace(-pos_limit, pos_limit, simu_num);
  
rx_range = linspace(-angle_limit, angle_limit, simu_num);
ry_range = linspace(-angle_limit, angle_limit, simu_num);
rz_range = linspace(-angle_limit, angle_limit, simu_num);
  
[X,Y,Z,RX,RY,RZ] = ndgrid(x_range, y_range, z_range, rx_range, ry_range, rz_range);
  
re_X = reshape(X, [], 1);
re_Y = reshape(Y, [], 1);
re_Z = reshape(Z, [], 1);
re_RX = reshape(RX, [], 1);
re_RY = reshape(RY, [], 1);
re_RZ = reshape(RZ, [], 1);
  
grid_data = cat(2, re_X, re_Y, re_Z, re_RZ, re_RY, re_RX);
data_length = length(grid_data);
  
% 计算逆解
% 计算位移
t = grid_data(:,1:3)';
cal_t = reshape(t, 3,1,data_length);
% 计算角度
angles = deg2rad(grid_data(:,4:6));
rot = angle2dcm(angles(:,1), angles(:,2), angles(:,3), 'ZYX');
% 维度统一
cal_p = repmat(p,[1,1,data_length]);
cal_b = repmat(b,[1,1,data_length]);
  
% dcm需要转置才表示坐标转换
leg_vecs = pagemtimes(rot,'transpose',cal_p,'none')-cal_b+cal_t;
leg_lengths = squeeze(vecnorm(leg_vecs))';
  
% 前6列位置信息, 后6列轴长信息
data_all = cat(2, grid_data, leg_lengths);
% writematrix(data_all,'./data/simu_data.txt');
% 训练集数据
% save('./data/simu_data.mat','data_all')
% 验证集数据
save('./data/small_validate_data.mat','data_all')
%
% % 验证第一列计算
% test_t = data_all(1, 1:3)';
% test_rad = deg2rad(data_all(1, 4:6));
% test_rot = angle2dcm(test_rad(1), test_rad(2), test_rad(3))';
% test_leg_vec = test_rot*p-b+test_t;
% test_leg_vec - leg_vecs(:,:,1)
% vecnorm(test_leg_vec,1)-data_all(1,7:end)
```

注意这里首先生成了变量的范围，然后使用 `ndgrid` 直接得到了网格

需要注意，这里的网格是多维的，需要重新 reshape 之后再 cat 导出

### Note

你会注意到，代码中由于==旋转矩阵是3维的== ，相当于 nx3x3 形状，需要对其做快速乘积的话，使用到了 `pagetimes`，这是高维矩阵相乘的方法 [^1]，代码中是用来快速计算支链向量的：

```matlab
% dcm需要转置才表示坐标转换

leg_vecs = pagemtimes(rot,'transpose',cal_p,'none')-cal_b+cal_t;
leg_lengths = squeeze(vecnorm(leg_vecs))';
```


## 参考
##### 引文
##### 脚注

[^1]: 其实是 3 维罢了，相当于一个矩阵序列

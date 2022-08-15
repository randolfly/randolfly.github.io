---
date: 2022-08-09
tag:
  - default
category:
  - library
  - 机器人
  - 并联机构
---



# Stewart 运动学逆解

## 定义

使用 Matlab 对 Stewart 机器人进行运动学逆解求解。

Functions：

- Get_axis_length
  - 输入对应位置，计算运动学逆解

Stewart_inverse_cal

```matlab
% 动平台P上点的坐标(x,y,z)
pos_fp = [0.225,0,-0.228;0.1125,0.1949,-0.228;-0.1125,0.1949,-0.228;-0.225,0,-0.228;-0.1125,-0.1949,-0.228;0.1125,-0.1949,-0.228]';
% 静平台W上点的坐标(x,y,z)
pos_fw = [1.758,2.8,-1.015;1.6021,3.07,-0.925;-1.758,2.8,-1.015;-1.6021,3.07,-0.925;0,2.8,2.03;0,3.07,1.85]';

delta_pos = [0.2,0.3,-0.4]';
delta_euler_zxz = [0.1,-1.4,0.1]';
delta_posture = angle2quat(delta_euler_zxz(1),delta_euler_zxz(2),delta_euler_zxz(3), 'ZXZ');


function [axis_length, norm_axis_vec] = get_axis_length(delta_pos, delta_posture, target_pos, base_pos)
%myFun - 计算给定上下平面姿态和位置下，上平面和下平面点的距离(用于计算支链长度)
%
% Syntax: axis_length = get_axis_length(delta_pos, delta_posture, target_pos, base_pos)
%
% Long description
% Input:
% delta_pos: 上平面坐标系相对于下平面坐标系原点之间的位移
% delta_posture: 上平面坐标系相对于下平面坐标系姿态四元数
% target_pos: 上平面目标点在上平面坐标系中坐标
% base_pos: 下平面目标点在下平面坐标系中坐标
% Output
% axis_length: 对应两点距离
% norm_axis_vec: 全局坐标(底部坐标系下)对应两点连线单位向量

    % matlab处理矩阵意义为直接的向量乘法意义，因此转换为坐标变换要转置
    delta_posture_mat = quat2dcm(delta_posture)';
    axis_vec = delta_pos+delta_posture_mat*target_pos-base_pos;
    axis_length = vecnorm(axis_vec);
    norm_axis_vec = axis_vec./axis_length;
end
```

## 参考

- Matlab 官方手册

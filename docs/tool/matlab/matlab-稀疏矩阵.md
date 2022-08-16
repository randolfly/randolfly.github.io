---
date: 2022-06-06
tag:
  - tool
  - matlab
  - sparse
  - math
  - mat
category:
  - skill
  - matlab
---


# Matlab 稀疏矩阵


## 定义

使用稀疏矩阵的表示方法可以减少稀疏矩阵计算时的消耗，提升计算速度。

例子：生成一个幂零矩阵

```matlab
% sparse matrix test
res_size = 10;
row_index = 2:res_size;
col_index = 1:(res_size-1);
var_index = ones(1, res_size-1);

M = sparse(row_index, col_index, var_index, res_size, res_size)
```


## 参考

- [稀疏矩阵运算 - MATLAB & Simulink - MathWorks 中国](https://ww2.mathworks.cn/help/matlab/math/sparse-matrix-operations.html)

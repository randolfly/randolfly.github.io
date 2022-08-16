---
date: 2022-06-06
tag:
  - ml
  - wsl
  - cuda
  - cudnn
category:
  - skill
  - wsl
---


# Wsl 配置 Ml 环境


## 定义

安装可麻烦了，照着 nvidia 的方法安装吧，cudnn 照着 CSDN 的安装

[2021年wsl2中配置Ubuntu18.04+CUDA+Pytorch深度学习环境完全版_lifeLover21的博客-CSDN博客_wsl2深度学习](https://blog.csdn.net/lifeLover21/article/details/115502644)

- 安装 windows CUDA 驱动
	- cuda [CUDA on WSL | NVIDIA Developer](https://developer.nvidia.com/cuda/wsl/download)
		- [CUDA Toolkit 11.5 Update 1 Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_local)
	- cudNN [NVIDIA Developer Program 需要会员资格 | NVIDIA Developer](https://developer.nvidia.com/rdp/cudnn-download)
		- [Windows10安装 cuDNN 方法_CatOneTwo的专栏-CSDN博客_windows安装cudnn](https://blog.csdn.net/weixin_38673554/article/details/90513732)
- 安装 WSL2
- docker 配置
	- [Home · NVIDIA/nvidia-docker Wiki · GitHub](https://github.com/NVIDIA/nvidia-docker/wiki)
- WSL2 使用

## 参考

- https://blog.csdn.net/weixin_37887116/article/details/113764267
- https://docs.nvidia.com/cuda/wsl-user-guide/index.html#installing-nvidia-drivers
- https://docs.microsoft.com/zh-cn/windows/ai/directml/gpu-cuda-in-wsl

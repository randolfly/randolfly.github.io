---
date: 2022-06-06
tag:
  - windows
  - python
  - ml
  - cuda
  - cudnn
category:
  - skill
  - python
---


# Windows 配置 Ml 开发环境


## 定义

配置一个 windows 可以使用的 ml 开发环境，分为以下步骤

### 安装 Cuda 和 Cudnn

本机电脑为 windows10, GPU 是 GTX3060，安装 cuda 驱动为 11.2.

- 首先在 nvidia 官网下载 CUDA ToolKit 11.2 和 cudNN Archive(11.x) 即可
- 安装 CUDA ToolKit 11.2，注意安装可能会报错说已经安装了更新版本的 FrameView
  - 如果报错，进入 `设置- 应用- 卸载Nvidia FrameView 和PhysX`
  - 卸载完成执行安装
- 将解压的 cudNN 复制到 CUDA 安装目录中，默认为 (`C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.2`), bin->bin,etc
- 进入 ` C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.3\extras\demo_suite` 验证是否安装成功，命令行运行 deviceQuery.exe 和 bandwidthTest.exe，双 PASS 成功
- 在环境变量 PATH 中添加下面两个路径
  - `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.2`
  - `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.2\lib\x64`

### 创建虚拟环境

- 创建 python=3.7 环境
- 下载 [开始使用_飞桨-源于产业实践的开源深度学习平台 (paddlepaddle.org.cn)](https://www.paddlepaddle.org.cn/install/quick?docurl=/documentation/docs/zh/install/pip/windows-pip.html#old-version-anchor-9-三、验证安装)，使用命令
  - `python -m pip install paddlepaddle-gpu==2.1.3.post112 -f https://www.paddlepaddle.org.cn/whl/windows/mkl/avx/stable.html`
  - 验证安装成功
	- `import paddle`
	- `paddle.utils.run_check()`
- 下载 [Start Locally | PyTorch](https://pytorch.org/get-started/locally/)
  - `pip3 install torch==1.10.0+cu113 torchvision==0.11.1+cu113 torchaudio===0.10.0+cu113 -f https://download.pytorch.org/whl/cu113/torch_stable.html`
  - 验证安装成功
	- `import torch`
	- `torch.cuda.is_available()`

## 参考

- [cuda11.2安装时和nvidia frameview sdk冲突怎么解决呀? - 知乎 (zhihu.com)](https://www.zhihu.com/question/445815509)

- [Start Locally | PyTorch](https://pytorch.org/get-started/locally/)

- [CUDA Toolkit 11.2 Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-11.2.0-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exelocal)
- [cuDNN Archive | NVIDIA Developer](https://developer.nvidia.com/rdp/cudnn-archive#a-collapse822-114)

- [(17条消息) win10下RTX3060配置CUDA，并安装带有GPU支持的tensorflow_Minstrel223的博客-CSDN博客](https://blog.csdn.net/Minstrel223/article/details/117811597)

- [(17条消息) Cuda和Cudnn安装_liuzhonglin_的博客-CSDN博客](https://blog.csdn.net/weixin_43082343/article/details/119043543)

- [Installing CUDA Windows 10 - Stack Overflow](https://stackoverflow.com/questions/65925387/installing-cuda-windows-10)

---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - other
---


# 访问 Imgur- 防盗链图片

## 定义

使用 [Image cache & resize service (weserv.nl)](https://images.weserv.nl/) 提供的图片镜像缓存服务，可以实现访问对应图床。

**使用方式**

https://images.weserv.nl/?url=原始图片链接

例子：

链接:
 - https://i.imgur.com/Jvh1OQm.jpg
 - =>
 - https://images.weserv.nl/?url=https://i.imgur.com/Jvh1OQm.jpg

| 原链接                                | 新链接                                                             |
| - |  |
| ![](https://i.imgur.com/Jvh1OQm.jpg ) | ![](https://images.weserv.nl/?url=https://i.imgur.com/Jvh1OQm.jpg) |

## 参考

- [防盗链图片、imgur 等国内无法访问图床图片的访问解决方案 - PortableAppK 社区](https://portableappk.com/forum/d/48)

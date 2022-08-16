---
date: 2022-06-06
tag:
  - git
  - 修改仓库
category:
  - skill
  - git
---


> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码，原文地址 [blog.csdn.net](https://blog.csdn.net/ShelleyLittlehero/article/details/95980669)

### 方法有三种：


#### 方法 1. 修改命令

```
git remote set-url origin <url>

```

#### 方法 2. 先删后加

```
git remote rm origin
git remote add origin [url]

```

#### 方法 3. 直接修改 Config 文件

![](https://img-blog.csdnimg.cn/20190715161941533.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NoZWxsZXlMaXR0bGVoZXJv,size_16,color_FFFFFF,t_70)
config:

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
	hideDotFiles = dotGitOnly
[remote "origin"]
	url = https://github.com/ZhangDi-d/SpringBootSample.git
	fetch = +refs/heads/*:refs/remotes/origin/*


```

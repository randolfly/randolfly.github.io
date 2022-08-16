---
date: 2022-06-06
tag:
  - shell
  - grep
category:
  - skill
  - wsl
---


# Shell 快速匹配内容并替换

## 定义

使用脚本
```shell
sed -i 's/github.com/hub.fastgit.org/g' `grep github.com -rl --include="*.json" ./`
```

可以将当前文件夹下递归的所有文件中 json 文件 `github. com` 替换成 `hub.fastgit.org`.

**sed**

-i 表示操作的是文件，符号 \`\` 括起来的 grep 命令，表示将 grep 命令的的结果作为操作文件
而 sed 选项 s/yyyy/xxxx/表示查找 yyyy 并替换为 xxxx，后面跟/g 表示一行中有多个 yyyy 的时候，都替换，而不是仅替换第一个

**grep**

-r 表示查找所有子目录
-l 表示仅列出符合条件的文件名，用来传给 sed 命令做操作
–include="*.txt" 表示仅查找 txt 文件
./ 表示要查找的根目录为当前目录

## 参考

- [(17条消息) grep和sed配合替换文件中的字串_zds78的博客-CSDN博客_grep sed](https://blog.csdn.net/zds78/article/details/84070622)

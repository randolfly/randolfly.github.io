---
date: 2022-06-06
tag:
  - git
  - 代码回滚
category:
  - skill
  - git
---


# Git 回滚


**场景一：**

> 糟了，我刚把不想要的代码，commit 到本地仓库中了，但是还没有做 push 操作！

**场景二：**

> 彻底完了，刚线上更新的代码出现问题了，需要还原这次提交的代码！

**场景三：**

> 刚才我发现之前的某次提交太愚蠢了，现在想要干掉它！


## 撤销

上述场景一，在未进行 git push 前的所有操作，都是在“本地仓库”中执行的。我们暂且将“本地仓库”的代码还原操作叫做“撤销”！

情况一：文件被修改了，但未执行 git add 操作（working tree 内撤销）

```shell
git checkout fileName
git checkout .
```

情况二：同时对多个文件执行了 git add 操作，但本次只想提交其中一部分文件

```shell
git add *
git status
# 取消暂存 
git reset HEAD <filename>
```

情况三：文件执行了 git add 操作，但想撤销对其的修改（index 内回滚）
```shell
# 取消暂存 
git reset HEAD fileName 
# 撤销修改 
git checkout fileName
```

情况四：修改的文件已被 `git commit`，但想再次修改不再产生新的 Commit

```shell
# 修改最后一次提交
git add sample.txt
git commit --amend -m"说明"
```

## 回滚

```shell
# 查看指定文件的历史版本
git log <filename>
# 回滚到指定commitID
git reset --hard commit_id
git push --force origin master
```


## 参考

- [Git 如何优雅地回退代码 - 枕边书 - 博客园 (cnblogs.com)](https://www.cnblogs.com/zhenbianshu/p/12018714.html)
- [Git撤销&回滚操作_李刚的学习专栏-CSDN博客_git回滚命令](https://blog.csdn.net/ligang2585116/article/details/71094887)

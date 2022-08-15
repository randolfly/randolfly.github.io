---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - dotNet
---


# Vscode 运行 CShape

## 定义


## 首先配置好. NET Framework 环境变量 ：

（本例中将 `C:\Windows\Microsoft.NET\Framework64\v4.0.30319` 加入 `Path` 中即可）。重启 Powershell ，确保输入 `csc` 能找到编译器。

![](https://www.pizyds.com/wp-content/uploads/2019/08/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE40.png)

在 VS code 中安装好 Code Runner 扩展，进入设置，直接点击 `在settings.json 中编辑`。

![](https://www.pizyds.com/wp-content/uploads/2019/08/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE41.png)

## 在 _settings.json_ 中加入：

```json
"code-runner.executorMap": {
    "csharp": "echo= && csc /nologo /utf8output $fileName && $fileNameWithoutExt"
}
```

![](https://www.pizyds.com/wp-content/uploads/2019/08/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE47.png)

打开一个. cs 文件，直接点击三角形按钮运行，最终输出效果基本和 nodejs 等脚本语言无异：

![](https://www.pizyds.com/wp-content/uploads/2019/08/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE48.png)

## 补充解释一下各参数的作用：

* `echo=` 换行，保持美观
* `/nologo` 取消编译器版权信息
* `/utf8output` 以 UTF-8 编码格式输出编译器消息，防止编译出错时显示的中文乱码（如图）

![](https://www.pizyds.com/wp-content/uploads/2019/08/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE49.png)

> SEO 相关：.net 中文乱码，csc，VS code csharp，Code Runner，在 VS code 中编写运行 C#

## 另外需要输入的程序可以如下配置：

```json
{
    "code-runner.saveAllFilesBeforeRun": true,
    "code-runner.saveFileBeforeRun": true,
    "code-runner.executorMap": {
        "csharp": "clear && echo '' && csc /nologo /utf8output $fileName && .\\$fileNameWithoutExt"
    },
    "code-runner.fileDirectoryAsCwd": true,
    "code-runner.preserveFocus": false,
    "code-runner.runInTerminal": true
}
```

## 参考

- [使用Code Runner在VS code中直接运行C#(.cs)文件 - PiZYDS](https://www.pizyds.com/code-runner-vs-code-cs/)

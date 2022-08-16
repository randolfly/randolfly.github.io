---
date: 2022-06-06
tag:
  - shell
  - powershell
  - config
category:
  - skill
  - shell
  - powershell
---


# 00-powershell 配置


## 定义

配置好看的 Powershell !!

## 方案

安装主题 `Oh-My-Posh`
- [Tooltips | Oh My Posh](https://ohmyposh.dev/docs/configuration/tooltips)
- 注意需要使用 [|scoop](./../../scoop/windows-scoop配置.md) 安装

其余的抄两个引文即可

此外在设置自动补全时会遇见：` A parameter cannot be found that matches parameter name 'PredictionViewStyle'`

解决方案：

1. `Get-InstalledModule -Name psreadline -AllVersions | Uninstall-Module`
2. To install latest _Beta_ release, open _Admin_ CMD:
	1. `pwsh.exe -noprofile -command "Install-Module PSReadLine -Force -AllowPrerelease -SkipPublisherCheck"`

使用 `update-help` 更新帮助时，会遇见问题：

是因为 PSReadLine 老版本的 Line 被认为是 line，从而找不到包。

`Update-Help: Failed to update Help for the module(s) 'ConfigDefenderPerformance, Dism, Get-NetView, Kds, NetQos, PcsvDevice, PKI, PSReadline, Whea, WindowsUpdate' with UI culture(s) {zh-CN} : One or more errors occurred. (Response status code does not indicate success: 404 (The specified blob does not exist.).).English-US help content is available and can be installed using: Update-Help -UICulture en-US.`

解决方案：

- [Powershell fails with Update - Stack Overflow](https://stackoverflow.com/questions/39834452/powershell-fails-with-update)
- [Update-Help fails for WindowsUpdateProvider · Issue #139 · MicrosoftDocs/windows-powershell-docs · GitHub](https://github.com/MicrosoftDocs/windows-powershell-docs/issues/139)
- [Updating help for the PSReadLine module - PowerShell Team](https://devblogs.microsoft.com/powershell/updating-help-for-the-psreadline-module/)

```powershell
 Update-Help -Verbose -Force -ErrorAction SilentlyContinue -UICulture en-US
```

## 参考

##### 引文

- [Windows Terminal美化+PowerShell插件配置 - DiaosSama's Blog](https://diaossama.work/2020/05/windows-terminal-powershell.html)
- [Windows Terminal 完美配置 PowerShell 7.1 - 知乎](https://zhuanlan.zhihu.com/p/137595941)
- [缩短命令、调整按键、自动补全，这些代码值得你放进 PowerShell 配置文件 - 少数派](https://sspai.com/post/73019)

##### 脚注

---
date: 2022-08-13
tag:
  - tex
  - bug
  - config
category:
  - skill
  - tex
---

# tex踩坑

# Tex 踩坑

## 定义

记录下 $\LaTeX$ 中的坑…

## 记录

## 编译错误😡

- `You can't use \'\eqno\' in math mode.`
	- 这个网上有人是打漏了括号导致的
		- ["you can't use \eqno in math mode" in Texlive 2009](https://latex.org/forum/viewtopic.php?t=7657)
	- 我是因为这个命令编译不出来：
		- `\left| x \righ|`
	- 应该改成 [^1]
		- `\left \vert x \right \vert`
		- 这里分隔符参考 [^2]

### 模板错误😅

- 使用 `Springer Latex template` 中的 `sn-mathphys` 编译不了 `bib`
	- 替换使用 `sn-vancuover` 或者 `sn-aps` [^3]，我个人是使用了 `sn-aps` 就可以了
	- 也有说法从 [Overleaf Springer LaTeX template](https://www.springernature.com/gp/authors/campaigns/latex-author-support) 使用模板可以

### 好用模块👍

- 限制图片/表格位置
	- 使用 [placeins](http://www.ctan.org/tex-archive/macros/latex/contrib/placeins/) 包去限制位置，使用 `\FloatBarrier` 去限制上下界.[^4]
	- `\usepackage[section]{placeins}`
	- 经典 `htbp` (here/top/buttom/float)
		- If you are using it add at least `p` so LaTeX can do float-only pages.

## 参考

##### 引文

- [\left & \right (LaTeX2e unofficial reference manual (January 2022))](https://latexref.xyz/_005cleft-_0026-_005cright.html)
- [Delimiters (LaTeX2e unofficial reference manual (January 2022))](https://latexref.xyz/Delimiters.html)

##### 脚注

[^1]: [\left & \right (LaTeX2e unofficial reference manual (January 2022))](https://latexref.xyz/_005cleft-_0026-_005cright.html)
[^2]: [Delimiters (LaTeX2e unofficial reference manual (January 2022))](https://latexref.xyz/Delimiters.html)
[^3]: [bibliographies - Unable to generate bibliography with Springer Latex template - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/615138/unable-to-generate-bibliography-with-springer-latex-template)
[^4]: [floats - How can I get the figures not to be pushed to the end of the document? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/11366/how-can-i-get-the-figures-not-to-be-pushed-to-the-end-of-the-document)

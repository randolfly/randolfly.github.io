---
date: 2022-08-17
tag:
  - CSharp
  - regex
category:
  - tool
  - dotNet
---

# CSharp Regex匹配


## 基本正则匹配

### 匹配

匹配是替换操作的子集，直接使用

```csharp
Regex.Match
```

就可以了

### 替换

#### 替换前 N 个

```csharp
Regex rgx = new Regex(pattern); 
string newFileText = rgx.Replace(fileText, "", 1);
```

这里是替换第 1 个

#### 替换全部

```csharp
string patternMd = @"(?<show>!?)\[(?<name>.*)\]\((?!http)(?<content>.+?)\)";
MatchEvaluator evaluator = new MatchEvaluator(x => ChangeWikiLink(x, filePath, destVaultPath));
string newFileText = Regex.Replace(fileText, patternMd, evaluator);


static string ChangeWikiLink(Match match, string filePath, string destVaultPath)
```

调用 `MatchEvaluator` 和 `Regex.Replace` 可以进行自定义批量替换操作

#### 平衡括号组替换

这个指的是希望替换匹配某个平衡组，类似匹配 html 中的 tag 之类的。下面给一个实际应用：

期望能够将 `TeX` 源码中的 `\color[RGB]{240, 0, 0}` 转换为 `\color{red}` 来实现在 `KaTeX` 中的正确显示，这就涉及到匹配 `{}` 的数目。代码如下：

```csharp
/// <summary>
/// 给文件中数学公式上下行增加空格，修改公式颜色设置
/// </summary>
/// <param name="fileText">文件信息</param>
/// <returns>替换完成的文本</returns>
public static string ReplaceMathText(this string fileText)
{
	string newText = fileText.Replace("
$$
", "\n
$$
\n");

	// equivalnet bracket search
	var pattern = @"
		\{                          # the first {
		\\color\[RGB\]\{[^{}]+\}    # The func name
		(?<content>                 # the content
			(?:                 
			[^\{\}]                 # Match all non-braces
			|
			(?<open> \{ )           # Match '{', and capture into 'open'
			|
			(?<-open> \} )          # Match '}', and delete the 'open' capture
			)+
			(?(open)(?!))           # Fails if 'open' stack isn't empty!
		)
		\}                          # Last '}'
	";
	MatchEvaluator evaluator = new MatchEvaluator(ReplaceTeXColor);
	string newFileText = Regex.Replace(newText, pattern, evaluator, RegexOptions.IgnorePatternWhitespace);
	return newFileText;

	static string ReplaceTeXColor(Match match)
	{
		string content = match.Groups["content"].Value.Trim();
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append(@"{\color{red}");
		stringBuilder.Append(content);
		stringBuilder.Append("}");
		return stringBuilder.ToString();
	}
}
```

这也应用在 obsidian 转 vuepress 博客项目中

## 方案

## 参考

##### 引文
- [使用RegEx平衡匹配括号](https://www.ape-ask.com/read-15828.html)
- [regex101: build, test, and debug regex](https://regex101.com/)
- [RegExr: Untitled 6io6i](https://regexr.com/6io6i)
##### 脚注

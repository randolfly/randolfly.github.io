---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - obsidian
---


# Dataview 使用

## 背景

Obsidian 原本是基于纯文本的，它只设计了基础的数据查询功能（也就是你打开 Obsidian 后能看到的搜索框），它本不支持将这些数据动态展示以及动态更替；不过事情在今年的 1 月 11 日~ 13 日这短短三天发生了变化，Obsidian 社区先后迎来了 Obsidian Query Language 插件以及 Dataview 插件，如果你曾经使用过这两者中的其一，你就会发现他们对数据都是动态索引、动态展示的，而这种方式就是我们所熟知的结构化查询语言，不过目前并不支持在查询后对对应的文本进行删改，因此只能说是 50% 结构化查询，侧重于执行查询、取回数据以及创建视图三大方面。

通过利用 Dataview 插件，你可以且轻易地实现倒计时功能、表格创建功能、任务查询功能等（当然还有各种聚合功能）；而随着 Dataview 的更新，它在原来只能使用已经封装好的函数的基础上，加上了对利用 Obsidian API 的支持，也就是说如果你懂或者照抄别人的 Javascript 代码，你就可以基于 Javascript 的代码逻辑对 Obsidian 的数据进行改动后展示，你可以任意删改其中的数据后再展示，例如，你发现自己获取的文字有一些想要标注拼音的，那么你可以利用 Dataview 对这些字符做专门的匹配后输出（只要利用 Markdown Furigana 插件就可以实现任意的字符串标注）：

![](extra/web-image/v2-e875c9e2dd34098cc7836dd72fe7130f_b.png)

## 基本用法

Dataview 插件目前支持多种索引方案，现在我们先来介绍其中最简单的一种，你只需要在任意笔记中插入下方内容即可生成相对应的列表，

### 表格

例如，如果你想要根据 Games 文件夹生成一个表格，而且表格的内容基于你这个文件夹中的每个文件的 YAML 进行索引，已知你设置了一些笔记的 YAML 为

```

```

然后你有一大堆类似的游戏笔记，那么你可以用下列的 Dataview 生成式来生成对应的表格

```
​```dataview
table time-played, length, rating
from "games"
sort rating desc
​```
```

如图：

![](extra/web-image/v2-128d52e2eb406645fcc5f48938edc953_r.jpg)

如果你问，如果你不想这个表头显示成英文，也很简单，你可以用 `AS` 来修改对应的表格头，例如：

```
​```dataview
table time-played AS "啥时候玩的", length AS "玩了多久", rating AS "多好玩"
from "games"
sort rating desc
​```
```

备注，其中的 `SORT` 命令可以是单个参数，例如 `sort rating desc` 指的就是以 `rating` 为参数降序，类似地，当你用 `sort rating asc` 的时候，代表的就是基于 `rating` 升序；那么也许你会想知道，那么怎么实现多个区域分别排序升序呢，很简单，参考下边的官方例子：

```
SORT rating [ASCENDING/DESCENDING/ASC/DESC], ..., time-played [ASC/DESC]
```

也是用 `,` 将多个排序命令分割开来即可。

而表格的所有设置可以看下边的代码以及对应的解释：

```
​```dataview
[list|table|task] field1, (field2 + field3) as myfield, ..., fieldN
from #tag or "folder" or [link.md](/) or outgoing([link.md](/))
where field [>|>=|<|<=|=|&|'|'] [field2|literal value] (and field2 ...) (or field3...)
sort field [ascending|descending|asc|desc] (ascending is implied if not provided)
​```
```

`list` 、`table` 、`task` 分别对应 dataview 的列表、表格以及任务内容；

`from` 指的是从哪里获取数据，可以从 `#tag` 标签获取、 从 `folder` 文件夹获取、从 `[link.md](/)` 链接获取，或者从链接了 link 的文件获取 `outgoing([link.md](/))` ；

`where` 指的是上边获取的数据，要符合怎样的规则，也就是筛选；

`sort` 指的是排序，默认升序。

### 列表

上边说完表格，现在来简单说一下列表，列表的生成更简单，只需要两行

```
​```dataview
list from #game/moba or #game/crpg
​```
```

然后就可以基于这两个标签来生成对应的列表了，如下：

![](extra/web-image/v2-12fedd7259290c4e2a48d0c8d2ea1b4a_b.jpg)

其它与表格的设置类似，也可以排序以及筛选。

### 任务列表

任务是 Dataview 单独支持的功能，可以让你从这些笔记中抽取任务且形成列表生成出来，如下：

```
​```dataview
task from #projects/active
​```
```

然后就可以生成：

![](extra/web-image/v2-6e27a80861f992868bad715a4384a1f8_r.jpg)

基于以上的代码，你其实就已经可以实现下图的效果了：

![](extra/web-image/v2-b02f24dafa107cbe7b1f3034843210d2_r.jpg)

而如果你想要实现类似的效果，你只需要在你的 Markdown 文件中设置对应的数据，例如上图中的：

```
#knowledgeTopic //用于获取数据的标签

Status:: Active
Importance::
Goals::
Pillars::
Habits and Routines::
Courses and Training::
```

然后使用下列的 Dataview 检索式进行索引：

```
​```dataview
table importance, file.mtime as Last_Modified__, pillars as Pillars__________________, habitsRoutines as Habits_and_Routines___, courses-and-training
from #knowledgeTopic
sort file.mtime desc
​```
```

当然你也可以用中文来添加：

```
#knowledgeTopic //用于获取数据的标签

状态:: 活跃中
重要性::
目标::
基于::
习惯::
课程::
```

然后用类似的检索式进行检索。不过为了避免出现奇奇怪怪的问题，建议还是使用英文字符进行标注，对应的数值可以采用中文，但是参数尽量采用英文。

当然，你也可以仅在 YAML 中添加，注意 Dataview 支持行内参数获取，例如 `参数:: 数值` 。如果你喜欢一个表格空内可以显示多个参数，那么如果你在使用行内参数，你需要用逗号分隔开来，例如 ` 重要性:: 非常重要,很重要,挺重要` ；要注意的是，需要用英文的逗号。以上你已经可以实现一个很不错的动态索引页面了。接下来我们将开始高级用法的简述，对于不想折腾的人可以直接跳到下一个章节的末尾自取对应的代码进行运用。

## 高级用法

Dataview 其实有两种可以称得上高级的用法，一种是采用行内代码块，也就是 `` 内填入对应的运算代码，一种是采用 Dataviewjs 来实现高级运算逻辑（以及高级显示逻辑）。

### 行内代码块

Dataview 目前支持的行内代码块主要是对于日期以及本页信息的显示，例如：

### 显示时间差

你可以用行内代码块计算出任意的时间差，如下：

```
`=(date(2021-12-31)-date(today))`
```

你就可以获得相关的时间差值，如下：

![](extra/web-image/v2-51e6e5d6aa72e711292f0ef6cdff7de5_b.jpg)

### 查看当前文件的信息

例如标签：

```
`= this.file.tags`
```

进入渲染模式后就会自动在对应的位置上显示你的当前文件的所有标签了。

以上就是基于行内代码块实现的高级用法，接下来开始介绍基于 DataviewJS 的高级用法。

## DataviewJS 代码块

正如它后边附带的 JS 所言，DataviewJS 在扩展了本身的函数能力的基础上，获得了所有 API 相关的操作权限以及几乎完全的 Javascript 能力。接下来先介绍 DataviewJS 已经封装好的几个主要显示函数（目前仅能通过这些函数来显示对应的参数）。

注意，DataviewJS 代码块用 dataviewjs 而不是 dataview

### 检索

* `dv.pages(source)`

根据标签或者文件夹返回页面参数，代码参考如下：

```
​```dataviewjs
dv.pages("#books") //返回所有带有标签 books 的页面
dv.pages('"folder"') //返回所有在 folder 文件夹的页面
dv.pages("#yes or -#no") //返回所有带有标签 yes 或者没有标签 no 的页面
dv.pages("") //返回所有页面
​```
```

* `dv.pagePaths(source)`

和上边类似，但是这个会返回文件路径作为参数

```
​```dataviewjs
dv.pagePaths("#books") //返回所有带有标签 books 的页面路径
dv.pagePaths('"folder"') //返回所有在 folder 文件夹的页面路径
dv.pagePaths("#yes or -#no") //返回所有带有标签 yes 或者没有标签 no 的页面路径
​```
```

* `dv.page(path)`

用于返回单个页面作为参数

```
​```dataviewjs
dv.page("Index") //返回名称为 Index 的页面
dv.page("books/The Raisin.md") //返回所有在 books 文件夹下的 The Raisin 文件的页面
​```
```

### 渲染

* `dv.header(level, text)`

用于渲染特定的文本为标题，其中 level 为层级，text 为文本。

* `dv.paragraph(text)`

用于渲染为段落，你可以理解成普通文本。

### Dataview 封装函数

### 列表

```
​```dataviewjs
dv.list([1, 2, 3]) //生成一个1，2，3的列表
dv.list(dv.pages().file.name)  //生成所有文件的文件名列表
dv.list(dv.pages().file.link)  //生成所有文件的文件链接列表，即双链
dv.list(dv.pages("").file.tags.distinct()) //生成所有标签的列表
dv.list(dv.pages("#book").where(p => p.rating > 7)) //生成在标签 book 内所有评分大于 7 的书本列表
​```
```

### 任务列表

默认为 `dv.taskList(tasks, groupByFile)` 其中任务需要用上文获取 `pages` 后，再用 `pages.file.tasks` 来获取，例如 `dv.pages("#project").file.tasks`。 而当 groupByFile 为 True 或者 1 的时候，会按照文件名分组。

```
​```dataviewjs
// 从所有带有标签 project 的页面中获取所有的任务生成列表
dv.taskList(dv.pages("#project").file.tasks)

// 从所有带有标签 project 的页面中获取所有的未完成任务生成列表
dv.taskList(dv.pages("#project").file.tasks
    .where(t => !t.completed))

// 从所有带有标签 project 的页面中获取所有的带有特定字符的任务生成列表
// 可以设置为特定日期
dv.taskList(dv.pages("#project").file.tasks
    .where(t => t.text.includes("#tag")))

// 将所有未完成且带有字符串的任务列出
dv.taskList(
    dv.pages("").file.tasks
    .where(t => t.text.includes("#todo") && !t.completed),1)
​```
```

### 表格

默认为 `dv.table(headers, elements)` ，提供表头和元素内容即可生成对应的表格。

例如：

```
​```dataviewjs
// 根据标签 book 对应的页面的 YAML 生成一个简单的表格，其中 map 为对应的内容所对应的表头，按顺序填入即可。
// b 可以是任意值，只是代表当前传入的文件为 b
dv.table(["File", "Genre", "Time Read", "Rating"], dv.pages("#book")
    .sort(b => b.rating)
    .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))
​```
```

看完以上的内容以后，如果你对表格或者获取的数据操作感兴趣的话，那你应该去查看官方提供的数据操作 API ，请查阅：[Data Arrays | Dataview](https://blacksmithgu.github.io/obsidian-dataview/docs/api/data-array)

## DataviewJS 示例

以下的方案目前已经经过一部分人的使用，大呼已经满足，而如果你还有其它的需求的话，可以去请教对 Javascript 熟悉的人，或者去官方论坛请教。此处感谢提供脚本的 @tzhou 以及在官方社区的 @shabegom

### 标签聚合

#### 简单版

```
​```dataviewjs
// 生成所有的标签且形成列表
dv.list(dv.pages("").file.tags.distinct())
​```
```

#### 改进版

```
​```dataviewjs
// 生成所有的标签且以 | 分割，修改时只需要修改 join(" | ") 里面的内容。
dv.paragraph(
  dv.pages("").file.tags.distinct().map(t => {return `[${t}](${t})`}).array().join(" | ")
)
​```
```

![](extra/web-image/v2-409842ee36188bff87c1a48ba5ea2239_r.jpg)

#### 高级版

```
​```dataviewjs
// 基于文件夹聚类所有的标签。
for (let group of dv.pages("").filter(p => p.file.folder != "").groupBy(p => p.file.folder.split("/")[0])) {
  dv.paragraph(`## ${group.key}`);
  dv.paragraph(
    dv.pages(`"${group.key}"`).file.tags.distinct().map(t => {return `[${t}](${t})`}).array().sort().join(" | "));
}
​```
```

效果如下：

![](extra/web-image/v2-3fe7e64309ae888ca0cac41635685929_r.jpg)

### 输出内容

#### 输出所有带有关键词的行

```
​```dataviewjs
//使用时修改关键词即可
const term = "关键词"
const files = app.vault.getMarkdownFiles()
const arr = files.map(async ( file) => {
const content = await app.vault.cachedRead(file)
const lines = content.split("\n").filter(line => line.contains(term))
return lines
})
Promise.all(arr).then(values => 
dv.list(values.flat()))
​```
```

如下：

![](extra/web-image/v2-ce72d265ebc2d61306622dce0e984e62_r.jpg)

#### 输出所有带有标签的文件名以及对应行且形成表格

```
​```dataviewjs
// 修改标签
const tag = "#active"
// 获取 Obsidian 中的所有 Markdown 文件
const files = app.vault.getMarkdownFiles()
// 将带有标签的文件筛选出来
const taggedFiles = new Set(files.reduce((acc, file) => {
    const tags = app.metadataCache.getFileCache(file).tags
    if (tags) {
      let filtered = tags.filter(t => t.tag === tag)
      if (filtered) {
        return [...acc, file]
      }
    }
    return acc
}, []))

// 创建带有标签的行数组
const arr = Array.from(taggedFiles).map(async(file) => {
  const content = await app.vault.cachedRead(file)
const lines = await content.split("\n").filter(line => line.includes(tag))
return [file.name, lines]
})

// 生成表格
Promise.all(arr).then(values => {
dv.table(["file", "lines"], values)
})
​```
```

#### 输出所有带有标签的文件链接以及对应行且形成表格

```
​```dataviewjs
// 获取 Obsidian 中的所有 Markdown 文件
const files = app.vault.getMarkdownFiles()

// 将带有标签的文件以及行筛选出来
let arr = files.map(async(file) => {
  const content = await app.vault.cachedRead(file)
//turn all the content into an array
let lines = await content.split("\n").filter(line => line.includes("#tag"))
return ["["+file.name.split(".")[0]+"](/)", lines]
})

// 生成表格，如果要将当前的文件排除的话，请修改其中的排除文件
Promise.all(arr).then(values => {
console.log(values)
//filter out files without "Happy" and the note with the dataview script
const exists = values.filter(value => value[1][0] && value[0] != "[排除文件.md](/)")
dv.table(["file", "lines"], exists)
})
​```
```

如下：

![](extra/web-image/v2-1abe55c9291d239d66cc0d1a08aab9c1_r.jpg)

### 输出任务

#### 简单版

输出所有带有标签 todo 以及未完成的任务

```
​```dataviewjs
// 修改其中的标签 todo 
dv.taskList(
    dv.pages("").file.tasks
    .where(t => t.text.includes("#todo") && !t.completed),1)
​```
```

#### 改进版

输出所有带有标签 todo 以及未完成的任务，且不包含当前文件

```
​```dataviewjs
// 修改其中的标签 todo 以及修改 LOLOLO
dv.taskList(
    dv.pages("").where(t => { return t.file.name != "LOLOLO" }).file.tasks
    .where(t => t.text.includes("#todo") && !t.completed),1)
​```
```

### 倒计时

#### 简单版

```
​```dataviewjs
// 修改其中的时间，可以输出当前离倒计时的时间差。
const setTime = new Date("2021/8/15 08:00:00");
const nowTime = new Date();
const restSec = setTime.getTime() - nowTime.getTime();
const day = parseInt(restSec / (60*60*24*1000));

const str = day + "天"

dv.paragraph(str);
​```
```

如下：

![](extra/web-image/v2-9b8aded0822c91d2ed478ac952e0c236_b.png)

#### 复杂版

```
​```dataviewjs
// 只要在任务后边加上时间（格式为 2020-01-01 ，就会在显示所有的任务的同时对应生成对应的倒计时之差
dv.paragraph(
  dv.pages("").file.tasks.array().map(t => {
   const reg = /\d{4}\-\d{2}\-\d{2}/;
 var d = t.text.match(reg);
 if (d != null) {
   var date = Date.parse(d);
   return `- ${t.text} -- ${Math.round((date - Date.now()) / 86400000)}天`
 };
 return `- ${t.text}`;
  }).join("\n")
)
​```
```

## Dataview 配合 Templater

如果你同时安装了 Templater 以及 Dataview 那么你可以用上边的 Templater 脚本快速输出你想要查询的字符串，且生成表格，对应的视频操作如下：

Dataview With Templater

对应的代码为，将代码放在模板文件中，用 Templater 调用这个模板即可。

```js
const files = app.vault.getMarkdownFiles()
const prompt = "<% tp.system.prompt("Query for") %>"

const fileObject = files.map(async (file) => {
const fileLink = "["+file.name.split(".")[0]+"](/)"
const content = await app.vault.cachedRead(file)
return {fileLink, content}
})

Promise.all(fileObject).then(files => {

let values = new Set(files.reduce((acc, file) => {
const lines = file.content.split("\n").filter(line => line.match(new RegExp(prompt, "i")))
if (lines[0] && !file.fileLink.includes("<% tp.file.title %>")) {
if (acc[0]) {
return [...acc, [file.fileLink, lines.join("\n")]]
} else {
return [file.fileLink, lines.join("\n")](/)
}
}
return acc
}, []))

dv.header(1, prompt)
dv.table(["file", "lines"], Array.from(values))

})
```

## 总结

如果说你想要追求动态展示的极致，那么 Dataview 是你的永远好朋友，但是它目前还没有将易用性提高到极限，而根据它未来的 Roadmap 来看，还会支持 Timeline、卡片视图等，也许在未来开发者会进一步加强 DataviewJs 的易用性，这样也许可以让更多不想写代码的人受益。不过对于是小白的用户来说，也可以考虑学会一点 JS， 这种学习过程也可以在 Obsidian 中即时得到反馈，而且说不定将来也可以基于 Templater 写脚本。

谢谢阅读，下次再见。

## 参考

- [Obsidian 插件之 Dataview - 知乎](https://zhuanlan.zhihu.com/p/373623264)

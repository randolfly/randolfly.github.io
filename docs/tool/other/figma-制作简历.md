---
date: 2022-06-06
tag:
  - figma
  - 简历
category:
  - tool
  - other
---

# figma 制作简历

# Figma 制作简历

> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [sspai.com](https://sspai.com/post/68950)

### Matrix 首页推荐

[Matrix](https://sspai.com/matrix) 是少数派的写作社区，我们主张分享真实的产品体验，有实用价值的经验与思考。我们会不定期挑选 Matrix 最优质的文章，展示来自用户的最真实的体验和观点。

文章代表作者个人观点，少数派仅对标题和排版略作修改。

在 [上一篇文章](https://sspai.com/post/67913) 中我们通过几个简单的封面制作大体上了解了 Figma 的基本操作，今天我们一起来设计一份稍微复杂一点的简历，来学习一下 Figma 中的一些高级操作。

构思
--

很多人对设计过程都有一个误解，认为设计师会一直在电脑前画图。其实，做设计中的前期构思也很重要，如果能花很多时间进行完整地构思，最后在软件中画图就是水到渠成。使用 Figma 设计简历也是一样，当你在心中构思好内容、布局、风格之后再动「笔」，在最后设计时就会「文思如泉涌」。所以，在进入 Figma 开始设计之前我先简单讲一下一份简历的构思。

### 内容

我们先简单构思一下这份简历的基本内容。一般简历最主要的部分包括基本信息、教育经历、工作（实习）经历和项目经历这四块，当然我们也可以加上个人评价、技能展示等部分，但这些都是锦上添花的内容。其中，实习经历、工作经历和项目经历可以按照 [STAR 法则](https://baike.baidu.com/item/STAR%25E6%25B3%2595%25E5%2588%2599/9056070) 去写。

![](https://cdn.sspai.com/editor/u_leadream/16324419572552.png)

关于个人评价和技能展示这两块，如果一定要写最好挑自己独特的点来写，而不是泛泛而谈。比如个人评价可以说「我是一个兼具感性与理性的人，情感细腻而又逻辑严谨」，而「我是一个富有责任感，乐于助人，学习勤奋的人」这种就显得比较普通而毫无吸引力了。

### 布局

简历中有一个「简」字，重在简洁，所以一般建议一页 A4 纸搞定，不必太过冗长。布局的话通常是一栏或两栏，大致按照上面的结构书写即可。如果不是创意工作者，不建议做得过于酷炫，采用常见的布局就可以了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572566.jpg)

### 风格

简历的风格以适合舒适阅读为准，不需要太花哨，建议一个主色搭配黑白灰。简历的字体用一种就可以了，使用粗细或字号来进行区分不同的模块，方便查阅者阅读。有些简历会通过五颜六色的图案来吸引招聘者阅读，但其实没太大必要，只需要简洁工整，其实就已经在大部分简历中脱颖而出了，因为以我以往阅读简历的经验来看，大部分简历都过于杂乱且很难阅读。

在这一小节我们最后做出的简历风格如下：

![](https://cdn.sspai.com/editor/u_leadream/16324419572575.jpg)

开始绘制
----

在构思过程中，你可以先用文档工具把简历内容写出来，写完后我们就可以在 Figma 中开始绘制了。首先我们按下 F 键，在右侧的预置尺寸中选择 Paper -> A4。

![](https://cdn.sspai.com/editor/u_leadream/16324419572585.jpg)

这时在画布中就有了一块 A4 大小的画板，选中它并按下 `Cmd+R`（Windows 下是 Ctrl+R，下文中快捷键只提供 macOS 的，如无特殊说明 Windows 下请自行将 Cmd 换为 Ctrl 键将 Option 换成 Alt 键），我们就可以给它改个名字了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572595.jpg)

### 布局参考线

想要简历看起来工整，我们需要把基本的对齐做好。一般设计软件中都有参考线，Figma 中也有，但是我要给大家介绍另一个更强大的布局参考工具——布局栅格（Layout and grid）。简单来说，它就是通过一些自定义的行和列来辅助排布元素。

因为我们的简历是两栏布局，所以我们可以给这张纸添加一个两列的布局参考。选中这张纸，在右侧有一个 Layout grid 的区域，点它就会自动添加一个 Grid 参考，也就是网格参考。可以看到此时左边的画板中出现了红色的网格，这些网格线并非设计元素，只是盖在设计图上面的半透明的参考线，在导出时是不会显示的。

![](https://cdn.sspai.com/editor/u_leadream/16324419572605.jpg)

我们要的是列参考，所以点击新添加的 Grid (10px) 这一行，会弹出布局栅格设置面板。我们在顶部将其从 Grid 切换为 Columns，也就是「列」，接着在下面的设置中填写列数、两侧边距和中间间距。设置完成后你会看到有两个半透明的列盖在上面，也就是我们需要的两栏效果。这个参考区域默认是 10% 的红色，如果你觉得这个红色太深了会干扰你的设计，也可以在这个面板中修改颜色不透明度。

![](https://cdn.sspai.com/editor/u_leadream/16324419572614.jpg)

同样地，我们点击 Layout grid 最右边的加号，再创建一个行参考。行参考不需要那么复杂，我们直接设置为一行，上下边距设置为 24px 即可。现在我们得到了一个两栏布局的参考区域，并且还得到了四个方向上的边距，接下来我们就可以在画板里面根据这个参考区域添加内容了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572624.jpg)

### 基本信息

个人基本信息就是左边一些文字右边一个头像，我们先添加头像。按下 `Cmd+Shift+K`，它会弹出文件选择器，选择你的头像照片然后在 A4 纸上点一下，你的头像就贴在那了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572634.jpg)

如果头像尺寸很大，我们需要稍微调整一下。选中头像，按住 Shift 键并用鼠标拖拽某个角，就可以等比缩放头像了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572643.jpg)

为了让简历看起来不那么死气沉沉，我准备用圆形的头像。因为我这个头像是正方形的，所以我只需要在右边设置其圆角为宽度的一半就可以了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572653.jpg)

如果你的头像是长方形的，你可以按下 Cmd 不松手的同时拖拽短边，将其拉伸为一个正方形。

![](https://cdn.sspai.com/editor/u_leadream/16324419572663.jpg)

接着按回车，就可以微调尺寸和位置了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572673.jpg)

现在开始创建一个文本图层来编写基本信息。按下 T，在头像左边点一下创建一个文本图层，输入你的个人信息。你也可以直接复制基本信息到剪切板，按下 `Cmd+V` 粘贴到画板中。需要注意的是，在粘贴之前一定要先选中简历画板，否则文字会被粘贴到画板之外，导出的时候就看不到它。

![](https://cdn.sspai.com/editor/u_leadream/16324419572682.jpg)

我们稍微调整一下文字排版，让它更容易阅读。首先设置为一个好看的中文字体，我是用云端字体 Noto Sans SC，你也可以用你喜欢的中文字体；接着，调整一下字号，经过几番实验 10px 比较合适；最后，设置一下行高，我这里输入的是 18px。

![](https://cdn.sspai.com/editor/u_leadream/16324419572691.jpg)

接下来我们选中名字这一行，将其字号加大到 16px 并加粗，并调整为一个自己喜欢的主题色，我选择蓝色。

![](https://cdn.sspai.com/editor/u_leadream/16324419572700.jpg)

Figma 画布中的文字是可以添加链接的，现在让我们给邮箱添加链接，方便别人点击给我们发邮件。选中你的邮箱，直接按下 Cmd+C，再按一下 Cmd+V 就可以了，此时邮箱下面会有下划线，如果退出编辑模式（按下 ESC）把鼠标移到上面，可以看到链接提示。当然你也可以选中文字之后按下 Cmd+K 来添加链接。

![](https://cdn.sspai.com/editor/u_leadream/16324419572709.jpg)

现在，我们调整一下基本信息和头像的位置，将其对齐。在你移动图层时，会显示红色的线来告诉你是否对齐。这样我们就可以很轻松地把文字和邮箱对齐到我们一开始创建的两栏布局中。

![](https://cdn.sspai.com/editor/u_leadream/16324419572718.jpg)

现在，选中文字和头像（你可以按住 Shift 点击图层多选，也可以直接在画板中拖拽框选），按下 `Cmd+Option+G`，将其打包为一个 frame。按下 `Cmd+R`，给这个 frame 重命名为「基本信息」。**Frame 是一个容器，我们可以给它添加背景色调节它的尺寸等，这方便我们按模块管理图层。**

![](https://cdn.sspai.com/editor/u_leadream/16324419572729.jpg)

### 教育经历

接下来，我们绘制教育经历。同样地，直接将文字复制进来，然后稍微调整一下样式。首行标题设置为 14px 大小，加粗并改为主题色。下面的两行文字可以使用列表样式，选中它们，点击右边文字设置右下角的三个点，在弹出的更多设置中设置列表样式。

当然，你也可以直接使用 Markdown 语法，输入 - 或者 * 然后按空格键，将这一行文字变为列表样式。

![](https://cdn.sspai.com/editor/u_leadream/16324419572739.jpg)

同样地，我们也按一下 `Cmd+Option+G` 将其打包为一个 frame，然后重命名为「教育经历」。然后，拖拽右边把它拉到和画板一样宽。你可能会好奇为什么只有一个文本图层也要打包成一个 frame，这是因为我们在 Figma 中养成使用 frame 把元素打包成一个个模块的好习惯，会让设计稿更容易维护，也会使很多事情变得简单。

![](https://cdn.sspai.com/editor/u_leadream/16324419572747.jpg)

### 工作经历

现在我们一起绘制左边的工作经历。还是一样地将文字复制进来，然后拖拽文本两侧将其对齐到左边这一栏。

![](https://cdn.sspai.com/editor/u_leadream/16324419572755.jpg)

接着逐个调整文字样式，标题还是和教育经历的保持一致，14px 加粗并使用主题色。每一段工作经历的标题加粗，并使用换行区分开来，公司（职位）和时间之间使用空格隔开，使其看起来像是两端对齐，并给网址添加链接。这样，我们的工作经历就做好了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572763.jpg)

选中这个文本图层，按下 `Cmd+Option+G` 将其打包为一个 frame，重命名为「工作经历」。如果此时你修改了内部的文字内容，这个 frame 的尺寸并不会跟着文字变化，你可以点击右上角的这个图标来让 frame 适应内容。

![](https://cdn.sspai.com/editor/u_leadream/16324419572771.jpg)

### 项目经历

项目经历和工作经历类似，此处不再赘述。在你画好之后，记得让工作经历和项目经历上面对齐。你可以拖动时观察红色指示线来对齐，也可以选中这两个模块，按下 Option+W 对齐。

> Figma 中可以使用 `Option+A/S/W/D`（游戏的方向键）来朝四个方向对齐。

![](https://cdn.sspai.com/editor/u_leadream/16324419572780.jpg)

在设计的过程中你需要时不时地看效果，如果 Layout grid 影响了观察设计你可以把它关掉。点击右上角视图比例，在下拉菜单中点击 Layout grids 就可以关掉了，再次点击可以开启，你也可以按快捷键（macOS 下是 `Ctrl+G`，Windows 下是 `Ctrl+Shift+4`）来快速开启关闭。

![](https://cdn.sspai.com/editor/u_leadream/16324419572788.jpg)

### 个人描述和更多信息

我们可以在最后添加「关于我」和「更多」的模块。「关于我」和上面的操作类似，不再多说。这里特别说一下「更多」中的那个箭头，这其实是两个字符：「-」 和 「>」。我们可以使用自带的 OpenType 字体 [Inter](https://rsms.me/inter/) 把它俩连在一起。输入「->」，选中它并将它切换为 Inter 字体，点击三个点在更多设置中找到 [Contextual alternates](https://www.typenetwork.com/news/article/opentype-at-work-contextual-alternates)，点击后面的勾即可。Contextual alternates 是一种 OpenType 字体特性，也叫做「上下文连字」，可以 [在特定情况下将多个字符连到一起变为一个新的字符](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide%23%25E8%25BF%259E%25E5%25AD%2597%25EF%25BC%2588cssxref(font-variant-ligatures)%25EF%25BC%2589)。

![](https://cdn.sspai.com/editor/u_leadream/16324419572815.jpg)

最后这两个模块内容不一样，但是我们可以把 frame 拉伸为一样大小，方便后续对齐。

![](https://cdn.sspai.com/editor/u_leadream/16324419572825.jpg)

### 快速排布

选中简历中的所有模块，在右下角会出现一个蓝色图标，点击它可以帮我们快速排布元素。

![](https://cdn.sspai.com/editor/u_leadream/16324419572833.jpg)

点击之后会显示很多粉红色的线和圆点，可以帮助我们调整排版。**拖拽粉红色圆点可以互换元素位置，拖拽粉红色的线可以调节横向和纵向间距**，当然我们也可以在右边输入框里面调节。这就是为什么我们前面使用 frame 打包每一个部分的原因，因为这样将元素打包成模块并适当调整尺寸，我们就可以使用这个快速排布来调整间距和位置。

![](https://cdn.sspai.com/editor/u_leadream/16324419572841.jpg)

发送和导出
-----

简历做好之后，可以通过分享链接发送给别人。选中简历，点击右上角的分享，在分享面板中设置 Anyone with the link can view（任何人知道链接就能打开），也可以设置邮箱邀请可见，然后复制链接发送即可。

![](https://cdn.sspai.com/editor/u_leadream/16324419572849.jpg)

不过，这种方式可能打不开或者打开很慢，我们也可以选择导出 PDF。选中简历，在右侧滚动到最下面的 Export，添加一个 Export，设置格式为 PDF，点击按钮导出。

![](https://cdn.sspai.com/editor/u_leadream/16324419572858.jpg)

如果你的 PDF 有多页，可以按下 `Cmd+P`，搜索 PDF，在下面的选项中选择 Export frames to PDF，就可以导出当前页面中的所有画板为一个 PDF 了。

![](https://cdn.sspai.com/editor/u_leadream/16324419572868.jpg)

从 Figma 导出的 PDF 文字可以选择，链接可以点击，还是挺不错的，不过就是有点大，可以去 [Smallpdf](https://smallpdf.com/compress-pdf) 压缩一下。

![](https://cdn.sspai.com/editor/u_leadream/16324419572879.jpg)

现在，开始投递你的简历吧。

**本文源文件：**[https://www.figma.com/file/0kgC960LDLmzeJcW3RVFs8/Let's-Figma?node-id=272%3A12](https://www.figma.com/file/0kgC960LDLmzeJcW3RVFs8/Let's-Figma?node-id=272%3A12) **，如需使用请点击 Duplicate 菜单复制一份，不要申请编辑。**

![](https://cdn.sspai.com/editor/u_leadream/16324419572887.jpg)

> 下载少数派 [客户端](https://sspai.com/page/client) 、关注 [少数派公众号](https://sspai.com/s/J71e) ，了解更妙的数字生活 🍃

## 参考

- [用 Figma 做一份个人简历 - 少数派 (sspai.com)](https://sspai.com/post/68950)

---
date: 2022-06-06
tag:
  - hexo
  - blog
category:
  - tool
  - blog
---

# Hexo 建站Bug

# Hexo 建站 Bug


转码， 原文地址 [xcoding.tech](http://xcoding.tech/2020/01/18/hexo/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%A0%B9%E6%9C%AC%E8%A7%A3%E5%86%B3hexo%E4%B8%8D%E5%85%BC%E5%AE%B9%7B%7B%7D%7D%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98/)


## 报错
--------------

如果你的博客是使用 github+hexo 搭建的，很可能也遇到过由于 `nunjucks` 模板标签导致 MD 文件解析报错的问题，常见问题如下：

```
15:07:29.010 FATAL Something is wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path) [Line 37, Column 81]
  expected variable end
    at Object._prettifyError (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/lib.js:36:11)
    at Template.render (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:524:21)
    at Environment.renderString (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:362:17)
    at Promise (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/extend/tag.js:66:9)
    at Promise._execute (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/debuggability.js:303:9)
    at Promise._resolveFromExecutor (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:483:18)
```

或者：

```
Unhandled rejection Template render error: (unknown path) [Line 10, Column 95]
  unexpected token: #
    at Object._prettifyError (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/lib.js:36:11)
    at Template.render (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:524:21)
    at Environment.renderString (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:362:17)
    at Promise (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/extend/tag.js:66:9)
    at Promise._execute (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/debuggability.js:303:9)
    at Promise._resolveFromExecutor (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:483:18)
    at new Promise (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:79:10)
    at Tag.render (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/extend/tag.js:64:10)
    at Object.tagFilter [as onRenderEnd] (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/hexo/post.js:230:16)
    at Promise.then.then.result (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/hexo/render.js:65:19)
    at tryCatcher (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:512:31)
    at Promise._settlePromise (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:569:18)
    at Promise._settlePromise0 (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:614:10)
    at Promise._settlePromises (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:693:18)
    at Async._drainQueue (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/async.js:133:16)
    at Async._drainQueues (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/async.js:143:10)
    at Immediate.Async.drainQueues (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/async.js:17:14)
    at runCallback (timers.js:651:20)
    at tryOnImmediate (timers.js:624:5)
    at processImmediate [as _immediateCallback] (timers.js:596:5)
```

出现上述原因都是因为你的 Markdown 文件中有标签与 `nunjucks` 模板引擎的标签冲突了，比如 ``{{}}`，`{#`， `{%`，这些标签都是模板引擎的，如果 Markdown 文件中有这些标签，那么在解析的是就会把 Markdown 中的标签动态解析了。通常情况下是不允许的。 有关模板引擎 nunjucks 更多相关信息请转到 [https://mozilla.github.io/nunjucks/cn/getting-started.html](https://mozilla.github.io/nunjucks/cn/getting-started.html) 在hoxe 的官网上有很多[相关的提问](https://github.com/hexojs/hexo/issues?utf8=%E2%9C%93&q=unexpected+token)，上面也提供了解决方案（本文的方案 1），但是都不太好。 ## 处理方案 1 特别是你执行 `hexo g` 命令的时候就会提示 Markdown 文件解析错误。 网上很多方法都是使用如下标签处理。``

```
{% raw %}
{{name}}
{% endraw %}
```

`` 但是治标不治本啊，如果是用这个标签处理，那么你后续的 Markdown 文件内容但凡是包含 `{{}}`` 或者 `{{#}}`等等这些标签的内容都会解析失败，那么有什么好的处理方案呢？

## 处理方案2
------------------------

答案是有的，我们可以直接修改`nunjucks` 模板的源代码，找到如下文件：

```
node_modules/nunjucks/src/lexer.js
```

在文件的开头可以看到如下代码：

```
'use strict';

var lib = require('./lib');

var whitespaceChars = " \n\t\r\xA0";
var delimChars = '()[]{}%*-+~/#,:|.%3C>=!';
var intChars = '0123456789';
var BLOCK_START = '{%';
var BLOCK_END = '%}';
var VARIABLE_START = '{$';
var VARIABLE_END = '$}';
var COMMENT_START = '{@';
var COMMENT_END = '@}';
var TOKEN_STRING = 'string';
```

可以直接改了这些渲染标签，比如我的 Markdown 文件中就是需要显示 `{{name}}` 这一类代码。那么你可以这么做：

```
// 原文做法
var VARIABLE_START = '{$';
var VARIABLE_END = '$}';

// ====================
// randolf 做法
// var VARIABLE_START = '{{';

// var VARIABLE_END = '}}';

// var COMMENT_START = '{#';

// var COMMENT_END = '#}';

var VARIABLE_START = '{@';

var VARIABLE_END = '@}';

var COMMENT_START = '{$';

var COMMENT_END = '$}';
```

**此外，在同一插件下的 browser 里面的对应名称也要改, nunjunks. js. map 啥的都要改**

把模板引擎的占位符修改为其他字符之后，这样模板解析的时候就不会跟你的 Markdown 内容冲突了，而且是对所有 Markdown 文件都有效的。

但是需要注意的时候，如果你在项目下执行 `npm install` 更新 `nunjucks` 模板，那么你修改的 `node_modules/nunjucks/src/lexer.js` 会被还原，需要重新修改一遍。
但是相对于每个 Markdown 都修改还是有很大好处的。

如果你的博客使用 `hexo-generator-feed` 或者 `hexo-generator-search` 或者是其他依赖于 hexo 的插件，那么你也需要同步修改这些插件的模板处理标签。
比如 `hexo-generator-search` 这个插件，通常是用于搜索，比如本站的搜索功能，这些插件也是依赖于 `nunjucks` 模板的，所以你也要修改他们的源代码，一搜索插件为例：

修改如下文件的标签：

```
node_modules/hexo-generator-search/templates/search.xml
```

把文件内容里的 `{` 改为 `{$` 即可，这个修改是根据你前面的 `nunjucks` 修改而定的。

```
<?xml version="1.0" encoding="utf-8"?>
<search> 
  {% if posts %}
    {% for post in posts.toArray() %}
    <entry>
      <title>{$ post.title $}</title>
      <link href="{$ (url + post.path) | uriencode $}"/>
      <url>{$ (url + post.path) | uriencode $}</url>
      <content type="html"><![CDATA[{$ post.content | noControlChars | safe $}]]></content>
      {% if post.categories and post.categories.length>0 %}
      <categories>
          {% for cate in post.categories.toArray() %}
          <category> {$ cate.name $} </category>
          {% endfor %}
      </categories>
      {% endif %}
      {% if post.tags and post.tags.length>0 %}
        <tags>
            {% for tag in post.tags.toArray() %}
            <tag> {$ tag.name $} </tag>
            {% endfor %}
        </tags>
      {% endif %}
    </entry>
    {% endfor %}
  {% endif %}
  {% if pages %}
    {% for page in pages.toArray() %}
    <entry>
      <title>{$ page.title $}</title>
      <link href="{$ (url + page.path) | uriencode $}"/>
      <url>{$ (url + page.path) | uriencode $}</url>
      <content type="html"><![CDATA[{$ page.content | noControlChars | safe $}]]></content>
    </entry>
    {% endfor %}
  {% endif %}
</search>
```

其他插件处理方法类似，找到模板解析标签全局修改即可。

## 方案 3
------------------

> **注意这个方案不需要修改 nunjunks**

提供一个一劳永逸的方案，修改项目的 `package.json` 文件，把 `hexo-generator-feed`、`hexo-generator-search` 改为我重新处理过的插件即可。

```
{
  "name": "xcoding",
  "version": "0.0.1",
  "private": true,
  "hexo": {
    "version": "3.7.1"
  },
  "dependencies": {
    "hexo-generator-feed-cst": "^0.1.0",
    "hexo-generator-search-cst": "^0.1.0",
  }
}
```

修改完 `package.json` 之后执行命令 `npm install` 重新安装依赖。安装完毕后重新启动 hexo。这两个插件相关的配置都不需要做任何修改，也不用担心查询更新后被覆盖。>)

最终 **lexer. js** 形式 (12 行)
```js
// var VARIABLE_START = '{{';

// var VARIABLE_END = '}}';

// var COMMENT_START = '{#';

// var COMMENT_END = '#}';

var VARIABLE_START = '{$';

var VARIABLE_END = '$}';

var COMMENT_START = '{@';

var COMMENT_END = '@}';
```

**nunjunk. js**(4894 行)
```js
var VARIABLE_START = '{{';

var VARIABLE_END = '}}';

var COMMENT_START = '{#';

var COMMENT_END = '#}';

// var VARIABLE_START = '{$';

// var VARIABLE_END = '$}';

// var COMMENT_START = '{@';

// var COMMENT_END = '@}';
```

**\_config. fluid. yml** 关闭默认 search:
```js
# 搜索功能，基于 hexo-generator-search 插件，若已安装其他搜索插件请关闭此功能，以避免生成多余的索引文件

# Search feature, based on hexo-generator-search. If you have installed other search plugins, please disable this feature to avoid generating redundant index files

# search:

#   enable: false

  

#   # 搜索索引文件的路径，可以是相对路径或外站的绝对路径

#   # Path for search index file, it can be a relative path or an absolute path

#   path: /local-search.xml

  

#   # 文件生成在本地的位置，必须是相对路径

#   # The location where the index file is generated locally, it must be a relative location

#   generate_path: /local-search.xml

  

#   # 搜索的范围

#   # Search field

#   # Options: post | page | all

#   field: post

  

#   # 搜索是否扫描正文

#   # If true, search will scan the post content

#   content: true

search:

 path: search.xml

 field: post
```

## 其余问题

注意搜索后得到的文件差了 url，因此修改 **hexo-theme-fluid/source/js/local-search. js** 第 92 行的拼接地址为：
```js
if (data_url.startsWith("//")) {

 data_url = data_url.substr(1);

 }

 resultHTML += '<a href=\'https://' + window.location.host + data_url + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + orig_data_title + '</a>';
```

## 参考

##### 引文

- [xcoding.tech](http://xcoding.tech/2020/01/18/hexo/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%A0%B9%E6%9C%AC%E8%A7%A3%E5%86%B3hexo%E4%B8%8D%E5%85%BC%E5%AE%B9%7B%7B%7D%7D%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98/)

##### 脚注

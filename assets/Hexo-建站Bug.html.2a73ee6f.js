import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,a as n,b as a,d as e,e as d,r}from"./app.5cb55dd7.js";const o={},c=n("h1",{id:"hexo-\u5EFA\u7AD9-bug",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hexo-\u5EFA\u7AD9-bug","aria-hidden":"true"},"#"),e(" Hexo \u5EFA\u7AD9 Bug")],-1),u=e("\u8F6C\u7801\uFF0C \u539F\u6587\u5730\u5740 "),v={href:"http://xcoding.tech/2020/01/18/hexo/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%A0%B9%E6%9C%AC%E8%A7%A3%E5%86%B3hexo%E4%B8%8D%E5%85%BC%E5%AE%B9%7B%7B%7D%7D%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98/",target:"_blank",rel:"noopener noreferrer"},p=e("xcoding.tech"),m=d(`<h2 id="\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u62A5\u9519" aria-hidden="true">#</a> \u62A5\u9519</h2><p>--</p><p>\u5982\u679C\u4F60\u7684\u535A\u5BA2\u662F\u4F7F\u7528 github+hexo \u642D\u5EFA\u7684\uFF0C\u5F88\u53EF\u80FD\u4E5F\u9047\u5230\u8FC7\u7531\u4E8E <code>nunjucks</code> \u6A21\u677F\u6807\u7B7E\u5BFC\u81F4 MD \u6587\u4EF6\u89E3\u6790\u62A5\u9519\u7684\u95EE\u9898\uFF0C\u5E38\u89C1\u95EE\u9898\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>15:07:29.010 FATAL Something is wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Template render error: (unknown path) [Line 37, Column 81]
  expected variable end
    at Object._prettifyError (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/lib.js:36:11)
    at Template.render (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:524:21)
    at Environment.renderString (/Users/ubuntuvim/git/xcoding/node_modules/nunjucks/src/environment.js:362:17)
    at Promise (/Users/ubuntuvim/git/xcoding/node_modules/hexo/lib/extend/tag.js:66:9)
    at Promise._execute (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/debuggability.js:303:9)
    at Promise._resolveFromExecutor (/Users/ubuntuvim/git/xcoding/node_modules/bluebird/js/release/promise.js:483:18)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Unhandled rejection Template render error: (unknown path) [Line 10, Column 95]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u73B0\u4E0A\u8FF0\u539F\u56E0\u90FD\u662F\u56E0\u4E3A\u4F60\u7684 Markdown \u6587\u4EF6\u4E2D\u6709\u6807\u7B7E\u4E0E <code>nunjucks</code> \u6A21\u677F\u5F15\u64CE\u7684\u6807\u7B7E\u51B2\u7A81\u4E86\uFF0C\u6BD4\u5982 <code>{{}}\`\uFF0C\`{#\`\uFF0C \`{%\`\uFF0C\u8FD9\u4E9B\u6807\u7B7E\u90FD\u662F\u6A21\u677F\u5F15\u64CE\u7684\uFF0C\u5982\u679C Markdown \u6587\u4EF6\u4E2D\u6709\u8FD9\u4E9B\u6807\u7B7E\uFF0C\u90A3\u4E48\u5728\u89E3\u6790\u7684\u662F\u5C31\u4F1A\u628A Markdown \u4E2D\u7684\u6807\u7B7E\u52A8\u6001\u89E3\u6790\u4E86\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u662F\u4E0D\u5141\u8BB8\u7684\u3002 \u6709\u5173\u6A21\u677F\u5F15\u64CE nunjucks \u66F4\u591A\u76F8\u5173\u4FE1\u606F\u8BF7\u8F6C\u5230 [https://mozilla.github.io/nunjucks/cn/getting-started.html](https://mozilla.github.io/nunjucks/cn/getting-started.html) \u5728hoxe \u7684\u5B98\u7F51\u4E0A\u6709\u5F88\u591A[\u76F8\u5173\u7684\u63D0\u95EE](https://github.com/hexojs/hexo/issues?utf8=%E2%9C%93&amp;q=unexpected+token)\uFF0C\u4E0A\u9762\u4E5F\u63D0\u4F9B\u4E86\u89E3\u51B3\u65B9\u6848\uFF08\u672C\u6587\u7684\u65B9\u6848 1\uFF09\uFF0C\u4F46\u662F\u90FD\u4E0D\u592A\u597D\u3002 ## \u5904\u7406\u65B9\u6848 1 \u7279\u522B\u662F\u4F60\u6267\u884C \`hexo g\` \u547D\u4EE4\u7684\u65F6\u5019\u5C31\u4F1A\u63D0\u793A Markdown \u6587\u4EF6\u89E3\u6790\u9519\u8BEF\u3002 \u7F51\u4E0A\u5F88\u591A\u65B9\u6CD5\u90FD\u662F\u4F7F\u7528\u5982\u4E0B\u6807\u7B7E\u5904\u7406\u3002</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{% raw %}
{{name}}
{% endraw %}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code> \u4F46\u662F\u6CBB\u6807\u4E0D\u6CBB\u672C\u554A\uFF0C\u5982\u679C\u662F\u7528\u8FD9\u4E2A\u6807\u7B7E\u5904\u7406\uFF0C\u90A3\u4E48\u4F60\u540E\u7EED\u7684 Markdown \u6587\u4EF6\u5185\u5BB9\u4F46\u51E1\u662F\u5305\u542B \`{{}}</code> \u6216\u8005 <code>{{#}}</code>\u7B49\u7B49\u8FD9\u4E9B\u6807\u7B7E\u7684\u5185\u5BB9\u90FD\u4F1A\u89E3\u6790\u5931\u8D25\uFF0C\u90A3\u4E48\u6709\u4EC0\u4E48\u597D\u7684\u5904\u7406\u65B9\u6848\u5462\uFF1F</p><h2 id="\u5904\u7406\u65B9\u68482" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u65B9\u68482" aria-hidden="true">#</a> \u5904\u7406\u65B9\u68482</h2><p>\u7B54\u6848\u662F\u6709\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539<code>nunjucks</code> \u6A21\u677F\u7684\u6E90\u4EE3\u7801\uFF0C\u627E\u5230\u5982\u4E0B\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node_modules/nunjucks/src/lexer.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u7684\u5F00\u5934\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;use strict&#39;;

var lib = require(&#39;./lib&#39;);

var whitespaceChars = &quot; \\n\\t\\r\\xA0&quot;;
var delimChars = &#39;()[]{}%*-+~/#,:|.%3C&gt;=!&#39;;
var intChars = &#39;0123456789&#39;;
var BLOCK_START = &#39;{%&#39;;
var BLOCK_END = &#39;%}&#39;;
var VARIABLE_START = &#39;{$&#39;;
var VARIABLE_END = &#39;$}&#39;;
var COMMENT_START = &#39;{@&#39;;
var COMMENT_END = &#39;@}&#39;;
var TOKEN_STRING = &#39;string&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u76F4\u63A5\u6539\u4E86\u8FD9\u4E9B\u6E32\u67D3\u6807\u7B7E\uFF0C\u6BD4\u5982\u6211\u7684 Markdown \u6587\u4EF6\u4E2D\u5C31\u662F\u9700\u8981\u663E\u793A <code>{{name}}</code> \u8FD9\u4E00\u7C7B\u4EE3\u7801\u3002\u90A3\u4E48\u4F60\u53EF\u4EE5\u8FD9\u4E48\u505A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u539F\u6587\u505A\u6CD5
var VARIABLE_START = &#39;{$&#39;;
var VARIABLE_END = &#39;$}&#39;;

// ====================
// randolf \u505A\u6CD5
// var VARIABLE_START = &#39;{{&#39;;

// var VARIABLE_END = &#39;}}&#39;;

// var COMMENT_START = &#39;{#&#39;;

// var COMMENT_END = &#39;#}&#39;;

var VARIABLE_START = &#39;{@&#39;;

var VARIABLE_END = &#39;@}&#39;;

var COMMENT_START = &#39;{$&#39;;

var COMMENT_END = &#39;$}&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6B64\u5916\uFF0C\u5728\u540C\u4E00\u63D2\u4EF6\u4E0B\u7684 browser \u91CC\u9762\u7684\u5BF9\u5E94\u540D\u79F0\u4E5F\u8981\u6539, nunjunks. js. map \u5565\u7684\u90FD\u8981\u6539</strong></p><p>\u628A\u6A21\u677F\u5F15\u64CE\u7684\u5360\u4F4D\u7B26\u4FEE\u6539\u4E3A\u5176\u4ED6\u5B57\u7B26\u4E4B\u540E\uFF0C\u8FD9\u6837\u6A21\u677F\u89E3\u6790\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u8DDF\u4F60\u7684 Markdown \u5185\u5BB9\u51B2\u7A81\u4E86\uFF0C\u800C\u4E14\u662F\u5BF9\u6240\u6709 Markdown \u6587\u4EF6\u90FD\u6709\u6548\u7684\u3002</p><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4F60\u5728\u9879\u76EE\u4E0B\u6267\u884C <code>npm install</code> \u66F4\u65B0 <code>nunjucks</code> \u6A21\u677F\uFF0C\u90A3\u4E48\u4F60\u4FEE\u6539\u7684 <code>node_modules/nunjucks/src/lexer.js</code> \u4F1A\u88AB\u8FD8\u539F\uFF0C\u9700\u8981\u91CD\u65B0\u4FEE\u6539\u4E00\u904D\u3002 \u4F46\u662F\u76F8\u5BF9\u4E8E\u6BCF\u4E2A Markdown \u90FD\u4FEE\u6539\u8FD8\u662F\u6709\u5F88\u5927\u597D\u5904\u7684\u3002</p><p>\u5982\u679C\u4F60\u7684\u535A\u5BA2\u4F7F\u7528 <code>hexo-generator-feed</code> \u6216\u8005 <code>hexo-generator-search</code> \u6216\u8005\u662F\u5176\u4ED6\u4F9D\u8D56\u4E8E hexo \u7684\u63D2\u4EF6\uFF0C\u90A3\u4E48\u4F60\u4E5F\u9700\u8981\u540C\u6B65\u4FEE\u6539\u8FD9\u4E9B\u63D2\u4EF6\u7684\u6A21\u677F\u5904\u7406\u6807\u7B7E\u3002 \u6BD4\u5982 <code>hexo-generator-search</code> \u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u901A\u5E38\u662F\u7528\u4E8E\u641C\u7D22\uFF0C\u6BD4\u5982\u672C\u7AD9\u7684\u641C\u7D22\u529F\u80FD\uFF0C\u8FD9\u4E9B\u63D2\u4EF6\u4E5F\u662F\u4F9D\u8D56\u4E8E <code>nunjucks</code> \u6A21\u677F\u7684\uFF0C\u6240\u4EE5\u4F60\u4E5F\u8981\u4FEE\u6539\u4ED6\u4EEC\u7684\u6E90\u4EE3\u7801\uFF0C\u4E00\u641C\u7D22\u63D2\u4EF6\u4E3A\u4F8B\uFF1A</p><p>\u4FEE\u6539\u5982\u4E0B\u6587\u4EF6\u7684\u6807\u7B7E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>node_modules/hexo-generator-search/templates/search.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A\u6587\u4EF6\u5185\u5BB9\u91CC\u7684 <code>{</code> \u6539\u4E3A <code>{$</code> \u5373\u53EF\uFF0C\u8FD9\u4E2A\u4FEE\u6539\u662F\u6839\u636E\u4F60\u524D\u9762\u7684 <code>nunjucks</code> \u4FEE\u6539\u800C\u5B9A\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;search&gt; 
  {% if posts %}
    {% for post in posts.toArray() %}
    &lt;entry&gt;
      &lt;title&gt;{$ post.title $}&lt;/title&gt;
      &lt;link href=&quot;{$ (url + post.path) | uriencode $}&quot;/&gt;
      &lt;url&gt;{$ (url + post.path) | uriencode $}&lt;/url&gt;
      &lt;content type=&quot;html&quot;&gt;&lt;![CDATA[{$ post.content | noControlChars | safe $}]]&gt;&lt;/content&gt;
      {% if post.categories and post.categories.length&gt;0 %}
      &lt;categories&gt;
          {% for cate in post.categories.toArray() %}
          &lt;category&gt; {$ cate.name $} &lt;/category&gt;
          {% endfor %}
      &lt;/categories&gt;
      {% endif %}
      {% if post.tags and post.tags.length&gt;0 %}
        &lt;tags&gt;
            {% for tag in post.tags.toArray() %}
            &lt;tag&gt; {$ tag.name $} &lt;/tag&gt;
            {% endfor %}
        &lt;/tags&gt;
      {% endif %}
    &lt;/entry&gt;
    {% endfor %}
  {% endif %}
  {% if pages %}
    {% for page in pages.toArray() %}
    &lt;entry&gt;
      &lt;title&gt;{$ page.title $}&lt;/title&gt;
      &lt;link href=&quot;{$ (url + page.path) | uriencode $}&quot;/&gt;
      &lt;url&gt;{$ (url + page.path) | uriencode $}&lt;/url&gt;
      &lt;content type=&quot;html&quot;&gt;&lt;![CDATA[{$ page.content | noControlChars | safe $}]]&gt;&lt;/content&gt;
    &lt;/entry&gt;
    {% endfor %}
  {% endif %}
&lt;/search&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u63D2\u4EF6\u5904\u7406\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u627E\u5230\u6A21\u677F\u89E3\u6790\u6807\u7B7E\u5168\u5C40\u4FEE\u6539\u5373\u53EF\u3002</p><h2 id="\u65B9\u6848-3" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-3" aria-hidden="true">#</a> \u65B9\u6848 3</h2><blockquote><p><strong>\u6CE8\u610F\u8FD9\u4E2A\u65B9\u6848\u4E0D\u9700\u8981\u4FEE\u6539 nunjunks</strong></p></blockquote><p>\u63D0\u4F9B\u4E00\u4E2A\u4E00\u52B3\u6C38\u9038\u7684\u65B9\u6848\uFF0C\u4FEE\u6539\u9879\u76EE\u7684 <code>package.json</code> \u6587\u4EF6\uFF0C\u628A <code>hexo-generator-feed</code>\u3001<code>hexo-generator-search</code> \u6539\u4E3A\u6211\u91CD\u65B0\u5904\u7406\u8FC7\u7684\u63D2\u4EF6\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;xcoding&quot;,
  &quot;version&quot;: &quot;0.0.1&quot;,
  &quot;private&quot;: true,
  &quot;hexo&quot;: {
    &quot;version&quot;: &quot;3.7.1&quot;
  },
  &quot;dependencies&quot;: {
    &quot;hexo-generator-feed-cst&quot;: &quot;^0.1.0&quot;,
    &quot;hexo-generator-search-cst&quot;: &quot;^0.1.0&quot;,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C <code>package.json</code> \u4E4B\u540E\u6267\u884C\u547D\u4EE4 <code>npm install</code> \u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002\u5B89\u88C5\u5B8C\u6BD5\u540E\u91CD\u65B0\u542F\u52A8 hexo\u3002\u8FD9\u4E24\u4E2A\u63D2\u4EF6\u76F8\u5173\u7684\u914D\u7F6E\u90FD\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u4FEE\u6539\uFF0C\u4E5F\u4E0D\u7528\u62C5\u5FC3\u67E5\u8BE2\u66F4\u65B0\u540E\u88AB\u8986\u76D6\u3002&gt;)</p><p>\u6700\u7EC8 <strong>lexer. js</strong> \u5F62\u5F0F (12 \u884C)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// var VARIABLE_START = &#39;{{&#39;;</span>

<span class="token comment">// var VARIABLE_END = &#39;}}&#39;;</span>

<span class="token comment">// var COMMENT_START = &#39;{#&#39;;</span>

<span class="token comment">// var COMMENT_END = &#39;#}&#39;;</span>

<span class="token keyword">var</span> <span class="token constant">VARIABLE_START</span> <span class="token operator">=</span> <span class="token string">&#39;{$&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">VARIABLE_END</span> <span class="token operator">=</span> <span class="token string">&#39;$}&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">COMMENT_START</span> <span class="token operator">=</span> <span class="token string">&#39;{@&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">COMMENT_END</span> <span class="token operator">=</span> <span class="token string">&#39;@}&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nunjunk. js</strong>(4894 \u884C)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token constant">VARIABLE_START</span> <span class="token operator">=</span> <span class="token string">&#39;{{&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">VARIABLE_END</span> <span class="token operator">=</span> <span class="token string">&#39;}}&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">COMMENT_START</span> <span class="token operator">=</span> <span class="token string">&#39;{#&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token constant">COMMENT_END</span> <span class="token operator">=</span> <span class="token string">&#39;#}&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// var VARIABLE_START = &#39;{$&#39;;</span>

<span class="token comment">// var VARIABLE_END = &#39;$}&#39;;</span>

<span class="token comment">// var COMMENT_START = &#39;{@&#39;;</span>

<span class="token comment">// var COMMENT_END = &#39;@}&#39;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>_config. fluid. yml</strong> \u5173\u95ED\u9ED8\u8BA4 search:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code># \u641C\u7D22\u529F\u80FD\uFF0C\u57FA\u4E8E hexo<span class="token operator">-</span>generator<span class="token operator">-</span>search \u63D2\u4EF6\uFF0C\u82E5\u5DF2\u5B89\u88C5\u5176\u4ED6\u641C\u7D22\u63D2\u4EF6\u8BF7\u5173\u95ED\u6B64\u529F\u80FD\uFF0C\u4EE5\u907F\u514D\u751F\u6210\u591A\u4F59\u7684\u7D22\u5F15\u6587\u4EF6

# Search feature<span class="token punctuation">,</span> based on hexo<span class="token operator">-</span>generator<span class="token operator">-</span>search<span class="token punctuation">.</span> If you have installed other search plugins<span class="token punctuation">,</span> please disable <span class="token keyword">this</span> feature to avoid generating redundant index files

# search<span class="token operator">:</span>

#   enable<span class="token operator">:</span> <span class="token boolean">false</span>

  

#   # \u641C\u7D22\u7D22\u5F15\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\u6216\u5916\u7AD9\u7684\u7EDD\u5BF9\u8DEF\u5F84

#   # Path <span class="token keyword">for</span> search index file<span class="token punctuation">,</span> it can be a relative path or an absolute path

#   path<span class="token operator">:</span> <span class="token operator">/</span>local<span class="token operator">-</span>search<span class="token punctuation">.</span>xml

  

#   # \u6587\u4EF6\u751F\u6210\u5728\u672C\u5730\u7684\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u662F\u76F8\u5BF9\u8DEF\u5F84

#   # The location where the index file is generated locally<span class="token punctuation">,</span> it must be a relative location

#   generate_path<span class="token operator">:</span> <span class="token operator">/</span>local<span class="token operator">-</span>search<span class="token punctuation">.</span>xml

  

#   # \u641C\u7D22\u7684\u8303\u56F4

#   # Search field

#   # Options<span class="token operator">:</span> post <span class="token operator">|</span> page <span class="token operator">|</span> all

#   field<span class="token operator">:</span> post

  

#   # \u641C\u7D22\u662F\u5426\u626B\u63CF\u6B63\u6587

#   # If <span class="token boolean">true</span><span class="token punctuation">,</span> search will scan the post content

#   content<span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token literal-property property">search</span><span class="token operator">:</span>

 <span class="token literal-property property">path</span><span class="token operator">:</span> search<span class="token punctuation">.</span>xml

 <span class="token literal-property property">field</span><span class="token operator">:</span> post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4F59\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5176\u4F59\u95EE\u9898" aria-hidden="true">#</a> \u5176\u4F59\u95EE\u9898</h2><p>\u6CE8\u610F\u641C\u7D22\u540E\u5F97\u5230\u7684\u6587\u4EF6\u5DEE\u4E86 url\uFF0C\u56E0\u6B64\u4FEE\u6539 <strong>hexo-theme-fluid/source/js/local-search. js</strong> \u7B2C 92 \u884C\u7684\u62FC\u63A5\u5730\u5740\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>data_url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;//&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

 data_url <span class="token operator">=</span> data_url<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token punctuation">}</span>

 resultHTML <span class="token operator">+=</span> <span class="token string">&#39;&lt;a href=\\&#39;https://&#39;</span> <span class="token operator">+</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host <span class="token operator">+</span> data_url <span class="token operator">+</span> <span class="token string">&#39;\\&#39; class=\\&#39;list-group-item list-group-item-action font-weight-bolder search-list-title\\&#39;&gt;&#39;</span> <span class="token operator">+</span> orig_data_title <span class="token operator">+</span> <span class="token string">&#39;&lt;/a&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><h5 id="\u5F15\u6587" tabindex="-1"><a class="header-anchor" href="#\u5F15\u6587" aria-hidden="true">#</a> \u5F15\u6587</h5>`,41),b={href:"http://xcoding.tech/2020/01/18/hexo/%E5%A6%82%E4%BD%95%E4%BB%8E%E6%A0%B9%E6%9C%AC%E8%A7%A3%E5%86%B3hexo%E4%B8%8D%E5%85%BC%E5%AE%B9%7B%7B%7D%7D%E6%A0%87%E7%AD%BE%E9%97%AE%E9%A2%98/",target:"_blank",rel:"noopener noreferrer"},g=e("xcoding.tech"),h=n("h5",{id:"\u811A\u6CE8",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u811A\u6CE8","aria-hidden":"true"},"#"),e(" \u811A\u6CE8")],-1);function k(x,_){const s=r("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[u,n("a",v,[p,a(s)])]),m,n("ul",null,[n("li",null,[n("a",b,[g,a(s)])])]),h])}var A=i(o,[["render",k],["__file","Hexo-\u5EFA\u7AD9Bug.html.vue"]]);export{A as default};

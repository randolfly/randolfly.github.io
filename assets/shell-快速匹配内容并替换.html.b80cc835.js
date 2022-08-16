import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as t,a as e,b as r,e as o,d as l,r as c}from"./app.5cb55dd7.js";const d={},i=o('<h1 id="shell-\u5FEB\u901F\u5339\u914D\u5185\u5BB9\u5E76\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#shell-\u5FEB\u901F\u5339\u914D\u5185\u5BB9\u5E76\u66FF\u6362" aria-hidden="true">#</a> Shell \u5FEB\u901F\u5339\u914D\u5185\u5BB9\u5E76\u66FF\u6362</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u4F7F\u7528\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sed</span> -i <span class="token string">&#39;s/github.com/hub.fastgit.org/g&#39;</span> <span class="token variable"><span class="token variable">`</span><span class="token function">grep</span> github.com -rl --include<span class="token operator">=</span><span class="token string">&quot;*.json&quot;</span> ./<span class="token variable">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5C06\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u9012\u5F52\u7684\u6240\u6709\u6587\u4EF6\u4E2D json \u6587\u4EF6 <code>github. com</code> \u66FF\u6362\u6210 <code>hub.fastgit.org</code>.</p><p><strong>sed</strong></p><p>-i \u8868\u793A\u64CD\u4F5C\u7684\u662F\u6587\u4EF6\uFF0C\u7B26\u53F7 `` \u62EC\u8D77\u6765\u7684 grep \u547D\u4EE4\uFF0C\u8868\u793A\u5C06 grep \u547D\u4EE4\u7684\u7684\u7ED3\u679C\u4F5C\u4E3A\u64CD\u4F5C\u6587\u4EF6 \u800C sed \u9009\u9879 s/yyyy/xxxx/\u8868\u793A\u67E5\u627E yyyy \u5E76\u66FF\u6362\u4E3A xxxx\uFF0C\u540E\u9762\u8DDF/g \u8868\u793A\u4E00\u884C\u4E2D\u6709\u591A\u4E2A yyyy \u7684\u65F6\u5019\uFF0C\u90FD\u66FF\u6362\uFF0C\u800C\u4E0D\u662F\u4EC5\u66FF\u6362\u7B2C\u4E00\u4E2A</p><p><strong>grep</strong></p><p>-r \u8868\u793A\u67E5\u627E\u6240\u6709\u5B50\u76EE\u5F55 -l \u8868\u793A\u4EC5\u5217\u51FA\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\u540D\uFF0C\u7528\u6765\u4F20\u7ED9 sed \u547D\u4EE4\u505A\u64CD\u4F5C \u2013include=&quot;*.txt&quot; \u8868\u793A\u4EC5\u67E5\u627E txt \u6587\u4EF6 ./ \u8868\u793A\u8981\u67E5\u627E\u7684\u6839\u76EE\u5F55\u4E3A\u5F53\u524D\u76EE\u5F55</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',10),p={href:"https://blog.csdn.net/zds78/article/details/84070622",target:"_blank",rel:"noopener noreferrer"},h=l("(17\u6761\u6D88\u606F) grep\u548Csed\u914D\u5408\u66FF\u6362\u6587\u4EF6\u4E2D\u7684\u5B57\u4E32_zds78\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_grep sed");function _(u,g){const s=c("ExternalLinkIcon");return n(),t("div",null,[i,e("ul",null,[e("li",null,[e("a",p,[h,r(s)])])])])}var f=a(d,[["render",_],["__file","shell-\u5FEB\u901F\u5339\u914D\u5185\u5BB9\u5E76\u66FF\u6362.html.vue"]]);export{f as default};

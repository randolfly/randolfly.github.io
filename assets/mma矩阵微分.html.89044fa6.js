import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as i,a,b as s,w as p,e as t,d as e,r as o}from"./app.d3f4c7db.js";var d="/assets/Pasted-image-20220126170919.19603dc9.png",h="/assets/DOC-NCAlgebra_5.0.e35e67bc.pdf";const u={},m=t('<h1 id="mma\u77E9\u9635\u5FAE\u5206" tabindex="-1"><a class="header-anchor" href="#mma\u77E9\u9635\u5FAE\u5206" aria-hidden="true">#</a> mma\u77E9\u9635\u5FAE\u5206</h1><h1 id="mma-\u77E9\u9635\u5FAE\u5206" tabindex="-1"><a class="header-anchor" href="#mma-\u77E9\u9635\u5FAE\u5206" aria-hidden="true">#</a> Mma \u77E9\u9635\u5FAE\u5206</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>Mathematica \u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u8BA1\u7B97\u7B26\u53F7\u51FD\u6570\uFF0C\u8FD9\u91CC\u8FDB\u4E00\u6B65\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u5176\u6765\u8FDB\u884C\u77E9\u9635\u5FAE\u5206\u8FD0\u7B97\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a> \u6D41\u7A0B</h2><h3 id="\u524D\u7F6E\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u51C6\u5907" aria-hidden="true">#</a> \u524D\u7F6E\u51C6\u5907</h3>',6),_=e("\u5B89\u88C5 "),b=a("code",null,"NCAlgebra",-1),k=e(" \u5305 "),g=e("\u53C2\u8003 "),v={href:"https://github.com/NCAlgebra/NC",target:"_blank",rel:"noopener noreferrer"},C=e("https://github.com/NCAlgebra/NC"),N=e(" \u5B89\u88C5\u5305\u6587\u4EF6 "),f=a("ul",null,[a("li",null,"\u5EFA\u8BAE\u76F4\u63A5\u4E0B\u8F7D Archives")],-1),x=t(`<h3 id="\u4F7F\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a> \u4F7F\u7528\u6280\u5DE7</h3><p>\u5E38\u7528\u7684\u51E0\u4E2A\u57FA\u672C\u547D\u4EE4\uFF1A</p><ul><li><code>**</code> \u4EE3\u8868\u4E0D\u53EF\u4EA4\u6362\u4E58\u6CD5</li><li>\u5355\u4E2A\u5C0F\u5199\u5B57\u7B26\u9ED8\u8BA4\u4E0D\u53EF\u4EA4\u6362\uFF0C\u5176\u4F59\u5747\u53EF\u4EA4\u6362</li></ul><div class="language-mathematica ext-mathematica line-numbers-mode"><pre class="language-mathematica"><code>a<span class="token operator">**</span>b<span class="token operator">-</span>b<span class="token operator">**</span>a<span class="token operator">==</span><span class="token operator">&gt;</span>a<span class="token operator">**</span>b<span class="token operator">-</span>b<span class="token operator">**</span>a
A<span class="token operator">**</span>B<span class="token operator">-</span>B<span class="token operator">**</span>A<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
A<span class="token operator">**</span>b<span class="token operator">-</span>b<span class="token operator">**</span>A<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \`SetNonCommutative[]/SNC[]\`\u53EF\u4EE5\u6307\u5B9A\u4E0D\u53EF\u4EA4\u6362
</code></pre><ul><li><code>tp</code>=&gt;\u8F6C\u7F6E</li><li><code>inv</code>=&gt;\u9006</li><li><code>aj</code>=&gt;\u4F34\u968F</li><li><code>NCGrad</code>=&gt;\u6C42\u5FAE\u5206</li></ul><h4 id="\u4F7F\u7528\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4F8B\u5B50" aria-hidden="true">#</a> \u4F7F\u7528\u4F8B\u5B50</h4><div class="language-mathematica ext-mathematica line-numbers-mode"><pre class="language-mathematica"><code><span class="token operator">&lt;&lt;</span> <span class="token context class-name">NC\`</span><span class="token operator">;</span>
<span class="token operator">&lt;&lt;</span> <span class="token context class-name">NCAlgebra\`</span><span class="token operator">;</span>
expr <span class="token operator">=</span> tp<span class="token punctuation">[</span>a <span class="token operator">**</span> x <span class="token operator">-</span> b<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token punctuation">(</span>a <span class="token operator">**</span> x <span class="token operator">-</span> b<span class="token punctuation">)</span>
NCGrad<span class="token punctuation">[</span>expr<span class="token punctuation">,</span> x<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>result</strong></p><p><img src="`+d+'" alt="Pasted image 20220126170919"></p>',10),A=e("\u53EF\u4EE5\u53D1\u73B0\u8BA1\u7B97\u5C11\u4E86\u4E2A\u8F6C\u7F6E\uFF0C\u76F8\u6BD4\u6211\u4EEC\u5B9A\u4E49\u7684 "),B=e("\u77E9\u9635\u6C42\u5BFC"),E=e("\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5B9A\u4E49\u5FAE\u5143\u7684\u65F6\u5019\u5DEE\u4E86\u4E00\u4E2A\u8F6C\u7F6E\u6240\u4EE5\u7ED9\u4E00\u4E2A\u8F6C\u7F6E\u5C31\u884C\uFF0C\u5373\u7ED3\u679C\u4E3A "),G=a("code",null,"NCGrad[expr, x]//tp",-1),V=e(" \u5373\u53EF"),w=t('<p>\u9700\u8981\u6CE8\u610F\uFF0C\u8BA1\u7B97 <code>NCGrad</code> \u7684\u65F6\u5019\u4E0D\u80FD\u8BA1\u7B97\u53EF\u4EA4\u6362\u4E58\u6CD5\uFF0C\u5373<mark>\u6240\u6709\u4E58\u6CD5\u5FC5\u987B\u8981\u4F7F\u7528\u4E0D\u53EF\u4EA4\u6362\u4E58\u6CD5\u8FDB\u884C\u8BA1\u7B97</mark></p><h3 id="\u53C2\u8003\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863</h3><p><img src="'+h+'" alt="DOC-NCAlgebra_5"></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',4),D={href:"https://github.com/NCAlgebra/NC",target:"_blank",rel:"noopener noreferrer"},L=e("GitHub - NCAlgebra/NC: NCAlgebra - Non Commutative Algebra Package for Mathematica"),M={href:"https://mathweb.ucsd.edu/~ncalg/DOCUMENTATION/index.html#PackageNCDiff",target:"_blank",rel:"noopener noreferrer"},O=e("The NCAlgebra Suite - Version 5.0"),P={href:"https://github.com/NCAlgebra/NC/wiki/Basic#inverses-transposes-and-adjoints",target:"_blank",rel:"noopener noreferrer"},S=e("Basic \xB7 NCAlgebra/NC Wiki \xB7 GitHub");function T(F,I){const n=o("ExternalLinkIcon"),r=o("RouterLink");return c(),i("div",null,[m,a("ul",null,[a("li",null,[_,b,k,a("ul",null,[a("li",null,[g,a("a",v,[C,s(n)]),N,f])])])]),x,a("p",null,[A,s(r,{to:"/math/%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0/%E7%9F%A9%E9%98%B5%E6%B1%82%E5%AF%BC.html"},{default:p(()=>[B]),_:1}),E,G,V]),w,a("ul",null,[a("li",null,[a("a",D,[L,s(n)])]),a("li",null,[a("a",M,[O,s(n)])]),a("li",null,[a("a",P,[S,s(n)])])])])}var R=l(u,[["render",T],["__file","mma\u77E9\u9635\u5FAE\u5206.html.vue"]]);export{R as default};

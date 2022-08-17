import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as s,b as e,d as t,e as i,a as d,r as l}from"./app.e36f1ba5.js";const o={},c=e("h1",{id:"git-\u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-\u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93","aria-hidden":"true"},"#"),i(" git \u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93")],-1),m=i("\u672C\u6587\u7531 "),u={href:"http://ksria.com/simpread/",target:"_blank",rel:"noopener noreferrer"},h=i("\u7B80\u60A6 SimpRead"),v=i(" \u8F6C\u7801\uFF0C\u539F\u6587\u5730\u5740 "),g={href:"https://blog.csdn.net/ShelleyLittlehero/article/details/95980669",target:"_blank",rel:"noopener noreferrer"},_=i("blog.csdn.net"),b=d(`<h3 id="\u65B9\u6CD5\u6709\u4E09\u79CD" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u6709\u4E09\u79CD" aria-hidden="true">#</a> \u65B9\u6CD5\u6709\u4E09\u79CD\uFF1A</h3><h4 id="\u65B9\u6CD5-1-\u4FEE\u6539\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-1-\u4FEE\u6539\u547D\u4EE4" aria-hidden="true">#</a> \u65B9\u6CD5 1. \u4FEE\u6539\u547D\u4EE4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote set-url origin &lt;url&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-2-\u5148\u5220\u540E\u52A0" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-2-\u5148\u5220\u540E\u52A0" aria-hidden="true">#</a> \u65B9\u6CD5 2. \u5148\u5220\u540E\u52A0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote rm origin
git remote add origin [url]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5-3-\u76F4\u63A5\u4FEE\u6539-config-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5-3-\u76F4\u63A5\u4FEE\u6539-config-\u6587\u4EF6" aria-hidden="true">#</a> \u65B9\u6CD5 3. \u76F4\u63A5\u4FEE\u6539 Config \u6587\u4EF6</h4><p><img src="https://img-blog.csdnimg.cn/20190715161941533.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NoZWxsZXlMaXR0bGVoZXJv,size_16,color_FFFFFF,t_70" alt=""> config:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
	hideDotFiles = dotGitOnly
[remote &quot;origin&quot;]
	url = https://github.com/ZhangDi-d/SpringBootSample.git
	fetch = +refs/heads/*:refs/remotes/origin/*


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(f,x){const n=l("ExternalLinkIcon");return r(),s("div",null,[c,e("blockquote",null,[e("p",null,[m,e("a",u,[h,t(n)]),v,e("a",g,[_,t(n)])])]),b])}var Z=a(o,[["render",p],["__file","git-\u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93.html.vue"]]);export{Z as default};

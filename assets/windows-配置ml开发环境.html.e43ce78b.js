import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as r,a as e,b as n,e as a,d as l,r as d}from"./app.d3f4c7db.js";const s={},c=a('<h1 id="windows-\u914D\u7F6Eml\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#windows-\u914D\u7F6Eml\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> windows \u914D\u7F6Eml\u5F00\u53D1\u73AF\u5883</h1><h1 id="windows-\u914D\u7F6E-ml-\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#windows-\u914D\u7F6E-ml-\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> Windows \u914D\u7F6E Ml \u5F00\u53D1\u73AF\u5883</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u914D\u7F6E\u4E00\u4E2A windows \u53EF\u4EE5\u4F7F\u7528\u7684 ml \u5F00\u53D1\u73AF\u5883\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u6B65\u9AA4</p><h3 id="\u5B89\u88C5-cuda-\u548C-cudnn" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-cuda-\u548C-cudnn" aria-hidden="true">#</a> \u5B89\u88C5 Cuda \u548C Cudnn</h3><p>\u672C\u673A\u7535\u8111\u4E3A windows10, GPU \u662F GTX3060\uFF0C\u5B89\u88C5 cuda \u9A71\u52A8\u4E3A 11.2.</p><ul><li>\u9996\u5148\u5728 nvidia \u5B98\u7F51\u4E0B\u8F7D CUDA ToolKit 11.2 \u548C cudNN Archive(11.x) \u5373\u53EF</li><li>\u5B89\u88C5 CUDA ToolKit 11.2\uFF0C\u6CE8\u610F\u5B89\u88C5\u53EF\u80FD\u4F1A\u62A5\u9519\u8BF4\u5DF2\u7ECF\u5B89\u88C5\u4E86\u66F4\u65B0\u7248\u672C\u7684 FrameView <ul><li>\u5982\u679C\u62A5\u9519\uFF0C\u8FDB\u5165 <code>\u8BBE\u7F6E- \u5E94\u7528- \u5378\u8F7DNvidia FrameView \u548CPhysX</code></li><li>\u5378\u8F7D\u5B8C\u6210\u6267\u884C\u5B89\u88C5</li></ul></li><li>\u5C06\u89E3\u538B\u7684 cudNN \u590D\u5236\u5230 CUDA \u5B89\u88C5\u76EE\u5F55\u4E2D\uFF0C\u9ED8\u8BA4\u4E3A (<code>C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.2</code>), bin-&gt;bin,etc</li><li>\u8FDB\u5165 <code> C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.3\\extras\\demo_suite</code> \u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u547D\u4EE4\u884C\u8FD0\u884C deviceQuery.exe \u548C bandwidthTest.exe\uFF0C\u53CC PASS \u6210\u529F</li><li>\u5728\u73AF\u5883\u53D8\u91CF PATH \u4E2D\u6DFB\u52A0\u4E0B\u9762\u4E24\u4E2A\u8DEF\u5F84 <ul><li><code>C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v10.2</code></li><li><code>C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v10.2\\lib\\x64</code></li></ul></li></ul><h3 id="\u521B\u5EFA\u865A\u62DF\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u865A\u62DF\u73AF\u5883" aria-hidden="true">#</a> \u521B\u5EFA\u865A\u62DF\u73AF\u5883</h3>',8),h=e("li",null,"\u521B\u5EFA python=3.7 \u73AF\u5883",-1),u=l("\u4E0B\u8F7D "),_={href:"https://www.paddlepaddle.org.cn/install/quick?docurl=/documentation/docs/zh/install/pip/windows-pip.html#old-version-anchor-9-%E4%B8%89%E3%80%81%E9%AA%8C%E8%AF%81%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},p=l("\u5F00\u59CB\u4F7F\u7528_\u98DE\u6868-\u6E90\u4E8E\u4EA7\u4E1A\u5B9E\u8DF5\u7684\u5F00\u6E90\u6DF1\u5EA6\u5B66\u4E60\u5E73\u53F0 (paddlepaddle.org.cn)"),w=l("\uFF0C\u4F7F\u7528\u547D\u4EE4 "),m=e("ul",null,[e("li",null,[e("code",null,"python -m pip install paddlepaddle-gpu==2.1.3.post112 -f https://www.paddlepaddle.org.cn/whl/windows/mkl/avx/stable.html")]),e("li",null,[l("\u9A8C\u8BC1\u5B89\u88C5\u6210\u529F "),e("ul",null,[e("li",null,[e("code",null,"import paddle")]),e("li",null,[e("code",null,"paddle.utils.run_check()")])])])],-1),f=l("\u4E0B\u8F7D "),g={href:"https://pytorch.org/get-started/locally/",target:"_blank",rel:"noopener noreferrer"},v=l("Start Locally | PyTorch"),C=e("ul",null,[e("li",null,[e("code",null,"pip3 install torch==1.10.0+cu113 torchvision==0.11.1+cu113 torchaudio===0.10.0+cu113 -f https://download.pytorch.org/whl/cu113/torch_stable.html")]),e("li",null,[l("\u9A8C\u8BC1\u5B89\u88C5\u6210\u529F "),e("ul",null,[e("li",null,[e("code",null,"import torch")]),e("li",null,[e("code",null,"torch.cuda.is_available()")])])])],-1),b=e("h2",{id:"\u53C2\u8003",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),l(" \u53C2\u8003")],-1),A={href:"https://www.zhihu.com/question/445815509",target:"_blank",rel:"noopener noreferrer"},k=l("cuda11.2\u5B89\u88C5\u65F6\u548Cnvidia frameview sdk\u51B2\u7A81\u600E\u4E48\u89E3\u51B3\u5440? - \u77E5\u4E4E (zhihu.com)"),D={href:"https://pytorch.org/get-started/locally/",target:"_blank",rel:"noopener noreferrer"},x=l("Start Locally | PyTorch"),N={href:"https://developer.nvidia.com/cuda-11.2.0-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exelocal",target:"_blank",rel:"noopener noreferrer"},U=l("CUDA Toolkit 11.2 Downloads | NVIDIA Developer"),I={href:"https://developer.nvidia.com/rdp/cudnn-archive#a-collapse822-114",target:"_blank",rel:"noopener noreferrer"},P=l("cuDNN Archive | NVIDIA Developer"),y={href:"https://blog.csdn.net/Minstrel223/article/details/117811597",target:"_blank",rel:"noopener noreferrer"},T=l("(17\u6761\u6D88\u606F) win10\u4E0BRTX3060\u914D\u7F6ECUDA\uFF0C\u5E76\u5B89\u88C5\u5E26\u6709GPU\u652F\u6301\u7684tensorflow_Minstrel223\u7684\u535A\u5BA2-CSDN\u535A\u5BA2"),V={href:"https://blog.csdn.net/weixin_43082343/article/details/119043543",target:"_blank",rel:"noopener noreferrer"},E=l("(17\u6761\u6D88\u606F) Cuda\u548CCudnn\u5B89\u88C5_liuzhonglin_\u7684\u535A\u5BA2-CSDN\u535A\u5BA2"),S={href:"https://stackoverflow.com/questions/65925387/installing-cuda-windows-10",target:"_blank",rel:"noopener noreferrer"},F=l("Installing CUDA Windows 10 - Stack Overflow");function G(z,B){const o=d("ExternalLinkIcon");return i(),r("div",null,[c,e("ul",null,[h,e("li",null,[u,e("a",_,[p,n(o)]),w,m]),e("li",null,[f,e("a",g,[v,n(o)]),C])]),b,e("ul",null,[e("li",null,[e("p",null,[e("a",A,[k,n(o)])])]),e("li",null,[e("p",null,[e("a",D,[x,n(o)])])]),e("li",null,[e("p",null,[e("a",N,[U,n(o)])])]),e("li",null,[e("p",null,[e("a",I,[P,n(o)])])]),e("li",null,[e("p",null,[e("a",y,[T,n(o)])])]),e("li",null,[e("p",null,[e("a",V,[E,n(o)])])]),e("li",null,[e("p",null,[e("a",S,[F,n(o)])])])])])}var M=t(s,[["render",G],["__file","windows-\u914D\u7F6Eml\u5F00\u53D1\u73AF\u5883.html.vue"]]);export{M as default};

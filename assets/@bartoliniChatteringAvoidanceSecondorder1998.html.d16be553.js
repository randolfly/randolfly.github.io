import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as d,a as e,b as i,w as o,e as n,d as t,r as l}from"./app.5cb55dd7.js";const c={},h=n('<h1 id="bartolinichatteringavoidancesecondorder1998" tabindex="-1"><a class="header-anchor" href="#bartolinichatteringavoidancesecondorder1998" aria-hidden="true">#</a> bartoliniChatteringAvoidanceSecondorder1998</h1><h2 id="metainfo" tabindex="-1"><a class="header-anchor" href="#metainfo" aria-hidden="true">#</a> MetaInfo</h2><div class="custom-container note"><p class="custom-container-title">\u6587\u732E\u6807\u9898</p><p>Chattering avoidance by second-order sliding mode control</p></div><div class="custom-container note"><p class="custom-container-title">Abstract</p><p>Relying on the possibility of generating a second-order sliding motion by using, as control, the first derivative of the control signal instead of the actual control, a new solution to the problem of chattering elimination in variable structure control (VSC) is presented. Such a solution, inspired by the classical bang-bang optimal control strategy, is first depicted and expressed in terms of a control algorithm by introducing a suitable auxiliary problem involving a second-order uncertain system with unavailable velocity. Then, the applicability of the algorithm is extended, via suitable modifications, to the case of nonlinear systems with uncertainties of more general types. <strong>The proposed algorithm does not require the use of observers and differential inequalities</strong> and can be applied in practice by exploiting such commercial components as peak detectors or other approximated methods to evaluate the change of the sign of the derivative of the quantity accounting for the distance to the sliding manifold.</p></div><hr><h2 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h2><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a> \u95EE\u9898\u63CF\u8FF0</h3><h4 id="\u95EE\u9898\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u80CC\u666F" aria-hidden="true">#</a> \u95EE\u9898\u80CC\u666F</h4><ul><li>chattering in sliding-mode-control</li></ul>',9),u=t("some people "),f=e("strong",null,"replace sign function with smooth approximation",-1),p=t(" to counteract the chattering effect, nevertheless, "),_=t("booknote?type=annotation&book=null&id=190286ce-ab48-7cd7-f509-d0033c869faa&page=2&rect=43"),b=e("h4",{id:"\u95EE\u9898\u96BE\u70B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u95EE\u9898\u96BE\u70B9","aria-hidden":"true"},"#"),t(" \u95EE\u9898\u96BE\u70B9")],-1),g=t("booknote?type=annotation&book=null&id=aba3b02e-7e76-4fb3-f139-7f073c841a1c&page=2&rect=43"),m=e("h4",{id:"\u524D\u4EBA\u5DE5\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u4EBA\u5DE5\u4F5C","aria-hidden":"true"},"#"),t(" \u524D\u4EBA\u5DE5\u4F5C")],-1),v=t("some people "),y=e("strong",null,"replace sign function with smooth approximation",-1),x=t(" to counteract the chattering effect "),k=t("booknote?type=annotation&book=null&id=190286ce-ab48-7cd7-f509-d0033c869faa&page=2&rect=43"),w=t("booknote?type=annotation&book=null&id=4549f861-e289-287f-dc20-d06ca25c94b9&page=2&rect=43"),C=e("ul",null,[e("li",null,"ideal high-frequency observer control signal is filtered by high-gain fast dynamic part of system")],-1),q=e("strong",null,"proceduce addressed within a general framework with reference to known nonlinear systems",-1),B=t("give a n-degree system (smooth and like "),A=t("Lipschitz \u6761\u4EF6"),S=t(")"),E=e("h4",{id:"\u672C\u6587\u5DE5\u4F5C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u672C\u6587\u5DE5\u4F5C","aria-hidden":"true"},"#"),t(" \u672C\u6587\u5DE5\u4F5C")],-1),T=t("booknote?type=annotation&book=null&id=bf7226f4-e8ed-5807-4563-281b08debd5a&page=2&rect=306"),V=n('<h4 id="\u672C\u6587\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#\u672C\u6587\u610F\u4E49" aria-hidden="true">#</a> \u672C\u6587\u610F\u4E49</h4><ul><li>It does not require the introduction of any observer.</li><li>The differential inequalities are replaced by algebraic inequalities.</li><li>The convergence to the sliding manifold of the state trajectories takes place in a \uFB01nite time</li></ul><h3 id="\u5B9E\u9A8C\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9E\u9A8C\u65B9\u6CD5</h3><h3 id="\u4F18\u70B9\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u70B9\u7F3A\u70B9</h3><h4 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h4><h4 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h4><h3 id="\u4E2A\u4EBA\u8BC4\u4EF7" tabindex="-1"><a class="header-anchor" href="#\u4E2A\u4EBA\u8BC4\u4EF7" aria-hidden="true">#</a> \u4E2A\u4EBA\u8BC4\u4EF7</h3>',7);function L(N,R){const a=l("RouterLink");return s(),d("div",null,[h,e("p",null,[u,f,p,i(a,{to:"/paper/"},{default:o(()=>[_]),_:1})]),b,e("ul",null,[e("li",null,[i(a,{to:"/paper/"},{default:o(()=>[g]),_:1})])]),m,e("ul",null,[e("li",null,[v,y,x,e("ul",null,[e("li",null,[i(a,{to:"/paper/"},{default:o(()=>[k]),_:1})])])]),e("li",null,[i(a,{to:"/paper/"},{default:o(()=>[w]),_:1}),C]),e("li",null,[q,e("ul",null,[e("li",null,[B,i(a,{to:"/math/%E6%9D%82%E9%A1%B9/Lipschitz-%E6%9D%A1%E4%BB%B6.html"},{default:o(()=>[A]),_:1}),S])])])]),E,e("ul",null,[e("li",null,[i(a,{to:"/paper/"},{default:o(()=>[T]),_:1})])]),V])}var I=r(c,[["render",L],["__file","@bartoliniChatteringAvoidanceSecondorder1998.html.vue"]]);export{I as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as s,a as e,b as a,d as t,e as i,r as l}from"./app.5cb55dd7.js";const h={},d=e("h1",{id:"jupyter-matlab",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jupyter-matlab","aria-hidden":"true"},"#"),t(" Jupyter Matlab")],-1),c=e("h2",{id:"\u5B9A\u4E49",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B9A\u4E49","aria-hidden":"true"},"#"),t(" \u5B9A\u4E49")],-1),u=e("blockquote",null,[e("p",null,"21 February 2018, update: the new JupyterLab was just released, and according to this tweet is really......")],-1),p=e("em",null,"21 February 2018, update: the new JupyterLab was just released, and according to",-1),_=t(),b={href:"https://twitter.com/inferencelab/status/966437392088535047",target:"_blank",rel:"noopener noreferrer"},m=e("em",null,"this tweet",-1),y=t(),f=e("em",null,"is really easy to integrate with Matlab. Probably worth checking out instead of the reasonably outdated instructions below!",-1),w=e("p",null,"I really like Python\u2019s philosophy, but over the last years I haven\u2019t been able to switch the code for my research from Matlab. At this point, the transition costs are too high for me, but it\u2019s a move I have planned for some point in the future.",-1),g=e("p",null,"Now, Python has the awesome Jupyter (formerly IPyton notebook) feature, that allows for comments, code, and most importantly graphical output (i.e. figures you\u2019ve just generated) to be shown in one document. This is a great way to share and explain the code you\u2019re writing, since the reader immediately sees how output is generated without having to run all the analyses themselves.",-1),k=t("Matlab has a "),v={href:"http://fr.mathworks.com/help/matlab/matlab_prog/publishing-matlab-code.html#responsive_offcanvas",target:"_blank",rel:"noopener noreferrer"},M=t("Publish"),T=t(" function that attempts to do something similar, and outputs HTML files containing both code and figures. However, there are a few drawbacks: it uses its own Markup text layout language, and GitHub (where I intend to host my notebooks) does not natively render html."),x=e("p",null,"Luckily, some awesome people have made it really easy to generate IPython notebooks using Matlab, that are super easy to share or host on GitHub. Here\u2019s the step-by-step guide:",-1),A=t("Download and install Anaconda "),L={href:"https://www.continuum.io/downloads",target:"_blank",rel:"noopener noreferrer"},I=t("https://www.continuum.io/downloads"),E=t(". Restart Terminal. Or, if you\u2019d prefer to not get the full Anaconda software, check out "),P={href:"https://w01f359.wordpress.com/2016/10/09/matlab-notebook/",target:"_blank",rel:"noopener noreferrer"},B=t("this post"),H=t("."),N=i("<li>In terminal, type <code>pip install pymatbridge</code><code>pip install matlab_kernel</code><code>python -m matlab_kernel install</code></li><li>Point the kernel to your version of Matlab. I added <code>export MATLAB_EXECUTABLE=/Applications/MATLAB_R2015b.app/bin/matlab</code> to my <em>.bash_profile</em> file. To do this from Terminal, type <code>echo \u201Cexport MATLAB_EXECUTABLE=/Applications/MATLAB_2015b.app/bin/matlab\u201D &gt;&gt; ~/.bash_profile</code>. Of course, make sure the location and version of Matlab match yours.</li><li>Restart terminal or load <code>.bash_profile</code>. Type <code>ipython notebook</code> in Terminal. Your browser will open a Jupyter window, where on the right hand side you can go to New -&gt; Notebooks -&gt; Matlab.</li><li>You\u2019re now ready to run your notebook! Simply write or copy a block of code from matlab, and click Run. The figures will automatically appear when you are calling any plotting function. When you push your Notebook.ipynb file to GitHub, it will automatically render the layout and figures. You can also download the whole notebook to HTML which can be viewed in any web browser.</li>",4),j=t("See "),C={href:"https://github.com/anne-urai/PupilPreprocessing/blob/master/pupilTutorial.ipynb",target:"_blank",rel:"noopener noreferrer"},J=t("here"),S=t(" for an example notebook, analysing some pupillometry data in Matlab. Here\u2019s a screenshot of a notebook on signal detection theory:"),R=e("p",null,[e("img",{src:"https://anneurai.files.wordpress.com/2015/11/screen-shot-2015-11-12-at-14-54-50.png?w=376",alt:""})],-1),V=e("p",null,"This code works on a Mac OS X El Capitan, and requires some familiarity with Terminal.",-1),Y=e("h2",{id:"\u53C2\u8003",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),t(" \u53C2\u8003")],-1),G={href:"https://anneurai.net/2015/11/12/matlab-based-ipython-notebooks/#:~:text=Your%20browser%20will%20open%20a%20Jupyter%20window%2C%20where,appear%20when%20you%20are%20calling%20any%20plotting%20function.",target:"_blank",rel:"noopener noreferrer"},O=t("Matlab-based IPython notebooks \u2013 CoCoSys lab (anneurai.net)");function X(q,F){const o=l("ExternalLinkIcon");return r(),s("div",null,[d,c,u,e("p",null,[p,_,e("a",b,[m,a(o)]),y,f]),w,g,e("p",null,[k,e("a",v,[M,a(o)]),T]),x,e("ol",null,[e("li",null,[A,e("a",L,[I,a(o)]),E,e("a",P,[B,a(o)]),H]),N]),e("p",null,[j,e("a",C,[J,a(o)]),S]),R,V,Y,e("ul",null,[e("li",null,[e("a",G,[O,a(o)])])])])}var W=n(h,[["render",X],["__file","jupyter-matlab.html.vue"]]);export{W as default};

import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as o,a as e,b as l,d as i,e as n,r}from"./app.5cb55dd7.js";const d={},c=e("h1",{id:"matlab-\u753B\u56FE\u6559\u7A0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#matlab-\u753B\u56FE\u6559\u7A0B","aria-hidden":"true"},"#"),i(" Matlab \u753B\u56FE\u6559\u7A0B")],-1),u=e("h2",{id:"base-tutorial",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base-tutorial","aria-hidden":"true"},"#"),i(" Base Tutorial")],-1),p={id:"installation",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#",-1),v=i(),b={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/#id8",target:"_blank",rel:"noopener noreferrer"},h=i("Installation"),g=n(`<p>Download and extract the zip file from the link given above. Install PlotPub using any one of the three possible ways:</p><ul><li>(1) copy all the *.m files inside the lib folder to either your MATLAB path <strong>or</strong></li><li>(2) copy those files to your current project folder <strong>or</strong></li><li>(3) put plotPub-master in any convenient folder and add the following line in your MATLAB code:</li></ul><div class="language-matlab ext-matlab line-numbers-mode"><pre class="language-matlab"><code><span class="token function">addsubpath</span><span class="token punctuation">(</span><span class="token string">&#39;D:/MATLAB/PlotPub-2.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>\u6CE8\u610F\u5E94\u8BE5\u5728\u6DFB\u52A0\u76EE\u5F55\u4E4B\u65F6\u9009\u62E9\u6DFB\u52A0\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55</mark></p><p>where, I assume that you put plotPub-2.0 in D:/MATLAB folder. The sample codes can be found inside the examples folder.</p><h2 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial" aria-hidden="true">#</a> Tutorial</h2>`,6),f=e("strong",null,"NOTICE:",-1),x=i(" Tutorial for v1.4 is "),_={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},y=i("here"),P=i("."),k=i("To create a beautiful figure using PlotPub, all you need to know is how to use the (Plot) class. Alternatively, you can use the set-plot-properties (setPlotProp) function which is discussed "),L={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},T=i("here"),w=i(". The Plot class provides a simple and elegant object oriented programming interface for manipulating MATLAB figures."),S=n(`<p>Let us walk you through an example. Assume that we have data for 3 cycle of a 50 Hz AC voltage signal:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>clear all;

%% lets plot 3 cycles of 50Hz AC voltage
f = 50; % frequency
Vm = 10; % peak
phi = 0; % phase

% generate the signal
t = [0:0.0001:3/f];
th = 2*pi*f*t;
v = Vm*sin(th+phi);

% plot it
figure;
plot(t*1E3, v);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where, f is the frequency, Vm is the peak voltage, t is time and v is the AC voltage signal. Result? An utterly ugly looking figure punching at your face:</p><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/ugly.png" alt=""></p><p>Now, let us add some spices. Let us set the labels and title:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% change settings
plt = Plot(); % create a Plot object and grab the current figure

plt.XLabel = &#39;Time, t (ms)&#39;; % xlabel
plt.YLabel = &#39;Voltage, V (V)&#39;; %ylabel
plt.Title = &#39;Voltage as a function of time&#39;; % plot title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, call the export function to export the figure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% Save? comment the following line if you do not want to save
plt.export(&#39;plotSimple1.png&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The resulting plot should look like:</p><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotSimple1.png" alt=""></p><p>Instead of creating the plot using:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% plot it
figure;
plot(t*1E3, v);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>one could also use Plot class directly to plot:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt = Plot(t*1E3, v); % create the figure directly using data

plt.XLabel = &#39;Time, t (ms)&#39;; % xlabel
plt.YLabel = &#39;Voltage, V (V)&#39;; %ylabel
plt.Title = &#39;Voltage as a function of time&#39;; % plot title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The full source code for this plot, plotSimple.m, can be found inside the examples_class folder.</p><p>We can change color, linewidth, linestyle etc:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt.Colors = {[0, 0, 0]}; % [red, green, blue]
plt.LineWidth = 2; % line width
plt.LineStyle = {&#39;--&#39;}; % line style: &#39;-&#39;, &#39;:&#39;, &#39;--&#39; etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotLineStyle.png" alt=""></p><p>See plotLineStyle.m for full source code.</p><p>We can also change scale, axis limit, tick and grid:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt.YScale = &#39;log&#39;; % &#39;linear&#39; or &#39;log&#39;
plt.YLim = [1E-3, 1E3]; % [min, max]
plt.YTick = [1E-3, 1E-1, 1E1, 1E3]; %[tick1, tick2, .. ]
plt.YGrid = &#39;on&#39;; % &#39;on&#39; or &#39;off&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotSimpleLog2.png" alt=""></p><p>or create a log-log plot:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt.YScale = &#39;log&#39;; % &#39;linear&#39; or &#39;log&#39;
plt.XScale = &#39;log&#39;; % &#39;linear&#39; or &#39;log&#39;
plt.YLim = [1E-3, 1E3]; % [min, max]
plt.YTick = [1E-3, 1E-1, 1E1, 1E3]; %[tick1, tick2, .. ]
plt.YGrid = &#39;on&#39;; % &#39;on&#39; or &#39;off&#39;
plt.XGrid = &#39;on&#39;; % &#39;on&#39; or &#39;off&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotSimpleLogLog.png" alt=""></p><p>See plotSimpleLog.m and plotSimpleLogLog.m for full source code.</p><p>Creating multiple plots in a single set of axes is also easy:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>% generate the signal
t = [0:0.0001:3/f];
th = 2*pi*f*t;
v1 = Vm*sin(th);
v2 = Vm*sin(th - phi);
v3 = Vm*sin(th - phi\\*2);

% plot them
plt = Plot(t*1E3, v1, t*1E3, v2, t*1E3, v3);

% change settings
plt.XLabel = &#39;Time, t (ms)&#39;; % xlabel
plt.YLabel = &#39;Voltage, V (V)&#39;; % ylabel
plt.YTick = [-10, 0, 10]; % [tick1, tick2, .. ]
plt.YLim = [-11, 11]; % [min, max]

% Save? comment the following line if you do not want to save
plt.export(&#39;plotMultiple.tiff&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note how Plot class constructor is directly used for plotting multiple functions. Result:</p><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotMultiple.png" alt=""></p><p>The full source is given in plotMultiple.m. We can change the linestyle, color etc and add a legend:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt.XLim = [0, 80]; % [min, max]
plt.Colors = { % three colors for three data set
    [1, 0, 0] % data set 1
    [0.25, 0.25, 0.25] % data set 2
    [0, 0, 1] % data set 3
};
plt.LineWidth = [2, 2, 2]; % three line widths
plt.LineStyle = {&#39;-&#39;, &#39;-&#39;, &#39;-&#39;}; % three line styles
plt.Markers = {&#39;o&#39;, &#39;&#39;, &#39;s&#39;};
plt.MarkerSpacing = [15, 15, 15];
plt.Legend = {&#39;\\theta = 0^o&#39;, &#39;\\theta = 45^o&#39;, &#39;\\theta = 90^o&#39;}; % legends
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://masumhabib.com/pages/projects/publication-quality-graphs-matlab/images/plotpub-2.0/plotMarkers.png" alt=""></p><p>Here, plt.Colors{1}, plt.LineWidth(1) and plt.LineStyle{1} set properties of data set 1 and so on. The full source is given in plotMarkers.m.</p><p>By default, PlotPub creates figures with 6in x 3in box size. You can easily change the figure size using the following code.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>plt.BoxDim = [7, 3]; %[width, height] in inches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This code creates a figure with 7in x 5in box.</p><p><img src="http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/images/plotpub-2.0/plotSize.png" alt=""></p><p>See plotSize.m for more details.</p><p>You can also load a previously saved MATLAB fig file and export it using Plot class:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>clear all;

% load previously generated fig file
plt = Plot(&#39;single.fig&#39;);

% change settings
plt.XLabel = &#39;Time, t (ms)&#39;; % xlabel
plt.YLabel = &#39;Voltage, V (V)&#39;; %ylabel
plt.BoxDim = [6, 5]; %[width, height]

% Save? comment the following line if you do not want to save
plt.export(&#39;plotSize.png&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Reference Manual</p>`,42),E=i("Manual for v1.4 is "),V={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},A=i("here"),M=i("."),Y=n(`<p>Given bellow is a brief description of the Plot class and setPlotProp and plotPub functions and their parameters. This documents can also be viewed by invoking:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;&gt; help Plot
&gt;&gt; help setPlotProp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>from inside the MATLAB command window.</p><h2 id="the-plot-class" tabindex="-1"><a class="header-anchor" href="#the-plot-class" aria-hidden="true">#</a> The Plot class</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function h = plotPub(X, Y, N, opt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This function plots X{i} vs Y{i}, changes the properties of the generated figure and exports it as a publication quality image file. The resolution of the image can be chosen by the user. Supported image formats are EPS, PDF, PNG, JPEG and TIFF. The figure properties are specified by the options structure &#39;opt&#39;.</p><p><strong>Parameters:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>X %cell array of x coordinates
Y %cell array of y coordinates
N %number of plots to be created. N &amp;lt;= length(X)
opt %options structure. Same as above.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Last update: 2: 25 PM, Mar 19, 2015.</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,10),q={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/",target:"_blank",rel:"noopener noreferrer"},j=i("PlotPub-v2.0 Documentation | K M Masum Habib"),B={href:"https://github.com/masumhabib/PlotPub",target:"_blank",rel:"noopener noreferrer"},N=i("masumhabib/PlotPub: Publication quality plot in MATLAB. (github.com)");function X(C,z){const t=r("ExternalLinkIcon");return s(),o("div",null,[c,u,e("h2",p,[m,v,e("a",b,[h,l(t)])]),g,e("p",null,[f,x,e("a",_,[y,l(t)]),P]),e("p",null,[k,e("a",L,[T,l(t)]),w]),S,e("p",null,[E,e("a",V,[A,l(t)]),M]),Y,e("ul",null,[e("li",null,[e("a",q,[j,l(t)])]),e("li",null,[e("a",B,[N,l(t)])])])])}var G=a(d,[["render",X],["__file","matlab-\u753B\u56FE\u6559\u7A0B.html.vue"]]);export{G as default};

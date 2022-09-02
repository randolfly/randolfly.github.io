import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as r,b as e,d as l,a,e as i,r as o}from"./app.e400f7f4.js";var d="/assets/cheatsheet_huge.c92ef256.png";const c={},u=a('<h1 id="matlab-\u753B\u56FE\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#matlab-\u753B\u56FE\u6559\u7A0B" aria-hidden="true">#</a> matlab \u753B\u56FE\u6559\u7A0B</h1><h1 id="matlab-\u753B\u56FE\u6559\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#matlab-\u753B\u56FE\u6559\u7A0B-1" aria-hidden="true">#</a> Matlab \u753B\u56FE\u6559\u7A0B</h1><h2 id="base-tutorial" tabindex="-1"><a class="header-anchor" href="#base-tutorial" aria-hidden="true">#</a> Base Tutorial</h2><p>\u53C2\u8003\u56FE\u7247\uFF0C\u53EF\u4EE5\u4F7F\u7528 Matlab \u7684\u5C5E\u6027\u3002 <img src="'+d+'" alt="cheatsheet_huge"></p><p><mark>Note: \u76F4\u63A5\u4F7F\u7528 PlotHub \u7EF4\u62A4\u7684\u753B\u56FE\u7C7B\uFF0C\u53EF\u4EE5\u505A\u51FA\u6F02\u4EAE\u7684\u79D1\u7814\u56FE\u7247</mark></p><h2 id="official-tutorial-of-plothub" tabindex="-1"><a class="header-anchor" href="#official-tutorial-of-plothub" aria-hidden="true">#</a> Official Tutorial of PlotHub</h2>',6),v={id:"installation",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#",-1),p=i(),b={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/#id8",target:"_blank",rel:"noopener noreferrer"},h=i("Installation"),g=a(`<p>Download and extract the zip file from the link given above. Install PlotPub using any one of the three possible ways:</p><ul><li>(1) copy all the *.m files inside the lib folder to either your MATLAB path <strong>or</strong></li><li>(2) copy those files to your current project folder <strong>or</strong></li><li>(3) put plotPub-master in any convenient folder and add the following line in your MATLAB code:</li></ul><div class="language-matlab ext-matlab line-numbers-mode"><pre class="language-matlab"><code><span class="token function">addsubpath</span><span class="token punctuation">(</span><span class="token string">&#39;D:/MATLAB/PlotPub-2.0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark>\u6CE8\u610F\u5E94\u8BE5\u5728\u6DFB\u52A0\u76EE\u5F55\u4E4B\u65F6\u9009\u62E9\u6DFB\u52A0\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55</mark></p><p>where, I assume that you put plotPub-2.0 in D:/MATLAB folder. The sample codes can be found inside the examples folder.</p><h2 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial" aria-hidden="true">#</a> Tutorial</h2>`,6),f=e("strong",null,"NOTICE:",-1),x=i(" Tutorial for v1.4 is "),k={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},y=i("here"),_=i("."),L=i("To create a beautiful figure using PlotPub, all you need to know is how to use the (Plot) class. Alternatively, you can use the set-plot-properties (setPlotProp) function which is discussed "),P={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},T=i("here"),w=i(". The Plot class provides a simple and elegant object oriented programming interface for manipulating MATLAB figures."),Y=a(`<p>Let us walk you through an example. Assume that we have data for 3 cycle of a 50 Hz AC voltage signal:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>clear all;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference-manual" tabindex="-1"><a class="header-anchor" href="#reference-manual" aria-hidden="true">#</a> Reference Manual</h2>`,42),S=i("Manual for v1.4 is "),X={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v1-4-documentation/",target:"_blank",rel:"noopener noreferrer"},M=i("here"),E=i("."),A=a(`<p>Given bellow is a brief description of the Plot class and setPlotProp and plotPub functions and their parameters. This documents can also be viewed by invoking:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;&gt; help Plot
&gt;&gt; help setPlotProp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>from inside the MATLAB command window.</p><h2 id="the-plot-class" tabindex="-1"><a class="header-anchor" href="#the-plot-class" aria-hidden="true">#</a> The Plot class</h2><p>This class represents a MATLAB figure. It can create new plots, open saved figure files and change properties of opened/existing figures. It can also export figures as publication quality image files. The resolution of the image can be changed by the user. Supported image formats are EPS, PDF, PNG, JPEG and TIFF. The figure properties can be changed by easy-to-remember class properties.</p><h3 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Plot()
% Grabs the current figure.
Plot(handle)
% Grabs the figure pointed by handle.
Plot(&#39;filename.fig&#39;)
% Opens the figure file (&#39;filename.fig&#39;) and use the opened figure.
Plot(handle, holdLine)
% Grabs the figure pointed by handle. If holdLine = true, it does not
% change the plot properties.
Plot(Y)
% Plots Y where Y must be a vector.
Plot(X, Y)
% Plots Y vs X. Both X and Y must be vectors.
Plot(X1, Y1, X2, Y2, ...)
% Plots Y&#39;s vs X&#39;s. X&#39;s and Y&#39;s must be vectors.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The constructors return plot objects which can be used for subsequent property changes.</p><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>BoxDim % vector [width, height]: size of the axes box in inches;
% default: [6, 2.5]
ShowBox % &#39;on&#39; = show or &#39;off&#39; = hide bounding box
FontName % string: font name; default: &#39;Helvetica&#39;
FontSize % integer; default: 26
LineWidth % vector [width1, width2, ..]: element i changes the
% property of i-th dataset; default: 2
LineStyle % cell array {&#39;style1&#39;, &#39;style2&#39;, ..}: element i changes
% the property of i-th dataset; default: &#39;-&#39;
LineCount % Number of plots (readonly)
Markers % cell array {&#39;marker1&#39;, &#39;marker2&#39;, ..}: element i changes
% the property of i-th dataset; default: &#39;None&#39;
MarkerSpacing % vector [space1, space2, ..]: element i changes the
% property of i-th dataset; default: 0
Colors % 3xN matrix, [red, green, blue] where N is the number of
% datasets.
AxisColor % axis color, [red, green, blue]; default black.
AxisLineWidth % axis line width, number; default 2.
XLabel % X axis label
YLabel % Y axis label
ZLabel % Z axis label
XTick % [tick1, tick2, ..]: major ticks for X axis.
YTick % [tick1, tick2, ..]: major ticks for Y axis.
ZTick % [tick1, tick2, ..]: major ticks for Z axis.
XMinorTick % &#39;on&#39; or &#39;off&#39;: show X minor tick?
YMinorTick % &#39;on&#39; or &#39;off&#39;: show Y minor tick?
ZMinorTick % &#39;on&#39; or &#39;off&#39;: show Z minor tick?
TickDir % tick direction: &#39;in&#39; or &#39;out&#39;; default: &#39;in&#39;
TickLength % tick length; default: [0.02, 0.02]
XLim % [min, max]: X axis limit.
YLim % [min, max]: Y axis limit.
ZLim % [min, max]: Z axis limit.
XScale % &#39;linear&#39; or &#39;log&#39;: X axis scale.
YScale % &#39;linear&#39; or &#39;log&#39;: Y axis scale.
ZScale % &#39;linear&#39; or &#39;log&#39;: Z axis scale.
XGrid % &#39;on&#39; or &#39;off&#39;: show grid in X axis?
YGrid % &#39;on&#39; or &#39;off&#39;: show grid in Y axis?
ZGrid % &#39;on&#39; or &#39;off&#39;: show grid in Z axis?
XDir % &#39;in&#39; or &#39;out&#39;: X axis tick direction
YDir % &#39;in&#39; or &#39;out&#39;: Y axis tick direction
ZDir % &#39;in&#39; or &#39;out&#39;: Z axis tick direction
Legend % {&#39;legend1&#39;,&#39;legend2&#39;,...}
LegendBox % bounding box of legend: &#39;on&#39;/&#39;off&#39;; default: &#39;off&#39;
LegendBoxColor % color of the bounding box of legend; default: &#39;none&#39;
LegendTextColor % color of the legend text; default: [0,0,0]
LegendLoc % &#39;NorthEast&#39;, ..., &#39;SouthWest&#39;: legend location
Title % plot title, string
Resolution % Resolution (dpi) for bitmapped file. Default:600.
HoldLines % true/false. true == only modify axes settings, do not
% touch plot lines/surfaces. Default false.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-setplotprop-function" tabindex="-1"><a class="header-anchor" href="#the-setplotprop-function" aria-hidden="true">#</a> The setPlotProp function</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function h = setPlotProp(opt, hfig)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This function changes the properties of the figure represented by &#39;hfig&#39; and exports it as a publication quality image file. The resolution of the image can be chosen by the user. Supported image formats are EPS, PDF, PNG, JPEG and TIFF. The figure properties are specified by the options structure &#39;opt&#39;.</p><p><strong>Parameters:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>opt % options structure:
BoxDim % vector [width, height]: size of the axes box in inches; default: [6, 2.5]
ShowBox % &#39;on&#39; = show or &#39;off&#39; = hide bounding box; default: &#39;on&#39;
FontName % string: font name; default: &#39;Arial&#39;
FontSize % integer; default: 26
LineWidth % vector [width1, width2, ..]: element i changes the property of i-th dataset; default: 2
LineStyle % cell array {&#39;style1&#39;, &#39;style2&#39;, ..}: element i changes the property of i-th dataset; default: &#39;-&#39;
Markers % cell array {&#39;marker1&#39;, &#39;marker2&#39;, ..}: element i changes the property of i-th dataset; default: &#39;None&#39;
MarkerSpacing % vector [space1, space2, ..]: element i changes the property of i-th dataset; default: 0
Colors % 3xN matrix, [red, green, blue] where N is the number of datasets.
AxisColor % [red, green, blue]; color of the axis lines; default: black
AxisLineWidth % Witdth of the axis lines; default: 2
XLabel % X axis label
YLabel % Y axis label
ZLabel % Z axis label
XTick % [tick1, tick2, ..]: major ticks for X axis.
YTick % [tick1, tick2, ..]: major ticks for Y axis.
ZTick % [tick1, tick2, ..]: major ticks for Z axis.
XMinorTick % &#39;on&#39; or &#39;off&#39;: show X minor tick?
YMinorTick % &#39;on&#39; or &#39;off&#39;: show Y minor tick?
ZMinorTick % &#39;on&#39; or &#39;off&#39;: show Z minor tick?
TickDir % tick direction: &#39;in&#39; or &#39;out&#39;; default: &#39;in&#39;
TickLength % tick length; default: [0.02, 0.02]
XLim % [min, max]: X axis limit.
YLim % [min, max]: Y axis limit.
ZLim % [min, max]: Z axis limit.
XScale % &#39;linear&#39; or &#39;log&#39;: X axis scale.
YScale % &#39;linear&#39; or &#39;log&#39;: Y axis scale.
ZScale % &#39;linear&#39; or &#39;log&#39;: Z axis scale.
XGrid % &#39;on&#39; or &#39;off&#39;: show grid in X axis?
YGrid % &#39;on&#39; or &#39;off&#39;: show grid in Y axis?
ZGrid % &#39;on&#39; or &#39;off&#39;: show grid in Z axis?
XDir % &#39;in&#39; or &#39;out&#39;: X axis tick direction
YDir % &#39;in&#39; or &#39;out&#39;: Y axis tick direction
ZDir % &#39;in&#39; or &#39;out&#39;: Z axis tick direction
Legend % {&#39;legend1&#39;,&#39;legend2&#39;,...}
LegendBox % bounding box of legend: &#39;on&#39;/&#39;off&#39;; default: &#39;off&#39;
LegendBoxColor % color of the bounding box of legend; default: &#39;none&#39;
LegendTextColor % color of the legend text; default: [0,0,0]
LegendLoc % &#39;NorthEast&#39;, ..., &#39;SouthWest&#39;: legend location
Resolution % Resolution (dpi) for bitmapped file. Default:600.
HoldLines % true/false. true == only modify axes settings, do not touch plot lines/surfaces. Default false.
FileName % Save? Give a file name.

hfig % Figure handle (optional). Default: current figure.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Return value:</strong> figure handle.</p><h2 id="the-plotpub-function" tabindex="-1"><a class="header-anchor" href="#the-plotpub-function" aria-hidden="true">#</a> The plotPub function</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function h = plotPub(X, Y, N, opt)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This function plots X{i} vs Y{i}, changes the properties of the generated figure and exports it as a publication quality image file. The resolution of the image can be chosen by the user. Supported image formats are EPS, PDF, PNG, JPEG and TIFF. The figure properties are specified by the options structure &#39;opt&#39;.</p><p><strong>Parameters:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>X %cell array of x coordinates
Y %cell array of y coordinates
N %number of plots to be created. N &amp;lt;= length(X)
opt %options structure. Same as above.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Last update: 2: 25 PM, Mar 19, 2015.</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,23),Z={href:"http://masumhabib.com/projects/publication-quality-graphs-matlab/plotpub-v2-0-documentation/",target:"_blank",rel:"noopener noreferrer"},N=i("PlotPub-v2.0 Documentation | K M Masum Habib"),B={href:"https://github.com/masumhabib/PlotPub",target:"_blank",rel:"noopener noreferrer"},D=i("masumhabib/PlotPub: Publication quality plot in MATLAB. (github.com)");function V(j,q){const n=o("ExternalLinkIcon");return s(),r("div",null,[u,e("h2",v,[m,p,e("a",b,[h,l(n)])]),g,e("p",null,[f,x,e("a",k,[y,l(n)]),_]),e("p",null,[L,e("a",P,[T,l(n)]),w]),Y,e("p",null,[S,e("a",X,[M,l(n)]),E]),A,e("ul",null,[e("li",null,[e("a",Z,[N,l(n)])]),e("li",null,[e("a",B,[D,l(n)])])])])}var F=t(c,[["render",V],["__file","matlab-\u753B\u56FE\u6559\u7A0B.html.vue"]]);export{F as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.172142c5.js";const e={},p=t(`<h1 id="msfuntmpl-basic" tabindex="-1"><a class="header-anchor" href="#msfuntmpl-basic" aria-hidden="true">#</a> msfuntmpl_basic</h1><div class="language-matlab ext-matlab line-numbers-mode"><pre class="language-matlab"><code><span class="token keyword">function</span> <span class="token function">msfuntmpl_basic</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
<span class="token comment">%MSFUNTMPL_BASIC A Template for a Level-2 MATLAB S-Function</span>
<span class="token comment">%   The MATLAB S-function is written as a MATLAB function with the</span>
<span class="token comment">%   same name as the S-function. Replace &#39;msfuntmpl_basic&#39; with the </span>
<span class="token comment">%   name of your S-function.</span>

<span class="token comment">%   Copyright 2003-2018 The MathWorks, Inc.</span>

<span class="token comment">%%</span>
<span class="token comment">%% The setup method is used to set up the basic attributes of the</span>
<span class="token comment">%% S-function such as ports, parameters, etc. Do not add any other</span>
<span class="token comment">%% calls to the main body of the function.</span>
<span class="token comment">%%</span>
<span class="token function">setup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token comment">%% Function: setup ===================================================</span>
<span class="token comment">%% Abstract:</span>
<span class="token comment">%%   Set up the basic characteristics of the S-function block such as:</span>
<span class="token comment">%%   - Input ports</span>
<span class="token comment">%%   - Output ports</span>
<span class="token comment">%%   - Dialog parameters</span>
<span class="token comment">%%   - Options</span>
<span class="token comment">%%</span>
<span class="token comment">%%   Required         : Yes</span>
<span class="token comment">%%   C MEX counterpart: mdlInitializeSizes</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

<span class="token comment">% Register number of ports</span>
block<span class="token punctuation">.</span>NumInputPorts  <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span>NumOutputPorts <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">% Setup port properties to be inherited or dynamic</span>
block<span class="token punctuation">.</span>SetPreCompInpPortInfoToDynamic<span class="token punctuation">;</span>
block<span class="token punctuation">.</span>SetPreCompOutPortInfoToDynamic<span class="token punctuation">;</span>

<span class="token comment">% Override input port properties</span>
block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions        <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">% double</span>
block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity  <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DirectFeedthrough <span class="token operator">=</span> true<span class="token punctuation">;</span>

<span class="token comment">% Override output port properties</span>
block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions       <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">% double</span>
block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity  <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span>

<span class="token comment">% Register parameters</span>
block<span class="token punctuation">.</span>NumDialogPrms     <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">% Register sample times</span>
<span class="token comment">%  [0 offset]            : Continuous sample time</span>
<span class="token comment">%  [positive_num offset] : Discrete sample time</span>
%
<span class="token comment">%  [-1, 0]               : Inherited sample time</span>
<span class="token comment">%  [-2, 0]               : Variable sample time</span>
block<span class="token punctuation">.</span>SampleTimes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">% Specify the block simStateCompliance. The allowed values are:</span>
<span class="token comment">%    &#39;UnknownSimState&#39;, &lt; The default setting; warn and assume DefaultSimState</span>
<span class="token comment">%    &#39;DefaultSimState&#39;, &lt; Same sim state as a built-in block</span>
<span class="token comment">%    &#39;HasNoSimState&#39;,   &lt; No sim state</span>
<span class="token comment">%    &#39;CustomSimState&#39;,  &lt; Has GetSimState and SetSimState methods</span>
<span class="token comment">%    &#39;DisallowSimState&#39; &lt; Error out when saving or restoring the model sim state</span>
block<span class="token punctuation">.</span>SimStateCompliance <span class="token operator">=</span> <span class="token string">&#39;DefaultSimState&#39;</span><span class="token punctuation">;</span>

<span class="token comment">%% -----------------------------------------------------------</span>
<span class="token comment">%% The MATLAB S-function uses an internal registry for all</span>
<span class="token comment">%% block methods. You should register all relevant methods</span>
<span class="token comment">%% (optional and required) as illustrated below. You may choose</span>
<span class="token comment">%% any suitable name for the methods and implement these methods</span>
<span class="token comment">%% as local functions within the same file. See comments</span>
<span class="token comment">%% provided for each function for more information.</span>
<span class="token comment">%% -----------------------------------------------------------------</span>

block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;PostPropagationSetup&#39;</span><span class="token punctuation">,</span>    <span class="token operator">@</span>DoPostPropSetup<span class="token punctuation">)</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;InitializeConditions&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>InitializeConditions<span class="token punctuation">)</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Start&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Start<span class="token punctuation">)</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Outputs&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Outputs<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">% Required</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Update&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Update<span class="token punctuation">)</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Derivatives&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Derivatives<span class="token punctuation">)</span><span class="token punctuation">;</span>
block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Terminate&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Terminate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">% Required</span>

<span class="token comment">%end setup</span>

<span class="token comment">%%</span>
<span class="token comment">%% PostPropagationSetup:</span>
<span class="token comment">%%   Functionality    : Setup work areas and state variables. Can</span>
<span class="token comment">%%                      also register run-time methods here</span>
<span class="token comment">%%   Required         : No</span>
<span class="token comment">%%   C MEX counterpart: mdlSetWorkWidths</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">DoPostPropSetup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
block<span class="token punctuation">.</span>NumDworks <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name            <span class="token operator">=</span> <span class="token string">&#39;x1&#39;</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions      <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID      <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>      <span class="token comment">% double</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity      <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span> <span class="token comment">% real</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UsedAsDiscState <span class="token operator">=</span> true<span class="token punctuation">;</span>


<span class="token comment">%%</span>
<span class="token comment">%% InitializeConditions:</span>
<span class="token comment">%%   Functionality    : Called at the start of simulation and if it is </span>
<span class="token comment">%%                      present in an enabled subsystem configured to reset </span>
<span class="token comment">%%                      states, it will be called when the enabled subsystem</span>
<span class="token comment">%%                      restarts execution to reset the states.</span>
<span class="token comment">%%   Required         : No</span>
<span class="token comment">%%   C MEX counterpart: mdlInitializeConditions</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">InitializeConditions</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

<span class="token comment">%end InitializeConditions</span>


<span class="token comment">%%</span>
<span class="token comment">%% Start:</span>
<span class="token comment">%%   Functionality    : Called once at start of model execution. If you</span>
<span class="token comment">%%                      have states that should be initialized once, this </span>
<span class="token comment">%%                      is the place to do it.</span>
<span class="token comment">%%   Required         : No</span>
<span class="token comment">%%   C MEX counterpart: mdlStart</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">Start</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">%end Start</span>

<span class="token comment">%%</span>
<span class="token comment">%% Outputs:</span>
<span class="token comment">%%   Functionality    : Called to generate block outputs in</span>
<span class="token comment">%%                      simulation step</span>
<span class="token comment">%%   Required         : Yes</span>
<span class="token comment">%%   C MEX counterpart: mdlOutputs</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">Outputs</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">+</span> block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>

<span class="token comment">%end Outputs</span>

<span class="token comment">%%</span>
<span class="token comment">%% Update:</span>
<span class="token comment">%%   Functionality    : Called to update discrete states</span>
<span class="token comment">%%                      during simulation step</span>
<span class="token comment">%%   Required         : No</span>
<span class="token comment">%%   C MEX counterpart: mdlUpdate</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">Update</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>

<span class="token comment">%end Update</span>

<span class="token comment">%%</span>
<span class="token comment">%% Derivatives:</span>
<span class="token comment">%%   Functionality    : Called to update derivatives of</span>
<span class="token comment">%%                      continuous states during simulation step</span>
<span class="token comment">%%   Required         : No</span>
<span class="token comment">%%   C MEX counterpart: mdlDerivatives</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">Derivatives</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

<span class="token comment">%end Derivatives</span>

<span class="token comment">%%</span>
<span class="token comment">%% Terminate:</span>
<span class="token comment">%%   Functionality    : Called at the end of simulation for cleanup</span>
<span class="token comment">%%   Required         : Yes</span>
<span class="token comment">%%   C MEX counterpart: mdlTerminate</span>
<span class="token comment">%%</span>
<span class="token keyword">function</span> <span class="token function">Terminate</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

<span class="token comment">%end Terminate</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","msfuntmpl_basic.m.html.vue"]]);export{d as default};

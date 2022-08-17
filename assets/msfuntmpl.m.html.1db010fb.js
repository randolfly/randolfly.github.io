import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as t}from"./app.8dee8b14.js";const e={},p=t(`<h1 id="msfuntmpl" tabindex="-1"><a class="header-anchor" href="#msfuntmpl" aria-hidden="true">#</a> msfuntmpl</h1><div class="language-matlab ext-matlab line-numbers-mode"><pre class="language-matlab"><code><span class="token keyword">function</span> <span class="token function">msfuntmpl</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
<span class="token comment">%MSFUNTMPL A Template for a MATLAB S-Function</span>
<span class="token comment">%   The MATLAB S-function is written as a MATLAB function with the</span>
<span class="token comment">%   same name as the S-function. Replace &#39;msfuntmpl&#39; with the name</span>
<span class="token comment">%   of your S-function.  </span>

<span class="token comment">%   Copyright 2003-2018 The MathWorks, Inc.</span>
  
%
<span class="token comment">% The setup method is used to setup the basic attributes of the</span>
<span class="token comment">% S-function such as ports, parameters, etc. Do not add any other</span>
<span class="token comment">% calls to the main body of the function.  </span>
<span class="token comment">%   </span>
<span class="token function">setup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">%endfunction</span>

<span class="token comment">% Function: setup ===================================================</span>
<span class="token comment">% Abstract:</span>
<span class="token comment">%   Set up the S-function block&#39;s basic characteristics such as:</span>
<span class="token comment">%   - Input ports</span>
<span class="token comment">%   - Output ports</span>
<span class="token comment">%   - Dialog parameters</span>
<span class="token comment">%   - Options</span>
<span class="token comment">% </span>
<span class="token comment">%   Required         : Yes</span>
<span class="token comment">%   C MEX counterpart: mdlInitializeSizes</span>
%
<span class="token keyword">function</span> <span class="token function">setup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

  <span class="token comment">% Register the number of ports.</span>
  block<span class="token punctuation">.</span>NumInputPorts  <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span>NumOutputPorts <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  
  <span class="token comment">% Set up the port properties to be inherited or dynamic.</span>
  block<span class="token punctuation">.</span>SetPreCompInpPortInfoToDynamic<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span>SetPreCompOutPortInfoToDynamic<span class="token punctuation">;</span>

  <span class="token comment">% Override the input port properties.</span>
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">% double</span>
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity  <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span>
  
  <span class="token comment">% Override the output port properties.</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID  <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">% double</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity  <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">% Register the parameters.</span>
  block<span class="token punctuation">.</span>NumDialogPrms     <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span>DialogPrmsTunable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Tunable&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Nontunable&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;SimOnlyTunable&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token comment">% Set up the continuous states.</span>
  block<span class="token punctuation">.</span>NumContStates <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">% Register the sample times.</span>
  <span class="token comment">%  [0 offset]            : Continuous sample time</span>
  <span class="token comment">%  [positive_num offset] : Discrete sample time</span>
  %
  <span class="token comment">%  [-1, 0]               : Inherited sample time</span>
  <span class="token comment">%  [-2, 0]               : Variable sample time</span>
  block<span class="token punctuation">.</span>SampleTimes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">% -----------------------------------------------------------</span>
  <span class="token comment">% Options</span>
  <span class="token comment">% -----------------------------------------------------------------</span>
  <span class="token comment">% Specify if Accelerator should use TLC or call back to the </span>
  <span class="token comment">% MATLAB file</span>
  block<span class="token punctuation">.</span><span class="token function">SetAccelRunOnTLC</span><span class="token punctuation">(</span>false<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">% Specify the block&#39;s operating point compliance. The block operating </span>
  <span class="token comment">% point is used during the containing model&#39;s operating point save/restore)</span>
  <span class="token comment">% The allowed values are:</span>
  <span class="token comment">%   &#39;Default&#39; : Same the block&#39;s operating point as of a built-in block</span>
  <span class="token comment">%   &#39;UseEmpty&#39;: No data to save/restore in the block operating point</span>
  <span class="token comment">%   &#39;Custom&#39;  : Has custom methods for operating point save/restore</span>
  <span class="token comment">%                 (see GetOperatingPoint/SetOperatingPoint below)</span>
  <span class="token comment">%   &#39;Disallow&#39;: Error out when saving or restoring the block operating point.</span>
  block<span class="token punctuation">.</span>OperatingPointCompliance <span class="token operator">=</span> <span class="token string">&#39;Default&#39;</span><span class="token punctuation">;</span>
  
  <span class="token comment">% -----------------------------------------------------------------</span>
  <span class="token comment">% The MATLAB S-function uses an internal registry for all</span>
  <span class="token comment">% block methods. You should register all relevant methods</span>
  <span class="token comment">% (optional and required) as illustrated below. You may choose</span>
  <span class="token comment">% any suitable name for the methods and implement these methods</span>
  <span class="token comment">% as local functions within the same file.</span>
  <span class="token comment">% -----------------------------------------------------------------</span>
   
  <span class="token comment">% -----------------------------------------------------------------</span>
  <span class="token comment">% Register the methods called during update diagram/compilation.</span>
  <span class="token comment">% -----------------------------------------------------------------</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% CheckParameters:</span>
  <span class="token comment">%   Functionality    : Called in order to allow validation of the</span>
  <span class="token comment">%                      block dialog parameters. You are </span>
  <span class="token comment">%                      responsible for calling this method</span>
  <span class="token comment">%                      explicitly at the start of the setup method.</span>
  <span class="token comment">%   C MEX counterpart: mdlCheckParameters</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;CheckParameters&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>CheckPrms<span class="token punctuation">)</span><span class="token punctuation">;</span>

  %
  <span class="token comment">% SetInputPortSamplingMode:</span>
  <span class="token comment">%   Functionality    : Check and set input and output port </span>
  <span class="token comment">%                      attributes and specify whether the port is operating </span>
  <span class="token comment">%                      in sample-based or frame-based mode</span>
  <span class="token comment">%   C MEX counterpart: mdlSetInputPortFrameData.</span>
  <span class="token comment">%   (The DSP System Toolbox is required to set a port as frame-based)</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetInputPortSamplingMode&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetInpPortFrameData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetInputPortDimensions:</span>
  <span class="token comment">%   Functionality    : Check and set the input and optionally the output</span>
  <span class="token comment">%                      port dimensions.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetInputPortDimensionInfo</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetInputPortDimensions&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetInpPortDims<span class="token punctuation">)</span><span class="token punctuation">;</span>

  %
  <span class="token comment">% SetOutputPortDimensions:</span>
  <span class="token comment">%   Functionality    : Check and set the output and optionally the input</span>
  <span class="token comment">%                      port dimensions.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetOutputPortDimensionInfo</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetOutputPortDimensions&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetOutPortDims<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetInputPortDatatype:</span>
  <span class="token comment">%   Functionality    : Check and set the input and optionally the output</span>
  <span class="token comment">%                      port datatypes.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetInputPortDataType</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetInputPortDataType&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetInpPortDataType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetOutputPortDatatype:</span>
  <span class="token comment">%   Functionality    : Check and set the output and optionally the input</span>
  <span class="token comment">%                      port datatypes.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetOutputPortDataType</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetOutputPortDataType&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetOutPortDataType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetInputPortComplexSignal:</span>
  <span class="token comment">%   Functionality    : Check and set the input and optionally the output</span>
  <span class="token comment">%                      port complexity attributes.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetInputPortComplexSignal</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetInputPortComplexSignal&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetInpPortComplexSig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetOutputPortComplexSignal:</span>
  <span class="token comment">%   Functionality    : Check and set the output and optionally the input</span>
  <span class="token comment">%                      port complexity attributes.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetOutputPortComplexSignal</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetOutputPortComplexSignal&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetOutPortComplexSig<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% PostPropagationSetup:</span>
  <span class="token comment">%   Functionality    : Set up the work areas and the state variables. You can</span>
  <span class="token comment">%                      also register run-time methods here.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetWorkWidths</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;PostPropagationSetup&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>DoPostPropSetup<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% -----------------------------------------------------------------</span>
  <span class="token comment">% Register methods called at run-time</span>
  <span class="token comment">% -----------------------------------------------------------------</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% ProcessParameters:</span>
  <span class="token comment">%   Functionality    : Call to allow an update of run-time parameters.</span>
  <span class="token comment">%   C MEX counterpart: mdlProcessParameters</span>
  <span class="token comment">%  </span>
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;ProcessParameters&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>ProcessPrms<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% </span>
  <span class="token comment">% InitializeConditions:</span>
  <span class="token comment">%   Functionality    : Call to initialize the state and the work</span>
  <span class="token comment">%                      area values.</span>
  <span class="token comment">%   C MEX counterpart: mdlInitializeConditions</span>
  <span class="token comment">% </span>
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;InitializeConditions&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>InitializeConditions<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% Start:</span>
  <span class="token comment">%   Functionality    : Call to initialize the state and the work</span>
  <span class="token comment">%                      area values.</span>
  <span class="token comment">%   C MEX counterpart: mdlStart</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Start&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Start<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% </span>
  <span class="token comment">% Outputs:</span>
  <span class="token comment">%   Functionality    : Call to generate the block outputs during a</span>
  <span class="token comment">%                      simulation step.</span>
  <span class="token comment">%   C MEX counterpart: mdlOutputs</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Outputs&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Outputs<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% </span>
  <span class="token comment">% Update:</span>
  <span class="token comment">%   Functionality    : Call to update the discrete states</span>
  <span class="token comment">%                      during a simulation step.</span>
  <span class="token comment">%   C MEX counterpart: mdlUpdate</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Update&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Update<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% </span>
  <span class="token comment">% Derivatives:</span>
  <span class="token comment">%   Functionality    : Call to update the derivatives of the</span>
  <span class="token comment">%                      continuous states during a simulation step.</span>
  <span class="token comment">%   C MEX counterpart: mdlDerivatives</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Derivatives&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Derivatives<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% Projection:</span>
  <span class="token comment">%   Functionality    : Call to update the projections during a</span>
  <span class="token comment">%                      simulation step.</span>
  <span class="token comment">%   C MEX counterpart: mdlProjections</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Projection&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Projection<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% SimStatusChange:</span>
  <span class="token comment">%   Functionality    : Call when simulation enters pause mode</span>
  <span class="token comment">%                      or leaves pause mode.</span>
  <span class="token comment">%   C MEX counterpart: mdlSimStatusChange</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SimStatusChange&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SimStatusChange<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">% </span>
  <span class="token comment">% Terminate:</span>
  <span class="token comment">%   Functionality    : Call at the end of a simulation for cleanup.</span>
  <span class="token comment">%   C MEX counterpart: mdlTerminate</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;Terminate&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>Terminate<span class="token punctuation">)</span><span class="token punctuation">;</span>

  %
  <span class="token comment">% GetOperatingPoint:</span>
  <span class="token comment">%   Functionality    : Return the operating point of the block.</span>
  <span class="token comment">%   C MEX counterpart: mdlGetOperatingPoint</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;GetOperatingPoint&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>GetOperatingPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  %
  <span class="token comment">% SetOperatingPoint:</span>
  <span class="token comment">%   Functionality    : Set the operating point data of the block using</span>
  <span class="token comment">%                       from the given value.</span>
  <span class="token comment">%   C MEX counterpart: mdlSetOperatingPoint</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;SetOperatingPoint&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>SetOperatingPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">% -----------------------------------------------------------------</span>
  <span class="token comment">% Register the methods called during code generation.</span>
  <span class="token comment">% -----------------------------------------------------------------</span>
  
  %
  <span class="token comment">% WriteRTW:</span>
  <span class="token comment">%   Functionality    : Write specific information to model.rtw file.</span>
  <span class="token comment">%   C MEX counterpart: mdlRTW</span>
  %
  block<span class="token punctuation">.</span><span class="token function">RegBlockMethod</span><span class="token punctuation">(</span><span class="token string">&#39;WriteRTW&#39;</span><span class="token punctuation">,</span> <span class="token operator">@</span>WriteRTW<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">%endfunction</span>

<span class="token comment">% -------------------------------------------------------------------</span>
<span class="token comment">% The local functions below are provided to illustrate how you may implement</span>
<span class="token comment">% the various block methods listed above.</span>
<span class="token comment">% -------------------------------------------------------------------</span>

<span class="token keyword">function</span> <span class="token function">CheckPrms</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
  
  a <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">DialogPrm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token operator">~</span><span class="token function">isa</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token string">&#39;double&#39;</span><span class="token punctuation">)</span>
    me <span class="token operator">=</span> <span class="token function">MSLException</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>BlockHandle<span class="token punctuation">,</span> <span class="token function">message</span><span class="token punctuation">(</span><span class="token string">&#39;Simulink:blocks:invalidParameter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">throw</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span>
  
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">ProcessPrms</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

  block<span class="token punctuation">.</span>AutoUpdateRuntimePrms<span class="token punctuation">;</span>
 
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SetInpPortFrameData</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> fd<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>SamplingMode <span class="token operator">=</span> fd<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>SamplingMode  <span class="token operator">=</span> fd<span class="token punctuation">;</span>
  
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SetInpPortDims</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> di<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions <span class="token operator">=</span> di<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions  <span class="token operator">=</span> di<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SetOutPortDims</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> di<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions <span class="token operator">=</span> di<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions    <span class="token operator">=</span> di<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SetInpPortDataType</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> dt<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>DataTypeID <span class="token operator">=</span> dt<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DataTypeID  <span class="token operator">=</span> dt<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>
  
<span class="token keyword">function</span> <span class="token function">SetOutPortDataType</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> dt<span class="token punctuation">)</span>

  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>DataTypeID  <span class="token operator">=</span> dt<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DataTypeID     <span class="token operator">=</span> dt<span class="token punctuation">;</span>

<span class="token comment">%endfunction  </span>

<span class="token keyword">function</span> <span class="token function">SetInpPortComplexSig</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity <span class="token operator">=</span> c<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity  <span class="token operator">=</span> c<span class="token punctuation">;</span>

<span class="token comment">%endfunction </span>
  
<span class="token keyword">function</span> <span class="token function">SetOutPortComplexSig</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> idx<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity <span class="token operator">=</span> c<span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity    <span class="token operator">=</span> c<span class="token punctuation">;</span>

<span class="token comment">%endfunction </span>
    
<span class="token keyword">function</span> <span class="token function">DoPostPropSetup</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
  block<span class="token punctuation">.</span>NumDworks <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name            <span class="token operator">=</span> <span class="token string">&#39;x1&#39;</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions      <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID      <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>      <span class="token comment">% double</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity      <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span> <span class="token comment">% real</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UsedAsDiscState <span class="token operator">=</span> true<span class="token punctuation">;</span>
  
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name            <span class="token operator">=</span> <span class="token string">&#39;numPause&#39;</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Dimensions      <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DatatypeID      <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>      <span class="token comment">% uint32</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Complexity      <span class="token operator">=</span> <span class="token string">&#39;Real&#39;</span><span class="token punctuation">;</span> <span class="token comment">% real</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UsedAsDiscState <span class="token operator">=</span> true<span class="token punctuation">;</span>
  
  <span class="token comment">% Register all tunable parameters as runtime parameters.</span>
  block<span class="token punctuation">.</span>AutoRegRuntimePrms<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">InitializeConditions</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

block<span class="token punctuation">.</span>ContStates<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">Start</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token function">uint32</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
   
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">WriteRTW</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
  
   block<span class="token punctuation">.</span><span class="token function">WriteRTWParam</span><span class="token punctuation">(</span><span class="token string">&#39;matrix&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">,</span>    <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   block<span class="token punctuation">.</span><span class="token function">WriteRTWParam</span><span class="token punctuation">(</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Mode&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Auto&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">Outputs</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">OutputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">+</span> block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
  
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">Update</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">InputPort</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
  
<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">Derivatives</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

block<span class="token punctuation">.</span>Derivatives<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>block<span class="token punctuation">.</span>ContStates<span class="token punctuation">.</span>Data<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">Projection</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

states <span class="token operator">=</span> block<span class="token punctuation">.</span>ContStates<span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
block<span class="token punctuation">.</span>ContStates<span class="token punctuation">.</span>Data <span class="token operator">=</span> states<span class="token operator">+</span>eps<span class="token punctuation">;</span> 

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SimStatusChange</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> s<span class="token punctuation">)</span>
  
  block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>    

  <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token number">0</span>
    <span class="token function">disp</span><span class="token punctuation">(</span><span class="token string">&#39;Pause in simulation.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">elseif</span> s <span class="token operator">==</span> <span class="token number">1</span>
    <span class="token function">disp</span><span class="token punctuation">(</span><span class="token string">&#39;Resume simulation.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">end</span>
  
<span class="token comment">%endfunction</span>
    
<span class="token keyword">function</span> <span class="token function">Terminate</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>

<span class="token function">disp</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Terminating the block with handle &#39;</span> <span class="token function">num2str</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>BlockHandle<span class="token punctuation">)</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>
 
<span class="token keyword">function</span> operPointData <span class="token operator">=</span> <span class="token function">GetOperatingPoint</span><span class="token punctuation">(</span>block<span class="token punctuation">)</span>
<span class="token comment">% package the Dwork data as the entire operating point of this block</span>
operPointData <span class="token operator">=</span> block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>

<span class="token keyword">function</span> <span class="token function">SetOperatingPoint</span><span class="token punctuation">(</span>block<span class="token punctuation">,</span> operPointData<span class="token punctuation">)</span>
<span class="token comment">% the operating point of this block is the Dwork data (this method </span>
<span class="token comment">% typically performs the inverse actions of the method GetOperatingPoint)</span>
block<span class="token punctuation">.</span><span class="token function">Dwork</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Data <span class="token operator">=</span> operPointData<span class="token punctuation">;</span>

<span class="token comment">%endfunction</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","msfuntmpl.m.html.vue"]]);export{d as default};

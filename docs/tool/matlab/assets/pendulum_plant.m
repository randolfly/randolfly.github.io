function pendulum_plant(block)
    %MSFUNTMPL_BASIC A Template for a Level-2 MATLAB S-Function
    %   The MATLAB S-function is written as a MATLAB function with the
    %   same name as the S-function. Replace 'msfuntmpl_basic' with the 
    %   name of your S-function.
    
    %   Copyright 2003-2018 The MathWorks, Inc.
    
    %%
    %% The setup method is used to set up the basic attributes of the
    %% S-function such as ports, parameters, etc. Do not add any other
    %% calls to the main body of the function.
    %%
    setup(block);
    
    %endfunction
    
    %% Function: setup ===================================================
    %% Abstract:
    %%   Set up the basic characteristics of the S-function block such as:
    %%   - Input ports
    %%   - Output ports
    %%   - Dialog parameters
    %%   - Options
    %%
    %%   Required         : Yes
    %%   C MEX counterpart: mdlInitializeSizes
    %%
    function setup(block)
    
    % Register number of ports
    block.NumInputPorts  = 1;
    block.NumOutputPorts = 2;
    
    % Setup port properties to be inherited or dynamic
    block.SetPreCompInpPortInfoToDynamic;
    block.SetPreCompOutPortInfoToDynamic;
    
    % Override input port properties
    block.InputPort(1).Dimensions        = 1;
    % block.InputPort(1).DatatypeID  = 0;  % double
    % block.InputPort(1).Complexity  = 'Real';
    block.InputPort(1).DirectFeedthrough = false;
    block.InputPort(1).SamplingMode = 'Sample'; % sample mode
    
    % % Override output port properties
    block.OutputPort(1).Dimensions       = 2;
    block.OutputPort(2).Dimensions       = 2;
    block.OutputPort(1).SamplingMode = 'Sample'; % sample mode
    block.OutputPort(2).SamplingMode = 'Sample'; % sample mode

    % block.OutputPort(1).DatatypeID  = 0; % double
    % block.OutputPort(1).Complexity  = 'Real';
    
    % Register parameters
    block.NumDialogPrms     = 5;
    
    % Register sample times
    %  [0 offset]            : Continuous sample time
    %  [positive_num offset] : Discrete sample time
    %
    %  [-1, 0]               : Inherited sample time
    %  [-2, 0]               : Variable sample time
    block.SampleTimes = [0 0];
    
    block.NumContStates = 4;

    % Specify the block simStateCompliance. The allowed values are:
    %    'UnknownSimState', < The default setting; warn and assume DefaultSimState
    %    'DefaultSimState', < Same sim state as a built-in block
    %    'HasNoSimState',   < No sim state
    %    'CustomSimState',  < Has GetSimState and SetSimState methods
    %    'DisallowSimState' < Error out when saving or restoring the model sim state
    block.SimStateCompliance = 'DefaultSimState';
    
    %% -----------------------------------------------------------------
    %% The MATLAB S-function uses an internal registry for all
    %% block methods. You should register all relevant methods
    %% (optional and required) as illustrated below. You may choose
    %% any suitable name for the methods and implement these methods
    %% as local functions within the same file. See comments
    %% provided for each function for more information.
    %% -----------------------------------------------------------------
    
    % block.RegBlockMethod('PostPropagationSetup',    @DoPostPropSetup);
    block.RegBlockMethod('InitializeConditions', @InitializeConditions);
    % block.RegBlockMethod('Start', @Start);
    block.RegBlockMethod('Outputs', @Outputs);     % Required
    % block.RegBlockMethod('Update', @Update);
    block.RegBlockMethod('Derivatives', @Derivatives);
    % block.RegBlockMethod('Terminate', @Terminate); % Required
    
    %end setup
    
    %%
    %% InitializeConditions:
    %%   Functionality    : Called at the start of simulation and if it is 
    %%                      present in an enabled subsystem configured to reset 
    %%                      states, it will be called when the enabled subsystem
    %%                      restarts execution to reset the states.
    %%   Required         : No
    %%   C MEX counterpart: mdlInitializeConditions
    %%
    function InitializeConditions(block)
        % assign x0 , x0' to continous state
        x_state = block.DialogPrm(4).Data;
        theta_state = block.DialogPrm(5).Data;
        
        block.ContStates.Data(1) = x_state(1);
        block.ContStates.Data(2) = x_state(2);

        % assign theta0 , theta0' to continous state
        block.ContStates.Data(3) = theta_state(1);
        block.ContStates.Data(4) = theta_state(2);
    %end InitializeConditions
    
    
    %%
    %% Outputs:
    %%   Functionality    : Called to generate block outputs in
    %%                      simulation step
    %%   Required         : Yes
    %%   C MEX counterpart: mdlOutputs
    %%
    function Outputs(block)
    
        block.OutputPort(1).Data = [block.ContStates.Data(1), block.ContStates.Data(2)];
        block.OutputPort(2).Data = [block.ContStates.Data(3), block.ContStates.Data(4)];
    
    %end Outputs
    
    %%
    %% Derivatives:
    %%   Functionality    : Called to update derivatives of
    %%                      continuous states during simulation step
    %%   Required         : No
    %%   C MEX counterpart: mdlDerivatives
    %%
    function Derivatives(block)
        l = block.DialogPrm(1).Data;
        m = block.DialogPrm(2).Data;
        M = block.DialogPrm(3).Data;

        x_state = block.OutputPort(1).Data;
        theta_state = block.OutputPort(2).Data;

        u = block.InputPort(1).Data;
        g = 9.8;

        % x = x_state(1);
        dx = x_state(2);

        theta = theta_state(1);
        dtheta = theta_state(2);

        ddx = (m + 2 * M + - m * cos(2 * theta))^(-1) * (2 * u + ...
            dtheta^2 * l * m * sin(theta) -2 * g * m * sin(2 * theta));
        ddtheta = (-l * (m + M) + l * m * cos(theta)^2)^(-1) * (2 ...
            * u * cos(theta) + (-4) * g * (m + M) * sin(theta) + dtheta^2 * l * m * cos (theta) * sin(theta));
        
        block.Derivatives.Data(1) = dx;
        block.Derivatives.Data(2) = ddx;
        block.Derivatives.Data(3) = dtheta;
        block.Derivatives.Data(4) = ddtheta;

    %end Derivatives
function [ funcobj ] = setupTrainer_multitau( transientLength,tau,predictt )
%SETUPTRAINER returns a funtion that receives input, observed states, and
%target and train the output layer for multiple delays simultaneously. 
%   transientLength: the washout period.
%   tau: time before the output is produced
%   predictt: prediction horizen

    function [ roW , y , OutAll, inputs , statesOut] = ...
            implementation (inputs,statesdata,outputs) 
        [ roW , y , OutAll, inputs , statesOut] = ...
        doTrainOLR_multitau( inputs , statesdata, outputs  ,...
        transientLength , tau, predictt  );
    end
    funcobj = @implementation;
end


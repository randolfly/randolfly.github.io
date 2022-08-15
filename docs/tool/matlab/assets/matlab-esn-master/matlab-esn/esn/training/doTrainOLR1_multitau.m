function [ roW , y , OutAll, inputs , statesOut] = ...
    doTrainOLR1_multitau( inputs , statesData, outputs  ,...
    transientLength , tau, predictt,gamma  )


I0All = [];
OutAll = [];

[statesOut desiredOut inputs] = prepOutputDelay(statesData', outputs', inputs',...
    transientLength, tau,predictt);

statesOut = statesOut(:,1:end-tau);
desiredOut = desiredOut(:,tau+1:end);

% Now prepare the inputs for the output layer
% the tau last time steps are not considered because of the delay. 
I0All= [I0All  statesOut' ];
% prepare the desired outputs. we should arrange the inputs and outputs
% according to the required tau.
OutAll =[OutAll ; desiredOut'];
inputs = inputs(:,tau+1:end)';
% add a constant bias source and the state and squared of the states.
I0All=[ones(size(I0All,1),1) I0All   ];
I0All=[ I0All   ];
% calculate output and error

roW=((I0All'*I0All+gamma*eye(size(I0All,2),size(I0All,2)))^-1*I0All'*OutAll)';

%roW=regress(OutAll,I0All)';
y=(I0All*roW');


end


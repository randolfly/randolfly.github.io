function [  y , OutAll, inputs, statesOut ] = ...
    doTestOLR(  inputs , statesData, outputs ,roW ,...
    transientLength , tau, predictt)




I0All = [];
OutAll = [];


[statesOut desiredOut inputs] = prepOutputDelay(statesData', outputs', inputs',...
    transientLength, tau,predictt);


% Now prepare the inputs for the output layer
% the tau last time steps are not considered because of the delay. 
I0All= [I0All  statesOut'];


% prepare the desired outputs. we should arrange the inputs and outputs
% according to the required tau.
OutAll =[OutAll ; desiredOut'];

inputs = inputs(:,tau+1:end)';

% add a constant bias source and the state and squared of the states.
I0All=[ones(size(I0All,1),1) I0All  ];


% calculate output and error
y=(I0All*roW');


end


%%
 % Author       : randolf
 % Date         : 2022-09-23 08:34:21
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 08:35:54
 % FilePath     : \assets\TRModel\CableTRModel.m
%%
function dydt = CableTRModel(t, y, P)
%CableLMModel - The dynamic model of 1 cable using the Lumped-Mass method
%
% Syntax: dydt = CableLMModel(t, y, P)
%
% Long description
    r = P.r;
    Jw = P.Jw;
    mp = P.mp;
    tau = P.tau;
    f = P.f;

    dtheta = y(2);

    ddtheta = (tau(t)-r*f(t))/(Jw+mp*r^2);
    
    dydt = [
        dtheta;
        ddtheta
    ];
end
%%
 % Author       : randolf
 % Date         : 2022-09-21 10:55:09
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 09:07:33
 % FilePath     : \assets\LMModel2\LM2_getK.m
%%
function K = LM2_getK(E, A, L, r, theta, n)
%LM2_getK - Description
%
% Syntax: K = LM2_getK(input)
%
% Long description
    k1 = E*A/((L-r*theta)/(n+1));
    ki = E*A/((L-r*theta)/(n+1));
    K = diag([0,k1,ones(1,n)*ki]);
end
%%
 % Author       : randolf
 % Date         : 2022-09-21 10:55:09
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 10:58:15
 % FilePath     : \assets\LMModel\LM_getK.m
%%
function K = LM_getK(E, A, L, r, theta, n)
%LM_getK - Description
%
% Syntax: K = LM_getK(input)
%
% Long description
    k1 = E*A/(L/(n+1)-r*theta);
    ki = E*A/(L/(n+1));
    K = diag([0,k1,ones(1,n)*ki]);
end
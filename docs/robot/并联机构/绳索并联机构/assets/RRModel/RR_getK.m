%%
 % Author       : randolf
 % Date         : 2022-09-19 16:52:45
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:14:37
 % FilePath     : \assets\RRModel\RR_getK.m
%%

function K = RR_getK(E, A, li, n)
%getK - Description
%
% Syntax: K = getK(E, A, li, n)
%
% Long description
    Lmd33 = RR_getLmd33(n);
    K = zeros(n+2);
    K(2:(n+1), 2:(n+1)) = (E*A/li).*Lmd33;
end
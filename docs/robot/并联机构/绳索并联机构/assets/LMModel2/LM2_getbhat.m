%%
 % Author       : randolf
 % Date         : 2022-09-21 10:59:12
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 09:02:47
 % FilePath     : \assets\LMModel2\LM2_getbhat.m
%%
function bhat = LM2_getbhat(n)
%getbhat - Description
%
% Syntax: bhat = getbhat()
%
% Long description
    bhat = zeros(n+2, 1);
    bhat(1, 1) = 1;
end
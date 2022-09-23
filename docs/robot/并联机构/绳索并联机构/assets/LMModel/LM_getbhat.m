%%
 % Author       : randolf
 % Date         : 2022-09-21 10:59:12
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 10:59:12
 % FilePath     : \assets\LMModel\LM_getbat.m
%%
function bhat = LM_getbhat(n)
%getbhat - Description
%
% Syntax: bhat = getbhat()
%
% Long description
    bhat = zeros(n+2, 1);
    bhat(1, 1) = 1;
end
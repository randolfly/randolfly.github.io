%%
 % Author       : randolf
 % Date         : 2022-09-19 17:16:29
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:14:30
 % FilePath     : \assets\RRModel\RR_getbhat.m
%%

function bhat = RR_getbhat(n)
%getbhat - Description
%
% Syntax: bhat = getbhat()
%
% Long description
    bhat = zeros(n+2, 1);
    bhat(1, 1) = 1;
end
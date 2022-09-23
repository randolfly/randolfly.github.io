%%
 % Author       : randolf
 % Date         : 2022-09-21 10:59:46
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 10:59:46
 % FilePath     : \assets\LMModel\LM_getbbar.m
%%
function bbar = LM_getbbar(n)
%getbhat - Description
%
% Syntax: bbar = getbbar()
%
% Long description
    bbar = zeros(n+2, 1);
    bbar(end, end) = 1;
end
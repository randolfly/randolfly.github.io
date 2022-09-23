%%
 % Author       : randolf
 % Date         : 2022-09-21 10:59:46
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 09:02:49
 % FilePath     : \assets\LMModel2\LM2_getbbar.m
%%
function bbar = LM2_getbbar(n)
%getbhat - Description
%
% Syntax: bbar = getbbar()
%
% Long description
    bbar = zeros(n+2, 1);
    bbar(end, end) = 1;
end
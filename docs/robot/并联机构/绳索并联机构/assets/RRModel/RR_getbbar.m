%%
 % Author       : randolf
 % Date         : 2022-09-19 22:13:45
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:14:25
 % FilePath     : \assets\RRModel\RR_getbbar.m
%%
function bbar = RR_getbbar(n)
%getbhat - Description
%
% Syntax: bbar = getbbar()
%
% Long description
    bbar = zeros(n+2, 1);
    bbar(end, end) = 1;
end
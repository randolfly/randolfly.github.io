%%
 % Author       : randolf
 % Date         : 2022-09-19 16:51:24
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:14:59
 % FilePath     : \assets\RRModel\RR_getLmd2.m
%%
function Lmd2 = RR_getLmd2(n)
%getlmd2 - Description
%
% Syntax: Lmd2 = getLmd2(n)
%
% Long description
    vec = 1:n;
    Lmd2 = 4.*(sin((pi.*vec)./4).^2)./(pi.*vec);
end
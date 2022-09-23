%%
 % Author       : randolf
 % Date         : 2022-09-20 11:06:20
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:16:52
 % FilePath     : \assets\RRModel\RR_getTransMat.m
%%

function R = RR_getTransMat(r, n)
%getTransMat - Description
%
% Syntax: R = getTransMat(r, n)
%
% Long description
    temp_list = 1:n;
    % P = sin(pi.*temp_list - (pi*L/2/li).*temp_list);
    P = sin((pi/2).*temp_list);
    R = [
        1, zeros(1,n);
        zeros(n,1), eye(n);
        -r, P;
    ];
end
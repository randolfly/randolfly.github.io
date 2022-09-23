%%
 % Author       : randolf
 % Date         : 2022-09-19 16:51:33
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:15:02
 % FilePath     : \assets\RRModel\RR_getLmd22.m
%%
function Lmd22 = RR_getLmd22(n)
%getLmd22 - Description
%
% Syntax: Lmd22 = getLmd22(n)
%
% Long description
    Lmd22 = zeros(n);
    for i = 1:n
        for j = 1:n
            if i==j
                Lmd22(i,j) = 1/2*(1-sin(pi*i)/(pi*i));
            else
                Lmd22(i,j) = (sin(1/2*pi*(i-j))/(i-j) - sin(1/2*pi*(i+j))/(i+j))/pi;
            end
        end
    end
end
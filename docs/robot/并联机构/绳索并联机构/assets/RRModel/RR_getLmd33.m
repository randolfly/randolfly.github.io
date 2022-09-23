%%
 % Author       : randolf
 % Date         : 2022-09-19 16:51:45
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:15:06
 % FilePath     : \assets\RRModel\RR_getLmd33.m
%%


function Lmd33 = RR_getLmd33(n)
%getLmd33 - Description
%
% Syntax: Lmd33 = getLmd33(n)
%
% Long description
    Lmd33 = zeros(n);
    for i = 1:n
        for j = 1:n
            if i==j
                Lmd33(i,j) = (pi*i)^2/8;
            else
                Lmd33(i,j) = (i*j*pi/4)*(sin((pi/2)*(i-j))/(i-j)+sin((pi/2)*(i+j))/(i+j));
            end
        end
    end
end
    
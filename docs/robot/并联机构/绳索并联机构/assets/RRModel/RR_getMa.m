%%
 % Author       : randolf
 % Date         : 2022-09-19 16:50:46
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:19:13
 % FilePath     : \assets\RRModel\RR_getMa.m
%%

function Ma = RR_getMa(r, rho, A, theta, li, Jw, mp, n)
%getMa - 获取总质量矩阵
%
% Syntax: Ma = getMa(n)
%
% Long description
    Mw = getMw(Jw, n);
    Mp = getMp(mp, n);
    Mcw = getMcw(r, rho, A, theta, n);
    Mca = getMca(r, rho, A, li, n);

    Ma = Mw + Mp + Mcw + Mca;
end

function Mw = getMw(Jw, n)
%getMw - Description
%
% Syntax: Mw = getMw(Jw, n)
%
% Long description
    Mw = zeros(n+2);
    Mw(1,1) = Jw;
end

function Mp = getMp(mp, n)
%getMp - Description
%
% Syntax: Mp = getMp(mp, n)
%
% Long description
    Mp = zeros(n+2);
    Mp(end,end) = mp;
end

function Mcw = getMcw(r, rho, A, theta, n)
%getMcw - Description
%
% Syntax: Mcw = getMcw(r, rho, A, theta)
%
% Long description
    Mcw = zeros(n+2);
    Mcw(1,1) = r^3*rho*A*theta;
end

function Mca = getMca(r, rho, A, li, n)
%getMca - Description
%
% Syntax: Mca = getMca(r, rho, A, li)
%
% Long description
    Lmd2 = RR_getLmd2(n);
    Lmd22 = RR_getLmd22(n);
    % 直接构造对称矩阵
    Mca_temp = [
        r^2/2, -r.*Lmd2, 0;
        (-r.*Lmd2)', Lmd22, zeros(n,1);
        0, zeros(1,n), 0
    ];
    Mca = (rho*A*li)*Mca_temp;
end
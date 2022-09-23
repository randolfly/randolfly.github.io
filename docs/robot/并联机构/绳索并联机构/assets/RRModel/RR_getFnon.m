%%
 % Author       : randolf
 % Date         : 2022-09-19 21:20:39
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:21:25
 % FilePath     : \assets\RRModel\RR_getFnon.m
%%

function Fnon = RR_getFnon(r, rho, A, dtheta, E, li, q, dq, n)
%get - Description
%
% Syntax: Fnon = getFnon()
%
% Long description
    dMa = getDMa(r, rho, A, dtheta, n);
    parQuadMa = getParQuadMa(r, rho, A, dq, n);
    parQuadK = getParQuadK(E, A, r, li, q, n);

    Fnon = -dMa*dq + parQuadMa - parQuadK;
end

function dMa = getDMa(r, rho, A, dtheta, n)
%getDMa - Description
%
% Syntax: dMa = getDMa()
%
% Long description
    dMcw = getDMcw(r, rho, A, dtheta, n);
    dMca = getDMca(r, rho, A, dtheta, n);
    dMa = dMcw + dMca;
end

function dMcw = getDMcw(r, rho, A, dtheta, n)
%getDMcw - Description
%
% Syntax: dMcw = getDMcw(r, rho, A, dtheta)
%
% Long description
    dMcw = zeros(n+2);
    dMcw(1,1) = r^3*rho*A*dtheta;
end

function dMca = getDMca(r, rho, A, dtheta, n)
%getDMcw - Description
%
% Syntax: dMca = getDMca(r, rho, A, dtheta, n)
%
% Long description
    Lmd2 = RR_getLmd2(n);
    Lmd22 = RR_getLmd22(n);
    dMca_temp = [
        r^2, -r*Lmd2, 0;
        (-r*Lmd2)', Lmd22, zeros(n,1);
        0, zeros(1,n), 0
    ];
    dMca = -(rho*A*r*dtheta).*dMca_temp;
end

function parQuadMa = getParQuadMa(r, rho, A, dq, n)
%myFun - Description
%
% Syntax: parQuadMa = getParQuadMa(r, rho, A, dq, n)
%
% Long description
    pMcw_ptheta = zeros(n+2);
    pMcw_ptheta(1,1) = rho*A*r^3;
    Lmd2 = RR_getLmd2(n);
    Lmd22 = RR_getLmd22(n);
    pMca_ptheta_temp = [
        r^2, -r*Lmd2, 0;
        (-r*Lmd2)', Lmd22, zeros(n,1);
        0, zeros(1,n), 0
    ];
    pMca_ptheta = -(rho*A*r).*pMca_ptheta_temp;
    parQuadMa_temp = [
        dq'*(pMcw_ptheta + pMca_ptheta)'*dq;
        zeros(n+1,1)
    ];
    parQuadMa = 1/2.*parQuadMa_temp;
end

function parQuadK = getParQuadK(E, A, r, li, q, n)
%myFun - Description
%
% Syntax: parQuadK = getParQuadK(input)
%
% Long description
    Lmd33 = RR_getLmd33(n);
    pK_ptheta = zeros(n+2);
    pK_ptheta(2:(n+1), 2:(n+1)) = (E*A*r/li^2).*Lmd33;

    parQuadK_temp = [
        q'*pK_ptheta*q;
        zeros(n+1,1)
    ];
    parQuadK = 1/2.*parQuadK_temp;
end


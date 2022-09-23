%%
 % Author       : randolf
 % Date         : 2022-09-21 11:00:49
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 11:19:49
 % FilePath     : \assets\LMModel\LM_getFnon.m
%%
function Fnon = LM_getFnon(E, L, r, rho, A, q, dq, n)
%LM_getFnon - Description
%
% Syntax: Fnon = LM_getFnon()
%
% Long description
    dtheta = dq(1);
    dx1 = dq(2);
    theta = q(1);
    x1 = q(2);

    dM = getDM(r, rho, A, dtheta, n);
    parM = getParM(rho, A, r, dtheta, dx1, n);
    parK = getParK(E, A, r, L, theta, x1, n);

    Fnon = -dM*dq + parM - parK;
end

function dM = getDM(r, rho, A, dtheta, n)
    dm1 = -r*rho*A*dtheta;
    dM = [
        0, -dm1*r, zeros(1,n);
        -dm1*r, dm1, zeros(1,n);
        zeros(n,1), zeros(n), zeros(n,1)
    ];
end

function parM = getParM(rho, A, r, dtheta, dx1, n)
%getParm - Description
%   
% Syntax: parM = getParM(rho, A, r, dtheta, dx1)
%
% Long description  
    parM = [
        -(1/2*rho*A*r)*(-2*r*dtheta*dx1 + dx1^2);
        zeros(n+1,1)
    ];
end

function parK = getParK(E, A, r, L, theta, x1, n)
%getParm - Description
%   
% Syntax: parM = getParm(rho, A, r, dtheta, dx1)
%
% Long description  
    parK = [
        (1/2)*(E*A*r)/((L/(n+1)-r*theta)^2)*x1^2;
        zeros(n+1,1)
    ];
end
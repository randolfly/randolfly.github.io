function M = LM2_getM(mp, Jw, rho, A, L, r, theta, n)
%LM2_getM - Description
%
% Syntax: M = LM2_getM(input)
%
% Long description
    Mw = getMw(Jw, rho, A, r, theta, n);
    Mp = mp.*[
        r^2, -r.*ones(1, n+1);
        -r.*ones(n+1, 1), ones(n+1)
    ];
    sumMi = getSumMi(rho, A, L, r, theta, n);
    M = Mw + Mp + sumMi;
end

function sumMi = getSumMi(rho, A, L, r, theta, n)
%getSumMi - Description
%
% Syntax: sumMi = getSumMi(rho, A, L, r, theta, n)
%
% Long description
    sumMi = zeros(n+2);
    for index = 1:n
        mi = rho*A*(L- r*theta)/n;
        sumMi = sumMi + getMi(r, mi, index, n);
    end
end

function Mi = getMi(r, mi, i, n)
%getMi - Description
%
% Syntax: Mi = getMi(r, mi, n)
%
% Long description
    temp_list = zeros(1, n+1);
    temp_list(1:i) = 1;
    Mi = mi.*[
        r^2, -r.*temp_list
        -r.*(temp_list'), temp_list.*(temp_list')
    ];
end

function Mw = getMw(Jw, rho, A, r, theta, n)
%getMw - Description
%
% Syntax: Mw = getMw(Jw, rho, A, r, theta, n)
%
% Long description
    J1 = Jw + rho*A*r^3*theta;
    Mw = zeros(n+2);
    Mw(1,1) = J1;
end
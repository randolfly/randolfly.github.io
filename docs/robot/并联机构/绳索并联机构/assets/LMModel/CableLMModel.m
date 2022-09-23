function dydt = CableLMModel(t, y, P)
%CableLMModel - The dynamic model of 1 cable using the Lumped-Mass method
%
% Syntax: dydt = CableLMModel(t, y, P)
%
% Long description
    r = P.r;
    rho = P.rho;
    A = P.A;
    Jw = P.Jw;
    mp = P.mp;
    D = P.D;
    tau = P.tau;
    f = P.f;
    L = P.L;
    E = P.E;

    n = P.n;

    q = y(1:(n+2), 1);
    dq = y((n+3):end, 1);

    theta = q(1);

    M = LM_getM(mp, Jw, rho, A, L, r, theta, n);
    K = LM_getK(E, A, L, r, theta, n);
    bbar = LM_getbbar(n);
    bhat = LM_getbhat(n);
    Fnon = LM_getFnon(E, L, r, rho, A, q, dq, n);

    ddq = M\(bhat*tau(t) + bbar*f(t) + Fnon - K*q - D*dq);

    dydt = [
        dq;
        ddq
    ];
end
function dydt = CableRRModel(t, y, P)
% CableRRModel - The dynamic model of 1 cable using the Rayley-Reiz method
%
% Syntax: dydt = CableRRModel(t, y, P)
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

    % contrained state
    z = y(1:(n+1), 1);
    dz = y((n+2):end, 1);
    theta = z(1,1);
    dtheta = dz(1,1);
    li = L - r*theta;

    % target state
    R = RR_getTransMat(r, n);
    q = R*z;
    dq = R*dz;
    
    Ma = RR_getMa(r, rho, A, theta, li, Jw, mp, n);
    K = RR_getK(E, A, li, n);
    bhat = RR_getbhat(n);
    bbar = RR_getbbar(n);
    Fnon = RR_getFnon(r, rho, A, dtheta, E, li, q, dq, n);

    Ma_z = R'*Ma*R;
    D_z = R'*D*R;
    K_z = R'*K*R;
    bhat_z = R'*bhat;
    bbar_z = R'*bbar;
    Fnon_z = R'*Fnon;

    ddz = Ma_z\(bhat_z*tau(t) + bbar_z*f(t) + Fnon_z - K_z*z - D_z*dz);
    
    dydt = [dz;ddz];
end
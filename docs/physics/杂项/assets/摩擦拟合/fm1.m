function T = fm1(w, P)
    Tbrk = P.Tbrk;
    Tc = P.Tc;
    wbrk = P.wbrk;
    f = P.f;

    wst = wbrk/sqrt(2);
    wcoul = wbrk/10;

    T = sqrt(2*exp(1))*(Tbrk-Tc)*exp(-(w/wst)^2)*w/wst + Tc*tanh(w/wcoul) + f*w;
end
function dydt = testModel(y,t,P)

    p = y(1);
    theta = y(2);

    dp = y(3);
    dtheta = y(4);

    ddtheta = getDDtheta(theta, dtheta, p, dp, t, P);
    ddp = getDDp(theta, dtheta, p, dp, t, P);

    dydt = [
        dp;
        dtheta;
        ddp;
        ddtheta;
    ];
end
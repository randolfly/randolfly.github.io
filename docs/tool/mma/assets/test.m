p0 = 1;
y0 = [p0;deg2rad(30);0;-1];

P.L = 0.5;
P.R = 1;
P.m = 0.1;
P.M = 0.1;
P.g = 9.8;
P.k = 10;
P.F = @(t) 0;
P.mu = 0.02;
P.p0 = p0;

tspan = [0 10];
[t,y] = ode45(@(t,y) testModel(y,t,P), tspan, y0);

figure;
tsubplot(2,1,1,'tight');
grid on; hold on;
plot(t, y(:,1), 'LineWidth',2);
plot(t, y(:,2), 'LineWidth',2);
legend('p','theta')
hold off;
tsubplot(2,1,2,'tight');
grid on; hold on;
plot(t, y(:,3), 'LineWidth',2);
plot(t, y(:,4), 'LineWidth',2);
legend('dp','dtheta')
hold off;

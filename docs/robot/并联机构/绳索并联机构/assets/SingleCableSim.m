%%
 % Author       : randolf
 % Date         : 2022-09-19 15:47:33
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 08:41:39
 % FilePath     : \assets\SingleCableSim.m
%%

%% 单绳索仿真分析

addpath("RRModel\");
addpath("LMModel\");
addpath("TRModel\");

%% INIT PARAMS

mp = 1;      % 负载质量
r = 0.15;       % 滑轮半径
Jw = 1.39e-1;  % winch 转动惯量
L = 20;        % 绳索原长
A = 17.95e-6;   % 绳索截面面积
rho = 2200;     % 绳索密度
E = 500e6;      % 弹性模量
tau = @(t) 1;        % 转矩
f = @(t) 0;      % 外力
damp_ratio = 0;  % 阻尼系数

n = 5;          % 瑞利基数

% damper coefficients
temp_D_list = zeros(n+2,1);
temp_D_list(2:(n+1)) = damp_ratio;
D = diag(temp_D_list);

% params
P.r = r;
P.rho = rho;
P.A = A;
P.Jw = Jw;
P.mp = mp;
P.D = D;
P.tau = tau;
P.f = f;
P.L = L;
P.E = E;
P.n = n;

t_end = 1;
tspan = [0 t_end];
simu_num = 500;
% opts = odeset('RelTol',1e-4,'AbsTol',1e-6);
% sol = ode45(@(t,y) singleCableModel(t, y, P),tspan,y0, opts)

%% SOL LM
n = 5;
P.n = n;
temp_D_list = zeros(n+2,1);
temp_D_list(2:(n+1)) = 1e-5;
D = diag(temp_D_list);
P.D = D;

% init conditions: (n+2)x2
% q = [\theta, q_e^T, x_p]
% y = [q;dq]

q0 = zeros(n+2,1);
dq0 = zeros(n+2,1);

y0 = [q0;dq0];
sol = ode45(@(t,y) CableLMModel(t, y, P),tspan,y0)

x = linspace(0,t_end,simu_num);
y = deval(sol,x);

LM_theta = y(1, :);
LM_dx = sum(y(2:(n+2), :), 1);
LM_xp = L - r.*LM_theta + LM_dx;

% LM_figPlot(x, LM_theta, LM_xp, LM_dx)

%% SOL RR
% init conditions: (n+1)x2
% q = [\theta, q_e^T]
% y = [q;dq]

n = 3;
P.n = n;
temp_D_list = zeros(n+2,1);
temp_D_list(2:(n+1)) = 1e-5;
D = diag(temp_D_list);
P.D = D;

q0 = zeros(n+1,1);
dq0 = zeros(n+1,1);

y0 = [q0;dq0];

sol = ode45(@(t,y) CableRRModel(t, y, P),tspan,y0)

x = linspace(0,t_end,simu_num);
y = deval(sol,x);

RR_theta = y(1, :);
qe = y(2:(n+1), :);
li = L - r.*y(1, :);
temp_list = 1:n;
Phi = sin((pi/2).*temp_list);
RR_dx = Phi*qe;
RR_xp = li + RR_dx;

% RR_figPlot(x, RR_theta, RR_xp, RR_dx)

%% SOL TR(Total Rigid)
% init conditions: (2)x2
% y = [theta, dtheta]

y0 = zeros(2,1);

sol = ode45(@(t,y) CableTRModel(t, y, P),tspan,y0)

x = linspace(0,t_end,simu_num);
y = deval(sol,x);

TR_theta = y(1, :);
TR_dx = zeros(1, simu_num);
TR_xp = L - r.*TR_theta;

%% Compare LM & RR && TR
LM_RR_TR_plot([x;x;x]', [LM_theta;RR_theta;TR_theta]', [LM_xp;RR_xp;TR_xp]', [LM_dx;RR_dx;TR_dx]')
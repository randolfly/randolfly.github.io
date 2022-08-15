clc; clear;
%%
% 创建系统，初始化部分参数
steps = 100; % 仿真步数
ts = 0.01; % 采样周期
ad = [1.00027180509492, 0.00625101658363726, -0.000298104527325984, -0.000592137149727941, -0.000195218555764740; -0.00625101658365004, 0.879670596217866, 0.0123995907573806, 0.00942892684037583, -0.00775386215642799; -0.000298104527325549, -0.0123995907573839, 0.999169855139624, -0.0148759276100900, 0.000129671924415677; 0.000592137149728420, 0.00942892684037156, 0.0148759276100894, 0.998913472148301, 0.0286900249744246; -0.000195218555764543, 0.00775386215643324, 0.000129671924425366, -0.0286900249744255, 0.999703452784522];
bd = [-0.023307871208778; -0.314731276263951; -0.008803109981206; 0.016810972019614; 0.005019051193557];
cs = [0.023307871208772, -0.314731276263952, 0.008803109981209, 0.016810972019614, -0.005019051193548];
ds = 0;
sys1 = ss(ad, bd, cs, ds, ts);
xs0 = [0, 0, 0, 0, 0]';

%%
% MPC关键参数
P = 10; %预测步长
M = 5; %控制步长
q = 1; %Q矩阵权重
r = 10; %R矩阵权重
h = 0.5; %H矩阵权重
alpha = 0.2; %期望轨迹的平滑度（范围为0~1），越小，响应越快
target = 1; %目标值
%矩阵初始化
A = zeros(P, M); %动态矩阵
Q = eye(P, P) * q; %Q矩阵
R = eye(M, M) * r; %R矩阵
H = ones(P, 1) * h; %H矩阵
S = zeros(P, M); %移位矩阵
DU = zeros(M, 1);

for i = 1:P - 1
    S(i, i + 1) = 1;
end

S(P, P) = 1;
W = zeros(P, 1); %期望轨迹
Y0 = zeros(P, 1); %预测输出轨迹
Y_cor = zeros(P, 1); %预测输出轨迹修正值
%% 1.模型
%1.1获取阶跃响应模型
[stepresponse, t] = step(sys1, ts:ts:(P) * ts);
%1.2创建动态矩阵A，矩阵大小为P*M
A(:, 1) = stepresponse(1:P);

for i = 1:P

    for j = 2:M

        if i >= j
            A(i, j) = A(i - 1, j - 1);
        end

    end

end

%% 2.预测
xs1 = ad * xs0;
y(1) = cs * xs0;
u(1) = 0;

for k = 2:3 * steps
    xs1 = ad * xs0 + bd * u(k - 1);
    y(k) = cs * xs0 + ds * u(k - 1);
    xs0 = xs1;

    if k < steps
        target = 1;
    elseif (k - steps) < steps
        target = -1;
    else
        target = 1;
    end

    ref(k) = target;
    %参考轨迹
    for i = 1:P
        W(i, 1) = alpha^i * y(k) + (1 - alpha^i) * target;
    end

    %误差补偿，修正轨迹
    Y_cor = Y0 + H * (y(k) - Y0(1, 1));
    %移位
    Y0 = S * Y_cor;
    %计算增量化控制
    Y0 = Y0 + A * DU;
    plot(Y0);
    %求解最优值
    DU = (A' * Q * A + R)^ - 1 * A' * Q * (W - Y0);
    u(k) = u(k - 1) + DU(1, 1);
    %使用quadprog()的办法
    %Z1 = A'*Q*A+R;
    %Z2 = A'*Q*(-W);
    %[x,fval,exitflag,output,lambda] = quadprog(Z1,Z2);
    %u(k)=u(k-1)+x(1,1);
end

%%
% 绘制图形
figure(1);
subplot(211);
plot(y, 'linewidth', 2);
hold on; plot(ref, 'linewidth', 2);
title('system output');
xlabel('t');
ylabel('y');
ylim([-1.5 1.5])

grid on;
subplot(212);
plot(u, 'linewidth', 2);
title('control input');
xlabel('t');
ylabel('u');
grid on;

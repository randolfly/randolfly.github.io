% init params
y_0 = [1,0,0]';
u_0 = [0,0]';

% state params
y_vec = zeros(3,1);
u_vec = zeros(2,1);

simu_time = 100;
simu_interval = 0.01;
simu_index = 1;

y_data = zeros(round(simu_time/simu_interval),1);
% input sequence
u_seq = zeros(round(simu_time/simu_interval),1);

% init state
y_vec = y_0;
u_vec = u_0;

% input pulse lim
u_band = 0.1;

for i=0:simu_interval:simu_time
    y_out = plant(y_vec, u_vec);
    % a pulse input
%     if (simu_interval*i)<u_band
%         u_out = 1;
%     else
%         u_out = 0;
%     end

    u_out = square(i)+0.5*square(i+2)+cos(i)+rand();
%     u_out = sin(i);
    u_seq(simu_index) = u_out;
    
    % update state
    y_vec = [y_out; y_vec(1:end-1)];
    u_vec = [u_out; u_vec(1:end-1)];
    % store data
    y_data(simu_index) = y_out;
    
    % refersh index
    simu_index = simu_index+1;
end

Plot(y_data);

data = zeros(round(simu_time/simu_interval),2);
data = [y_data(1:10000,:), u_seq(1:10000,:)];

% update function
function y_out = plant(y_state, u_state)
    y_out = 0.2*sin(0.5*(y_state(1)+y_state(2)))+0.2*sin(0.5*(y_state(2)+y_state(3))...
        +2*u_state(1)+u_state(2))+(4*u_state(1)+u_state(2))/(1+0.2*cos(0.2*(2*y_state(1)+y_state(2))));
end


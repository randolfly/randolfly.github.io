%%
% Author       : randolf
% Date         : 2021-09-02 15:27:36
 % LastEditors  : randolf
 % LastEditTime : 2022-03-10 22:35:26
 % FilePath     : \undefinede:\randolf.top\library\机器人\并联机构\attachments\calForwardKinematicsNewton.m
%%
%% Newton Iteration Method

%% Stewart Platform Params Configuration
%% ========================================================================
%% ANCHOR INIT

% coordinates of points in up and down platforms
% each column has a form with [x,y,z]
%% ANCHOR up points
up_points = [100, 50, -87, -100, -50, 87;
        0, 87, 50, 0, -87, -50;
        0, 0, 0, 0, 0, 0; ];
%% ANCHOR down points
down_points = [150, 75, -130, -150, -75, 130;
            0, 130, 75, 0, -130, -75;
            0, 0, 0, 0, 0, 0];

% Platform initial postion and posture configutrtion, using for validation
% posture explained with RPY angles
init_global_position = [0; 0; 300; deg2rad(0); deg2rad(20); deg2rad(20); ];
% RPY has a same form with Euler ZYX
init_posture_rot = angle2dcm(init_global_position(6), init_global_position(5), init_global_position(4), 'ZYX')';
% l = Rp+t-b
init_legs_vec = init_posture_rot * up_points + init_global_position(1:3) - down_points;
%% ANCHOR Actual legs lengths
init_legs_length = vecnorm(init_legs_vec, 2, 1)';

% guess leg length, add some noise
%% ANCHOR Init Configuration
% there use fake data
start_global_position = init_global_position + [5.0*rand(3, 1); deg2rad(rand(3, 1))];

% error bar
% once the leg length error less than bar or iter more 100 times, stop
error_bar = 1e-4;
max_iter = 100;

%% ========================================================================
%% ANCHOR START
iter_index = 1;
% pre-allocate memory
guess_global_position = start_global_position;
guess_posture_rot = angle2dcm(guess_global_position(6), guess_global_position(5), guess_global_position(4), 'ZYX')';
guess_legs_length = zeros(size(init_legs_length));
guess_legs_vec = zeros(size(init_legs_vec));

tic 
while iter_index <= max_iter
    % calculate legs vec
    guess_legs_vec = guess_posture_rot * up_points + guess_global_position(1:3) - down_points;
    guess_legs_length = vecnorm(guess_legs_vec, 2, 1)';
    norm_guess_legs_vec = guess_legs_vec ./ repmat(guess_legs_length', 3, 1);
    % intermediate variable
    r = guess_posture_rot * up_points;
    % ANCHOR calculate jacobi matrix
    % based on the inverse property
    iter_jacobi_mat = [norm_guess_legs_vec' (cross(r, norm_guess_legs_vec, 1))'];

    % calculate error
    error_l = (guess_legs_length - init_legs_length);

    if norm(error_l) < error_bar
        break
    else
        % ANCHOR update postion
        guess_global_position = guess_global_position - pinv(iter_jacobi_mat) * error_l;
        guess_posture_rot = angle2dcm(guess_global_position(6), guess_global_position(5), guess_global_position(4), 'ZYX')';

        iter_index = iter_index + 1;
        % disp(guess_global_position-init_global_position)
    end
end

toc
% benchmark: Elapsed time is 0.542 ms

disp('Iter :')
disp(iter_index)
% disp(guess_global_position)
% disp(init_global_position - guess_global_position)
% svd fitting plane data
x = 0:16;
y = x;

% grid: Mesh(i,j), i->y_index, j_x_index
[X, Y] = meshgrid(x,y);

% standard data
Z_stan = X + 2*Y-2;
% raw data , to be fitting
Z_raw = Z_stan + (rand(size(Z_stan))-0.5)*10;

% get error point list
p_list = zeros(3,16*16);

for i=1:16
    for j=1:16
        p_list(:,i*16+j-16)=[x(i),y(j),Z_raw(j,i)]';
    end
end

% svd data
[U,S,V]=svd(p_list);

% consider the least singular value
a = U(1,3);
b = U(2,3);
c = U(3,3);

% calculate d value: ax+by+cz+d=0
d = -mean(a*X+b*Y+c*Z_raw, 'all');

% error between guess formula data and standard data
Z_guess = -(a/c)*X-(b/c)*Y-d/c;

Z_error = Z_stan - Z_guess;

mean(Z_error, 'all')

figure(1);
surf(X,Y,Z_stan);

hold on;
scatter3(p_list(1,:),p_list(2,:),p_list(3,:),'MarkerEdgeColor','k','MarkerFaceColor',[0 .75 .75])
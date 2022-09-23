function LM_RR_plot(X1, YMatrix1, YMatrix2, YMatrix3)
%CREATEFIGURE(X1, YMatrix1, YMatrix2, YMatrix3)
%  X1:  plot x 数据的向量
%  YMATRIX1:  plot y 数据的矩阵
%  YMATRIX2:  plot y 数据的矩阵
%  YMATRIX3:  plot y 数据的矩阵

%  由 MATLAB 于 21-Sep-2022 14:46:24 自动生成

% 创建 figure
figure1 = figure;
figure1.Position = [542.3333333333333,81,910,888.6666666666666];

% 创建 axes
axes1 = axes('Parent',figure1,...
    'Position',[0.0356662180349933 0.709264705882353 0.947510094212651 0.264621622842685]);
hold(axes1,'on');

% 使用 plot 的矩阵输入创建多个 line 对象
plot1 = plot(X1,YMatrix1,'Parent',axes1,'LineWidth',2);
set(plot1(2),'LineStyle','--');
set(plot1(3),'LineStyle','-.');

% 创建 title
title('theta');

box(axes1,'on');
grid(axes1,'on');
hold(axes1,'off');
% 创建 axes
axes2 = axes('Parent',figure1,...
    'Position',[0.0343203230148048 0.390937019969278 0.94414535666218 0.262672811059908]);
hold(axes2,'on');

% 使用 plot 的矩阵输入创建多个 line 对象
plot2 = plot(X1,YMatrix2,'Parent',axes2,'LineWidth',2);
set(plot2(2),'LineStyle','--');
set(plot2(3),'LineStyle','-.');

% 创建 title
title('Payload Position');

box(axes2,'on');
grid(axes2,'on');
hold(axes2,'off');
% 创建 axes
axes3 = axes('Parent',figure1,...
    'Position',[0.0309555854643338 0.0407066052227342 0.946837146702557 0.294930875576037]);
hold(axes3,'on');

% 使用 plot 的矩阵输入创建多个 line 对象
plot3 = plot(X1,YMatrix3,'Parent',axes3,'LineWidth',2);
set(plot3(2),'LineStyle','--');
set(plot3(3),'LineStyle','-.');

% 创建 title
title('Cable Deformation');

box(axes3,'on');
grid(axes3,'on');
hold(axes3,'off');

legend1 = legend(axes3,'show');
legend1.String = {"LM", "RR", "TR"};
set(legend1,...
    'Position',[0.0604395604395604 0.923668419541408 0.0750915750915751 0.0395723930982745]);

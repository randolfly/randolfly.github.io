%%
 % Author       : randolf
 % Date         : 2022-09-21 14:15:17
 % LastEditors  : randolf
 % LastEditTime : 2022-09-23 09:02:49
 % FilePath     : \assets\LMModel2\LM2_figPlot.m
%%
%%
 % Author       : randolf
 % Date         : 2022-09-20 20:28:27
 % LastEditors  : randolf
 % LastEditTime : 2022-09-21 09:14:21
 % FilePath     : \assets\RRModel\RR_figPlot.m
%%
function LM2_figPlot(X1, Y1, Y2, Y3)
    %CREATEFIGURE(X1, Y1, Y2, Y3)
    %  X1:  plot x 数据的向量
    %  Y1:  plot y 数据的向量
    %  Y2:  plot y 数据的向量
    %  Y3:  plot y 数据的向量
    
    %  由 MATLAB 于 20-Sep-2022 20:28:08 自动生成
    
    % 创建 figure
    figure1 = figure;
    % 创建 axes
    axes1 = axes('Parent',figure1,...
        'Position',[0.0582765034097954 0.709264705882353 0.927464352138872 0.245810169325634]);
    hold(axes1,'on');
    
    % 创建 plot
    plot(X1,Y1,'Parent',axes1,'LineWidth',2);
    
    % 创建 title
    title('LM2-角度');
    
    box(axes1,'on');
    grid(axes1,'on');
    hold(axes1,'off');
    % 创建 axes
    axes2 = axes('Parent',figure1,...
        'Position',[0.055176689398636 0.375811688311688 0.92374457532548 0.275974025974026]);
    hold(axes2,'on');
    
    % 创建 plot
    plot(X1,Y2,'Parent',axes2,'LineWidth',2);
    
    % 创建 title
    title('LM2-末端位置');
    
    box(axes2,'on');
    grid(axes2,'on');
    hold(axes2,'off');
    % 创建 axes
    axes3 = axes('Parent',figure1,...
        'Position',[0.0502169869807811 0.0475 0.928084314941102 0.263376623376623]);
    hold(axes3,'on');
    
    % 创建 plot
    plot(X1,Y3,'Parent',axes3,'LineWidth',2);
    
    % 创建 title
    title('LM2-绳索变形');
    
    box(axes3,'on');
    grid(axes3,'on');
    hold(axes3,'off');
end
---
date: 2022-08-11
tag:
  - tool
  - matlab
  - 图片
  - 绘图
category:
  - skill
  - matlab
---

# matlab 存储图片

# Matlab 存储图片


## 定义

使用 [matlab 画图教程](./matlab-画图教程.md) 的时候，希望自动导出图片

## 解决

### 方案 1

```matlab
ax = gca;
exportgraphics(ax,[fileName '_axis_ideal_length.png'])
```

```matlab
exportgraphics(ax,'image/r-'+ image_name + '.pdf','Resolution',300);
```

使用 `exportgraphics` 导出 png 格式的图片

### 方案 2

```matlab
saveas(gcf, [fileName '_axis_diff_length_minor.svg']);
```

```matlab
set(gcf,'Units','Inches');
pos = get(gcf,'Position')
set(gcf,'PaperPositionMode','Auto','PaperUnits','Inches','PaperSize',[pos(3), pos(4)])
print('image/'+ image_name ,'-dpdf');  %输出pdf，简单线图用pdf或eps(-deps)，AI打开编辑
close(gcf)
```

使用 `saveas` 导出 svg 格式图片，之后可以放到 AI 里面修图

注意，使用 [方案 1](./#方案-1) 导出的 **pdf** 可以保留字体信息，字体不会变成 Consola，因此建议还是用方案 1

方案 1: ![r-e_no_a_10-08-2022-17-42-12](./assets/r-e_no_a_10-08-2022-17-42-12.pdf)

方案 2: ![e_no_a_10-08-2022-17-42-12](./assets/e_no_a_10-08-2022-17-42-12.pdf)
## 案例

### 失败的多图堆叠

```matlab
% u Plot
u_plt = tiledlayout(3,1);

ax1 = nexttile;
plot(t, u2, 'LineWidth',1.0,'Color',[0.16 0.44 1]);
set(ax1,'FontName','Microsoft YaHei','FontSize',24,'LineWidth',1.5,...
    'TickLength',[0.02 0.02],...
    'XColor',[0 0 0],'XMinorTick','on','YColor',[0 0 0],'YMinorTick','on',...
    'ZColor',[0 0 0],'ZMinorTick','on');
% u2_plt.BoxDim = [12 3];
ax2 = nexttile;
plot(t, u3, 'LineWidth',1.0,'Color',[0.16 0.44 1]);
set(ax2,'FontName','Microsoft YaHei','FontSize',24,'LineWidth',1.5,...
    'TickLength',[0.02 0.02],...
    'XColor',[0 0 0],'XMinorTick','on','YColor',[0 0 0],'YMinorTick','on',...
    'ZColor',[0 0 0],'ZMinorTick','on');
% u3_plt.BoxDim = [12 3];
ax3 = nexttile;
plot(t, u1, 'LineWidth',1.0,'Color',[0.16 0.44 1]);
set(ax3,'FontName','Microsoft YaHei','FontSize',24,'LineWidth',1.5,...
    'TickLength',[0.02 0.02],...
    'XColor',[0 0 0],'XMinorTick','on','YColor',[0 0 0],'YMinorTick','on',...
    'ZColor',[0 0 0],'ZMinorTick','on');

u_plt.Units = 'inches';
u_plt.TileSpacing = 'loose';
u_plt.Padding = 'tight';
% u_plt.OuterPosition = [0 0 13.9472222222222 9.3253472354677];
xlabel(u_plt, "time/s", 'FontSize',24,'FontName','Microsoft YaHei');
ylabel(u_plt, "u", 'FontSize',24,'FontName','Microsoft YaHei');

u_fig = u_plt.Parent;
u_fig.Resize = 'off';
u_fig.Units = "inches";
u_fig.OuterPosition = [0 1 13.9472222222222 9.3253472354677];

image_name = 'u_' + file_name
exportgraphics(u_fig,'image/'+ image_name + '.pdf','Resolution',800);
saveas(u_fig, 'image/'+ image_name + '.svg')
```

![u_no_a_10-08-2022-17-42-12](./assets/u_no_a_10-08-2022-17-42-12.pdf)

[u_no_a_10-08-2022-17-42-12](./assets/u_no_a_10-08-2022-17-42-12.svg)


## 参考

##### 引文
##### 脚注

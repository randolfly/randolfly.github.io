---
date: 2022-06-06
tag:
  - default
category:
  - skill
  - matlab
---



# 读取 Scope CSV 数据


## 定义

适用于对倍福 Scope 导出的 CSV 文件进行数据处理操作，导出一个元胞，包含对应文件中数据的变量名和数据列表。

Functions:

- FileExract
  - 解析文件，返回 scope 中的变量名和数据列表
- Handle_raw_data
  - 根据预设文件夹路径打开文件，选择 (可多选) CSV 文件，使用 `fileExtract` 提取数据，返回元胞

fileExtract

```matlab
function [nameList, dataList]=fileExract(fileName)
%% 单文件解析
% IN: fileName
% OUT:
%   - nameList : 1xN string list, variable name list, N-> variable number
%   - dataList: kxN double list, variable data list, k-> data length, N->variable number
%   
% 获取文件变量名列表

    nameLine = {};
    % 第7行是文件的名字部分
    fidin = fopen(fileName,'r+'); % 需要读取的文件
    lineHeader = 7;
    index = 0;
    while (~feof(fidin))&&(index<lineHeader)
        tline=fgetl(fidin);%读取一行
        index=index+1;
        %fprintf(fidout,'%s\n',tline);      
        if index==lineHeader  
        %如果读到第7行，取出第7行
            nameLine=convertCharsToStrings(tline);
        end
    end
    fclose(fidin);
    
    nameList = split(nameLine, ["Name"]);
    nameList = strip(nameList);
    nameList = nameList(2:end)';
    
    % 获取文件数字信息

    % 30为了保证一定是数据开始了
    lineData = 30;
    T = readmatrix(fileName, 'HeaderLines', lineData);

    dataLength = size(T);
    % 往后倒10，保证不出现NAN
    lastDataIndex = dataLength(1)-10;
    varLength = length(nameList);
    dataList = zeros(lastDataIndex, varLength);

    for index=1:varLength
        dataList(:,index) = T(1:lastDataIndex, 2*index);
    end
end
```

Handle_raw_data

```matlab
%% 文件获取
% IN: None
% OUT:
%   - dataCell: 3xN cell, 每一列从上至下分别为: 文件名，文件中变量名，变量名对应的数据名
%       - 变量名和数据名列表规则参考fileExtract.m
%   
% 获取文件变量名列表
defPath = "E:\randolf.top\phd\project\柔性支撑Stewart平台控制-张荣侨(毕设)\实验代码\DataAnalysis\Archives\Scope";
[file,path] = uigetfile( '*.csv','defname',defPath,'MultiSelect', 'on');

if isequal(file,0)
   disp('User selected Cancel');
else
    % 只选择了一个文件
    if class(file)=='char'
        fileCell = cell(1,1);
        fileCell{1,1} = file;
    else
        fileCell = file;
    end
    fileSize = size(fileCell);
    fileNum = fileSize(2);
    
    dataCell = cell(3, fileNum);
    
    for index  = 1:fileNum
        fileName = fullfile(path,fileCell{1,index});
         % 文件解析
        dataCell{1, index} = fileName;
        [nameList, dataList] = fileExract(fileName);
        dataCell{2, index} = nameList;
        dataCell{3, index} = dataList;

        disp(['extracted ',fileCell{1,index}]);
    end
end
```

参考实现:

- ![](assets/fileExtract.m)
- ![](assets/handle_raw_data.m)

---

最终可以使用完成的函数实现：

调用 `scope_handle_rawdata` 实现解析 scope 代码

 [scope_file_extract.m](assets\scope_file_extract.m)

 [scope_handle_rawdata.m](assets\scope_handle_rawdata.m)

## 参考

- Matlab 官方手册

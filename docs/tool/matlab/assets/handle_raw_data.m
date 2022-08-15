%%
% Author       : randolf
% Date         : 2021-09-03 12:50:12
 % LastEditors  : randolf
 % LastEditTime : 2021-09-03 12:56:35
 % FilePath     : \undefinede:\randolf.top\skill\matlab\attachments\handle_raw_data.m
%%

%% handle twincat scope csv data file
% IN: None
% OUT:
%   - dataCell: 3xN cell, each column meaning: filename, variable name of file, variable data of file
%       - variables related rules ref: fileExract.m
%

% file src path
defPath = "E:\randolf.top\phd\project\柔性支撑Stewart平台控制-张荣侨(毕设)\实验代码\DataAnalysis\Archives\Scope";
[file, path] = uigetfile('*.csv', 'defname', defPath, 'MultiSelect', 'on');

if isequal(file, 0)
    disp('User selected Cancel');
else
    % only choose 1 file
    if class(file) == 'char'
        fileCell = cell(1, 1);
        fileCell{1, 1} = file;
    else
        fileCell = file;
    end

    fileSize = size(fileCell);
    fileNum = fileSize(2);

    dataCell = cell(3, fileNum);

    for index = 1:fileNum
        fileName = fullfile(path, fileCell{1, index});
        % extract files
        dataCell{1, index} = fileName;
        [nameList, dataList] = fileExract(fileName);
        dataCell{2, index} = nameList;
        dataCell{3, index} = dataList;

        disp(['extracted ', fileCell{1, index}]);
    end

end

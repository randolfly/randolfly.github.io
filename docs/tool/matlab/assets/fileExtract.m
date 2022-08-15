%%
% Author       : randolf
% Date         : 2021-09-03 12:43:29
 % LastEditors  : randolf
 % LastEditTime : 2021-09-03 16:04:08
 % FilePath     : \undefinede:\randolf.top\skill\matlab\attachments\fileExtract.m
%%
%! Note: the version suit with 2021a. the function readmatrix is not
%compatible with 2018b

function [nameList, dataList] = fileExract(fileName)
    %% extract signle file
    % IN: fileName
    % OUT:
    %   - nameList : 1xN string list, variable name list, N-> variable number
    %   - dataList: kxN double list, variable data list, k-> data length, N->variable number
    %

    % ANCHOR: get the variables name list
    nameLine = {};
    % the 7th line is the variable name
    fidin = fopen(fileName, 'r+');
    lineHeader = 7;
    index = 0;

    while (~feof(fidin)) && (index < lineHeader)
        tline = fgetl(fidin); %读坖一行
        index = index + 1;
        %fprintf(fidout,'%s\n',tline);
        if index == lineHeader
            % get 7th line
            nameLine = convertCharsToStrings(tline);
        end

    end

    fclose(fidin);

    nameList = split(nameLine, ["Name"]);
    nameList = strip(nameList);
    nameList = nameList(2:end)';

    % ANCHOR: get the variables data

    % gurantee pure data
    lineData = 30;
    T = readmatrix(fileName, 'HeaderLines', lineData);

    dataLength = size(T);
    % protect from NAN data
    lastDataIndex = dataLength(1) - 10;
    varLength = length(nameList);
    dataList = zeros(lastDataIndex, varLength);

    for index = 1:varLength
        dataList(:, index) = T(1:lastDataIndex, 2 * index);
    end

end

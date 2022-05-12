#

if ("$PWD" -match "\\用于研发阶段的命令行工具\\PowerShell`$") {
    Set-Location '..\..\'
}



Import-Module  '.\源代码\PowerShell\吴乐川-文本处理工具.psm1'
Import-Module  '.\源代码\PowerShell\吴乐川-文本显示工具.psm1'
Import-Module  '.\源代码\PowerShell\吴乐川-集得源管理工具集.psm1'


Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：码云'  -特征颜色 'DarkRed' `
    -集得源之完整地址 'git@gitee.com:nanchang-wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 ' 吴乐川：阿里云'  -特征颜色 'Blue' `
    -集得源之完整地址 'git@code.aliyun.com:wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：GitHub'  -特征颜色 'Yellow' `
    -集得源之完整地址 'git@github.com:wulechuan/wulechuan--cli-scripts--git-push.git'

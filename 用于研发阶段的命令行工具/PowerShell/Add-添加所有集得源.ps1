#

Write-Host $PWD

if ("$PWD" -match "\\用于研发阶段的命令行工具\\PowerShell`$") {
    $执行本命令前的工作路径 = "$PWD"
    Set-Location '..\..\'
    Write-Host $PWD
}

Write-Host
Write-Host
Write-Host



# 在采用本工具集的其他 npm 项目中，应这样写：
# $吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

# 下方这一行的写法专门针对本工具集自身，不适应于其他任何 npm 项。
$吴乐川的模块的路径 = '.\源代码\发布的源代码\PowerShell'

Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"



Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：码云' `
    -特征颜色 'DarkRed'      -集得源之完整地址 'git@gitee.com:nanchang-wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：阿里云' `
    -特征颜色 'Blue'         -集得源之完整地址 'git@code.aliyun.com:wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：GitHub' `
    -特征颜色 'Yellow'       -集得源之完整地址 'git@github.com:wulechuan/wulechuan--cli-scripts--git-push.git'



if ("$执行本命令前的工作路径" -ne "$PWD") {
    Set-Location  "$执行本命令前的工作路径"
}

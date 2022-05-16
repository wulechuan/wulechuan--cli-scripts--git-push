#

if ("$PWD" -match "\\用于研发阶段的命令行工具\\PowerShell`$") {
    Set-Location '..\..\'
}

Write-Host $PWD



$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"



# Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '集得源甲之名称' `
#     -特征颜色 'DarkRed'      -集得源之完整地址 '集得源甲之统一资源定位符'

# Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '集得源乙之名称' `
#     -特征颜色 'Blue'         -集得源之完整地址 '集得源乙之统一资源定位符'

# Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '集得源丙之名称' `
#     -特征颜色 'Yellow'       -集得源之完整地址 '集得源丙之统一资源定位符'

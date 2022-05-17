#

Write-Host $PWD

if ("$PWD" -match "\\用于研发阶段的命令行工具\\PowerShell`$") {
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



Write-吴乐川显示_集得上推至一个或多个源_开始之提示语

Push-吴乐川集得上推至单个源  '吴乐川：码云'   -集得源之显示名称文本采用的颜色 'Red'
Push-吴乐川集得上推至单个源  '吴乐川：阿里云'  -集得源之显示名称文本采用的颜色 'Blue'
Push-吴乐川集得上推至单个源  '吴乐川：GitHub'  -集得源之显示名称文本采用的颜色 'Yellow'

Write-吴乐川显示_集得上推至一个或多个源_结束之提示语

#

Write-Host $PWD

if ("$PWD" -match "\\用于研发阶段的命令行工具\\PowerShell`$") {
    Set-Location '..\..\' # 确保进程的当前路径为接受本工具集服务的 npm 包的根文件夹。
    Write-Host $PWD
}

Write-Host
Write-Host
Write-Host



$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"



Write-吴乐川显示_集得上推至一个或多个源_开始之提示语

# Push-吴乐川集得上推至单个源  '集得源甲之名称'  -集得源之显示名称文本采用的颜色 'Red'
# Push-吴乐川集得上推至单个源  '集得源乙之名称'  -集得源之显示名称文本采用的颜色 'Blue'
# Push-吴乐川集得上推至单个源  '集得源丙之名称'  -集得源之显示名称文本采用的颜色 'Yellow'

Write-吴乐川显示_集得上推至一个或多个源_结束之提示语

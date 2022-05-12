Import-Module '.\源代码\PowerShell\吴乐川-文本处理工具.psm1'
Import-Module '.\源代码\PowerShell\吴乐川-文本显示工具.psm1'

[string]${script:在行末用以消除背景色的装饰性符号} = '　'







function Push-集得上推至单一源 {
    Param (
        [string]$集得源之名称,
        [string]$集得源之显示名称,
        [string]$集得源之显示名称文本采用的颜色
    )



    BEGIN {
        if (-not $集得源之名称) {
            Write-Error  '    未给出有效的 $集得源之名称 。'
            exit 1
        }
    
        if (-not $集得源之显示名称) {
            $集得源之显示名称 = "${集得源之名称}"
        }
    }



    PROCESS {
        Write-吴乐川显示一行带装饰线的文字 `
            -中央文本 "$( Edit-吴乐川剥去文本最外层的引号 "${集得源之显示名称}" )" `
            -中央文本之文字颜色 "$集得源之显示名称文本采用的颜色" `
            -中央文本左侧之装饰线长度折合英语字母数 5 `
            -全行内容最小宽度折合英语字母数 79
    
        Write-Host  -No  'git  push  '
        if (${集得源之显示名称文本采用的颜色}) {
            Write-Host  -F "${集得源之显示名称文本采用的颜色}"  "${集得源之名称}"
        } else {
            Write-Host                                      "${集得源之名称}"
        }
        Write-Host
    
        git  push  "${集得源之名称}"
    
        Write-Host
        Write-Host
        Write-Host
    }
}





function Write-集得上推至一个或多个源_开始之提示语 {
    Write-Host
    Write-Host  -No  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：开始  '
    Write-Host       -F 'DarkGray'               "${在行末用以消除背景色的装饰性符号}"
    Write-Host
}





function Write-集得上推至一个或多个源_结束之提示语 {
    Write-Host
    Write-Host  -No  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：结束  '
    Write-Host       -F 'DarkGray'               "${在行末用以消除背景色的装饰性符号}"
    Write-Host
}

[string]${script:在行末用以消除背景色的装饰性符号} = '　'





function Add-吴乐川添加单个集得源 {
    Param (
        [Parameter(
            Mandatory = $true,
            Position = 0
        )]
        [string]$集得源在本机采用的名称,

        [Parameter(
            Mandatory = $true
        )]
        [string]$集得源之完整地址,

        [Parameter(
            Mandatory = $false
        )]
        [string]$特征颜色
    )

    PROCESS {
        Write-吴乐川显示一行带装饰线的文字 `
            -中央文本 "添加【集得】源： ${集得源在本机采用的名称}" `
            -中央文本之文字颜色 "$特征颜色" `
            -装饰线之文字颜色   "$特征颜色" `
            -中央文本左侧之装饰线长度折合英语字母数 5 `
            -表达装饰线纹样单元的文本 '═'

        git  remote  add  "${集得源在本机采用的名称}"  "${集得源之完整地址}"
    }

    END {
        Write-Host
    }
}





function Write-吴乐川显示_集得上推至一个或多个源_开始之提示语 {
    Write-Host
    Write-Host  -No  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：开始  '
    Write-Host       -F 'DarkGray'               "${在行末用以消除背景色的装饰性符号}"
    Write-Host
}





function Write-吴乐川显示_集得上推至一个或多个源_结束之提示语 {
    Write-Host
    Write-Host  -No  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：结束  '
    Write-Host       -F 'DarkGray'               "${在行末用以消除背景色的装饰性符号}"
    Write-Host
}





function Push-吴乐川集得上推至单个源 {
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





Export-ModuleMember -Function *

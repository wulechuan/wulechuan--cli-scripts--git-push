function Write-吴乐川显示一行带装饰线的文字 {
    Param (
        [Parameter(
            Mandatory = $false,
            ValueFromPipeline = $true,
            Position = 0
        )]
        [string]$中央文本,

        [string]$中央文本之文字颜色 = $null,
        [string]$中央文本之文字底色 = $null,
        [string]$装饰线之文字颜色 = $null,
        [int]   $中央文本左侧之装饰线长度折合英语字母数 = -1,
        [int]   $全行内容最小宽度折合英语字母数 = 80, # 中央文本完全可能超长。故该宽度实际上是“最小”宽度。
        [string]$表达装饰线纹样单元的文本 = '─',     # 不妨试试 '= =*' 。
        [switch]$应避免上下留有空行
    )



    BEGIN {
        [string[]]$合规的颜色值之列表 = [System.Enum]::GetValues([System.ConsoleColor])

        if ("$中央文本之文字颜色" -NotIn $合规的颜色值之列表) { $中央文本之文字颜色 = $Host.UI.RawUI.ForegroundColor }
        if ("$中央文本之文字底色" -NotIn $合规的颜色值之列表) { $中央文本之文字底色 = $Host.UI.RawUI.BackgroundColor }
        if ("$装饰线之文字颜色"   -NotIn $合规的颜色值之列表) { $装饰线之文字颜色   = $Host.UI.RawUI.ForegroundColor }
    }



    PROCESS {
        [int]$中央文本之宽度等效英语字母数 = Get-吴乐川求一行文本视觉宽度等效英语字母数 "$中央文本"

        [boolean]$中央文本存在 = $中央文本之宽度等效英语字母数.Length -gt 0

        [boolean]$中央文本左侧应留一空格 = $中央文本存在
        [boolean]$中央文本右侧应留一空格 = $中央文本存在

        [int]$左右两侧装饰线总长度折合英语字母数 = $全行内容最小宽度折合英语字母数 - $中央文本之宽度等效英语字母数

        [boolean]$应避免在中央文字左侧出现装饰线 = $false
        if ($中央文本存在) {
            if ($左右两侧装饰线总长度折合英语字母数 -gt 0) {
                if ($左右两侧装饰线总长度折合英语字母数 -le 3) {
                    $左右两侧装饰线总长度折合英语字母数 -= 1
                    $应避免在中央文字左侧出现装饰线 = $true
                    $中央文本左侧应留一空格 = $false
                    $中央文本右侧应留一空格 = $true
                } else {
                    $左右两侧装饰线总长度折合英语字母数 -= 2
                    $中央文本左侧应留一空格 = $true
                    $中央文本右侧应留一空格 = $true
                }
            } else {
                $左右两侧装饰线总长度折合英语字母数 = 0
                $应避免在中央文字左侧出现装饰线 = $true
                $中央文本左侧应留一空格 = $false
                $中央文本右侧应留一空格 = $false
            }
        }

        [int]$_中央文本左侧之装饰线长度折合英语字母数 = 0

        if (-not $应避免在中央文字左侧出现装饰线) {
            if ((-not ($中央文本左侧之装饰线长度折合英语字母数 -gt 0)) -or ($中央文本左侧之装饰线长度折合英语字母数 -gt $左右两侧装饰线总长度折合英语字母数 - 1)) {
                $_中央文本左侧之装饰线长度折合英语字母数 = [int]($左右两侧装饰线总长度折合英语字母数 / 2)
            } else {
                $_中央文本左侧之装饰线长度折合英语字母数 = $中央文本左侧之装饰线长度折合英语字母数
            }
        }

        [int]$_中央文本右侧之装饰线长度折合英语字母数 = $左右两侧装饰线总长度折合英语字母数 - $_中央文本左侧之装饰线长度折合英语字母数

        [int]$中央文本左侧之装饰线纹样重复次数 = [int]($_中央文本左侧之装饰线长度折合英语字母数 / ("$表达装饰线纹样单元的文本".Length)) + 1
        [int]$中央文本右侧之装饰线纹样重复次数 = [int]($_中央文本右侧之装饰线长度折合英语字母数 / ("$表达装饰线纹样单元的文本".Length)) + 1

        [string]$中央文本左侧装饰线全文 = ("$表达装饰线纹样单元的文本" * $中央文本左侧之装饰线纹样重复次数).Substring(0, $_中央文本左侧之装饰线长度折合英语字母数)
        [string]$中央文本右侧装饰线全文 = ("$表达装饰线纹样单元的文本" * $中央文本右侧之装饰线纹样重复次数).Substring(0, $_中央文本右侧之装饰线长度折合英语字母数)

        [string]$_中央文本之文字颜色 = "$中央文本之文字颜色"
        [string]$_中央文本之文字底色 = "$中央文本之文字底色"
        [string]$_装饰线之文字颜色 = "$装饰线之文字颜色"

        [string[]]$合规的颜色值之列表 = [System.Enum]::GetValues([System.ConsoleColor])

        if ("$中央文本之文字颜色" -NotIn $合规的颜色值之列表) {
            $_中央文本之文字颜色 = ''
        }

        if ("$中央文本之文字底色" -NotIn $合规的颜色值之列表) {
            $_中央文本之文字底色 = ''
        }

        if ("$装饰线之文字颜色" -NotIn $合规的颜色值之列表) {
            $_装饰线之文字颜色 = ''
        }
    }



    END {
        if (-not $应避免上下留有空行) {
            Write-Host
        }

        # ---------------------

        if ($_装饰线之文字颜色) {
            Write-Host  -No  -F $_装饰线之文字颜色  "${中央文本左侧装饰线全文}"
        } else {
            Write-Host  -No                       "${中央文本左侧装饰线全文}"
        }

        # ---------------------

        if ($中央文本左侧应留一空格) {
            Write-Host  -No ' '
        }

        # ---------------------

        if ($中央文本.Length -gt 0) {
            if ($_中央文本之文字颜色 -and $_中央文本之文字底色) {
                Write-Host  -No  -F $_中央文本之文字颜色  -B $_中央文本之文字底色  "${中央文本}"
            } elseif ($_中央文本之文字颜色) {
                Write-Host  -No  -F $_中央文本之文字颜色                        "${中央文本}"
            } elseif ($_中央文本之文字底色) {
                Write-Host  -No                        -B $_中央文本之文字底色  "${中央文本}"
            } else {
                Write-Host  -No                                              "${中央文本}"
            }
        }

        # ---------------------

        if ($中央文本右侧应留一空格) {
            Write-Host  -No ' '
        }

        # ---------------------

        if ($_装饰线之文字颜色) {
            Write-Host  -No  -F $_装饰线之文字颜色  "${中央文本右侧装饰线全文}"
        } else {
            Write-Host  -No                       "${中央文本右侧装饰线全文}"
        }

        Write-Host

        # ---------------------

        if (-not $应避免上下留有空行) {
            Write-Host
        }
    }
}





Export-ModuleMember -Function *

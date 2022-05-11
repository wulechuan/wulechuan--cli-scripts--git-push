[string]${script:在行末用以消除背景色的装饰性符号} = '　'

[string]${script:视觉元素_短线_宽为05个字符} = '─────'
[string]${script:视觉元素_短线_宽为20个字符} = "${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}"
[string]${script:视觉元素_短线_宽为80个字符} = "${视觉元素_短线_宽为20个字符}${视觉元素_短线_宽为20个字符}${视觉元素_短线_宽为20个字符}${视觉元素_短线_宽为20个字符}"

[string]${script:视觉元素_水平线} = "${视觉元素_短线_宽为80个字符}"





function Push-集得上推至单一源 {
    Param (
        [string]$集得源之名称,
        [string]$集得源之显示名称,
        [string]$集得源之显示名称文本采用的颜色
    )

    if (-not $集得源之名称) {
        Write-Error  '    未给出有效的 $集得源之名称 。'
        exit 1
    }

    if (-not $集得源之显示名称) {
        $集得源之显示名称 = "${集得源之名称}"
    }

    if (-not ("$集得源之显示名称文本采用的颜色" -in @(
        'Black', 'DarkBlue', 'DarkGreen', 'DarkCyan', 'DarkRed', 'DarkMagenta', 'DarkYellow', 'Gray', 'DarkGray', 'Blue', 'Green', 'Cyan', 'Red', 'Magenta', 'Yellow', 'White'
    ))) {
        $集得源之显示名称文本采用的颜色 = ''
    }

    [int]$集得源之显示名称视觉宽度等效英语字符数 = 0

    [string[]]$集得源之显示名称之字符列表 = ("${集得源之显示名称}" -split '')[1..("${集得源之显示名称}".length)]
    $集得源之显示名称之字符列表.ForEach{
        # * 中国汉字 "`u{4E01}" ~ "`u{9FA5}"
        # * 朝鲜文   "`u{3130}" ~ "`u{318F}"
        # * 朝鲜文   "`u{AC00}" ~ "`u{D7A3}"
        # * 日文     "`u{0800}" ~ "`u{4E00}"

        [boolean]${local:字符视觉上较宽} = (
            ("`u{4E01}" -le $_) -and ($_ -le "`u{9FA5}")
        ) -or (
            ("`u{3130}" -le $_) -and ($_ -le "`u{318F}")
        ) -or (
            ("`u{AC00}" -le $_) -and ($_ -le "`u{D7A3}")
        ) -or (
            ("`u{0800}" -le $_) -and ($_ -le "`u{4E00}")
        )

        if (${local:字符视觉上较宽}) {
            $集得源之显示名称视觉宽度等效英语字符数 += 2
        } else {
            $集得源之显示名称视觉宽度等效英语字符数 += 1
        }
    }

    [int]$标题行期望的总宽度等效英语字符个数 = "${视觉元素_水平线}".Length
    [int]$标题行尾部短线符号的个数 = $标题行期望的总宽度等效英语字符个数 - 5 - 1 - $集得源之显示名称视觉宽度等效英语字符数 - 1

    [string]$标题行尾部短线全文 = "${视觉元素_水平线}".Substring(0, $标题行尾部短线符号的个数)

    Write-Host
    Write-Host  -No  -F 'DarkGray'  "${视觉元素_短线_宽为05个字符} "

    if (${集得源之显示名称文本采用的颜色}) {
        Write-Host  -No  -F "${集得源之显示名称文本采用的颜色}"  "${集得源之显示名称}"
    } else {
        Write-Host  -No                                      "${集得源之显示名称}"
    }

    Write-Host       -F 'DarkGray'  " ${标题行尾部短线全文}"
    Write-Host

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

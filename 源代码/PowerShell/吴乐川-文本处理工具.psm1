function Edit-吴乐川剥去文本最外层的引号 {
    Param (
        [string] $原始的文本
    )

    if (-not ("$原始的文本".GetType() -match 'String')) {
        "$原始的文本"
        Return
    }

    [string]$剥去最外层引号后的文本 = "$原始的文本"

    if ("$原始的文本" -match '^\".*\"$') {
        $剥去最外层引号后的文本 = "$剥去最外层引号后的文本".Substring(1, "$原始的文本".Length - 2)
    } elseif ("$原始的文本" -match "^\'.*\'$") {
        $剥去最外层引号后的文本 = "$剥去最外层引号后的文本".Substring(1, "$原始的文本".Length - 2)
    }

    "$剥去最外层引号后的文本"
}





function Assert-吴乐川判断字符系中日韩文字 {
    Param (
        [char] $字
    )

    PROCESS {
        # * 中国汉字 "`u{4E01}" ~ "`u{9FA5}"
        # * 朝鲜文   "`u{3130}" ~ "`u{318F}"
        # * 朝鲜文   "`u{AC00}" ~ "`u{D7A3}"
        # * 日文     "`u{0800}" ~ "`u{4E00}"

        [boolean]${local:该字确实是中日韩文字} = (
            ("`u{4E01}" -le $字) -and ($字 -le "`u{9FA5}")
        ) -or (
            ("`u{3130}" -le $字) -and ($字 -le "`u{318F}")
        ) -or (
            ("`u{AC00}" -le $字) -and ($字 -le "`u{D7A3}")
        ) -or (
            ("`u{0800}" -le $字) -and ($字 -le "`u{4E00}")
        )
    }

    END {
        # Write-Verbose -Message "`“${字}`”是中日韩文字？ ${local:该字确实是中日韩文字}"
        ${local:该字确实是中日韩文字}
    }
}





function Get-吴乐川获取一行文本视觉宽度等效英语字母数 {
    # 假定个英语字母之视觉等宽。
    # 并假定一个中日韩文字之宽度恰为一个英语字母宽度之 2 倍。

    Param (
        [string]$文本
    )

    PROCESS {
        [int]$视觉宽度等效英语字符数 = 0

        if (-not ("$文本".GetType() -match 'string')) {
            return
        }

        if ("$文本".Length -eq 0) {
            return
        }

        [string[]]$该文本之一切字符之列表 = ("$文本" -split '')[1..("$文本".length)]

        $该文本之一切字符之列表.ForEach{
            if (Assert-吴乐川判断字符系中日韩文字 -字 $_) {
                $视觉宽度等效英语字符数 += 2
            } else {
                $视觉宽度等效英语字符数 += 1
            }
        }
    }

    END {
        $视觉宽度等效英语字符数
    }
}

function Push-集得上推至单一源 {
    Param (
        [string]$集得源之名称,
        [string]$集得源之显示名称,
        [string]$集得源之显示名称文本采用的颜色
    )

    $视觉元素_短线_宽为05个字符 = '─────'
    $视觉元素_短线_宽为20个字符 = "${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}${视觉元素_短线_宽为05个字符}"
    $视觉元素_短线_宽为60个字符 = "${视觉元素_短线_宽为20个字符}${视觉元素_短线_宽为20个字符}${视觉元素_短线_宽为20个字符}"

    if (! $集得源之名称) {
        Write-Error  '    未给出有效的 $集得源之名称 。'
        exit 1
    }

    if (! $集得源之显示名称) {
        $集得源之显示名称 = "${集得源之名称}"
    }

    Write-Host
    Write-Host  -NoNewLine  "${视觉元素_短线_宽为05个字符} "

    if (${集得源之显示名称文本采用的颜色}) {
        Write-Host  -NoNewLine  -F "${集得源之显示名称文本采用的颜色}"  "${集得源之显示名称}"
    } else {
        Write-Host  -NoNewLine                                      "${集得源之显示名称}"
    }

    Write-Host             " ${视觉元素_短线_宽为60个字符}"
    Write-Host

    Write-Host  -NoNewLine  'git  push  '
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

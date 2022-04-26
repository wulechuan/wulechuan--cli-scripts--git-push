<link rel="stylesheet" href="./文档集/文档的样式/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">



# 吴乐川的【集得】（Git）上推（Push）辅助命令行工具

> 中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！然则每当必要，亦不排斥采用外国之语言。不妨 **博世界之学问，养中国之精神** 。
>
> 本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。



## Multilingual Editions of this Article

Nothing yet.




## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/cli-scripts--git-push](https://www.npmjs.com/package/@wulechuan/cli-scripts--git-push)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>

## 源代码仓库

| <span style="display:inline-block;width:10em;">提供仓库服务之组织</span> | <span style="display:inline-block;width:10em;">仓库组织之国别</span> | 仓库地址 |
| ------------- | :----------: | ------- |
| 码云           | 中华人民共和国 | [https://gitee.com/nanchang-wulechuan/wulechuan--cli-scripts--git-push.git](https://gitee.com/nanchang-wulechuan/wulechuan--cli-scripts--git-push.git) |
| 阿里云之代码仓库 | 中华人民共和国 | [https://code.aliyun.com/wulechuan/wulechuan--cli-scripts--git-push.git](https://code.aliyun.com/wulechuan/wulechuan--cli-scripts--git-push.git) |
| GitHub         | 美           | [https://github.com/wulechuan/wulechuan--cli-scripts--git-push.git](https://github.com/wulechuan/wulechuan--cli-scripts--git-push.git) |


## 简介

吴乐川的【集得（ Git ）】上推（外国话是 push ）辅助命令行工具。

- 本工具之主体并非采用 JavaScript 语言族编写，而是采用各种命令行环境之语言编写。

- 本工具主体仅用于（多种）命令行环境。

- 当须将一个 npm 研发项目之代码库上推至多个【集得】源时，本工具可提供些许便利。


## 用法

### PowerShell 环境

#### PowerShell 环境中的用法示例 1

```powershell
.  '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell\Push-集得上推至单一源.ps1'

Push-集得上推至单一源  '吴乐川：码云'  -集得源之显示名称文本采用的颜色 'Red'
```


#### PowerShell 环境中的用法示例 2

```powershell
.  '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell\Push-集得上推至单一源.ps1'

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：开始 '
Write-Host

Push-集得上推至单一源  '吴乐川：阿里云'  -集得源之显示名称文本采用的颜色 'Green'
Push-集得上推至单一源  '吴乐川：码云'    -集得源之显示名称文本采用的颜色 'Red'
Push-集得上推至单一源  '吴乐川：GitHub'  -集得源之显示名称文本采用的颜色 'Yellow'

Write-Host
Write-Host  -F 'Black'  -B 'DarkGreen'  ' 【集得】上推（ git push ）至所有源：结束 '
Write-Host
```

### 类 Bash 环境

#### 类 Bash 环境中的用法示例 1

```bash
.  './node_modules/@wulechuan/cli-scripts--git-push/源代码/bash/吴乐川-集得上推至单一源.sh'


吴乐川-集得上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'
```

#### 类 Bash 环境中的用法示例 2

```bash
.  './node_modules/@wulechuan/cli-scripts--git-push/源代码/bash/吴乐川-集得上推至单一源.sh'


echo
echo -e "\e[42;30m 【集得】上推（ git push ）至所有源：开始 \e[0;0m"
# echo

吴乐川-集得上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'

吴乐川-集得上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：阿里云' \
    --git-origin-display-name='吴乐川：阿里云' \
    --git-origin-display-name-color='green'

吴乐川-集得上推至单一源  --should-skip=false \
    --git-origin-name='吴乐川：GitHub' \
    --git-origin-display-name='吴乐川：GitHub' \
    --git-origin-display-name-color='yellow'

echo
echo -e "\e[42;30m 【集得】上推（ git push ）至所有源：结束 \e[0;0m"
echo
```

## 未来计划

暂无。


## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


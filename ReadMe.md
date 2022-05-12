<link rel="stylesheet" href="./文档集/文档的样式/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">



# 吴乐川的【集得】（Git）上推（Push）辅助命令行工具

> 中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！然则每当必要，亦不排斥采用外国之语言。不妨 **博世界之学问，养中国之精神** 。
>
> 本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。




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

我们的研发项目，其代码库常常要同时连接多个【集得】源。日常【上推】代码时，理应将本机代码推送到所有【集得】源上去。为减少繁琐的操作，不妨编写一个命令行工具来简化日常的【上推】操作。本工具对诸君编写这样的脚本应会有裨益。参见本文中的示例。

需注意，本工具之主体并非采用 JavaScript 语言族编写，而是采用 2 种命令行环境之语言编写，即 PowerShell 语言和 Bash 语言。故本工具之主体仅用于（多种）命令行环境。



## 安装与使用

### 安装

本工具虽然运行在命令行环境（PowerShell 或【类 Bash】），但故意依托 npm 发行。因此安装本工具也不妨借助 npm 。方法如下：

1.  确保你的计算机已经安装了 Nodejs。见《[Nodejs 官方下载页](https://nodejs.org/zh-cn/download/)》。

1.  虽然 Nodejs 往往会随附一个 npm 工具。但一来这并不一定（例如 Ubuntu 环境的 Nodejs 有可能并不附带 npm）；二来即便 Nodejs 附带了一份 npm，该 npm 之版本也未必最新的。故而，推荐安装最新版的 npm 。

    以下方法假设 Nodejs 确实随附了一份 npm，并利用该随附的、较旧版本的 npm 来安装最新版的 npm 。

    ```bash
    # Bash 或 PowerShell
    npm  i  -g  npm
    ```

    > 而从零开始安装 npm 的方法则从略。


1.  在你的【集得】（git）项目文件夹中，将项目初始化成一个 npm 项目。

    ```bash
    # Bash 或 PowerShell
    npm  init  -y
    ```

1.  安装本工具。

    ```bash
    # Bash 或 PowerShell
    npm  i  -D  @wulechuan/cli-scripts--git-push
    ```

### 使用

#### 在 PowerShell 环境中运行本工具

##### PowerShell 环境中的用法示例 1

该示例之功用：逐一添加 3 个集得源，并令过程在命令行窗口中较美观地呈现。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell'
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：码云'   -特征颜色 'DarkRed' `
    -集得源之完整地址 'git@gitee.com:nanchang-wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：阿里云'  -特征颜色 'Blue' `
    -集得源之完整地址 'git@code.aliyun.com:wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：GitHub'  -特征颜色 'Yellow' `
    -集得源之完整地址 'git@github.com:wulechuan/wulechuan--cli-scripts--git-push.git'
```

##### PowerShell 环境中的用法示例 2

该示例之功用：将当前的文件仓库上推至某个集得源，并令过程在命令行窗口中较美观地呈现。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell'
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"

Push-吴乐川集得上推至单个源  '吴乐川：码云'  -集得源之显示名称文本采用的颜色 'Red'
```


##### PowerShell 环境中的用法示例 3

该示例之功用：将当前的文件仓库依次上推至 3 个集得源，并令过程在命令行窗口中较美观地呈现。特别的，还故意呈现了开始和结束提示语。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\PowerShell'
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"

Write-吴乐川显示_集得上推至一个或多个源_开始之提示语

Push-吴乐川集得上推至单个源  '吴乐川：码云'   -集得源之显示名称文本采用的颜色 'Red'
Push-吴乐川集得上推至单个源  '吴乐川：阿里云'  -集得源之显示名称文本采用的颜色 'Blue'
Push-吴乐川集得上推至单个源  '吴乐川：GitHub'  -集得源之显示名称文本采用的颜色 'Yellow'

Write-吴乐川显示_集得上推至一个或多个源_结束之提示语

```

#### 在【类 Bash】环境中运行本工具

##### 【类 Bash】环境中的用法示例 1

该示例之功用：将当前的文件仓库上推至某个集得源，并令过程在命令行窗口中较美观地呈现。

```bash
.  './node_modules/@wulechuan/cli-scripts--git-push/源代码/bash/吴乐川-集得源管理工具集.sh'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'
```

##### 【类 Bash】环境中的用法示例 2

该示例之功用：将当前的文件仓库依次上推至 3 个集得源，并令过程在命令行窗口中较美观地呈现。特别的，还故意呈现了开始和结束提示语。

```bash
.  './node_modules/@wulechuan/cli-scripts--git-push/源代码/bash/吴乐川-集得源管理工具集.sh'

吴乐川-集得上推至一个或多个源-显示开始之提示语

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：阿里云' \
    --git-origin-display-name='吴乐川：阿里云' \
    --git-origin-display-name-color='blue'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：GitHub' \
    --git-origin-display-name='吴乐川：GitHub' \
    --git-origin-display-name-color='yellow'

吴乐川-集得上推至一个或多个源-显示结束之提示语
```


## 重要版本说明

- 2022 年 5 月 12 日凌晨，`v2.1.0`版。

    - 提升了容错性。
    - PowerShell 版的代码可自动计算标题行中尾部分割线的长度。
    - 添加了打印**起始**提示语的函数。
    - 添加了打印**结束**提示语的函数。


- 2022 年 5 月 12 日下午，`v3.0.0`版。接口文件、接口函数均有变动（更名），故不得不提升主版本号至 `3` 。

    - 源代码文件更名。
    - 接口函数几乎全部更名。
    - PowerShell 版的代码添加了 `Add-吴乐川添加单个集得源` 函数。


- 2022 年 5 月 12 日下午，`v3.0.2`版。重大勘误！

    - 因 PowerShell 环境的“当前路径”较难管理，故干脆禁止本工具集中的三个模块（.psm1）文件相互引用。外界采用本工具（往往）须明确引用全部三者。
    - 配合上述变动校勘文档。



## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


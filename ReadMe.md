<link rel="stylesheet" href="./文档集/文档的样式/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">



# 吴乐川的管理【集得】（Git）源的辅助性命令行工具

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

### 言简意赅版

简言之，本工具集侧重为命令行做装点，提供相对美观、易读的界面信息，而鲜少有复杂的任务逻辑。何况所谓“核心”的任务逻辑，是因项目而异的，故并非通用的工具集所及。正因为**本工具用于助力美化命令界面，其所谓“实用”价值不高。但它们满足了我个人的癖好。**

另，每当在其他 npm 项目中安装本工具集时，本工具内建的 JavaScript 程序会**自动对那个 npm 项目进行配置，以尽可能减少或简化后续的配置任务。**

### 冗长版

我们的研发项目，其代码库常常采用【集得】（外国话 Git）来管理项目的代码等文件。并且，这样的集得仓库往往要同时对标多个【集得源】（外国话是 Remote）。

> 例如典型的，本人的许多项目会同时连接 *码云* 、*阿里云的代码库* 或 *阿里云的 CodeUp 代码库* 、*美国微软公司的 GitHub* 等。

既然我们计算机上的某个集得项目对标着多个集得源，那么我们日常【上推】（外国话是 push）代码时，理应将本机代码上推到**所有**集得源上去。这一任务略显繁琐。为化繁为简，我们不妨编写一个命令行工具来简化日常的【上推】操作。对熟悉集得命令行用法的人而言，这样的脚本再简单不过了。一个源一行即可做到，总共也要不了几行命令。例如：

```bash
# Bash 或 PowerShell

git  push  码云
git  push  阿里云1
git  push  阿里云2
git  push  美国GitHub
```

其实本工具集的早期雏形就是这样的简易脚本。但当上述多个命令顺次执行时，它们的输出既不够美观，也不可一目了然。于我这种吹毛求疵的人而言，此种“简约之美”往往是不可接受的。为了命令行工具的界面信息美观、易读，也便于我和“潜在的合作者”交流或交接，我在日常研学中时不时在“无关痛痒”的美观方面下功夫，逐渐形成了一些辅助性工具，汇集于此。如你所猜想的一般，本工具集侧重为命令行做装点，多半是提供相对美观、易读的界面信息，而鲜少有复杂的任务逻辑。何况所谓“核心”的任务逻辑，是因项目而异的，故并非通用的工具集所及。

**简言之，本工具用于助力美化命令界面。其所谓“实用”价值不高。但它们满足了我个人的癖好。**

> 还须注意，本套工具之主体均非采用 JavaScript 语言族编写，而是采用 2 种命令行环境之语言编写，即 PowerShell 语言和 Bash 语言。故本工具之主体仅用于（多种）命令行环境。当须以（我个人的）标准管理一个 npm 研发项目时，此工具中的命令行脚本能提供些许便利。
>
> 又，虽然本套工具之主体并非 JavaScript 程序，但本工具集仍内建了一些 JavaScript 程序，且它们确有其价值。当其他 npm 包（暂称**甲**）安装了本工具集后，本工具集内建的那些 JavaScript 程序会自动改动甲的环境配置，以期令甲更方便的利用本工具集。


## 安装与使用

### 安装

本工具虽运行在命令行环境（PowerShell 或【类 Bash】），但故意依托 npm 发行。因此安装本工具也不妨借助 npm 。如不借助 npm 来安装本工具，则略麻烦。借助 npm 安装本工具之方法如下：

1.  确保你的计算机已经安装了 Nodejs。见《[Nodejs 官方下载页](https://nodejs.org/zh-cn/download/)》。

1.  虽然 Nodejs 往往会随附一个名为 npm 的工具。但是，一来此事并不一定（例如 Ubuntu 环境的 Nodejs 有可能并不附带 npm）；二来即便 Nodejs 附带了一份 npm，该 npm 之版本也未必最新的。故而，推荐安装最新版的 npm 。

    以下方法假设 Nodejs 确实随附了一份 npm，并利用该随附的、较旧版本的 npm 来安装最新版的 npm 。

    ```bash
    # Bash 或 PowerShell
    npm  i  -g  npm
    ```

    > 在 Ubuntu 系统下从零开始安装 npm 的方法如下。
    > 
    > ```bash
    > apt  update
    > apt  install  npm
    > ```


1.  借助 `cd` 命令来到你的项目**根**文件夹，再用以下命令将你的项目初始化成一个 npm 项目。

    ```bash
    # Bash 或 PowerShell
    npm  init  -y
    ```

1.  正式安装本工具集。

    ```bash
    # Bash 或 PowerShell
    npm  i  -D  @wulechuan/cli-scripts--git-push
    ```

    此时，本工具集内建的 JavaScript 程序将尝试自动配置你的项目（暂称**甲**）。如下：

    -  如果甲中尚无 `.vscode/tasks.json` 这一文件，本工具集将创建之。
    -  修订 `<甲>/.vscode/tasks.json` ，使得甲具备几个专门用于调用本工具集之命令行脚本的【任务】。
    -  本工具会尽量将一些命令行脚本文件复制到 `<甲>/用于研发阶段的命令行工具/PowerShell/` 文件夹内。如果此文件夹中原先已有同名脚本文件，则这些旧文件将得到保留，不会被覆盖。**但自本工具集之 `v4.0.2` 版始，JavaScript 程序会尽可能修订业已存在的就命令行脚本文件。**
    -  本工具会尽量将一些命令行脚本文件复制到 `<甲>/用于研发阶段的命令行工具/bash/` 文件夹内。如果此文件夹中原先已有同名脚本文件，则这些旧文件将得到保留，不会被覆盖。**但自本工具集之 `v4.0.2` 版始，JavaScript 程序会尽可能修订业已存在的就命令行脚本文件。**


### 使用

#### 在 PowerShell 环境中运行本工具

##### PowerShell 环境中的用法示例 1

该示例之功用：逐一添加 3 个集得源，并令过程在命令行窗口中较美观地呈现。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：码云' `
    -特征颜色 'DarkRed'      -集得源之完整地址 'git@gitee.com:nanchang-wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：阿里云' `
    -特征颜色 'Blue'         -集得源之完整地址 'git@code.aliyun.com:wulechuan/wulechuan--cli-scripts--git-push.git'

Add-吴乐川添加单个集得源  -集得源在本机采用的名称 '吴乐川：GitHub' `
    -特征颜色 'Yellow'       -集得源之完整地址 'git@github.com:wulechuan/wulechuan--cli-scripts--git-push.git'
```

##### PowerShell 环境中的用法示例 2

该示例之功用：将当前的文件仓库上推至某个集得源，并令过程在命令行窗口中较美观地呈现。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

Import-Module  "${吴乐川的模块的路径}\吴乐川-文本处理工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-文本显示工具.psm1"
Import-Module  "${吴乐川的模块的路径}\吴乐川-集得源管理工具集.psm1"

Push-吴乐川集得上推至单个源  '吴乐川：码云'  -集得源之显示名称文本采用的颜色 'Red'
```


##### PowerShell 环境中的用法示例 3

该示例之功用：将当前的文件仓库依次上推至 3 个集得源，并令过程在命令行窗口中较美观地呈现。特别的，还故意呈现了开始和结束提示语。

```ps1
$吴乐川的模块的路径 = '.\node_modules\@wulechuan\cli-scripts--git-push\源代码\发布的源代码\PowerShell'

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
source  './node_modules/@wulechuan/cli-scripts--git-push/源代码/发布的源代码/bash/吴乐川-集得源管理工具集.sh'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'
```

##### 【类 Bash】环境中的用法示例 2

该示例之功用：将当前的文件仓库依次上推至 3 个集得源，并令过程在命令行窗口中较美观地呈现。特别的，还故意呈现了开始和结束提示语。

```bash
source  './node_modules/@wulechuan/cli-scripts--git-push/源代码/发布的源代码/bash/吴乐川-集得源管理工具集.sh'

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

- 2022 年 5 月 17 日下午，`v4.0.0`版。变更了命令行脚本存放的路径。添加了大量 JavaScript 写成的内部工具，用于在其他采用本工具集的 npm 项目下自动配置本工具集。见本文《[**安装**](#安装)》一节的第 4 点《**正式安装本工具集**》。

- 2022 年 5 月 12 日下午，`v3.0.2`版。重大勘误！

    - 因 PowerShell 环境的“当前路径”较难管理，故干脆禁止本工具集中的三个模块（.psm1）文件相互引用。外界采用本工具（往往）须明确引用全部三者。
    - 配合上述变动校勘文档。

- 2022 年 5 月 12 日下午，`v3.0.0`版。接口文件、接口函数均有变动（更名），故不得不提升主版本号至 `3` 。

    - 源代码文件更名。
    - 接口函数几乎全部更名。
    - PowerShell 版的代码添加了 `Add-吴乐川添加单个集得源` 函数。


- 2022 年 5 月 12 日凌晨，`v2.1.0`版。

    - 提升了容错性。
    - PowerShell 版的代码可自动计算标题行中尾部分割线的长度。
    - 添加了打印**起始**提示语的函数。
    - 添加了打印**结束**提示语的函数。



## 许可证类型

WTFPL

> 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


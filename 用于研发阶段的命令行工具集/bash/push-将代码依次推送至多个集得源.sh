#!/bin/bash

# 下方这一行的写法专门针对本工具集自身，不适应于其他任何 npm 项。
source  './源代码/发布的源代码/bash/吴乐川-集得源管理工具集.sh'

# 在采用本工具集的其他 npm 项目中，应这样写：
# source  './node_modules/@wulechuan/cli-scripts--git-push/源代码/发布的源代码/bash/吴乐川-集得源管理工具集.sh'

吴乐川-集得上推至一个或多个源-显示开始之提示语

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：码云' \
    --git-origin-display-name='吴乐川：码云' \
    --git-origin-display-name-color='red'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：阿里云' \
    --git-origin-display-name='吴乐川：阿里云' \
    --git-origin-display-name-color='green'

吴乐川-集得上推至单个源  --should-skip=false \
    --git-origin-name='吴乐川：GitHub' \
    --git-origin-display-name='吴乐川：GitHub' \
    --git-origin-display-name-color='yellow'

吴乐川-集得上推至一个或多个源-显示结束之提示语

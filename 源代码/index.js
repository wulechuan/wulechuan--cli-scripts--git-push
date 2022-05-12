const packageJSON = require('../package.json')
const 单层缩进 = ' '.repeat(4)
const 列表符号 = '* '
const 单层缩进含列表符号 = `${单层缩进.slice(0, -列表符号.length)}${列表符号}`

console.log(`\nnpm 包： ${
    packageJSON.name
}\n\n${单层缩进含列表符号}${
    packageJSON.description
        .replace(/([，])/g, `$1\n${单层缩进}`)
        .replace(/([。！])([^$])/g, `$1\n\n${单层缩进含列表符号}$2`)
}\n\n\n应用示例：\n\n${
    单层缩进含列表符号
}PowerShell ：\n${
    单层缩进.repeat(2)
}.\\.Push-将代码依次推送至多个集得源.ps1\n\n${
    单层缩进含列表符号
}bash ：\n${
    单层缩进.repeat(2)
}./push-将代码依次推送至多个集得源.sh`)

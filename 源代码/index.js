const packageJSON = require('../package.json')
const 单层缩进 = ' '.repeat(4)
const 列表符号 = '* '
const 单层缩进含列表符号 = `${单层缩进.slice(0, -列表符号.length)}${列表符号}`

console.log(`npm 包： ${
    packageJSON.name
}\n\n${单层缩进含列表符号}${
    packageJSON.description
        .replace(/([，])/g, `$1\n${单层缩进}`)
        .replace(/([。！])([^$])/g, `$1\n\n${单层缩进含列表符号}$2`)
}\n\n\n应用示例：\n\n${
    单层缩进含列表符号
}PowerShell ：\n${
    单层缩进.repeat(2)
}.\\应用示例\\PowerShell\\Push-将代码依次上推至多个集德源.ps1\n\n${
    单层缩进含列表符号
}bash ：\n${
    单层缩进.repeat(2)
}./应用示例/bash/集德-将代码库依次上推至多个源.sh`)

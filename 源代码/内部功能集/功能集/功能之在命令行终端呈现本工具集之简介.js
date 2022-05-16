/**
 * @typedef {import('../../../package.json')} 范_npm_packageJSON
 */

/**
 * @typedef {import('chalk').ChalkInstance} 范_粉笔工具
 */



/**
 * @param {object} 配置项集
 * @param {范_npm_packageJSON} 配置项集.packageJSON
 * @param {范_粉笔工具} 配置项集.粉笔工具
 */
module.exports = function 在命令行终端窗口打印本工具集之简介 ({
    packageJSON,
    粉笔工具,
} = {}) {
    if (!packageJSON) { return }

    const 单层缩进 = ' '.repeat(4)
    const 列表符号 = '* '
    const 单层缩进含列表符号 = `${单层缩进.slice(0, -列表符号.length)}${列表符号}`

    console.log(`\nnpm 包： ${
        粉笔工具.whiteBright(packageJSON.name)
    }\n\n${单层缩进含列表符号}${
        packageJSON.description
            .replace(/([，])/g, `$1\n${单层缩进}`)
            .replace(/([。！])([^$])/g, `$1\n\n${单层缩进含列表符号}${'$2'}`)
    }\n\n\n应用示例：\n\n${
        单层缩进含列表符号
    }PowerShell ：\n${
        单层缩进.repeat(2)
    }${
        粉笔工具.greenBright('.\\.Push-将代码依次推送至多个集得源.ps1')
    }\n\n${
        单层缩进含列表符号
    }bash ：\n${
        单层缩进.repeat(2)
    }${
        粉笔工具.cyanBright('./push-将代码依次推送至多个集得源.sh')
    }\n\n`)
}

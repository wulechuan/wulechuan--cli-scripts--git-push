/**
 * @typedef {import('../../../package.json')} 范_本工具集自身的_packageJSON
 */

/**
 * @typedef {import('chalk').ChalkInstance} 范_粉笔工具
 */



/**
 * @param {object}                        配置项集
 *
 * @param {范_粉笔工具}                   配置项集.粉笔工具
 * @param {string}                        配置项集.本工具集一切命令行消息之前缀
 * @param {范_本工具集自身的_packageJSON} 配置项集.本工具集自身的_packageJSON
 */
module.exports = function 在命令行终端窗口打印本工具集之简介 ({
    粉笔工具,
    本工具集一切命令行消息之前缀,
    本工具集自身的_packageJSON,
} = {}) {
    if (!本工具集自身的_packageJSON) { return }

    const 单层缩进 = ' '.repeat(4)
    const 列表符号 = '* '
    const 单层缩进含列表符号 = `${单层缩进.slice(0, -列表符号.length)}${列表符号}`

    console.log(`\n${
        本工具集一切命令行消息之前缀
    } ${
        粉笔工具.bgGreenBright.black(' 简介 ')
    }\n\n${
        单层缩进}${单层缩进含列表符号
    }${
        本工具集自身的_packageJSON.description
            .replace(/([，])/g, `$1\n${单层缩进.repeat(2)}`)
            .replace(/([。！])([^$])/g, `$1\n\n${单层缩进}${单层缩进含列表符号}${'$2'}`)
    }\n\n\n${
        单层缩进
    }应用示例：\n\n${
        单层缩进}${单层缩进含列表符号
    }PowerShell ：\n${
        单层缩进.repeat(3)
    }${
        粉笔工具.greenBright('<本工具集之根文件夹>\\用于研发阶段的命令行工具\\PowerShell\\.Push-将代码依次推送至多个集得源.ps1')
    }\n\n${
        单层缩进}${单层缩进含列表符号
    }bash ：\n${
        单层缩进.repeat(3)
    }${
        粉笔工具.cyanBright('<本工具集之根文件夹>/用于研发阶段的命令行工具/bash/push-将代码依次推送至多个集得源.sh')
    }\n`)
}

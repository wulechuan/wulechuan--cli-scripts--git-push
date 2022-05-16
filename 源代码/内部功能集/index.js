/**
 * 吴乐川
 * 2022-05-16
 *
 * 本工具集主体是一些 PowerShell 脚本和 Bash 脚本，应运行在命令行环境。
 * 但本工具集依托 npm 平台发布和管理，因此也“入乡随俗”式的提供了一个 JavaScript 入口，即为本 index.js 文件。
 * 本文件无意提供过多功能，徒打印本工具集之简介尔。
 */





/**
 * @typedef {import('../../package.json')} 范_npm_packageJSON
 */

/**
 * @typedef {import('chalk').ChalkInstance} 范_粉笔工具
 */

/**
 * @typedef {import('node:path')} 范_路径工具
 */

/**
 * @typedef {import('fs-extra')} 范_文件系统工具之扩展版
 */

/**
 * @typedef {import('./功能集/功能之在命令行终端呈现本工具集之简介')} 范_在命令行终端呈现本工具集之简介
 */





// 而不是相对于本 js 文件的路径！
const packageJSON的相对于进程工作目录的路径 = './package.json'





Promise.all([
    import('chalk'),
    import('node:path'),
    import('fs-extra'),
    import('./功能集/功能之在命令行终端呈现本工具集之简介.js'),
]).then(([
    粉笔工具_模块,
    路径工具_模块,
    文件系统工具之扩展版_模块,
    在命令行终端呈现本工具集之简介_模块,
]) => {
    /** @type {范_粉笔工具} */
    const 粉笔工具 = new 粉笔工具_模块.Chalk()

    /** @type {范_路径工具} */
    const 路径工具 = 路径工具_模块.default

    /** @type {范_文件系统工具之扩展版} */
    const 文件系统工具之扩展版 = 文件系统工具之扩展版_模块.default

    /** @type {范_在命令行终端呈现本工具集之简介} */
    const 在命令行终端呈现本工具集之简介 = 在命令行终端呈现本工具集之简介_模块.default

    return {
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,
        在命令行终端呈现本工具集之简介,
    }
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    在命令行终端呈现本工具集之简介,
}) => {
    const 容纳_packageJSON_文件的文件夹之完整路径 = 路径工具.resolve(
        路径工具.dirname(packageJSON的相对于进程工作目录的路径)
    )

    return Promise.all([
        // 下方套一层 then 来传递 packageJSON ，唯一的目的是给 jsdocs 机会定义 packageJSON 的【范】（亦称所谓“类型”）。
        文件系统工具之扩展版.readJSON(packageJSON的相对于进程工作目录的路径).then((
            /** @type {范_npm_packageJSON} */
            packageJSON
        ) => packageJSON),
    ]).then(([
        packageJSON,
    ]) => {
        return {
            粉笔工具,
            路径工具,
            文件系统工具之扩展版,

            packageJSON,
            容纳_packageJSON_文件的文件夹之完整路径,

            在命令行终端呈现本工具集之简介,
        }
    })
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,

    packageJSON,
    容纳_packageJSON_文件的文件夹之完整路径,

    在命令行终端呈现本工具集之简介,
}) => {
    return Promise.all([
        在命令行终端呈现本工具集之简介({
            packageJSON,
            粉笔工具,
        }),
    ])
})

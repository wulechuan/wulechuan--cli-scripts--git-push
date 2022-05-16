/**
 * @typedef {import('../../../package.json')} 范_npm_packageJSON
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
 * @typedef {typeof import('jsonc-parser')} 范_微软_jsonc_处理机
 */

/**
 * @typedef {import('./一切自动安装与配置任务的主体功能.js')} 范_本工具集一切自动安装与配置任务之内部总接口
 */

/**
 * @typedef {import('../辅助工具集')} 范_本工具集随附之辅助工具集
 */





// 而不是相对于本 js 文件的路径！
const packageJSON的相对于进程工作目录的路径 = './package.json'





Promise.all([
    import('chalk'),
    import('node:path'),
    import('fs-extra'),
    import('jsonc-parser'),
    import('./一切自动安装与配置任务的主体功能.js'),
    import('../辅助工具集/index.js'),
]).then(([
    粉笔工具_模块,
    路径工具_模块,
    文件系统工具之扩展版_模块,
    微软_jsonc_处理机_模块,
    本工具集一切自动安装与配置任务之内部总接口_模块,
    本工具集随附之辅助工具集_模块,
]) => {
    /** @type {范_粉笔工具} */
    const 粉笔工具 = new 粉笔工具_模块.Chalk()

    /** @type {范_路径工具} */
    const 路径工具 = 路径工具_模块.default

    /** @type {范_文件系统工具之扩展版} */
    const 文件系统工具之扩展版 = 文件系统工具之扩展版_模块.default

    /** @type {范_微软_jsonc_处理机} */
    const 微软_jsonc_处理机 = 微软_jsonc_处理机_模块.default

    /** @type {范_本工具集一切自动安装与配置任务之内部总接口} */
    const 本工具集一切自动安装与配置任务之内部总接口 = 本工具集一切自动安装与配置任务之内部总接口_模块.default

    /** @type {范_本工具集随附之辅助工具集} */
    const 本工具集随附之辅助工具集 = 本工具集随附之辅助工具集_模块.default

    return {
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,
        微软_jsonc_处理机,
        本工具集一切自动安装与配置任务之内部总接口,
        本工具集随附之辅助工具集,
    }
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,
    本工具集一切自动安装与配置任务之内部总接口,
    本工具集随附之辅助工具集,
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
            微软_jsonc_处理机,

            packageJSON,
            容纳_packageJSON_文件的文件夹之完整路径,

            本工具集一切自动安装与配置任务之内部总接口,
            本工具集随附之辅助工具集,
        }
    })
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,
    本工具集随附之辅助工具集,

    packageJSON,
    容纳_packageJSON_文件的文件夹之完整路径,

    本工具集一切自动安装与配置任务之内部总接口,
}) => {
    本工具集一切自动安装与配置任务之内部总接口({
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,
        微软_jsonc_处理机,
        本工具集随附之辅助工具集,

        packageJSON,
        容纳_packageJSON_文件的文件夹之完整路径,

        视作_dotvscode_文件夹的文件夹之相对路径: '.vscode',

        功能之自动配置_vscode_tasksJSON: {
            tasksJSON_纵使有变动也不应制作备份文件: false,
        },
    })
})

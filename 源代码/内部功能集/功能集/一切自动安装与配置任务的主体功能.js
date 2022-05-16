/**
 * https://code.visualstudio.com/docs/editor/tasks-appendix#_schema-for-tasksjson
 *
 * @typedef {import('../types/microsoft-vscode-tasks').TaskConfiguration} 范_vscode_taskJSON
 * @typedef {import('../types/microsoft-vscode-tasks').TaskDescription} 范_vscode_任务项
 */

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
 * @typedef {import('jsonc-parser')} 范_微软_jsonc_处理机
 * @typedef {import('jsonc-parser').ParseError} 范_微软_jsonc_处理机_解析结果之错误记载
 * @typedef {import('jsonc-parser').Node} 范_微软_jsonc_处理机_解析出的原始节点
 */

// /**
//  * @typedef {typeof import('jsonc').jsonc} 范_jsonc_的操作工具_默认版
//  * @typedef {typeof import('jsonc').jsonc.safe} 范_jsonc_的操作工具_错误返回而非抛出之版
//  */

/**
 * @typedef {import('../辅助工具集')} 范_本工具集随附之辅助工具集
 */





/**
 * @typedef {import('./功能之自动配置-vscode-tasks-json')} 范_内部功能之自动配置_vscode_tasksJSON
 */





/**
 * @param {object} 配置项集
 * @param {范_粉笔工具} 配置项集.粉笔工具
 * @param {范_路径工具} 配置项集.路径工具
 * @param {范_文件系统工具之扩展版} 配置项集.文件系统工具之扩展版
 * @param {范_微软_jsonc_处理机} 配置项集.微软_jsonc_处理机
 * @param {范_本工具集随附之辅助工具集} 配置项集.本工具集随附之辅助工具集
 *
 * @param {范_npm_packageJSON} 配置项集.packageJSON
 * @param {string} 配置项集.容纳_packageJSON_文件的文件夹之完整路径
 *
 * @param {string} 配置项集.视作_dotvscode_文件夹的文件夹之相对路径 - 默认值为 '.vscode'。非默认值仅用于本工具集之测试集。
 *
 * @param {object} 配置项集.功能之自动配置_vscode_tasksJSON
 * @param {boolean} 配置项集.功能之自动配置_vscode_tasksJSON.tasksJSON_纵使有变动也不应制作备份文件
 *
 * @returns {Promise<any>}
 */
module.exports = function 本工具集一切自动安装与配置任务之内部总接口 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,
    本工具集随附之辅助工具集,

    packageJSON,
    容纳_packageJSON_文件的文件夹之完整路径,

    视作_dotvscode_文件夹的文件夹之相对路径,

    功能之自动配置_vscode_tasksJSON = {},
} = {}) {
    if (!packageJSON || typeof 容纳_packageJSON_文件的文件夹之完整路径 !== 'string') {
        return Promise.reject(new Error('没有给出 packageJSON 。'))
    }

    return Promise.all([
        import('./功能之自动配置-vscode-tasks-json.js'),
    ]).then(([
        内部功能之自动配置_vscode_tasksJSON_模块,
    ]) => {
        /** @type {范_内部功能之自动配置_vscode_tasksJSON} */
        const 内部功能之自动配置_vscode_tasksJSON = 内部功能之自动配置_vscode_tasksJSON_模块.default





        const {
            join: 将路径片段拼接,
        } = 路径工具 // .posix

        if (typeof 视作_dotvscode_文件夹的文件夹之相对路径 !== 'string' || !视作_dotvscode_文件夹的文件夹之相对路径.trim()) {
            视作_dotvscode_文件夹的文件夹之相对路径 = '.vscode'
        }

        const 视作_dotvscode_文件夹的文件夹之完整路径 = 将路径片段拼接(
            容纳_packageJSON_文件的文件夹之完整路径,
            视作_dotvscode_文件夹的文件夹之相对路径
        )





        return Promise.all([
            内部功能之自动配置_vscode_tasksJSON({
                粉笔工具,
                路径工具,
                文件系统工具之扩展版,
                微软_jsonc_处理机,
                本工具集随附之辅助工具集,

                packageJSON,

                vscode_tasksJSON_文件之完整路径: 将路径片段拼接(视作_dotvscode_文件夹的文件夹之完整路径, 'tasks.json'),
                vscode_tasksJSON_纵使有变动也不应制作备份文件: 功能之自动配置_vscode_tasksJSON.tasksJSON_纵使有变动也不应制作备份文件,
            }),
        ])
    })
}

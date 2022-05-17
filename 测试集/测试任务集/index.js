/**
 * 吴乐川
 * 2022-05-16
 *
 * 本文件为本工具集之所有测试集之入口。
 * 本文件所测试之内容基本等同于“0-进行自动安装与配置.js”的任务。
 * 所不同的是，测试集之输出均在 “各测试任务产出的文件”这一文件夹中，以免干扰到真实的配置文件。
 */

const 执行各项功能之前应先呈现本工具之简介 = true
const 发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下 = true

const 视作_dotvscode_文件夹的文件夹之相对路径 = '测试集/各测试任务产出的文件/.vscode'
const vscode_tasksJSON_纵使有变动也不应制作备份文件 = false

const 本工具集随附命令行应用范本集文件夹之相对路径 = null
const 用于容纳发布的各命令行脚本的文件树之根文件夹之相对路径 = '测试集/各测试任务产出的文件'
const 发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件 = true
const 发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份 = false





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
 * @typedef {import('../../源代码/内部功能集/功能集/1-在命令行终端呈现本工具集之简介')} 范_在命令行终端呈现本工具集之简介
 */

/**
 * @typedef {import('../../源代码/内部功能集/功能集/2-一切自动安装与配置任务的主体功能.js')} 范_本工具集一切自动安装与配置任务之内部总接口
 */

/**
 * @typedef {import('../../源代码/内部功能集/辅助工具集')} 范_本工具集随附之辅助工具集
 */

/**
 * @typedef {import('../../package.json')} 范_本工具集自身的_packageJSON
 */





// 注意，下方路径并不是相对于本 js 文件的路径！
const 本工具集自身_packageJSON_相对于_nodejs_进程工作目录的路径 = './package.json'





Promise.all([
    import('chalk'),
    import('node:path'),
    import('fs-extra'),
    import('jsonc-parser'),
    import('../../源代码/内部功能集/辅助工具集/index.js'),
    import('../../源代码/内部功能集/功能集/1-在命令行终端呈现本工具集之简介.js'),
    import('../../源代码/内部功能集/功能集/2-一切自动安装与配置任务的主体功能.js'),
]).then(([
    粉笔工具_模块,
    路径工具_模块,
    文件系统工具之扩展版_模块,
    微软_jsonc_处理机_模块,
    本工具集随附之辅助工具集_模块,
    在命令行终端呈现本工具集之简介_模块,
    本工具集一切自动安装与配置任务之内部总接口_模块,
]) => {
    /** @type {范_粉笔工具} */
    const 粉笔工具 = new 粉笔工具_模块.Chalk()

    /** @type {范_路径工具} */
    const 路径工具 = 路径工具_模块.default

    /** @type {范_文件系统工具之扩展版} */
    const 文件系统工具之扩展版 = 文件系统工具之扩展版_模块.default

    /** @type {范_微软_jsonc_处理机} */
    const 微软_jsonc_处理机 = 微软_jsonc_处理机_模块.default

    /** @type {范_本工具集随附之辅助工具集} */
    const 本工具集随附之辅助工具集 = 本工具集随附之辅助工具集_模块.default

    /** @type {范_在命令行终端呈现本工具集之简介} */
    const 在命令行终端呈现本工具集之简介 = 在命令行终端呈现本工具集之简介_模块.default

    /** @type {范_本工具集一切自动安装与配置任务之内部总接口} */
    const 本工具集一切自动安装与配置任务之内部总接口 = 本工具集一切自动安装与配置任务之内部总接口_模块.default



    return {
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,
        微软_jsonc_处理机,

        本工具集随附之辅助工具集,

        在命令行终端呈现本工具集之简介,
        本工具集一切自动安装与配置任务之内部总接口,
    }
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,

    本工具集随附之辅助工具集,

    在命令行终端呈现本工具集之简介,
    本工具集一切自动安装与配置任务之内部总接口,
} = {}) => {
    const 本工具集自身_packageJSON_之完整路径 = 路径工具.resolve(本工具集自身_packageJSON_相对于_nodejs_进程工作目录的路径)
    const 本工具集自身根文件夹之完整路径 = 路径工具.dirname(本工具集自身_packageJSON_之完整路径)

    const 视作须为其安装本工具集的_npm_项目的根文件的完整路径 = 本工具集自身根文件夹之完整路径
    const 用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径 = 路径工具.join(
        视作须为其安装本工具集的_npm_项目的根文件的完整路径, (用于容纳发布的各命令行脚本的文件树之根文件夹之相对路径 || '')
    )



    return Promise.all([
        // 下方套一层 then 来传递 `本工具集自身的_packageJSON` ，唯一的目的是给 jsdocs 机会定义 `本工具集自身的_packageJSON` 的【范】（亦称所谓“类型”）。
        文件系统工具之扩展版.readJSON(本工具集自身_packageJSON_之完整路径).then(
            (/** @type {范_本工具集自身的_packageJSON} */ 本工具集自身的_packageJSON) => 本工具集自身的_packageJSON
        ),
    ]).then(([
        本工具集自身的_packageJSON,
    ]) => {
        const 本工具集一切命令行消息之前缀 = `${粉笔工具.whiteBright(本工具集自身的_packageJSON.name)}：`

        if (执行各项功能之前应先呈现本工具之简介) {
            在命令行终端呈现本工具集之简介({
                粉笔工具,
                本工具集一切命令行消息之前缀,
                本工具集自身的_packageJSON,
            })
        }

        return {
            粉笔工具,
            路径工具,
            文件系统工具之扩展版,
            微软_jsonc_处理机,

            本工具集随附之辅助工具集,

            本工具集一切自动安装与配置任务之内部总接口,

            本工具集一切命令行消息之前缀,
            本工具集自身根文件夹之完整路径,
            本工具集自身的_packageJSON,
            视作须为其安装本工具集的_npm_项目的根文件的完整路径,
            用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
        }
    })
}).then(({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,

    本工具集随附之辅助工具集,

    本工具集一切自动安装与配置任务之内部总接口,

    本工具集一切命令行消息之前缀,
    本工具集自身根文件夹之完整路径,
    本工具集自身的_packageJSON,
    视作须为其安装本工具集的_npm_项目的根文件的完整路径,
    用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
} = {}) => {
    // if (true) { // eslint-disable-line
    //     console.log('本工具集自身根文件夹之完整路径\n   ', 本工具集自身根文件夹之完整路径)
    //     console.log('用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径\n   ', 用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径)
    //     console.log('本工具集自身的_packageJSON', 本工具集自身的_packageJSON)
    //     return Promise.reject(null)
    // }

    return 本工具集一切自动安装与配置任务之内部总接口({
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,
        微软_jsonc_处理机,
        本工具集随附之辅助工具集,

        本工具集一切命令行消息之前缀,
        本工具集自身根文件夹之完整路径,
        本工具集自身的_packageJSON,

        诸内部功能各自之配置项集: {
            自动配置_vscode_tasksJSON: {
                视作须为其安装本工具集的_npm_项目的根文件的完整路径,
                视作_dotvscode_文件夹的文件夹之相对路径,
                发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
                vscode_tasksJSON_纵使有变动也不应制作备份文件,
            },

            在采用该工具集的项目中自动构建命令行脚本集: {
                视作须为其安装本工具集的_npm_项目的根文件的完整路径,
                用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
                本工具集随附命令行应用范本集文件夹之相对路径,
                发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
                发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
                发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,
            },
        },
    })
})

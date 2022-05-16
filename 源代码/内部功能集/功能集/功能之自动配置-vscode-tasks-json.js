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
 * @param {object} 配置项集
 * @param {范_粉笔工具} 配置项集.粉笔工具
 * @param {范_路径工具} 配置项集.路径工具
 * @param {范_文件系统工具之扩展版} 配置项集.文件系统工具之扩展版
 * @param {范_微软_jsonc_处理机} 配置项集.微软_jsonc_处理机
 * @param {范_本工具集随附之辅助工具集} 配置项集.本工具集随附之辅助工具集
 *
 * @param {范_npm_packageJSON} 配置项集.packageJSON
 *
 * @param {string} 配置项集.vscode_tasksJSON_文件之完整路径
 * @param {boolean} 配置项集.vscode_tasksJSON_纵使有变动也不应制作备份文件
 *
 * @returns {Promise<any>}
 */
module.exports = function vscode_tasksJSON_自动配置功能的对外接口函数 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,
    // jsonc_的操作工具_默认版,             // 已废弃，改用微软的 jsonc-parser 。
    // jsonc_的操作工具_错误返回而非抛出之版, // 已废弃，改用微软的 jsonc-parser 。
    本工具集随附之辅助工具集,

    packageJSON,

    vscode_tasksJSON_文件之完整路径,
    vscode_tasksJSON_纵使有变动也不应制作备份文件,
} = {}) {
    if (!packageJSON) {
        return Promise.reject(new Error('没有给出 packageJSON 。'))
    }

    if (typeof vscode_tasksJSON_文件之完整路径 !== 'string' || !vscode_tasksJSON_文件之完整路径.trim()) {
        return Promise.reject(new Error('没有给出 vscode_tasksJSON_文件之完整路径 。'))
    }

    return Promise.all([
        // 暂无需要导入的模块。
    ]).then(([
        // 暂无导入的模块。
    ]) => {
        return vscode_tasksJSON_自动配置功能之主体({
            粉笔工具,
            路径工具,
            文件系统工具之扩展版,
            微软_jsonc_处理机,
            // jsonc_的操作工具_默认版,
            // jsonc_的操作工具_错误返回而非抛出之版,
            packageJSON,
            vscode_tasksJSON_文件之完整路径,
            本工具集随附之辅助工具集,
            vscode_tasksJSON_纵使有变动也不应制作备份文件,
        })
    })
}





/**
 * @param {object} 配置项集
 * @param {范_粉笔工具} 配置项集.粉笔工具
 * @param {范_路径工具} 配置项集.路径工具
 * @param {范_文件系统工具之扩展版} 配置项集.文件系统工具之扩展版
 * @param {范_微软_jsonc_处理机} 配置项集.微软_jsonc_处理机
 * @param {范_npm_packageJSON} 配置项集.packageJSON
 * @param {string} 配置项集.vscode_tasksJSON_文件之完整路径
 * @param {范_本工具集随附之辅助工具集} 配置项集.本工具集随附之辅助工具集
 * @param {boolean} 配置项集.vscode_tasksJSON_纵使有变动也不应制作备份文件
 *
 * @returns {Promise<any>}
 */
function vscode_tasksJSON_自动配置功能之主体 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,
    微软_jsonc_处理机,
    // jsonc_的操作工具_默认版,             // 已废弃，改用微软的 jsonc-parser 。
    // jsonc_的操作工具_错误返回而非抛出之版, // 已废弃，改用微软的 jsonc-parser 。
    packageJSON,
    vscode_tasksJSON_文件之完整路径,
    本工具集随附之辅助工具集,
    vscode_tasksJSON_纵使有变动也不应制作备份文件,
}) {
    const {
        将JSON中单个属性或成员配置为新值,
        求当前时间之文本_可用于文件系统之文件名,
    } = 本工具集随附之辅助工具集





    const vscode_tasksJSON_文件所处之文件夹之完整路径 = 路径工具.dirname(vscode_tasksJSON_文件之完整路径)



    let 旧有_vscode_tasksJSON_文件确实存在 = false
    if (文件系统工具之扩展版.existsSync(vscode_tasksJSON_文件之完整路径)) {
        const vscode_tasksJSON_文件描述符 = 文件系统工具之扩展版.statSync(vscode_tasksJSON_文件之完整路径)
        if (vscode_tasksJSON_文件描述符.isFile()) {
            旧有_vscode_tasksJSON_文件确实存在 = true
        }
    }

    /** @type {Promise<{ 旧有_vscode_tasksJSON_文件之缓冲数据块: Buffer | null; 旧有_tasksJSON_内容全文: string }>} */
    let 允许创建或修订_vscode_tasksJSON_文件_之期待 = Promise.resolve({
        旧有_vscode_tasksJSON_文件之缓冲数据块: null,
        旧有_tasksJSON_内容全文: '',
    })

    if (旧有_vscode_tasksJSON_文件确实存在) {
        允许创建或修订_vscode_tasksJSON_文件_之期待 = 文件系统工具之扩展版.readFile(vscode_tasksJSON_文件之完整路径).then(
            旧有_vscode_tasksJSON_文件之缓冲数据块 => {
                return {
                    旧有_vscode_tasksJSON_文件之缓冲数据块,
                    旧有_tasksJSON_内容全文: 旧有_vscode_tasksJSON_文件之缓冲数据块.toString(),
                }
            }
        )
    }

    允许创建或修订_vscode_tasksJSON_文件_之期待.then(({
        旧有_vscode_tasksJSON_文件之缓冲数据块,
        旧有_tasksJSON_内容全文,
    }) => {
        // if (须逐字符调试) {
        //     const chars = 旧有_tasksJSON_内容全文.split('').map((c, i) => `${(i / 10000).toFixed(4).slice(2)} = '${c}'`).join('\n')
        //     文件系统工具之扩展版.mkdirp('./临时资料')
        //     文件系统工具之扩展版.writeFile('./临时资料/tasks.json.chars.text', chars)
        // }





        // const [ 错误之记载, 结果对象 ] = jsonc_的操作工具_错误返回而非抛出之版.parse(旧有_tasksJSON_内容全文)
        // if (错误之记载) {
        //     错误之记载.message += `\n\n${
        //         粉笔工具.redBright('    吴乐川按：出错原因大概率为某对象（Object）或数组（Array）的最末成员后有多余逗号。')
        //     }\n`

        //     throw 错误之记载
        // }





        /** @type {Array<范_微软_jsonc_处理机_解析结果之错误记载>} */
        const 微软_jsonc_处理机遭遇的错误列表 = []

        /** @type {范_vscode_taskJSON} */
        let 结果对象 = 微软_jsonc_处理机.parse(
            旧有_tasksJSON_内容全文,
            微软_jsonc_处理机遭遇的错误列表,
            {
                allowEmptyContent: true,
                allowTrailingComma: true,
                disallowComments: false,
            }
        )

        if (微软_jsonc_处理机遭遇的错误列表.length > 0) {
            微软_jsonc_处理机遭遇的错误列表.forEach((错误之记载, 列表编号) => {
                console.log(`${
                    粉笔工具.whiteBright(`微软_jsonc_处理机 遇到的错误（第 ${列表编号 + 1} 个）`)
                }`)
                console.log(错误之记载)
            })
        }



        let vscode_之任务配置确有改动 = false



        if (!旧有_vscode_tasksJSON_文件确实存在) {
            vscode_之任务配置确有改动 = true
        }


        if (typeof 结果对象 !== 'object') {
            结果对象 = {}
            vscode_之任务配置确有改动 = true
        }



        if (!Array.isArray(结果对象.tasks)) {
            结果对象.tasks = []
            vscode_之任务配置确有改动 = true
        }

        const { tasks } = 结果对象



        let 任务列表经本次处理后已有改动 = false



        任务列表经本次处理后已有改动 = 确保某_vscode_任务存在({
            任务列表: tasks,
            任务标签: '将代码依次推送至多个集得源（PowerShell）',
            拟采纳的任务定义: {
                type: 'shell',
                command: 'pwsh  -Command \'.Push-将代码依次推送至多个集得源.ps1\'',
                group: 'none',
                problemMatcher: [],
            },
            粉笔工具,
        })
        if (任务列表经本次处理后已有改动) { vscode_之任务配置确有改动 = true }



        任务列表经本次处理后已有改动 = 确保某_vscode_任务存在({
            任务列表: tasks,
            任务标签: '将代码依次推送至多个集得源（Bash）',
            拟采纳的任务定义: {
                type: 'shell',
                command: 'bash  -c \'source  ./push-将代码依次推送至多个集得源.sh\'',
                group: 'none',
                problemMatcher: [],
            },
            粉笔工具,
        })
        if (任务列表经本次处理后已有改动) { vscode_之任务配置确有改动 = true }





        const 拟写入_vscode_tasksJSON_之内容全文 = `${[
            '/**',
            ' * 参阅： https://go.microsoft.com/fwlink/?LinkId=733558',
            ' */',
            '',
        ].join('\n')}\n${
            JSON.stringify(结果对象, null, 4)
        }`

        return {
            旧有_vscode_tasksJSON_文件确实存在,
            旧有_vscode_tasksJSON_文件之缓冲数据块,
            旧有_tasksJSON_内容全文,
            vscode_之任务配置确有改动,
            拟写入_vscode_tasksJSON_之内容全文,
            vscode_tasksJSON_纵使有变动也不应制作备份文件,
        }
    }).then(({
        旧有_vscode_tasksJSON_文件确实存在,
        旧有_vscode_tasksJSON_文件之缓冲数据块,
        // 旧有_tasksJSON_内容全文,
        vscode_之任务配置确有改动,
        拟写入_vscode_tasksJSON_之内容全文,
        vscode_tasksJSON_纵使有变动也不应制作备份文件,
    }) => {
        let 备份文件已写入磁盘_之期待 = Promise.resolve(true)
        let 新内容已写入磁盘_之期待 = Promise.resolve(true)

        const 消息分隔线 = '─'.repeat(51)

        if (旧有_vscode_tasksJSON_文件确实存在) {
            console.log(`\n${
                消息分隔线
            }\n综上， VSCode 的 ${
                粉笔工具.magentaBright('tasks.json')
            } 文件${
                vscode_之任务配置确有改动
                    ? 粉笔工具.redBright('确有改动')
                    : 粉笔工具.green('无须任何改动')
            }。\n${
                消息分隔线
            }\n`)
        }



        if (vscode_之任务配置确有改动) {
            文件系统工具之扩展版.mkdirp(vscode_tasksJSON_文件所处之文件夹之完整路径)

            if (旧有_vscode_tasksJSON_文件之缓冲数据块 instanceof Buffer && !vscode_tasksJSON_纵使有变动也不应制作备份文件) {
                const 时间戳 = 求当前时间之文本_可用于文件系统之文件名()
                const 备份文件之文件名 = `tasks-吴乐川备份于-${时间戳}.json`
                const 备份文件之文件完整路径 = 路径工具.join(
                    vscode_tasksJSON_文件所处之文件夹之完整路径,
                    备份文件之文件名
                )

                备份文件已写入磁盘_之期待 = 文件系统工具之扩展版.writeFile(备份文件之文件完整路径, 旧有_vscode_tasksJSON_文件之缓冲数据块).then(() => {
                    console.log(`VSCode 先前的 ${
                        粉笔工具.magentaBright('tasks.json')
                    } 文件已另存为备份：\n    ${
                        粉笔工具.greenBright(备份文件之文件名)
                    } 。\n    ${
                        粉笔工具.green(备份文件之文件完整路径)
                    }\n`)
                })
            }

            新内容已写入磁盘_之期待 = 文件系统工具之扩展版.writeFile(vscode_tasksJSON_文件之完整路径, 拟写入_vscode_tasksJSON_之内容全文).then(() => {
                console.log(`VSCode 的 ${
                    粉笔工具.magentaBright('tasks.json')
                } ${
                    旧有_vscode_tasksJSON_文件确实存在
                        ? '文件内容已变更'
                        : '文件已创建'
                }。\n    ${
                    粉笔工具.redBright(vscode_tasksJSON_文件之完整路径)
                }\n`)
            })
        }



        return Promise.all([
            备份文件已写入磁盘_之期待,
            新内容已写入磁盘_之期待,
        ])
    })





    /**
     * @param {object} 配置项集
     * @param {Array<范_vscode_任务项>} 配置项集.任务列表
     * @param {string} 配置项集.任务标签
     * @param {范_vscode_任务项} 配置项集.拟采纳的任务定义
     * @param {范_粉笔工具} 配置项集.粉笔工具
     *
     * @returns {boolean} 任务列表已有改动
     */
    function 确保某_vscode_任务存在 ({ 任务列表, 任务标签, 拟采纳的任务定义, 粉笔工具 } = {}) {
        if (!拟采纳的任务定义 || typeof 拟采纳的任务定义 !== 'object' || Array.isArray(拟采纳的任务定义)) {
            console.log(`为任务 “${任务标签}” 给出的任务项无效。`)
            return
        }

        拟采纳的任务定义.label = 任务标签

        let 已有改动 = false

        let 关注的任务项之列表编号 = 任务列表.findIndex(某任务项 => 某任务项.label === 任务标签)
        if (关注的任务项之列表编号 < 0) {
            const 任务项 = {
                label: 任务标签,
            }

            任务列表.push(任务项)

            关注的任务项之列表编号 = 任务列表.length - 1

            已有改动 = true
        }

        const 执行结果 = 将JSON中单个属性或成员配置为新值(任务列表[关注的任务项之列表编号], 拟采纳的任务定义)

        if (执行结果.已有改动) {
            已有改动 = true

            任务列表[关注的任务项之列表编号] = 执行结果.新实体
        }

        console.log(`在 VSCode 的 ${
            粉笔工具.magentaBright('tasks.json')
        } 中，\n    名为 “${
            粉笔工具.cyanBright(任务标签)
        }” 的任务\n或为新增或有改动？${
            已有改动
                ? 粉笔工具.redBright('或确为新增，或确有改动')
                : 粉笔工具.green('原先已存在，且本次并无改动')
        }。\n`)

        return 已有改动
    }
}

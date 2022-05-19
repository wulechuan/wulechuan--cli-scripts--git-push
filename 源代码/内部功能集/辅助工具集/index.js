module.exports = {
    求当前时间之文本_可用于文件系统之文件名,
    将JSON中单个属性或成员配置为新值,
    探测采用本工具集的_npm_项目的根文件夹路径,
    吴乐川对长文本进行排版,
}





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
 * @returns {string} 时间戳之人类可读文本，且可用于文件系统之文件名（文件夹名）。
 */
function 求当前时间之文本_可用于文件系统之文件名 () {
    return new Date().toLocaleString('zh-cn', {
        dateStyle: 'long',
        timeStyle: 'medium',
    }).replace(/[\s:]/g, '_')
}





/**
 *
 * @param {any} 旧有实体
 * @param {any} 拟配置为该实体
 * @returns {{ 已有改动: boolean; 新实体: any }}
 */
function 将JSON中单个属性或成员配置为新值 (旧有实体, 拟配置为该实体) {
    if (typeof 拟配置为该实体 === 'function') {
        throw new TypeError('tasks.json 中怎么还有函数？')
    }

    if (typeof 拟配置为该实体 !== 'object') {
        return {
            已有改动: 旧有实体 !== 拟配置为该实体,
            新实体: 拟配置为该实体,
        }
    }

    if (!拟配置为该实体) { // typeof null === 'object'
        if (旧有实体 === null || 旧有实体 === undefined) {
            // throw new TypeError('tasks.json 中怎么还有 null ？')

            return {
                已有改动: false,
                新实体: 旧有实体,
            }
        } else {
            // throw new TypeError('tasks.json 中怎么还有 null ？')

            return {
                已有改动: true,
                新实体: null,
            }
        }
    }

    if (Array.isArray(拟配置为该实体) && Array.isArray(旧有实体) && 拟配置为该实体.length === 旧有实体.length) {
        return 拟配置为该实体.reduce((
            /** @type {ReturnType<将JSON中单个属性或成员配置为新值>} */
            综合结果,

            拟配置为该成员,

            列表编号
        ) => {
            const 本项之执行结果 = 将JSON中单个属性或成员配置为新值(旧有实体[列表编号], 拟配置为该成员)

            if (本项之执行结果.已有改动) {
                综合结果.已有改动 = true
            }

            // 旧有实体[列表编号] = 本项之执行结果.新实体 // 覆盖原始列表
            综合结果.新实体.push(本项之执行结果.新实体)

            return 综合结果
        }, {
            已有改动: false,
            // 新实体: 旧有实体,
            新实体: [],
        })
    }

    if (!!旧有实体 && typeof 旧有实体 === 'object' && !Array.isArray(旧有实体)) {
        return Object.keys(拟配置为该实体).reduce((综合结果, 键) => {
            const 旧有值 = 旧有实体[键]
            const 拟配置值 = 拟配置为该实体[键]

            const 本项之执行结果 = 将JSON中单个属性或成员配置为新值(旧有值, 拟配置值)

            if (本项之执行结果.已有改动) {
                综合结果.已有改动 = true
            }

            // 旧有实体[键] = 本项之执行结果.新实体 // 覆盖原始字典
            综合结果.新实体[键] = 本项之执行结果.新实体

            return 综合结果
        }, {
            已有改动: false,
            // 新实体: 旧有实体,
            新实体: {},
        })
    }



    /**
     * 至此，可能的情形如下：
     *   -   两个都是数组对象，但长度不等。
     *   -   一个是非数组对象，另一个不是（哪怕另一个是数组）。
     * 策略为直接采用新值，抛弃旧值。
     */

    return {
        已有改动: true,
        新实体: 拟配置为该实体,
    }
}





/**
 * @param {object}                  配置项集
 * @param {范_粉笔工具}             配置项集.粉笔工具
 * @param {范_路径工具}             配置项集.路径工具
 * @param {范_文件系统工具之扩展版} 配置项集.文件系统工具之扩展版
 *
 * @param {string}                  配置项集.本工具集一切命令行消息之前缀
 * @param {string}                  配置项集.探测之起点之绝对路径
 *
 * @returns {{ 理想的文件夹之完整路径: string; 未成功: boolean; 疑似为本工具集自身的_install_生命周期任务故不必配置命令行脚本: boolean; }}
 */
function 探测采用本工具集的_npm_项目的根文件夹路径 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,

    本工具集一切命令行消息之前缀,
    探测之起点之绝对路径,
} = {}) {
    /**
     * @param {string} 待检验的路径
     * @returns {boolean}
     */
    function 某路径为真实存在的文件 (待检验的路径) {
        let 确为文件 = false
        if (文件系统工具之扩展版.existsSync(待检验的路径)) {
            const 文件描述符 = 文件系统工具之扩展版.statSync(待检验的路径)
            if (文件描述符.isFile()) {
                确为文件 = true
            }
        }
        return 确为文件
    }



    const 本函数之一切消息之前缀 = `${本工具集一切命令行消息之前缀} 探测采用本工具集之 npm 项目：\n`



    const 返回值 = {
        未成功: true,
        疑似为本工具集自身的_install_生命周期任务故不必配置命令行脚本: false,
        理想的文件夹之完整路径: '',
        失败之原因: '',
    }



    if (!探测之起点之绝对路径 || typeof 探测之起点之绝对路径 !== 'string' || !路径工具.isAbsolute(探测之起点之绝对路径)) {
        console.log(`\n\n${
            本函数之一切消息之前缀
        }\n    ${
            粉笔工具.red('探测之起点之路径必须是绝对路径。')
        }`)

        返回值.失败之原因 = '探测之起点之路径不是绝对路径。'
        return 返回值
    }

    if (某路径为真实存在的文件(探测之起点之绝对路径)) {
        探测之起点之绝对路径 = 路径工具.dirname(探测之起点之绝对路径)
    }

    if (!文件系统工具之扩展版.existsSync(探测之起点之绝对路径)) {
        console.log(`\n\n${
            本函数之一切消息之前缀
        }\n    ${
            粉笔工具.red('探测之起点之路径无效。')
        }`)

        返回值.失败之原因 = '探测之起点之路径无效。'
        return 返回值
    }



    const 各路径片段之列表 = 探测之起点之绝对路径.split(/[\\/]/).filter(路径片段 => !!路径片段)
    // console.log(各路径片段之列表)

    const 在最顶层_node_modules_之上的各路径片段 = []
    const 自顶而下找到了一个_node_modules = 各路径片段之列表.some(路径片段 => {
        if (路径片段 === 'node_modules') {
            return true
        }

        在最顶层_node_modules_之上的各路径片段.push(路径片段)
    })

    if (!自顶而下找到了一个_node_modules) {
        console.log(`\n\n${
            本函数之一切消息之前缀
        }\n    ${
            粉笔工具.yellow(`探测之起点所有的上层文件夹没有任何一个名为 “${粉笔工具.white('node_modules')}”。`)
        }`)

        返回值.失败之原因 = '探测之起点所有的上层文件夹没有任何一个名为“node_modules”。'
        返回值.疑似为本工具集自身的_install_生命周期任务故不必配置命令行脚本 = true
        return 返回值
    }

    const 理想的文件夹之完整路径 = 在最顶层_node_modules_之上的各路径片段.join(路径工具.sep)
    const 理想路径中的_packageJSON_的完整路径 = 路径工具.join(理想的文件夹之完整路径, 'package.json')

    if (某路径为真实存在的文件(理想路径中的_packageJSON_的完整路径)) {
        const 采用本工具集之_npm_包之_packageJSON = 文件系统工具之扩展版.readJSONSync(理想路径中的_packageJSON_的完整路径)

        console.log(`\n\n${
            本函数之一切消息之前缀
        }\n    ${
            粉笔工具.green('成功探测到采用本工具集之 npm 包。')
        }\n        名为 "${
            粉笔工具.white(采用本工具集之_npm_包之_packageJSON.name)
        }"\n        路径为 "${
            粉笔工具.greenBright(理想的文件夹之完整路径)
        }"`)

        返回值.未成功 = false
        返回值.理想的文件夹之完整路径 = 理想的文件夹之完整路径
        return 返回值
    } else {
        console.log(`\n\n${
            本函数之一切消息之前缀
        }\n    ${
            粉笔工具.red('虽探测到疑似采用本工具集之 npm 包之根文件夹，')
        }\n    ${
            粉笔工具.red('但其中没有找到 package.json 这一文件。')
        }`)

        返回值.失败之原因 = '虽探测到疑似采用本工具集之 npm 包之根文件夹，但其中没有找到 package.json 这一文件。'
        return 返回值
    }
}





/**
 * @typedef  {object} 范_吴乐川对长文本进行排版_排版配置
 *
 * @property {number} 整体缩进级数
 * @property {string} 整体缩进之文本
 * @property {string} 列表符号
 * @property {string} 首层缩进之文本
 * @property {string} 首层缩进之文本_并含整体缩进
 * @property {string} 首层缩进之文本_含列表符号
 * @property {string} 首层缩进之文本_含列表符号_并含整体缩进
 * @property {string} 非首层缩进之文本
 * @property {number} 各段落间的额外空白行数
 */

/**
 * @typedef {object} 范_吴乐川对长文本进行排版_产出 - 即 `ReturnType<吴乐川对长文本进行排版>` 。
 * @property {string} 排版好的内容全文
 * @property {范_吴乐川对长文本进行排版_排版配置} 最终采纳的排版配置
 */

/**
 *
 * @param {object} 配置项集
 * @param {string} 配置项集.原始内容全文
 * @param {string} 配置项集.单层缩进
 * @param {string} 配置项集.列表符号
 * @param {number} 配置项集.整体缩进级数
 * @param {number} 配置项集.各段落间的额外空白行数
 *
 * @returns {范_吴乐川对长文本进行排版_产出}
 */
function 吴乐川对长文本进行排版 ({
    原始内容全文,
    单层缩进,
    列表符号,
    整体缩进级数,
    各段落间的额外空白行数,
} = {}) {
    if (typeof 单层缩进 !== 'string') {
        单层缩进 = ' '.repeat(4)
    }

    if (typeof 列表符号 !== 'string') {
        列表符号 = '- '
    }

    整体缩进级数 = +整体缩进级数
    if (!(整体缩进级数 > 0)) {
        整体缩进级数 = 0
    }

    各段落间的额外空白行数 = +各段落间的额外空白行数
    if (!(各段落间的额外空白行数 >= 0)) {
        各段落间的额外空白行数 = 1
    }

    const 整体缩进之文本 = 单层缩进.repeat(整体缩进级数)

    let 首层缩进之文本 = ''
    let 首层缩进之文本_含列表符号 = ''
    if (列表符号.length > 0) {
        首层缩进之文本 = 单层缩进.repeat(Math.ceil((列表符号.length + 1) / 单层缩进.length))
        首层缩进之文本_含列表符号 = `${首层缩进之文本.slice(0, -列表符号.length)}${列表符号}`
    }

    const 非首层缩进之文本 = 单层缩进 // 在本函数内部无用，但可供外界采用。

    const 首层缩进之文本_并含整体缩进          = `${整体缩进之文本}${首层缩进之文本}`
    const 首层缩进之文本_含列表符号_并含整体缩进 = `${整体缩进之文本}${首层缩进之文本_含列表符号}`

    let 各段落文本之列表 = [ 原始内容全文 ]

    各段落文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(各段落文本之列表, /。\s+/, '。')
    各段落文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(各段落文本之列表, /！\s+/, '！')

    各段落文本之列表 = 各段落文本之列表.map(某段落之文本 => {
        let 某段落中各行文本之列表 = [ 某段落之文本 ]

        某段落中各行文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(某段落中各行文本之列表, '。')
        某段落中各行文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(某段落中各行文本之列表, '！')
        某段落中各行文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(某段落中各行文本之列表, /，\s+/, '，')
        某段落中各行文本之列表 = 对文本列表逐项进一步分割并将结果列表展平(某段落中各行文本之列表, /；\s+/, ';')

        return 某段落中各行文本之列表
    })

    const 排版好的内容全文 = 各段落文本之列表.map((某段落中各行文本之列表) => {
        return 某段落中各行文本之列表.map((某行之文本, 行之内部编号) => {
            const 行号 = 行之内部编号 + 1
            const 行前缀内容 = `${整体缩进之文本}${行号 === 1 ? 首层缩进之文本_含列表符号 : 首层缩进之文本}`
            return `${行前缀内容}${某行之文本}`
        }).join('\n')
    }).join('\n'.repeat(1 + 各段落间的额外空白行数))

    return {
        排版好的内容全文,
        最终采纳的排版配置: {
            整体缩进级数,
            整体缩进之文本,
            列表符号,
            首层缩进之文本,
            首层缩进之文本_并含整体缩进,
            首层缩进之文本_含列表符号,
            首层缩进之文本_含列表符号_并含整体缩进,
            非首层缩进之文本,
            各段落间的额外空白行数,
        },
    }





    /**
     * @param {Array<string>}   原文本或原文本列表
     * @param {string | RegExp} 分割符或分割正则表达式
     * @param {string}          在分割符处须补回的内容
     *
     * @returns {string | Array<string>}
     */
    function 对文本列表逐项进一步分割并将结果列表展平 (原文本或原文本列表, 分割符或分割正则表达式, 在分割符处须补回的内容) {
        let 原文本列表 = 原文本或原文本列表

        if (typeof 原文本或原文本列表 === 'string') {
            原文本列表 = [ 原文本或原文本列表 ]
        }

        if (!Array.isArray(原文本列表)) {
            原文本列表 = []
        }

        原文本列表 = 原文本列表.filter(某项内容 => typeof 某项内容 === 'string' && !!某项内容)

        if (原文本列表.length < 1) {
            // console.debug('给出的原文内容无效，或内容全空。')
            return 原文本或原文本列表
        }



        let 分割符等效的文本 = ''

        if (typeof 分割符或分割正则表达式 === 'string') {
            分割符等效的文本 = 分割符或分割正则表达式
        } else {
            if (分割符或分割正则表达式 instanceof RegExp) {
                分割符等效的文本 = 分割符或分割正则表达式.toString()
            } else {
                分割符或分割正则表达式 = ''
            }
        }

        if (typeof 在分割符处须补回的内容 !== 'string' || !在分割符处须补回的内容) {
            在分割符处须补回的内容 = 分割符等效的文本

            if (分割符或分割正则表达式 instanceof RegExp) {
                console.warn(`给出的【分割符】系正则表达式，但【分割符处须补回的内容】并未明确给出。故补回的内容是不可靠的！拟在各分割出补回该内容"${在分割符处须补回的内容}"。`)
            }
        }

        if (!分割符或分割正则表达式) {
            console.debug('【分割符】为空字符串。')
        }


        const 两级嵌套之列表 = 原文本列表.map(原文某项文本 => {
            return 原文某项文本.split(分割符或分割正则表达式).map((分割后的某文本片段, 片段之内部编号, 分割得到的片段列表) => {
                return 片段之内部编号 < 分割得到的片段列表.length - 1
                    ? `${分割后的某文本片段}${在分割符处须补回的内容}`
                    : 分割后的某文本片段
            })
        })

        const 展平后的单级列表 = 两级嵌套之列表.reduce((展平后的文本片段列表, 某原文本分割而得的片段列表) => {
            return [
                ...展平后的文本片段列表,
                ...某原文本分割而得的片段列表,
            ]
        }, [])

        return 展平后的单级列表
    }
}

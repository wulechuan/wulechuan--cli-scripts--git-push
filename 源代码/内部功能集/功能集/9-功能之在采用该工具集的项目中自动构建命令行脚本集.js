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
 * @typedef {import('../辅助工具集')} 范_本工具集随附之辅助工具集
 */

/**
 * @typedef {import('./0-常量表')} 范_本工具集之内部常量表
 */

/**
 * @typedef {import('../../../package.json')} 范_本工具集自身的_packageJSON
 */





/**
 * @param {object}                        配置项集
 *
 * @param {范_粉笔工具}                   配置项集.粉笔工具
 * @param {范_路径工具}                   配置项集.路径工具
 * @param {范_文件系统工具之扩展版}       配置项集.文件系统工具之扩展版
 *
 * @param {范_本工具集随附之辅助工具集}   配置项集.本工具集随附之辅助工具集
 *
 * @param {string}                        配置项集.本工具集一切命令行消息之前缀
 * @param {string}                        配置项集.本工具集自身根文件夹之完整路径
 * @param {范_本工具集自身的_packageJSON} 配置项集.本工具集自身的_packageJSON
 *
 * @param {string}                        配置项集.视作须为其安装本工具集的_npm_项目的根文件的完整路径
 * @param {string}                        配置项集.用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径
 * @param {string}                        配置项集.本工具集随附命令行应用范本集文件夹之相对路径
 * @param {string}                        配置项集.用于研发阶段的命令行工具_这一文件夹之相对路径
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份
 *
 * @returns {Promise<any>}
 */
module.exports = function 将本工具集随附命令行应用范本文件发布至采用本工具集的_npm_包中去 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,

    本工具集随附之辅助工具集,

    本工具集一切命令行消息之前缀,
    本工具集自身根文件夹之完整路径,
    本工具集自身的_packageJSON,

    视作须为其安装本工具集的_npm_项目的根文件的完整路径,
    用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
    本工具集随附命令行应用范本集文件夹之相对路径,
    用于研发阶段的命令行工具_这一文件夹之相对路径,
    发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
    发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
    发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,
} = {}) {
    if (typeof 视作须为其安装本工具集的_npm_项目的根文件的完整路径 !== 'string' || !视作须为其安装本工具集的_npm_项目的根文件的完整路径.trim()) {
        return Promise.reject(new Error(`${
            本工具集一切命令行消息之前缀
        }\n    ${
            粉笔工具.red(`没有给出【${
                粉笔工具.yellow('视作须为其安装本工具集的_npm_项目的根文件的完整路径')
            }】。`)
        }\n`))
    }

    return Promise.all([
        import('./0-常量表.js'),
    ]).then(([
        本工具集之内部常量表_模块,
    ]) => {
        /** @type {范_本工具集之内部常量表} */
        const 本工具集之内部常量表 = 本工具集之内部常量表_模块.default

        return 发布命令行脚本之范本集_主体功能({
            粉笔工具,
            路径工具,
            文件系统工具之扩展版,

            本工具集随附之辅助工具集,
            本工具集之内部常量表,

            本工具集一切命令行消息之前缀,
            本工具集自身根文件夹之完整路径,
            本工具集自身的_packageJSON,

            视作须为其安装本工具集的_npm_项目的根文件的完整路径,
            用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
            本工具集随附命令行应用范本集文件夹之相对路径,
            用于研发阶段的命令行工具_这一文件夹之相对路径,
            发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
            发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
            发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,
        })
    })
}





/**
 * @typedef {object} 范_命令行脚本文件之发布任务配置
 *
 * @property {boolean} 应尝试部署该文件
 * @property {boolean} 不论是否部署该文件也应尝试修订旧有文件
 * @property {string}  原始范本文件的二次相对路径
 * @property {string}  拟将范本文件发布于其中的文件夹的相对路径
 */





/**
 * @param {object}                        配置项集
 *
 * @param {范_粉笔工具}                   配置项集.粉笔工具
 * @param {范_路径工具}                   配置项集.路径工具
 * @param {范_文件系统工具之扩展版}       配置项集.文件系统工具之扩展版
 *
 * @param {范_本工具集随附之辅助工具集}   配置项集.本工具集随附之辅助工具集
 * @param {范_本工具集之内部常量表}       配置项集.本工具集之内部常量表
 *
 * @param {string}                        配置项集.本工具集一切命令行消息之前缀
 * @param {string}                        配置项集.本工具集自身根文件夹之完整路径
 * @param {范_本工具集自身的_packageJSON} 配置项集.本工具集自身的_packageJSON
 *
 * @param {string}                        配置项集.视作须为其安装本工具集的_npm_项目的根文件的完整路径
 * @param {string}                        配置项集.用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径
 * @param {string}                        配置项集.本工具集随附命令行应用范本集文件夹之相对路径      - 默认值为 '源代码/命令行应用范本集' 。
 * @param {string}                        配置项集.用于研发阶段的命令行工具_这一文件夹之相对路径     - 默认值为 '用于研发阶段的命令行工具' 。
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件
 * @param {boolean}                       配置项集.发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份
 *
 * @returns {Promise<any>}
 */
function 发布命令行脚本之范本集_主体功能 ({
    粉笔工具,
    路径工具,
    文件系统工具之扩展版,

    本工具集随附之辅助工具集,
    本工具集之内部常量表,

    本工具集一切命令行消息之前缀,
    本工具集自身根文件夹之完整路径,
    本工具集自身的_packageJSON,

    视作须为其安装本工具集的_npm_项目的根文件的完整路径,
    用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
    本工具集随附命令行应用范本集文件夹之相对路径,
    用于研发阶段的命令行工具_这一文件夹之相对路径,
    发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
    发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
    发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,
}) {
    const {
        用于研发阶段的命令行工具_这一文件夹之相对路径_默认值,
    } = 本工具集之内部常量表



    if (typeof 本工具集随附命令行应用范本集文件夹之相对路径 !== 'string' || !本工具集随附命令行应用范本集文件夹之相对路径.trim()) {
        本工具集随附命令行应用范本集文件夹之相对路径 = '源代码/命令行应用范本集'
    }

    if (typeof 用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径 !== 'string' || !用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径.trim()) {
        用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径 = 视作须为其安装本工具集的_npm_项目的根文件的完整路径
    }

    /** @type {string} */
    let 用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值
    if (typeof 用于研发阶段的命令行工具_这一文件夹之相对路径 !== 'string' || !用于研发阶段的命令行工具_这一文件夹之相对路径.trim()) {
        用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值 = 用于研发阶段的命令行工具_这一文件夹之相对路径_默认值
    } else {
        用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值 = 用于研发阶段的命令行工具_这一文件夹之相对路径
    }

    console.log(`\n\n\n\n\n${
        本工具集一切命令行消息之前缀
    } ${
        粉笔工具.bgGreenBright.black(' 现在开始发布各命令行脚本 ')
    }\n`)

    console.log(`\n${
        本工具集一切命令行消息之前缀
    }\n\n    视作须为其安装本工具集的_npm_项目的根文件的完整路径：\n    "${
        粉笔工具.green(视作须为其安装本工具集的_npm_项目的根文件的完整路径)
    }"\n\n    用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径：\n    "${
        粉笔工具.green(用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径)
    }"\n`)

    console.log(
        '    个别脚本文件应发布在目标项目之根文件夹下：\n   ',
        发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
        '\n'
    )



    /** @type {Array<范_命令行脚本文件之发布任务配置>} */
    const 所有命令行脚本文件之发布任务配置集 = [
        {
            应尝试部署该文件:                         发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('PowerShell', '.Push-将代码依次推送至多个集得源.ps1'),
            拟将范本文件发布于其中的文件夹的相对路径: '.',
        },

        {
            应尝试部署该文件:                         !发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('PowerShell', 'Push-将代码依次推送至多个集得源.ps1'),
            拟将范本文件发布于其中的文件夹的相对路径: 路径工具.join(用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值, 'PowerShell'),
        },

        {
            应尝试部署该文件:                         发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('bash', 'push-将代码依次推送至多个集得源.sh'),
            拟将范本文件发布于其中的文件夹的相对路径: '.',
        },

        {
            应尝试部署该文件:                         !发布本工具集随附的命令行脚本时_个别脚本文件应发布在目标项目之根文件夹下,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('bash', 'push-将代码依次推送至多个集得源.sh'),
            拟将范本文件发布于其中的文件夹的相对路径: 路径工具.join(用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值, 'bash'),
        },

        {
            应尝试部署该文件:                         true,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('PowerShell', 'Add-添加所有集得源.ps1'),
            拟将范本文件发布于其中的文件夹的相对路径: 路径工具.join(用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值, 'PowerShell'),
        },

        {
            应尝试部署该文件:                         true,
            不论是否部署该文件也应尝试修订旧有文件:   true,
            原始范本文件的二次相对路径:               路径工具.join('bash', 'Add-添加所有集得源.sh'),
            拟将范本文件发布于其中的文件夹的相对路径: 路径工具.join(用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值, 'bash'),
        },
    ].filter(任务 => !!任务)



    return Promise.allSettled(所有命令行脚本文件之发布任务配置集.map(某命令行脚本文件之发布任务配置 => {
        try {
            发布某脚本文件({
                粉笔工具,
                路径工具,
                文件系统工具之扩展版,

                本工具集随附之辅助工具集,
                本工具集之内部常量表,

                本工具集一切命令行消息之前缀,
                本工具集自身根文件夹之完整路径,
                本工具集自身的_packageJSON,

                本工具集随附命令行应用范本集文件夹之相对路径,
                用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
                用于研发阶段的命令行工具_这一文件夹之相对路径: 用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值,
                发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
                发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,

                某命令行脚本文件之发布任务配置,
            })
        } catch (异常之记载) {
            console.log(`\n\n${
                本工具集一切命令行消息之前缀
            }\n${
                粉笔工具.bgRed.white(' 遭遇异常 ')
            }\n${
                粉笔工具.red(异常之记载.message || 异常之记载)
            }\n\n`)
        }

        return Promise.resolve()
    }))





    /**
     * @param {object}                          配置项集
     *
     * @param {范_粉笔工具}                     配置项集.粉笔工具
     * @param {范_路径工具}                     配置项集.路径工具
     * @param {范_文件系统工具之扩展版}         配置项集.文件系统工具之扩展版
     *
     * @param {范_本工具集随附之辅助工具集}     配置项集.本工具集随附之辅助工具集
     * @param {范_本工具集之内部常量表}         配置项集.本工具集之内部常量表
     *
     * @param {string}                          配置项集.本工具集一切命令行消息之前缀
     * @param {string}                          配置项集.本工具集自身根文件夹之完整路径
     * @param {范_本工具集自身的_packageJSON}   配置项集.本工具集自身的_packageJSON
     *
     * @param {string}                          配置项集.本工具集随附命令行应用范本集文件夹之相对路径
     * @param {string}                          配置项集.用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径
     * @param {string}                          配置项集.用于研发阶段的命令行工具_这一文件夹之相对路径
     * @param {boolean}                         配置项集.发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件
     * @param {boolean}                         配置项集.发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份
     *
     * @param {范_命令行脚本文件之发布任务配置} 配置项集.某命令行脚本文件之发布任务配置
     */
    function 发布某脚本文件 ({
        粉笔工具,
        路径工具,
        文件系统工具之扩展版,

        本工具集随附之辅助工具集,
        本工具集之内部常量表,

        本工具集一切命令行消息之前缀,
        本工具集自身根文件夹之完整路径,
        本工具集自身的_packageJSON,

        本工具集随附命令行应用范本集文件夹之相对路径,
        用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
        用于研发阶段的命令行工具_这一文件夹之相对路径,
        发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件,
        发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份,

        某命令行脚本文件之发布任务配置,
    } = {}) {
        const 拼接路径片段 = 路径工具.join
        const 求完整路径 = 路径工具.resolve
        const 求路径中的文件之文件全名 = 路径工具.basename
        const 求路径末端实体的容纳文件夹之路径 = 路径工具.dirname



        const {
            用于研发阶段的命令行工具_这一文件夹之相对路径_默认值,
        } = 本工具集之内部常量表



        const {
            应尝试部署该文件,
            不论是否部署该文件也应尝试修订旧有文件,
            原始范本文件的二次相对路径,
            拟将范本文件发布于其中的文件夹的相对路径,
        } = 某命令行脚本文件之发布任务配置

        if (!应尝试部署该文件 && !不论是否部署该文件也应尝试修订旧有文件) {
            return
        }



        const 命令行脚本文件之文件名 = 求路径中的文件之文件全名(原始范本文件的二次相对路径)
        const 该命令行脚本文件确系PowerShell = /\.psm?1$/.test(命令行脚本文件之文件名)
        const 原始范本文件的一次相对路径 = 拼接路径片段(本工具集随附命令行应用范本集文件夹之相对路径, 原始范本文件的二次相对路径)
        const 容纳原始范本文件之文件夹之完整路径 = 求完整路径(求路径末端实体的容纳文件夹之路径(原始范本文件的一次相对路径))

        const 原始范本文件之完整路径 = 求完整路径(拼接路径片段(
            本工具集自身根文件夹之完整路径,
            本工具集随附命令行应用范本集文件夹之相对路径,
            原始范本文件的二次相对路径
        ))

        const 容纳发布的文件的文件夹之完整路径 = 求完整路径(拼接路径片段(
            用于容纳发布的各命令行脚本的文件树之根文件夹之完整路径,
            拟将范本文件发布于其中的文件夹的相对路径
        ))

        const 拟发布成为之文件之完整路径 = 拼接路径片段(
            容纳发布的文件的文件夹之完整路径,
            命令行脚本文件之文件名
        )



        let 原始文件确实存在 = false
        if (文件系统工具之扩展版.existsSync(原始范本文件之完整路径)) {
            const 文件描述符 = 文件系统工具之扩展版.statSync(原始范本文件之完整路径)
            if (文件描述符.isFile()) {
                原始文件确实存在 = true
            }
        }



        let 欲发布的文件业已存在 = false
        if (文件系统工具之扩展版.existsSync(拟发布成为之文件之完整路径)) {
            const 文件描述符 = 文件系统工具之扩展版.statSync(拟发布成为之文件之完整路径)
            if (文件描述符.isFile()) {
                欲发布的文件业已存在 = true
            }
        }



        let 确应发布或覆盖该文件 = false
        let 确应保存备份文件 = false

        if (应尝试部署该文件) {

            if (!原始文件确实存在) {
                console.log(`${
                    本工具集一切命令行消息之前缀
                }\n${
                    粉笔工具.red('欲部署某命令行脚本工具时，未找到原始文件。已略过该部署任务。')
                }\n所涉文件之描述如下：\n    相对路径： "${
                    粉笔工具.redBright(原始范本文件的二次相对路径)
                }"\n    完整路径： "${
                    粉笔工具.redBright(原始范本文件之完整路径)
                }"\n`)



                return
            }



            console.log(`${
                本工具集一切命令行消息之前缀
            }\n\n    找到原始的命令行脚本范本：\n    "${
                粉笔工具.white(`${容纳原始范本文件之文件夹之完整路径}${路径工具.sep}`)
            }${
                粉笔工具.cyan(命令行脚本文件之文件名)
            }"\n`)

            console.log(`    ${
                粉笔工具.yellow('拟发布为：')
            }：\n    "${
                粉笔工具.green(`${容纳发布的文件的文件夹之完整路径}${路径工具.sep}`)
            }${
                粉笔工具.greenBright(命令行脚本文件之文件名)
            }"\n`)




            if (欲发布的文件业已存在) {
                console.log(`   ${
                    粉笔工具.bgYellow.black(' 欲发布的命令行脚本文件业已存在 ')
                }`)
                // console.log(`    ${
                //     粉笔工具.yellow('欲发布的命令行脚本文件业已存在')
                // }：\n    "${
                //     粉笔工具.blue(`${容纳发布的文件的文件夹之完整路径}${路径工具.sep}`)
                // }${
                //     粉笔工具.blueBright(命令行脚本文件之文件名)
                // }"\n`)

                if (发布本工具集随附的命令行脚本时应覆盖旧有的命令行脚本文件) {
                    确应发布或覆盖该文件 = true
                    确应保存备份文件 = !!发布本工具集随附的命令行脚本时若覆盖旧有的命令行脚本文件则先行备份

                    if (确应保存备份文件) {
                        console.log(`   ${粉笔工具.bgMagenta.black(' 该文件将被覆盖，但会先行备份 ')}`)
                    } else {
                        console.log(`   ${粉笔工具.bgRed.whiteBright(' 该文件将被覆盖，且不会先行备份 ')}`)
                    }
                } else {
                    确应发布或覆盖该文件 = false
                    确应保存备份文件 = false

                    console.log(`   ${粉笔工具.bgGreen.black(' 不会发布新文件，而是保留旧有文件 ')}\n`)
                }
            } else {
                确应发布或覆盖该文件 = true
                确应保存备份文件 = false
            }

        }





        if (确应发布或覆盖该文件) {

            文件系统工具之扩展版.mkdirpSync(容纳发布的文件的文件夹之完整路径)



            if (确应保存备份文件) {
                const 该命令行脚本文件之扩展名 = 路径工具.extname(命令行脚本文件之文件名)
                const 时间戳 = 本工具集随附之辅助工具集.求当前时间之文本_可用于文件系统之文件名()

                const 备份文件之文件名 = `${
                    路径工具.basename(命令行脚本文件之文件名, 该命令行脚本文件之扩展名)
                }-吴乐川备份于-${时间戳}${
                    该命令行脚本文件之扩展名
                }`

                const 备份文件之完整路径 = 拼接路径片段(
                    容纳发布的文件的文件夹之完整路径,
                    备份文件之文件名
                )

                文件系统工具之扩展版.copySync(拟发布成为之文件之完整路径, 备份文件之完整路径)
                console.log(`   ${粉笔工具.bgGreen.black(' 旧文件现已备份 ')}`)
            }



            const 原始范文的内容须先修订再发布 = true // 用于研发阶段的命令行工具_这一文件夹之相对路径 !== 用于研发阶段的命令行工具_这一文件夹之相对路径_默认值

            if (!原始范文的内容须先修订再发布) {
                文件系统工具之扩展版.copySync(原始范本文件之完整路径, 拟发布成为之文件之完整路径)
            } else {
                const 原始范本文件之内容全文 = 文件系统工具之扩展版.readFileSync(原始范本文件之完整路径).toString()

                const 修订后的范文内容全文 = 之于某命令行脚本文件之内容全文_修订其中提及的_用于研发阶段的命令行工具({
                    文件内容修订前之全文: 原始范本文件之内容全文,
                    该命令行脚本文件确系PowerShell,
                    用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值: 用于研发阶段的命令行工具_这一文件夹之相对路径,
                    用于研发阶段的命令行工具_这一文件夹之相对路径_默认值,
                })

                文件系统工具之扩展版.writeFileSync(拟发布成为之文件之完整路径, 修订后的范文内容全文)
            }





            console.log(`   ${粉笔工具.bgBlueBright.black(' 该文件现已发布 ')}\n\n`)

        } else { // 这是 if (确应发布该文件) 配对的 else 。

            if (!欲发布的文件业已存在) {
                return
            }





            console.log(`${
                本工具集一切命令行消息之前缀
            }\n\n    找到该原先就存在的命令行脚本：\n    "${
                粉笔工具.green(`${容纳发布的文件的文件夹之完整路径}${路径工具.sep}`)
            }${
                粉笔工具.greenBright(命令行脚本文件之文件名)
            }"\n`)



            const 命令行脚本文件之原始内容全文 = 文件系统工具之扩展版.readFileSync(拟发布成为之文件之完整路径).toString()



            const 该文件值得修订 = true // 横竖是要修订“用于研发阶段的命令行工具” 这一配置的。再做如此检查则太麻烦。



            let 修订好的命令行脚本文件内容全文  = 之于某命令行脚本文件之内容全文_修订其中提及的_用于研发阶段的命令行工具({
                文件内容修订前之全文: 命令行脚本文件之原始内容全文,
                该命令行脚本文件确系PowerShell,
                用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值: 用于研发阶段的命令行工具_这一文件夹之相对路径,
                用于研发阶段的命令行工具_这一文件夹之相对路径_默认值,
            })



            if (该命令行脚本文件确系PowerShell) {
                const 正则表达式1 = /\\@wulechuan\\cli-scripts--git-push\\源代码\\PowerShell/

                // 该文件值得修订 = 正则表达式1.test(修订好的命令行脚本文件内容全文) // 横竖是要另外修订“用于研发阶段的命令行工具” 这一配置的。

                修订好的命令行脚本文件内容全文 = 修订好的命令行脚本文件内容全文.replace(
                    正则表达式1,
                    '\\@wulechuan\\cli-scripts--git-push\\源代码\\发布的源代码\\PowerShell'
                )
            } else {
                const 正则表达式1 = /\/@wulechuan\/cli-scripts--git-push\/源代码\/bash/

                // 该文件值得修订 = 正则表达式1.test(修订好的命令行脚本文件内容全文) // 横竖是要另外修订“用于研发阶段的命令行工具” 这一配置的。

                修订好的命令行脚本文件内容全文 = 修订好的命令行脚本文件内容全文.replace(
                    正则表达式1,
                    '/@wulechuan/cli-scripts--git-push/源代码/发布的源代码/bash'
                )
            }



            if (该文件值得修订 && 修订好的命令行脚本文件内容全文) {
                文件系统工具之扩展版.writeFileSync(拟发布成为之文件之完整路径, 修订好的命令行脚本文件内容全文)



                console.log(`   ${粉笔工具.bgBlueBright.black(' 该文件已修订 ')}\n\n`)
            }
        }
    }




    /**
     * @param {object}  配置项集
     * @param {string}  配置项集.文件内容修订前之全文
     * @param {string}  配置项集.用于研发阶段的命令行工具_这一文件夹之相对路径
     * @param {string}  配置项集.用于研发阶段的命令行工具_这一文件夹之相对路径_默认值
     * @param {boolean} 配置项集.该命令行脚本文件确系PowerShell
     *
     * @returns {string}
     */
    function 之于某命令行脚本文件之内容全文_修订其中提及的_用于研发阶段的命令行工具 ({
        文件内容修订前之全文,
        该命令行脚本文件确系PowerShell,
        用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值,
        用于研发阶段的命令行工具_这一文件夹之相对路径_默认值,
    } = {}) {

        const 用于研发阶段的命令行工具_这一文件夹之相对路径各级有效片段之列表 = 用于研发阶段的命令行工具_这一文件夹之相对路径_采纳值.split(/[\\/]/).filter(片段 => !!片段)
        const 用于研发阶段的命令行工具_这一文件夹之相对路径包含的路径层级数 = 用于研发阶段的命令行工具_这一文件夹之相对路径各级有效片段之列表.length

        /**
         * 目前的真实情况是， “用于研发阶段的命令行工具” 这一路径仅仅用于 PowerShell 脚本中的 -match 运算符后的【正则表达式】这一处。别无他处采用之。
         * 这时，即便文件是 PowerShell ，该正则表达式中的路径分隔符也必须为“双【反斜杠】”，而不是 PowerShell 风格的【代字符】 "`\" 。
         * 因此，暂时不必分过多情况讨论“应写入文件的各色路径中应采用的分隔符”的值。
         */
        const 写入文件的各色路径中应采用的分隔符 = 路径工具.sep === '\\' ? '\\\\' : 路径工具.sep

        // /** @type {string} */
        // let 写入文件的各色路径中应采用的分隔符
        // if (该命令行脚本文件确系PowerShell) {
        //     写入文件的各色路径中应采用的分隔符 = 路径工具.sep === '\\' ? '`\\' : 路径工具.sep
        // } else {
        //     写入文件的各色路径中应采用的分隔符 = 路径工具.sep === '\\' ? '\\\\' : 路径工具.sep
        // }



        let 修订后的内容全文 = 文件内容修订前之全文.replace(
            new RegExp(
                用于研发阶段的命令行工具_这一文件夹之相对路径_默认值
                    .replace(/[[\]]/g, '\\$1')           // 先处理路径片段中原有的方括号。
                    .replace(/[\\/]/g, '[\\\\/]')        // 在处理路径分隔符（即 \ 或 /），此时要添加额外的方括号。
                    .replace(/([{(.$!^+\-)}])/g, '\\$1') // 最后处理其他对于文件路径而言可以使用但对正则表达式而言很特殊的字符。
                ,

                'g'
            ),

            用于研发阶段的命令行工具_这一文件夹之相对路径各级有效片段之列表.join(写入文件的各色路径中应采用的分隔符)
        )



        if (该命令行脚本文件确系PowerShell) {
            const 须替换成的文本片段 = `Set-Location '${
                new Array(用于研发阶段的命令行工具_这一文件夹之相对路径包含的路径层级数 + 1).fill('..').join('\\')
            }${'\\'}' # 确保进程的当前路径为接受本工具集服务的 npm 包的根文件夹。`

            // console.log(
            //     /[Ss][Ee][Tt]-[Ll][Oo][Cc][Aa][Tt][Ii][Oo][Nn]\s+'\.\.\\\.\.\\'\s+#\s*确保进程的当前路径为接受本工具集服务的 npm 包的根文件夹。/.test(修订后的内容全文),
            //     须替换成的文本片段
            // )

            修订后的内容全文 = 修订后的内容全文.replace(
                /[Ss][Ee][Tt]-[Ll][Oo][Cc][Aa][Tt][Ii][Oo][Nn]\s+'\.\.\\\.\.\\'\s+#\s*确保进程的当前路径为接受本工具集服务的 npm 包的根文件夹。/,
                须替换成的文本片段
            )
        }



        return 修订后的内容全文
    }
}

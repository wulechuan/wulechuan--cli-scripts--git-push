module.exports = {
    求当前时间之文本_可用于文件系统之文件名,
    将JSON中单个属性或成员配置为新值,
}





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
    let 已有改动 = false

    if (typeof 拟配置为该实体 === 'function') {
        throw new TypeError('tasks.json 中怎么还有函数？')
    }

    if (typeof 拟配置为该实体 !== 'object') {
        if (旧有实体 !== 拟配置为该实体) {
            已有改动 = true
        }

        return {
            已有改动,
            新实体: 拟配置为该实体,
        }
    }

    if (!拟配置为该实体) { // typeof null === 'object'
        // throw new TypeError('tasks.json 中怎么还有 null ？')

        if (旧有实体) {
            return {
                已有改动: false,
                新实体: 旧有实体,
            }
        } else {
            return {
                已有改动: 旧有实体 !== null,
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

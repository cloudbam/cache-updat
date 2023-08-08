/*
 * @Author: yinbing.liu
 * @Date: 2023-07-31 10:19:39
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-07 14:38:02
 * @FilePath: /cache-update/packages/core/src/components/custom.ts
 * @Description: custom version
 */






/**
 * @description: get custom version
 * @param {string} version
 * @return {*}
 */
const getCustomVersion = (version?: string) => {
    if (!version) {
        throw new Error("---------- the customType is custom, must be a string ----------")
    }
    return version;
}

export default getCustomVersion
/*
 * @Author: yinbing.liu
 * @Date: 2023-07-27 11:19:16
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-07 14:39:07
 * @FilePath: /cache-update/packages/core/src/index.ts
 * @Description: 
 */

import getGitCommitHash  from "./components/commitHash";
import getCustomVersion from "./components/custom";
import getPackageVersion from "./components/package";
import { VersionType } from "./type/type";




/**
 * @description: match the corresponding version 
 * @param {VersionType} versionType 对应获取版本类型
 * @param {string} customVersionValue 当前自定义版本值
 * @return {*}
 */
const getVersion = (versionType: VersionType, customVersionValue?: string) => { 
    console.log('dddddd');
    
    const versionStrategyAssembly: Record<VersionType, () => string> = {
        package_version: getPackageVersion,
        git_commit_hash: getGitCommitHash,
        custom_version: () => getCustomVersion(customVersionValue)
    }
    return versionStrategyAssembly[versionType]()
}

export default getVersion;
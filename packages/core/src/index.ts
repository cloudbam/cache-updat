/*
 * @Author: yinbing.liu
 * @Date: 2023-07-27 11:19:16
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-16 18:01:00
 * @FilePath: /cache-updat/packages/core/src/index.ts
 * @Description: 
 */

import getGitCommitHash  from "./components/commitHash";
import getCustomVersion from "./components/custom";
import getPackageVersion from "./components/package";
export type { CoreOptions as Options } from "./type/interface";
import { VersionTypeField } from "./type/type";
export * from "./file";
export * from "./util/enum"


/**
 * @description: match the corresponding version 
 * @param {VersionTypeField} VersionTypeField 对应获取版本类型 
 * @param {string} customVersionValue 当前自定义版本值
 * @return {*}
 */
const getVersion = (options: {versionTypeField: VersionTypeField, customVersion?: string}) => { 
    const {versionTypeField, customVersion } = options;
    const versionStrategyAssembly: Record<VersionTypeField, () => string> = {
        package_version: getPackageVersion,
        git_commit_hash: getGitCommitHash,
        custom_version: () => getCustomVersion(customVersion)
    }
    return versionStrategyAssembly[versionTypeField ]()
}
export default getVersion;
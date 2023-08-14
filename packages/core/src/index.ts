/*
 * @Author: yinbing.liu
 * @Date: 2023-07-27 11:19:16
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-11 17:13:11
 * @FilePath: /cache-updat/packages/core/src/index.ts
 * @Description: 
 */

import getGitCommitHash  from "./components/commitHash";
import getCustomVersion from "./components/custom";
import getPackageVersion from "./components/package";
import createVersionFile from "./file";
import { CoreOptions } from "./type/interface";
import { VersionType } from "./type/type";


/**
 * @description: match the corresponding version 
 * @param {VersionType} versionType 对应获取版本类型 
 * @param {string} customVersionValue 当前自定义版本值
 * @return {*}
 */
const getVersion = (options: Pick<CoreOptions, "versionType" | "customVersionValue">) => { 
    const {versionType, customVersionValue } = options;
    const versionStrategyAssembly: Record<VersionType, () => string> = {
        package_version: getPackageVersion,
        git_commit_hash: getGitCommitHash,
        custom_version: () => getCustomVersion(customVersionValue)
    }
    console.log("--获取版本号 插入json文件到指定dist目录下--");
    return createVersionFile(versionStrategyAssembly[versionType]())
}

export default getVersion;
import { VersionType } from "./type";

/*
 * @Author: yinbing.liu
 * @Date: 2023-08-08 15:57:12
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-10 15:29:08
 * @FilePath: /cache-updat/packages/core/src/type/interface.ts
 * @Description: 
 */
export interface CoreOptions {
    versionType: VersionType,

    customVersionValue?: string
} 
import { VersionTypeField } from "./type";

/*
 * @Author: yinbing.liu
 * @Date: 2023-08-08 15:57:12
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-16 15:53:17
 * @FilePath: /cache-updat/packages/core/src/type/interface.ts
 * @Description: 
 */
export interface CoreOptions {
    versionTypeField: VersionTypeField,
    customVersionValue?: string
} 
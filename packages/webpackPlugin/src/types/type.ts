/*
 * @Author: yinbing.liu
 * @Date: 2023-08-16 14:51:54
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-16 15:51:03
 * @FilePath: /cache-updat/packages/webpackPlugin/src/types/type.ts
 * @Description: 
 */
import type {Options} from "@plugin-web-cache-update/core"



export type PluginsOptions = Options & {
    indexHtmlFilePath?: string,
}


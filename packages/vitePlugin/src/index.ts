/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-17 11:16:24
 * @FilePath: /cache-updat/packages/vitePlugin/src/index.ts
 * @Description: 
 */
import getVersion, { JSON_FILE_NAME } from "@plugin-web-cache-update/core"
import type { Plugin } from "vite";
import { PluginsOptions } from "./types/type";



const viteWebCacheUpdatePlugin = (options: PluginsOptions): Plugin  =>{ 
    return {
        name: 'vite:WebCacheUpdatePlugin',  
        // pre 会较于 post 先执行
        // pre：在 Vite 核心插件之前调用该插件
        // 默认：在 Vite 核心插件之后调用该插件
        // post：在 Vite 构建插件之后调用该插件
        enforce: 'post', // post
        // 指明它们仅在 'build' 或 'serve' 模式时调用
        apply: 'build', // apply 亦可以是一个函数
        generateBundle(__options, bundle = {}) {
            const version = getVersion(options);
            bundle[JSON_FILE_NAME] = {
                needsCodeReference: true,
                type: 'asset',
                name: undefined,
                source: version,
                fileName: `${JSON_FILE_NAME}.json`,
            }
        }
    }
}

export default viteWebCacheUpdatePlugin;
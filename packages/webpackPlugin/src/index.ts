/*
 * @Author: yinbing.liu
 * @Date: 2023-08-14 14:57:25
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-17 11:16:14
 * @FilePath: /cache-updat/packages/webpackPlugin/src/index.ts
 * @Description: 
 */
/*
 * @Author: yinbing.liu
 * @Date: 2023-08-14 14:57:25
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-17 10:52:56
 * @FilePath: /cache-updat/packages/webpackPlugin/src/index.ts
 * @Description: 
 */
import type { Compilation, Compiler } from 'webpack';
import type { PluginsOptions } from './types/type';
import { PLUGIN_NAME } from './util/enum';
import getVersion, { JSON_FILE_NAME, generateJSONFileContent } from '@plugin-web-cache-update/core';


class WebCacheUpdatePlugin { 
    options: PluginsOptions
    constructor(options: PluginsOptions) {
        this.options = options
    }
    apply(compiler: Compiler) {
        // 指定一个绑定到 webpack 自身的事件钩子
        compiler.hooks.emit.tap(PLUGIN_NAME, (compilation: Compilation) => {
            const version = getVersion(this.options);
            const jsonFileContent = generateJSONFileContent(version);
            // 处理 webpack 内部实例的特定数据
            const { assets } = compilation;
            // @ts-expect-error
            assets[`${JSON_FILE_NAME}.json`] = {
                source: () => jsonFileContent,
                size: () => jsonFileContent.length,
            }
        })
    }
}



export default WebCacheUpdatePlugin;
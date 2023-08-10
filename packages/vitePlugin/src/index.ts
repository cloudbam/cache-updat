/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-10 14:49:48
 * @FilePath: /cache-updat/packages/vitePlugin/src/index.ts
 * @Description: 
 */
import getVersion from "@plugin-web-cache-update/core"


import type { PluginOption } from "vite"
export default function viteWebCacheUpdatePlugin(): PluginOption { 
    return {
        name: 'vite:webCacheUpdate',  
        // pre 会较于 post 先执行
        // pre：在 Vite 核心插件之前调用该插件
        // 默认：在 Vite 核心插件之后调用该插件
        // post：在 Vite 构建插件之后调用该插件
        enforce: 'post', // post
        // 指明它们仅在 'build' 或 'serve' 模式时调用
        apply: 'build', // apply 亦可以是一个函数
        config() {
            getVersion("git_commit_hash")
            // 生产环境中修改 root 参数
            console.log('这里是config钩子');
        },

        configResolved() {
            console.log('这里是configResolved钩子');
        },

        configureServer() {
            console.log('这里是configureServer钩子');
        },

        transformIndexHtml() {
            console.log('这里是transformIndexHtml钩子');
        },

    }
}
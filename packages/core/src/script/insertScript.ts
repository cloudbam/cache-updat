/*
 * @Author: yinbing.liu
 * @Date: 2023-08-10 17:20:02
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-11 11:07:00
 * @FilePath: /cache-updat/packages/core/src/script/insertScript.ts
 * @Description: 
 */


// 插入监听轮询脚本 到index.html中

// **什么时候会检测更新(fetch version.json)**  ?

// 1. 首次加载页面。
// 2. 轮询 （default: 10 * 60 * 1000 ms）。
// 3. script 脚本资源加载失败 (404 ?)。
// 4. 标签页 refocus or revisible.
// 轮询监听方式 浏览器窗口的 visibilitychange、focus 事件辅助 等


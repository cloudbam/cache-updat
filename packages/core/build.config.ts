/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-15 09:42:39
 * @FilePath: /cache-updat/packages/core/build.config.ts
 * @Description: 
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  alias: {
    "@":  new URL('./src', import.meta.url).pathname
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-11 16:36:11
 * @FilePath: /cache-updat/packages/core/build.config.ts
 * @Description: 
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-10 14:21:18
 * @FilePath: /cache-updat/packages/vitePlugin/build.config.ts
 * @Description: 
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  // 在构建过程中排除特定的外部依赖
  externals:["vite"],
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
});
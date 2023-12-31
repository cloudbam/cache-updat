/*
 * @Author: yinbing.liu
 * @Date: 2022-08-13 21:07:01
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-14 16:45:08
 * @FilePath: /cache-updat/packages/webpackPlugin/build.config.ts
 * @Description: 
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  // 在构建过程中排除特定的外部依赖
  externals: ["webpack"],
  
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    
  },
});
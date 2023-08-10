/*
 * @Author: yinbing.liu
 * @Date: 2023-07-28 15:23:51
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-09 16:22:46
 * @FilePath: /cache-updat/packages/core/src/components/commitHash.ts
 * @Description: git commit hash for version
 */

import {execaCommandSync } from "execa";

/**
 * @description: Support getting the git commit hash of the latest commit
 * @return {*} The git commit hash of the current branch.
 */
const getGitCommitHash = ():string =>   {
  try {
    const res = execaCommandSync('git rev-parse --short HEAD');
    console.log(res.stdout);
    return res.stdout;
  } catch (error) {
    console.error("-------- [cache-update] Did Not get git repository! --------");
    throw error;
  }

}

export default getGitCommitHash

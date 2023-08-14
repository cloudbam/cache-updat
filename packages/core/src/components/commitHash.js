"use strict";
/*
 * @Author: yinbing.liu
 * @Date: 2023-07-28 15:23:51
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-09 16:22:46
 * @FilePath: /cache-updat/packages/core/src/components/commitHash.ts
 * @Description: git commit hash for version
 */
exports.__esModule = true;
var execa_1 = require("execa");
/**
 * @description: Support getting the git commit hash of the latest commit
 * @return {*} The git commit hash of the current branch.
 */
var getGitCommitHash = function () {
    try {
        var res = (0, execa_1.execaCommandSync)('git rev-parse --short HEAD');
        console.log(res.stdout);
        return res.stdout;
    }
    catch (error) {
        console.error("-------- [cache-update] Did Not get git repository! --------");
        throw error;
    }
};
exports["default"] = getGitCommitHash;

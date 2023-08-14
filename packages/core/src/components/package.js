"use strict";
/*
 * @Author: yinbing.liu
 * @Date: 2023-07-31 10:52:40
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-07-31 11:20:13
 * @FilePath: /cache-update/packages/core/src/components/package.ts
 * @Description:
 */
exports.__esModule = true;
var getPackageVersion = function () {
    return process.env.npm_package_version;
};
exports["default"] = getPackageVersion;

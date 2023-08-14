/*
 * @Author: yinbing.liu
 * @Date: 2023-08-10 17:13:02
 * @LastEditors: yinbing.liu
 * @LastEditTime: 2023-08-11 15:22:13
 * @FilePath: /cache-updat/packages/core/src/file/index.ts
 * @Description: 
 */
import { writeFileSync,existsSync } from 'fs';
// 1. 判断dist目录是否存在 存在文件 复制文件到dist中
// 2. 创建 version.json 
// 3. 写入文件内容

//将版本号写 version.json文件
const __writeFileSync = (fileName: string, dataString: string, ) => { 
    try {
        writeFileSync(`${fileName}.json`, dataString)
    } catch (e) {
        console.error("------create json error------");
        throw e;
    }
}
//将version.json 复制到 dist文件夹下 （覆盖已有）

const createVersionFile = (dataString:string) => { 
    //判断dist目录是否存在
    try { 
        if (existsSync("./dist")) {
            __writeFileSync('version', dataString)
            // 将创建的version.json 插入dist目录下
        } else { 
            console.error("-----dist not exists------")
        }
    } catch (e) {
        throw e;
    }
}

export default createVersionFile;
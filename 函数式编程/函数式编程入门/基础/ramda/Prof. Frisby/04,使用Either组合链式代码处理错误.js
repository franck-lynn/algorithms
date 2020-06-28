/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */

'use strict';

import {TryCatch} from "./TryCatch";
import fs from 'fs'

const getPort = _ => TryCatch(
    // 读取文件又放回 Either   
    _ => fs.readFileSync('示例config1.json', 'utf-8'))
    .chain(
        // 转成json
        c => {
            // console.log("1", c)
            return TryCatch(_ => JSON.parse(c))
        }
    ).fold(
        // 第1个参数是默认值
        _ => 8888, c => c.port
        // e => {
        //     console.log(e)
        //     return 8080
        // }, c => c.port
    )


const result = getPort()
console.log(result)













/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 * http://hai.li/2015/06/29/js-continuation-monad-derivation.html
 * https://segmentfault.com/a/1190000008850740
 */
'use strict';
import R from 'ramda'
import fs from 'fs'

var readFile = filename => {
    return new Promise(
        (resolve, reject) => { // resolve, reject 不能写反了
            fs.readFile(filename, 'utf-8', (err, data) => {
                if(err) return reject(err)
                return resolve(data)
            })
        }
    )
}
/*
console.log(
    readFile("promise读取文件.js")
)
*/

(async () => {
    // 异步读取文件
    var file = await readFile('promise读取文件.js')
    console.log(file)
})()

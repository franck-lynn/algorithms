/**
 * Created by franck.lynn on 2018/11/18.
 * franck_lynn@live.cn
 */
'use strict';
import fs from 'fs'
// 民间传说
import {task} from 'folktale/concurrency/task'

var readFile = filename => {
    return task(resolver => {
        fs.readFile(filename,
            'utf-8',
            (err, data) => {
                resolver.resolve(data)
            })
    })
}


readFile('异步读取文件.js').run().listen({
    onCancelled: () => { console.log('the task was cancelled') },
    onRejected: error => { console.log('something went wrong') },
    onResolved: value => { console.log(`The value is ${value}`) }
});
















/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-using-task-for-asynchronous-actions
 */

import {task} from 'folktale/concurrency/task'
import fs from 'fs'


const readFile = (filename, encode) => 
    task(resolver => 
        fs.readFile(filename, encode, (err, contents) => {
            err ? resolver.reject(err) : resolver.resolve(contents)
    }))

const writeFile = (filename, content) => 
    task(resolver => fs.writeFile(filename, content, 
        (err, success) => err ? resolver.reject(err): resolver.resolve(success))
    )

const app = () => readFile('示例config.json', 'utf-8')
    .map(contents => contents.replace(/8/g, 6))
    .chain(contents => writeFile("再写入示例config.json", contents))


app().run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: () => console.log("写入文件成功")
})














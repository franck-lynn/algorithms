/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-leapfrogging-types-with-traversable
 */

import fs from 'fs'
import {task, of} from 'folktale/concurrency/task'
import {List} from 'immutable-ext'

const readFile = (filename, encode) =>
    task(resolver =>
        fs.readFile(filename, encode, (err, contents) => {
            err ? resolver.reject(err) : resolver.resolve(contents)
        }))

// const files = ['示例config.json', '22,Leapfrogging types with Traversable.js']

// const res = files.map(fn => readFile(fn, 'utf-8'))

// console.log(res)

const files = List(['示例config.json', '22,Leapfrogging types with Traversable.js']);

const res = files.traverse(of, fn => readFile(fn, 'utf-8'))
    .run()
    .listen({
        onCancelled: () => '任务取消',
        onRejected: reason => 'task was rejected',
        onResolved: v => console.log(v)
    })












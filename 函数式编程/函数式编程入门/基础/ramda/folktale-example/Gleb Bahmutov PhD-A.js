/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 */
'use strict';

import {task} from 'folktale/concurrency/task'

function getTaskA() {
    console.log("1, return new task")
    return task(
        resolver => {
            setTimeout(
                _ => {
                    console.log('2, 任务完成');
                    resolver.resolve("3, x")
                }, 100
            )
        }
    )
}
var taskA = getTaskA()

function getTaskC() {
    console.log("4, return new task")
    return task(
        resolver => {
            setTimeout(
                _ => {
                    console.log('5, 任务完成');
                    resolver.resolve("6, x")
                }, 100
            )
        }
    )
}


/*
function getPromise() {
    console.log("4, return new task")
    return new Promise(
        resolve => {
            setTimeout(
                _ => {
                    console.log('5, 任务完成');
                    resolve("6, x")
                }, 100
            )
        }
    )
}
var taskB = getPromise()
console.log("调用run()方法时,task才执行,与promise不同")
taskA.run()
*/

// 这种延时执行可以在执行之前进行组合

var taskC = getTaskC()
// 链式调用是一个函数
var combineTask = taskA.chain(_ => taskC)


combineTask.run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: value => console.log("任务正常执行", value)
})






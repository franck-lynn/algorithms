/**
 * Created by franck.lynn on 2018/11/18.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/
 */
'use strict';
import {task, of, fromPromised} from 'folktale/concurrency/task'

// 延迟一定时间执行任务
const delay =ms => {
    return task(resolver => {
        const timerId = setTimeout(() => {
            resolver.resolve()
        }, ms)
        resolver.cleanup(() => {
            clearTimeout(timerId)
        })
        resolver.onCancelled(_ => {
            console.log("does nothing")
        })
    })
}

console.log(
    delay(100).run().promise()
)

const hello = task(resolver => resolver.resolve('hello'));
const helloExecution = hello.run();
// console.log(
//     helloExecution.listen({
//         onCancelled: () => '任务取消',
//         onRejected: reason => 'task was rejected',
//         onResolved: value => console.log("任务正常执行", value)
//     })
// )
helloExecution.listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: value => console.log("任务正常执行", value)
})

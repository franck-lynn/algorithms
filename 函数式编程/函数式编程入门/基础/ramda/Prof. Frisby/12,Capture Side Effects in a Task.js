/**
 * Created by franck.lynn on 2018/12/2.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-capturing-side-effects-in-a-task
 */

import {task, of} from 'folktale/concurrency/task'

const t = task(resolver => {
    resolver.resolve(1)
}).map(
    x => {
        console.log(x);
        return x + 1
    }
).chain(
    x => of(x + 5)
)


t.run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: value => console.log("任务正常执行: ", value)
})


const launchMissiles = _ =>
    task(resolver => {
        console.log("launch missiles");
        resolver.resolve("missile")
    })

launchMissiles().map(x => x + "!").run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: value => console.log("任务正常执行: ", value)
})


// onCancelled: () => '任务取消',
// onRejected: reason => 'task was rejected',
// onResolved: value => console.log("任务正常执行", value)














/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-applicatives-for-concurrent-actions
 */

import {task, of} from 'folktale/concurrency/task'

const Db = ({
    find: id => 
        task(
            resolver => setTimeout(_ =>
                resolver.resolve({id: id, title: `Project ${id}`}), 100
            )
        )
})

const reportHeader = (p1, p2) => 
    `Report: ${p1.title} compare to ${p2.title}`


of(p1 => p2 => reportHeader(p1, p2))
    .ap(Db.find(20))
    .ap(Db.find(8))
    .run()
    .listen({
        onCancelled: () => '任务取消',
        onRejected: reason => 'task was rejected',
        onResolved: v => console.log("成功", v)
    })

// Db.find(20).chain(p1 => 
//     Db.find(8).map(p2 => 
//         reportHeader(p1, p2)))













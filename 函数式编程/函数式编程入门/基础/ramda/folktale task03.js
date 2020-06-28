/**
 * Created by franck.lynn on 2018/11/24.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/api/v2.1.0/en/folktale.concurrency.task.html
 */
'use strict';
/*
task
异步操作的数据结构,支持安全取消和自动处理
 */
import {task, of} from 'folktale/concurrency/task'

const concat = (a, b) => task(
    // 任务成功时执行 a + b
    resolver => resolver.resolve(a + b)
)
const taskA = of('hello')
const taskB = of('world')

const theTask = taskA.chain(x => taskB.chain(y => concat(x, y)));

(async _ => {
    const result = await theTask.run().promise();
    console.log(result)
}
)()







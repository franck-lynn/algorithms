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
import {task} from 'folktale/concurrency/task'

const delay = ms => task(
    resolver => {
        const timerId = setTimeout(
            _ => resolver.resolve(ms), ms
        );
        resolver.cleanup(_ => {
            clearTimeout(timerId)
        })
    }
);
    
(async () => {
    console.log(
        await delay(100).or(delay(2000)).run().promise()
    )
    
})()
/*
Why use Task?
Because JavaScript implementations are usually single-threaded, 
and there's no coroutine support, concurrent applications tend 
to use either callbacks (continuation-passing style) or Promise.
Callbacks aren't very composable. In order to combine callbacks, 
a user has to write code specific to each place that will use them. 
While you can make code written using callbacks maintainable, 
their low-level nature forces you to deal with a fair amount of 
detail that could be resolved by a library, including optimal 
concurrency:
 */
// fn 是函数, done是回调函数
const map = (list, fn, done) => {
    let result = [];
    let pending = list.length;
    let resolved = false;

    list.forEach(
        // 处理list数组的每一个元素
        (item, index) => {
            // 用函数fn
            fn(item, (error, value) => {
                // 如果resolved为真.
                if (!resolved) {
                    if (error) {
                        resolved = true
                        done(error, null)
                    } else {
                        pending -= 1
                        result[index] = value;
                        if (pending === 0) {
                            done(null, result)
                        }
                    }
                }

            })
        }
    )
}

map(
    [1, 2], 
    (x, c) => c(null, x + 1), 
    (e, v) => {
        console.log("1-->", e);
        console.log("2-->", v)
    }
)
map(
    [1, 2],
    (x, c) => c(x),
    (e, v) => {
        console.log("3-->", e);
        console.log("4-->", v)
    }
)












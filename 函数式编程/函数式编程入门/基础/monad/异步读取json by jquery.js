/**
 * Created by franck.lynn on 2018/11/18.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/
 */
'use strict';

import R from 'ramda'
import {task, of, fromPromised } from 'folktale/concurrency/task'
import axios from 'axios'

// https://jsonplaceholder.typicode.com/todos

const getJSON = (url, params) => {
    // 返回一个异步任务,这个任务是通过url获取数据
    return task(resolver => {
        axios.get(url, {params: {id: 97}})
            .then(data => resolver.resolve(data))
    })
}

/*
console.log(
    getJSON('https://jsonplaceholder.typicode.com/todos')
        .run().listen(
        {
            onResolved: value => { console.log(`The value is ${value}`) }
        }
    )
)
*/

getJSON('https://jsonplaceholder.typicode.com/todos')
    .run().listen(
    {
        // onResolved: value => { console.log(`The value is ${value}`) }
        onResolved: value => { console.log(value) }
    }
)








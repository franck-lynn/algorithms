/**
 * Created by franck.lynn on 2018/11/25.
 * franck_lynn@live.cn
 * https://github.com/arecvlohe/folktale-example/blob/master/index.js
 * https://github.com/cdelaorden/fp-exercises/blob/master/replace_in_file.js
 */
'use strict';

import axios from 'axios'
import {task, of} from 'folktale/concurrency/task'


const URL = `https://jsonplaceholder.typicode.com/todos`

function getData() {
    return task(resolver => {
        axios.get(URL).then(response => resolver.resolve(response))
    })
}

import R from "ramda"

const getTodos = () => getData().map(R.prop('data'))


getTodos().run().promise().then(
    x => console.log(x)
)

// EXECUTE

/*
getData().run().listen({
        onCancelled: () => "任务取消",
        onRejected: reason => "任务失败原因" + reason,
        onResolved: value => console.log(`任务完成`, value)
    }
)
*/







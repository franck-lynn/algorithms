/**
 * Created by franck.lynn on 2018/11/24.
 * franck_lynn@live.cn
 */
'use strict';

import futureToPromise from 'folktale/conversions/future-to-promise'
import Future from 'folktale/concurrency/future'

(async () => {
    // 未来有个值装在容器里.转换成promise.
    console.log((await futureToPromise(Future.of(1))) === 1)
    try{
        await futureToPromise(Future.rejected(1));
        throw '不会发生';
    }catch(e){
        console.log(e)
    }
})()

const maybeToResult = require('folktale/conversions/maybe-to-result');
const { Error, Ok } = require('folktale/result');
const { Nothing, Just } = require('folktale/maybe');

console.log(
    maybeToResult(Nothing(), 2)
)
console.log(
    maybeToResult(Just(1), 2)
)















/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 * https://glebbahmutov.com/blog/difference-between-promise-and-task/
 * https://github.com/diegovdc/coral-mongo-tasks/blob/master/mongo-tasks.js
 */
'use strict';

import {task} from 'folktale/concurrency/task'
import R from 'ramda'

import mongo from 'mongodb'
const mongoClient = mongo.MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'test'
const options = { useNewUrlParser: true }


// 连接数据的任务task,延迟执行.
const connectDb = task(
    resolver => {
        // 连接mongodb,返回一个客户端
        mongoClient.connect(url, options).then(
            // db => resolver.resolve(db)
            client => 
                // 客户端连接test数据库,返回这个数据库
                resolver.resolve(client.db(dbName))
        )
    }
)
// 这步测试结果证明:
// chain()方法里是上步返回的结果,即connectDb返回的结果
// const theTask = connectDb.chain(db => console.log(db))
// theTask.run();

// 这步返回的是一个游标,输入2个参数,进行了科里化
const findIn = R.curry(
    (db, collection) => task(
        resolver => resolver.resolve(db.collection(collection).find())
    )
)

// const theTask = connectDb.chain(db => findIn(db)('users'))
// theTask.run().listen({
//     onCancelled: () => '任务取消',
//     onRejected: reason => 'task was rejected',
//     onResolved: value => console.log("任务正常执行", value)
// })

const cursorToArr = cursor => task(
    resolver => resolver.resolve(cursor.toArray())
)

const theTask = connectDb.chain(
    db => findIn(db)('users')
        .chain(cursor => cursorToArr(cursor))
)
theTask.run().promise().then(value => console.log(value))














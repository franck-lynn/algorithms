/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 */
'use strict';


const R = require('ramda')

const { readFile } = require('./IO')

const Task = require('folktale/concurrency/task')

// change [Task Error String] to Task 
// [Error String] using Traversable
const files = ['./IO.js', './traverse.js']

const readManyFiles = R.traverse(
    Task.of, 
    f => readFile(f, 'utf-8'), 
    files
)

readManyFiles
    .run()
    .promise()
    .then(console.log)
    .catch(err => console.error(`Failed, file not found: ${err.path}`))











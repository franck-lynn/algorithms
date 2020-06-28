/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-maintaining-structure-whilst-asyncing
 */

import fs from 'fs'
import {task, of} from 'folktale/concurrency/task'
import {List, Map} from 'immutable-ext'

const httpGet = (path, params) => 
    of(`${path} : result`)

// Map({home: '/', about: 'about-us', blog: '/blog'})
//     .traverse(of, route => httpGet(route, {}))
//     .run()
//     .listen({
//         onCancelled: () => '任务取消',
//         onRejected: reason => 'task was rejected',
//         onResolved: v => console.log(v)
//     })

Map({home: ['/', '/home'], about: ['about-us']})
    .traverse(of, routes => List(routes).traverse(of, route => httpGet(route, {})))
    .run()
    .listen({
        onCancelled: () => '任务取消',
        onRejected: reason => 'task was rejected',
        onResolved: v => console.log(v)
    })













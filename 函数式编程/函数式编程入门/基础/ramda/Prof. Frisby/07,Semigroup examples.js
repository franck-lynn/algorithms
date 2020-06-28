/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 */
'use strict';
import {Map} from 'immutable'
const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    inspect: _ => `All(${x})`
})

const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    inspect: _ => `Sum(${x})`
})

const First = x => ({
    x,
    concat: _ => First(x),
    inspect: _ => `First(${x})`
})

const acct1 = Map({name: First('Nico'), isPaid: All(true), points: Sum(10), friends: ['FrankLin']})
const acct2 = Map({name: First('Nico'), isPaid: All(false), points: Sum(2), friends: ['Gatsby']})

// 返回一个新的集合,这个新的集合是每个属性的合并
const res = acct1.concat(acct2)
console.log(res.toJS())












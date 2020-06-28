/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-you-ve-been-using-functors
 */
import {task} from 'folktale/concurrency/task'
import {List, Map} from 'immutable-ext'



const Box = x => ({
    x,
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x})`
})

const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: _ => `Right(${x})`
})

const Left = x => ({
    chain: f => f(x),
    map: _ => Left(x),
    fold: (f, g) => f(x),
    inspect: _ => `Left(${x})`
})

const fromNullable = x => x !== undefined ? Right(x) : Left(null)

const res1 = Box('squirrels')
    .map(s => s.substr(5))
    .map(s => s.toUpperCase())

console.log(res1)

const res2 = Box('squirrels')
    .map(s => s.substr(5).toUpperCase())

console.log(res2)

const res3 = Left('squirrels')
    .map(s => s.substr(5))
    .map(s => s.toUpperCase())

console.log(res3)

const res4 = Left('squirrels')
    .map(s => s.substr(5).toUpperCase())

console.log(res4)

console.log("*************************************")

const id = x => x

const res5 = List.of('Crayons').map(id)
const res6 = id(List.of('Crayons'))
console.log(res5, res6)




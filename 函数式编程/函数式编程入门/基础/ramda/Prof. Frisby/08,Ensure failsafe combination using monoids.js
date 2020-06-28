/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-failsafe-combination-using-monoids
 */
'use strict';
// In this video we define monoids and promote our semigroups
const Sum = x => ({
    x,
    // 对象的值{x: y}进行连接,这里的x是值键,y是值
    // 也即Sum对象里的x键对应的属性y
    concat: ({x: y}) => Sum(x + y),
    inspect: _ => `Sum(${x})`
})
Sum.empty = _ => Sum(0)


const sum = xs => xs.reduce((acc, x) => acc+ x, 0)

const resSum1 = Sum.empty()
    .concat(Sum(1).concat(Sum(2)))
console.log(resSum1.inspect())

console.log(sum([1, 2]))



const All = x => ({
    x,
    // 有x键,并且键有属性
    concat: ({x: y}) => All(x && y),
    inspect: _ => `All(${x})`
})

All.empty = _ => All(true)

const all = xs => xs.reduce((acc, x) => acc && x, true)

const resAll1 = All(true).concat(All(false)).concat(All.empty())
console.log(resAll1.inspect())
console.log(
    all([true, false])
)
// console.log(
//     all() // 如果为空就会崩溃
// )


const First = x => ({
    x,
    concat: _ => First(x),
    inspect: _ => `First(${x})`
})

const first = xs => xs.reduce((acc, x) => acc)

const resFirst1 =First() // 如果是空不会崩溃
    .concat(First("ice cream"))
    .concat(First('meta programming'))
console.log(resFirst1.inspect())

console.log(first(["blah", "ice cream", 'meta programming']))
// console.log(first([])) // 如果是空数组就会崩溃
 







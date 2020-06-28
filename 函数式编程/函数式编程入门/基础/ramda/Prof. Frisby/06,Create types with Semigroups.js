/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 */
'use strict';
// 什么是群:
// （1）封闭性（Closure）：对于任意a，b∈G，有a*b∈G
// （2）结合律（Associativity）：对于任意a，b，c∈G，有（a*b）*c=a*（b*c）
// （3）幺元 （Identity）：存在幺元e，使得对于任意a∈G，e*a=a*e=a
// （4）逆元：对于任意a∈G，存在逆元a^-1，使得a^-1*a=a*a^-1=e
// 如果仅满足封闭性和结合律，则称G是一个半群（Semigroup）
// 半群
// a 就是半群
// const res = 'a'.concat('b').concat('c')
// const res = [1, 2].concat([3, 4]).concat([5, 6])
// (1+1) + 1 = 1+ (1+1)

const Sum = x => ({
    x,
    // o - other
    // concat: o => Sum(x + o),
    concat: ({x: y}) => Sum(x + y),
    inspect: _ => `Sum(${x})`
})
// const res = Sum(1).concat(Sum(2))

const All = x => ({
    x,
    // o - other
    concat: ({x: y}) => All(x && y),
    inspect: _ => `All(${x})`
})

// const res = All(true).concat(All(false))

const First = x => ({
    x,
    // 不管后面输入多少参数, _ 都将其舍弃掉了
    concat: _ => First(x),
    inspect: _ => `First(${x})`
})

const res = First('blah')
    .concat(First('ice cream'))
    .concat(First('meta programming'))

console.log(res.inspect())

















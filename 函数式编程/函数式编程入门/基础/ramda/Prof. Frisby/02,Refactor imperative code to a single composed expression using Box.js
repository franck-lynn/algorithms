/**
 * Created by franck.lynn on 2018/11/27.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-refactoring-imperative-code-to-a-single-composed-expression-using-box
 */
'use strict';
// 使用盒子重构命令式代码为单个组合表达式
import {Box} from './Box'
/*
const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x}`
})
*/

// const moneyToFloat = str =>
//     // 把美元符号替换为'', 并转成浮点数
//     parseFloat(str.replace(/\$/g, ''))

const moneyToFloat = str =>
    Box(str)
        .map(s => s.replace(/\$/g, ''))
        // .fold(r => parseFloat(r))
        .map(r => parseFloat(r))

// const percentToFloat = str => {
//     // 把美元符号替换为'', 并转成浮点数
//     const replaced = str.replace(/\$/g, '')
//     // 把字符串转成数字
//     const number = parseFloat(replaced)
//     // 把百分数转成浮点数
//     return number * 0.01
// }

const percentToFloat = str => 
    // 把字符串前面的 $ 用''代替,为转换成浮点数字做准备
    Box(str.replace(/\$/g, ''))
        // 转换成浮点数
        .map(replaced => parseFloat(replaced))
        // .fold(number => number * 0.01),百分数转成小数,还是放在盒子里面
        .map(number => number * 0.01)

// const applyDisCount = (price, discount) => {
//     const cost = moneyToFloat(price) // 5.00
//     const savings = percentToFloat(discount) // 0.2
//     return cost - cost * savings
// }

// 设计这样一个函数applyDisCount, 输入的是两个字符串类型数据
const applyDisCount = (price, discount) =>
    moneyToFloat(price) // 转换成浮点数,在盒子里面装着呢
        // 调用盒子的fold方法, 用里面的函数处理
        .fold(cost => percentToFloat(discount) 
            // cost是第1个值,discount是第2个值,
            // 第2个值转换成小数后-又-放回了盒子,
        // 紧接着调用盒子的fold()函数处理数据,处理好的数据返回给 applyDisCount
            .fold(savings => cost - cost * savings))

const result = applyDisCount('$5.00', '20%')
console.log(result)

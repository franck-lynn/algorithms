/**
 * Created by franck.lynn on 2018/11/27.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-linear-data-flow-with-container-style-types-box
 */
'use strict';

// const nextCharForNumberString = str => {
//     const trimmed = str.trim();
//     const number = parseInt(trimmed, 10)
//     const nextNumber = number + 1
//     return String.fromCharCode(nextNumber)
// }

// const nextCharForNumberString = str => 
//     String.fromCharCode(parseInt(str.trim(), 10)+1)


// const nextCharForNumberString = str => 
//     [str]
//         .map(s => s.trim())
//         .map(s => parseInt(s, 10))
//         .map(i => i + 1)
//         .map(i => String.fromCharCode(i))

// 用容器产生一个线性数据流
// 把x放进盒子里面,这个盒子是一个对象
const Box = x => ({ 
    // map()是执行函数f(x),把结果再放进盒子,
    // 这样就可以进行连续调用
    map: f => Box(f(x)),
    // fold()是执行一个函数f(x),返回这个结果.
    // fold可以取出盒子里的值,是数据的出口
    fold: f => f(x),
    // 数据的显示样式,也是一个数据出口
    inspect: _ => `Box(${x}`
})

const nextCharForNumberString = str =>
    Box(str) // str放进盒子
    // s是盒子里装的数据, 执行这个函数s => s.trim(),得到的数据再装进盒子
        .map(s => s.trim()) // s是盒子里的数据
        .map(r => Number(r)) // 转换成数字
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
        // 盒子里的数据进行小写转换,执行这个函数,将数据返回
        .fold(c => c.toLowerCase())


const result = nextCharForNumberString(' 64')
console.log(result)
















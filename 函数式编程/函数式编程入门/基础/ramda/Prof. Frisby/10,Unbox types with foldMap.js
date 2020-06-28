/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 * 
 */
'use strict';

import {Map, List} from "immutable-ext"

const Right = x => ({
    // 调用一个函数f,参数用Right里的包装值
    chain: f => f(x),
    // 把一个函数装进Right右边,函数参数传进来的值
    map: f => Right(f(x)),
    // 执行 fold是执行的右边函数
    fold: (f, g) => g(x),
    inspect: _ => `Right(${x})`
})
const Left = x => ({
    // 调用一个函数f,参数用Left里的包装值
    chain: f => f(x),
    // 把一个值装进Left
    map: _ => Left(x),
    fold: (f, g) => f(x),
    inspect: _ => `Left(${x})`
})

// 这个是一个 容器包装
const Sum = x => ({
    x, // 定义一个属性 x, x: x, 属性名称为x,属性值为 x
    // 对一个对象的x属性值 y与这个x,非对象的x属性值进行相加
    concat: ({x: y}) => Sum(x + y), 
    fold: f => f(x),
    inspect: _ => `Sum(${x})` // 显示样子
})
Sum.empty = _ => Sum(0)

const Box = x => ({
    x,
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x})`
})


// console.log(Box(3).fold(x => x));
// console.log(
//     Right(3).fold(e => e, x => x)
// );

// const res = [Sum(1), Sum(2), Sum(3)]
//     .reduce((acc, x) => acc.concat(x), Sum.empty())

//
// const res = List.of(Sum(1), Sum(2), Sum(3))
//     .fold(Sum.empty())


// const res = Map({brian: Sum(3), sara: Sum(5)})
//     .fold(Sum.empty())

// const res = Map({brian: 3, sara: 5})
//     .map(Sum)
//     .fold(Sum.empty())

const res = List.of(1, 2, 3)
    .foldMap(Sum, Sum.empty())


console.log(res.inspect(x => x))















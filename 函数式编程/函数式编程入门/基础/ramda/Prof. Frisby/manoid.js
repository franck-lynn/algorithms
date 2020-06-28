/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';

const Sum = x => ({
    // 相当于 x(属性名称为'x', 
    // 有一个名为x的属性): x.
    // 后面一个x是值  
    x, // 两个容器数据需要处理的时候才用到这个属性
    // 另外一个有x属性的对象,值是y.
    // 这2个值相加.
    concat: ({x: y}) => Sum(x + y),
    inspect: _ => `Sum(${x})`,
    fold: f => f(x)
})
Sum.empty = _ => Sum(0)

const All = x => ({
    x,
    // o - other
    // concat: o => Sum(x + o),
    concat: ({x: y}) => All(x && y),
    inspect: _ => `All(${x})`,
    fold: f => f(x)
})
All.empty = _ => All(true)

const First = x => ({
    x,
    // 不管后面输入多少参数, _ 都将其舍弃掉了
    concat: _ => First(x),
    inspect: _ => `First(${x})`
})

export {Sum, All, First}











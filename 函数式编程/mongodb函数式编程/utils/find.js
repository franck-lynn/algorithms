/**
 * Created by franck.lynn on 2018/11/14.
 * franck_lynn@live.cn
 */
'use strict';

const Post = require('../model/post')
// const to = require('./to');

// to 函数是传进一个promise, 
// 注意: 这里的promise不能用{}包裹, 用{}包裹的话就要用
// return返回这个函数
/*
const to = function(promise){
    return promise.then(...).catch(...)
}
 */
const to = promise =>
    promise.then(data => {
        // console.log("data值:", [null, data])
        return [null, data]
    }).catch(err => [err])

// 测试{}包裹要用 return ,去掉默认就是 return
// const to = promise => {
//     return promise.then(data => {
//         // console.log("data值:", [null, data])
//         return [null, data]
//     }).catch(err => [err])
// } 

// 查询数据库函数
/*
// find()函数输入一个 key, 返回一个函数,key保留在这个函数
function find(key){
    return function(value){
        to(
            // 这里是一个promise
            Post.findOne({
                [key]: value
            })
        );
    }
}
// 进一步调用这个返回函数. key值通过闭包保存
function(value){
    to(
        // 这里是一个promise
        Post.findOne({
            [key]: value
        })
    )
}
// 再次调用返回函数的返回函数时, 传入的时value值
// 执行 to 函数, 相当于展开 promise,从数据库查找
// 返回 [null, data] 查找的数据.
// 查找过程是这样的:
// 1, 通过请求参数的 params.soID 获取到的值实际上是 {soID: 503093}, 
//    因为这是find()函数最后一个参数.
// 2, 而find()函数第1次调用传的是 soID属性的名称:即 key = soID
// 3, 参数型式: {[key]: value} 中的 key被soID代替, value被 503093代替.
//    这里并没有用到解构.查询数据库的参数形如: {'soID': 503093}
// 4, http://es6.ruanyifeng.com/#docs/object#属性名表达式
//    !!!!!属性名 加方括号 是 使用表达式获取属性名,属性名是表达式!!!!!
 */
const find = key => value => to(Post.findOne({ [key]: value }));

/*
const find = function (key) {
    // console.log('获取的key---> ', key) //  soID
    return function (value) {
        // console.log("获取的value---> ", value)  // 503093
        // console.log("打印的key值", {[key]: value})
        to(Post.findOne({[key]: value}))
    }
}
*/

const findSoID = find('soID');

module.exports = findSoID;














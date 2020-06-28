/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */

'use strict';

// import {Functor} from "./错误处理的瓶子";

class Monad /* extends Functor*/ {
    constructor(f){
        this.$value = f
    }
    // 返回的是一个单孢函子,这个函子的$value是一个函数
    // 这个函数负责读取一个文件
    static of(f){
        return new Monad(f)
    }
    // 这里需要重新实现map反复,返回单孢函子的调用
    // 这个f是打印文件的函数
    map(f){
        // return Monad.of(f(this.$value))
        return Monad.of(f(this.$value))
    }
    join(){
        return this.$value;
    }
    /*
    Monad 函子的作用是，总是返回一个单层的函子。它有一个flatMap方法，与map方法作用相同，
    唯一的区别是如果生成了一个嵌套函子，它会取出后者内部的值，保证返回的永远是一个单层的
    容器，不会出现嵌套的情况。
     */
    flatMap(f){
        // 调用map方法,用f函数处理了数据,放回函子.
        // join()拿回
        return this.map(f).join();
    }
}
// 使用单孢函子
import fs from 'fs'

var readFile = filename => {
    /*
    1, 返回的是一个单孢函子,应该也可以调用of方法,传进去的是一个函数,
       这个函数读取一个文件,Monad构造函数里的 
       this.$value = ()=>{...fs.readFile...}, 这个是瓶子里的数据
    2, 接下来通过瓶子调用flatMap(), 传进去的是print函数.
    3, 这个方法又调用map()方法.map方法是用这个f处理瓶子里的数据.
       处理完成后又放回这个瓶子
     */
    return new Monad((() => {
         return fs.readFileSync(filename, 'utf-8');
     })());
    // monad的构造里面传进的是这个函数 ()=>{...fs.readFile...}
    // 返回的是整个瓶子,而of()方法也是这个瓶子,
    /* 
    return Monad.of(
        () => fs.readFileSync(filename, 'utf=8')
    )
    */
}
var print = x => {
    return new Monad((() => {
        console.log(x)
        return x
    })());
}
// 返回的是一个单孢函子
const monad = readFile('./monad函子(或称压平).js')
// console.log(monad)
/*
单孢函子调用flatMap()方法,把函数传进去.this.map(print)
就是用print函数去处理单孢函子的数据,返回这个单孢函子,再调用
单孢函子的join方法获取数据
 */
// console.log(monad.flatMap(print))
monad.flatMap(print)







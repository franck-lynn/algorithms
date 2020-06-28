/**
 * Created by franck.lynn on 2018/11/17.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'

class Maybe {
    constructor(x){
        this.$value = x
    }
    static of(x){
        return new Maybe(x)
    }
    isNothing(){
        return this.$value===null || 
            this.$value ==='undefined'
    }
    map(f) {
        return this.isNothing() 
            ? Maybe.of(null) 
            : Maybe.of(f(this.$value))
    }
}

// 使用这个函子
console.log(
    // 如果瓶子里装的是null, 瓶子调用map时
    // 返回的还是空瓶子,并不会去调用f即R.match函数去处理数据
    Maybe.of(null)
        .map(R.match(/a/ig))
)

console.log(
    // 如果瓶子里装的是null, 瓶子调用map时
    // 调用f即R.match函数去处理数据,返回的是处理好的数据,
    // 又放回瓶子, 返回的还是一个瓶子,但里面装的数据变了
    Maybe.of("aaa")
        .map(R.match(/a/ig))
)

console.log(
    // 如果瓶子里装的是null, 瓶子调用map时
    // 调用f即R.match函数去处理数据,返回的是处理好的数据,又放回瓶子
    Maybe.of("aaa")
        .map(R.match(/a/ig))
        // 再次调用map方法,再传进去一个函数去处理这个数组
        // 把数组转成字符串
        .map(R.join("|"))
)













/**
 * Created by franck.lynn on 2018/11/20.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'
// 一个函子是数值,一个函子是函数
class Container{
    constructor(fn){
        this.$value = fn
    }
    static of(fn){
        return new Container(fn)
    }
    map(f){
        
    }
    ap(F){
        return Container.of(this.$value(F.$value))
    }
}

const addTwo = x => x + 2

// 函子A的内部是值2
// const A = Container.of(3)
// 函子B的内部是函数 addTwo
// const B = Container.of(addTwo)

console.log(
    // 调用ap方法,this.$value = addTwo, F.$value = 3
    Container.of(addTwo).ap(Container.of(3))
)
















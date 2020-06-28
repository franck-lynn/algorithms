/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */

'use strict';

import {Functor} from "./错误处理的瓶子";

const addTwo = x => x + 2;

// const A = Functor.of(2)
// console.log(A.$value)
// const B = Functor.of(addTwo)
// console.log(B)

// 这是一个Ap函子
class Ap extends Functor{
    // F是另一个函子,也就是另外一个瓶子,而不是一个函数
    // of()一个函数时,Ap的构造函数值是一个函数
    // 由于返回的是一个函数,所以要覆写of方法.不然,
    // 调用父类的of()方法,是函子F包裹的函数,子类调用不到
    static of(f){
        return new Ap(f);
    }
    ap(F){
        /*
        1, F.$value是F瓶子里的数据
        2, of()一个函数时,Ap的构造函数值是一个函数
           也就是说, this.$value值是一个函数
        3, this.$value()是执行这个函数,F.$value是
           F瓶子里的值
        */
        return Ap.of(this.$value(F.$value))
    }
}


console.log(
    Ap.of(addTwo).ap(Functor.of(2))
)










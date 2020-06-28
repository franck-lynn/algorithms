/**
 * Created by franck.lynn on 2018/11/17.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'

class Functor {
    constructor(fn){
        // console.log(fn.toString())
        this.$value = fn
    }
    static of(fn){
        return new Functor(fn)
    }
    map(f){
        return Functor.of(
            // 这里需要组合构造函数传进来的函数和f传进来的函数
            // pipe组合也是可以的
            // R.pipe(f, this.$value)
            // 需要组合成一个函数,这样写是求值,所以不行
            // !!!f(this.$value) 
            // R.compose(f, this.$value)
            // 先算f即x^2这个函数
            R.compose(this.$value, f) 
        )
    }
}

const fn = x => 2 * x + 1
// 这定义个一个函子,把函数fn装进了瓶子.
const functor01 = Functor.of(fn)
// 查看这个瓶子
console.log(functor01)
// 而 y = 2 x^2
// 现在要调用 y = 2 x^2 这个函数,用这个函数与
// 函子里的函数进行组合, 返回一个新函数,这个新
// 函数还是放在瓶子里
const result = functor01.map(x => x * x)
/*                           ^
                             |
                             this.$value : x = 2 * x + 1
 */

console.log(result.$value(3))










/**
 * Created by franck.lynn on 2018/11/20.
 * franck_lynn@live.cn
 */
'use strict';
// 函子之中再包含另外一个函子
class Functor {
    constructor(F){
        this.$value = F
    }
    static of(F){
        return new Functor(F)
    }
    join(){
        return this.$value
    }
    map(f){
        // map生成一个嵌套函子,
        // 假设 this.$value是一个函子,
        console.log(Functor.of(this.$value))
        // map()就会生成一个嵌套函子
        return Functor.of(this.$value)
    }
    
    flatMap(f){
        // this.map(f)应该返回的是这个函子,才可以调用join()方法
        return this.map(f).join()
    }
}

var getF = F => F

// var A = Functor.of(Functor.of(Functor.of(Functor.of(2))))
var A = Functor.of(Functor.of(2))
console.log(A.flatMap(getF).join())
















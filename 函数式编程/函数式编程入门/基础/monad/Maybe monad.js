/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */
'use strict';

class Just {
    constructor(x){
        this.$value = x;
    }
    static of(x){
        return new Just(x)
    }
    map(f){
        return f(this.$value)
    }
}

var Nothing = {
    bind: function () {
        console.log("bind方法")
        return this
    }
}

// var result = Just.of(5)
//     .map(v => Just.of(6)
//         .map(v2 => v + v2))


var result = Just.of(5).map(
    function (v1) {
        return Nothing.bind(
            function (v2) {
                console.log('这里不执行')
                return new Just(v2 + v1)
            }
        )
    }
)
console.log(result)
















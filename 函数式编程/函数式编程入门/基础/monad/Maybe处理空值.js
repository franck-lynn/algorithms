/**
 * Created by franck.lynn on 2018/11/18.
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
        return this.$value === null || 
            this.$value === undefined
    }
    map(f){
        return this.isNothing() 
            ? Maybe.of(null) 
            : Maybe.of(f(this.$value))
    }
}

var map = R.curry((f, F) => F.map(f))

// 返回数组的第1个元素
var safeHead = xs => Maybe.of(xs[0])
// 获取街道的名称
var streetName = R.compose(
    map(R.prop('street')),
    safeHead,
    R.prop('addresses')
)

console.log(streetName({addresses: []}))
console.log(
    streetName({
        addresses: 
            [{street: "Shady Ln.",
                number: 4201}]
    })
);














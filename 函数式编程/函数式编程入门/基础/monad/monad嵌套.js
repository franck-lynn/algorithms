/**
 * Created by franck.lynn on 2018/11/20.
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
    map(f){
        return Maybe.of(f(this.$value))
    }
}

var map = R.curry(
    (f, F) => F.map(f)
)

var safeProp = R.curry(
    // 把 x 作为obj的属性, 再用Maybe装起来
    (x, obj) => new Maybe(obj[x])
)
// 把x先传进去,保存起来,返回一个函数
var safeHead = safeProp(0)

// 组合成函数
var firstAddressStreet = R.compose(
    // 外面的map是科里化需要传入一个参数F,另一个参数是打印时的调用
    map(
        // 3,获取street属性,再用Maybe装起来,里面的也是科里化,返回的是一个Maybe
        map(safeProp('street'))
    ),
    // 2,safeHead是获取数组的第1个,调用map,就是调用Maybe的map方法,
    // 把这个值用Maybe装起来
    map(safeHead),
    // 1,传入一个 addresses, 把 addresses 作为obj ={addresses...}的
    // 一个属性,先获取到,这个属性是Maybe装的
    safeProp('addresses')
)

console.log(
    firstAddressStreet(
        {addresses: 
                [{street: 
                    {name: '振华路', number: 200},
                    postcode: 310030}
                ]
        }
    )
)
















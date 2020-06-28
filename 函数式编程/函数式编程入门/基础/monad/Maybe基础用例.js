/**
 * Created by franck.lynn on 2018/11/17.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'

// Maybe函子定义
class Maybe {
    constructor(x){ this.$value = x }
    static of(x){ return new Maybe(x) }
    map(f){ 
        // return 不要忘记了!!!
        return f(this.$value) 
    }
}
// 使用函子包装一个数组的第1项
var safeHead = xs => Maybe.of(xs[0])

var map = R.curry(
    (f, F) => F.map(f)
    // function (f, F) {
    //     console.log(F)
    //     console.log(
    //         F.map(R.prop('street'))
    //     )
    //     return F.map(f)
    // }
)

var streetName = R.compose(
    // 3, 数据流到这里实际上已经用瓶子装了
    // .所以得用瓶子里得方法 
    // Maybe { '$value': 
    //          { street: 'Shady Ln', 
    //            number: 4281 } 
    //       }
    //    调用R.prop(...),科里化的
    //    map函数参数算齐备了
    map(R.prop('street')),
    // 2, 把addresses的空数组流到Maybe的瓶子准备装起来
    //    传入的是数组,要取的是数组第1项.如果传过来的是[]
    //    此时的容器就是一个空值
    safeHead,
    // 1, 首先获取对象的addresses属性,
    //     这是一个空数组
    R.prop('addresses')
)
console.log(
    streetName(
        {
            addresses: [
                {street: 'Shady Ln', number: 4281}
            ]
        }
    )
)



















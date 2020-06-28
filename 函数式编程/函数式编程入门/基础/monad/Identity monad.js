/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */
'use strict';

class Identity {
    constructor(value){
        this.$value = value;
    }
    map(f){
        // console.log(f.toString())
        return f(this.$value)
    }
}

// var result = new Identity(5)
//     .map(v1 => new Identity(6)
//         .map(v2 => new Identity(v1 + v2)))

/*
1, 5被丢进瓶子,瓶子调用map.
2, 此时v1值为5, 又包装了一个瓶子,值是6, v2值为6
3, 再次, 又包装了一个瓶子,值是6+5=11,这没什么
   特别的,v1, v2 依次从外向内传递,
   v1, v2只是依次取出瓶子里的值而已
4, 瓶子像洋葱一样层层套起来
*/
var result = new Identity(5).map(
    function (v1) {
        return new Identity(6).map(
            function (v2) {
                return new Identity(v1 + v2).map(
                    function (v3) {
                        // v3的值是前一个瓶子的值.
                        console.log("v3=", v3)
                        // 最终返回最后一个瓶子
                        return new Identity(3)
                    }
                )
            }
        )
    }
)

console.log(result)
















/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 * http://mattfield.github.io/javascript/2013/07/28/taking-things-out-of-context-functors-in-javascript/
 */
'use strict';
import R from "ramda"

function addOne(a) { return a + 1; };
console.log(addOne(5));

console.log(R.map(addOne, [5, 6, 7]))
console.log(R.map(addOne)([5, 6, 7]))

var MyObj = function(val) {
    this.val = val;
};

// 定义一个函子,函子就是对数值进行封装
// 封装后的瓶子就叫函子
class Bottle {
    constructor(val) {
        this.val = val
    }
    // 函子有个fmap()方法
    // 用f函数处理这个val,又放回瓶子
    map(f) {
        // 要返回return
        return new Bottle(f(this.val))
    }
}
// 现在定义一个 3 的函子类型数据
const threeBottle = new Bottle(3)
console.log(threeBottle)
// 就可以用add函数了
console.log(threeBottle.map(addOne))
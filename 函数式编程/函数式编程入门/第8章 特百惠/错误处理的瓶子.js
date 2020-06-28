/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */
'use strict';

// 函子的代码实现
class Functor {
    constructor(x){
        this.$value = x;
    }
    static of(x){
        return new Functor(x)
    }
    map(f){
        return new Functor(f(this.$value))
    }
}


class Either extends Functor{
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
    }
    static of(left, right){
        return new Either(left, right);
    }
    map(f) {
        return this.right 
            ? Either.of(this.left, f(this.right)) 
            : Either.of(f(this.left), this.right)
    }
}

// var addOne = function (x) {
//     return x + 1;
// };

export {Functor, Either}
// 上面代码中，如果右值有值，就使用右值，否则使用左值。
// 通过这种方式，Either 函子表达了条件运算。
// console.log(Either.of(5, 6).map(addOne));
// console.log(Either.of(5).map(addOne));
// console.log(Either.of(5, null).map(addOne));
// console.log(Either.of().map(addOne));









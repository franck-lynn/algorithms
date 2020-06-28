/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-lifting-into-a-pointed-functor
 */
// import {task, of} from 'folktale/concurrency/task'
// import {union, derivations} from 'folktale/adt/union'
// import Result from 'folktale/result'


class Box{
    constructor(x){
        this.$value = x
    }
    static of(x){
        return new Box(x)
    }
    map(f){
        return Box.of(f(this.$value))
    }
    fold(f){
        return f(this.$value)
    }
    inspect(){
        return `Box(${this.$value})`
    }
}

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

console.log(Box.of(100).inspect())

console.log(
    Either.of('hello')
)











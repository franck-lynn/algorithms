/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-you-ve-been-using-monads
 */
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
    join(){
        return this.$value
    }
    chain(f){
        // this.map(f)应该返回的是这个函子,才可以调用join()方法
        return this.map(f).join()
    }
}

const join = m => m.chain(x => x)

const m =Box.of('wonder')

const res1 = join(Box.of(m))
const res2 = join(m.map(Box.of))

console.log(res1, res2)












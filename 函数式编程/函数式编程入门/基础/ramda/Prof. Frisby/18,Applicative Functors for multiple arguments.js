/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/angular-1-x-applicative-functors-for-multiple-arguments
 */

const Box = x => ({
    ap: b2 => b2.map(x),
    chain: f => f(x),
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x})`
})

// const res = Box(x => x + 1).ap(Box(2))
// const res = Box(x => y => x + y).ap(Box(2)).ap(Box(3))

// F(x).map(f) = F(f.ap(F(x)))

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)
const add = x => y => x + y

const res1 = liftA2(add, Box(2), Box(4))
console.log(res1.inspect())


const liftA3 = (f, fx, fy, fz) => fx.map(f).ap(fy).ap(fz)
















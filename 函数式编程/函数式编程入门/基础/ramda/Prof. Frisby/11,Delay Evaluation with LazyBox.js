/**
 * Created by franck.lynn on 2018/12/2.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-delaying-evaluation-with-lazybox
 */
// 延时
const Box = x => ({
    fold: f => f(x),
    map: f => Box(f(x)),
    inspect: _ => `Box(${x})`
})

const LazyBox = g => ({
    fold: f => f(g()),
    map: f => LazyBox(_ => f(g()))
})

const result = LazyBox(_ => ' 64 ')
        .map(s => s.trim())
        .map(r => Number(r)) 
        .map(i => i + 1)
        .map(i => String.fromCharCode(i))
        .fold(c => c.toLowerCase())

// const result = Box(' 64 ')
//         .map(s => s.trim())
//         .map(r => Number(r)) 
//         .map(i => i + 1)
//         .map(i => String.fromCharCode(i))
//         .fold(c => c.toLowerCase())

console.log(result)















/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x}`
})

export {Box}















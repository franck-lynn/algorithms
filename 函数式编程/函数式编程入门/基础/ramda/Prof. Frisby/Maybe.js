/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';
// 可以处理空值的容器
const Maybe = x => ({
    // 如果 x 存在,就用f函数处理x值,
    // 如果不存在,就把null放进Maybe
    isNothing: f => x ? Maybe(f(x)) : Maybe(null),
    // 数据显示
    inspect: _ => `Maybe(${x})`
})

export {Maybe}
















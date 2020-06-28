/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';

const Either = x => ({
    chain: f => f(x),
    // 如果x存在,就用f处理右边的值,并放回Either
    map: f => x ? Either(f(x)) : Either(null),
    // 如果右边存在,就显示右边的值
    fold: (f, g) => x ? g(x) : f(x),
    // 如果右边存在,就显示右边的值
    inspect: _ => x ? `Right(${x})` : `Left(null)`,
})

export {Either}















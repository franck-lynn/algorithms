/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';
import {Either} from './Either2'

const findColor = name => Either(
    {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
)

const result1 = findColor('red')
    .map(
        // 获取#号后面的,放回Either
        c => c.slice(1)
    ).fold(
        e => 'no color', c => c.toUpperCase()
    )


console.log(result1)

const result2 = findColor('green')
    .map(
        // 获取#号后面的,放回Either
        c => c.slice(1)
    ).fold(
        e => 'no color', c => c.toUpperCase()
    )
console.log(result2)

const result3 = findColor()
    .map(
        // 获取#号后面的,放回Either
        c => c.slice(1)
    ).fold(
        // 所以,这里可以调用Either的fold()方法
        // 无颜色,执行左边的方法,返回的是 no color, 打印此语句
        _ => 'no color', c => c.toUpperCase()
    )
console.log(result3)








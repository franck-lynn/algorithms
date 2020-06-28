/**
 * Created by franck.lynn on 2018/11/27.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-composable-code-branching-with-either
 */
'use strict';
// 使用Either进行空值检查
const Right = x => ({
    map: f => Right(f(x)),
    inspect: _ => `Right(${x})`,
    fold: (f, g) => g(x)
})

const Left = x => ({
    map: _ => Left(x),
    inspect: _ => `Left(${x})`,
    fold: (f, _) => f(x)
})
// 检查对象有没有定义
// 如果x有定义,执行右边,没有定义执行左边
const fromNullable = x => x !== undefined ? Right(x) : Left(null)

// const findColor = name => {
//     const found = ({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]
//     return found ? Right(found) : Left(null)
// }

// 按name查找颜色,并对结果进行检查,看看有没有定义
// {red: '#ff4444', ...}[name] 获取对象的属性值,相当于 o.red
const findColor = name => fromNullable(
    // 获取对象的属性值,如果有这个属性值,就把这个属性值放在右边,,没有就放在左边
    {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
)


//                              获取#号后面的
// const result = findColor('red').slice(1).toUpperCase()
// 查找颜色,找到后返回的是一个'#ff4444'值
const result = findColor('green')
    .map(
        c => c.slice(1)
    )
            .fold(
                e => 'no color', c => c.toUpperCase()
            )

// const result = Left(2).map(x => x + 1).map(x => x / 2)
//     .fold(x => 'error', x => x)
console.log(result)

// const result1 = Right(3).map(x => x + 1).map(x => x / 2)
// console.log(result1.inspect())
// const result2 = Left(3).map(x => x + 1).map(x => x / 2)
// console.log(result2.inspect())













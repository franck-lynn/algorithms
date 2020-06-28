/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/api/v2.3.0/en/folktale.maybe.html
 */
'use strict';
import Maybe from 'folktale/maybe'

// 从对象中查找属性的键
function get(object, key) {
    // 键在这个对象中有? 或许变恰好:返回这个包装值
    return key in object ? Maybe.Just(object[key]) 
        : Maybe.Nothing()
}
const config = {
    host: '0.0.0.0'
}

const host = get(config, 'host').getOrElse('localhost')
const port = get(config, 'port').getOrElse(8080)
console.log(
    `${host}:${port}`
)

function first(list) {
    return list.length > 0 ? Maybe.Just(list[0])
        : Maybe.Nothing()
}
// function render(item) {
//     return ['item', ['title', item.title]];
// }

function second(list) {
    return list.length > 1 ? Maybe.Just(list[1])
        : Maybe.Nothing()
}

// console.log(
//     first([{title: 'Hello'}])
//         .map(item => ['item', ['title', item.title]])
// )
// console.log(
//     first([])
//         .map(item => ['item', ['title', item.title]])
// )

console.log(
    first([{title: 'Hello'}])
        .map(item => ['item', ['title', item.title]]).chain(second)
)
console.log(
    first([])
        .map(item => ['item', ['title', item.title]]).chain(second)
)

// 错误处理
let nextId = 1;
const issueError = _ => Maybe.Just(`Error #${nextId++}`)

console.log(
    first([{title: 'Hello'}]).orElse(issueError)
)
console.log(
    first([]).orElse(issueError)
)
console.log(
    // .getOrElse() is always executed:
    first([]).getOrElse(issueError())
)

// 模式匹配
console.log(
    first([{title: 'Hello'}]).matchWith({
        Just: ({ value }) => `Found: ${JSON.stringify(value)}`,
        Nothing: () => 'Nothing was found'
    })
)
console.log(
    first([]).matchWith({
        Just: ({ value }) => `Found: ${JSON.stringify(value)}`,
        Nothing: () => 'Nothing was found'
    })
)
/*
// 用谓词判断,只是返回一个满足条件的
const find = (list, predicate) => {
    for(let i = 0; i < list.length; ++i){
        const item = list[i]
        if(predicate(item)){
            return Maybe.Just(item)
        }
    }
    return Maybe.Nothing()
}

console.log(find([1, 2, 3, 4], x => x > 2))
console.log(find([1, 2, 3], x => x > 3))

console.log(
    find([1, 2, 3, 4], x => x > 2).getOrElse("没找到值")
)

console.log(
    find([1, 2, 3], x => x > 3).getOrElse("没找到值")
)
*/












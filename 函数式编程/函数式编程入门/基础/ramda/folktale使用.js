/**
 * Created by franck.lynn on 2018/11/24.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'
import Maybe from 'folktale/maybe'

const users = [
    {name: 'Jesse', age: 38, id: 1},
    {name: 'Albus', age: 2, id: 2},
    undefined,
    {name: 'Cow', age: 10, id: 4},
]

/*
const findUserByName = name => {
    const result = R.find(R.propEq('name', name))(users)
    if(R.isNil(result)){
        return Maybe.Nothing()
    }else{
        return Maybe.Just(result)
    }
}

console.log(
    findUserByName('Jesse')
)

console.log(
    findUserByName('Bruce')
)
*/

const getUserAtIndex = index =>
    users[index] ? Maybe.Just(users[index])
        : Maybe.Nothing()

console.log(
    getUserAtIndex(1).getOrElse('指定索引没有找到')
)
console.log(
    getUserAtIndex(2).getOrElse('指定索引没有找到')
)

import fs from 'fs'

const readConfig = () => {
    try {
        const result = fs.readFileSync('folktale使用.js', 'utf-8');
        return Maybe.Just(result)
    } catch (e) {
        return Maybe.Nothing();
    }
}

console.log(
    readConfig().getOrElse({path: 'default/path'})
)








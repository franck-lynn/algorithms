/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 */
// 使用Either组合链式处理错误
'use strict';
const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: _ => `Right(${x})`
})

const Left = x => ({
    chain: f => Left(f),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: _ => `Left(${x})`
})

const fromNullable = x => x !== undefined ? Right(x) : Left(null)

import fs from 'fs'

/*
const getPort = _ => {
    try{
        const str = fs.readFileSync('示例config.json', 'utf-8')
        const config = JSON.parse(str)
        return config.port
    }catch(e){
        return 3000
    }
}
*/
const tryCatch = f => {
    try{
        return Right(f())
    }catch(e){
        return Left(e)
    }
}


const getPort = _ => 
    tryCatch(_ => fs.readFileSync('示例config.json', 'utf-8')) // Right('')
        .chain(c => tryCatch(() => JSON.parse(c))) // Right(Right(''))
        .fold(_ => 8080, c => c.port)

const result = getPort()
console.log(result)










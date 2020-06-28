/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 * https://github.com/cdelaorden/fp-exercises/blob/master/lib/io.js
 */
'use strict';

const { task, fromNodeback } = require('folktale/concurrency/task')
const fs = require('fs')

// parseArgs :: IO -> [String]
const parseArgs = minArgs => task(
    resolver => process.argv.length > minArgs + 2 
        ? resolver.resolve(process.argv.slice(2)) 
        : resolver.reject(`Usage: node ${process.argv[1]} 
        param[param][...param] 
        Expect at least ${minArgs} arguments`)
)

const readFile = fromNodeback(fs.readFile)

const writeFile = fromNodeback(fs.writeFile)

export {parseArgs, readFile, writeFile}












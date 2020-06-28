/**
 * Created by franck.lynn on 2018/11/16.
 * franck_lynn@live.cn
 */
'use strict';

import R from 'ramda'

const duplicate = x => [x, x]
const arr = [1, 2, 3, 4]
console.log(
    R.flatten(
         R.map(duplicate)(arr)
    )
)

console.log(
    R.reduce(
        R.concat, [], R.map(duplicate)(arr)
    )
)

console.log(
    R.chain(duplicate, arr)
)















// https://www.bilibili.com/video/av9873223?from=search&seid=8198835668380048214
/*
递归求和
[2, 7, 3, 1, 6, 5] 
l               r
[2] [7, 3, 1, 6, 5]
l   l+1          r
大问题分解成一个小问题, 只有一个时, 这个数组就是数组的和, 
把这个和与余下的数组的和相加就是需要求的数组和, 问题转化成
求小一点的数组的和. 
以此类推, 直到最后一个数组.
*/

import _ from 'lodash'

const sum = (ary, l, r) => {
    if (l === r) {
        return ary[l]
    } else {
        return ary[l] + sum(ary, l + 1, r)
    }
}
var ary = _.range(1, 1001)
// console.log(ary)
console.log(sum(ary, 0, ary.length - 1))
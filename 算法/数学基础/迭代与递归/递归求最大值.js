// https://www.bilibili.com/video/av9873223?from=search&seid=8198835668380048214
/*
递归求一列数组的最大值
[2, 7, 3, 1, 6, 5] 
l               r
[2] [7, 3, 1, 6, 5]
l   l+1          r
大问题分解成一个小问题, 只有一个时, 这一个肯定就是最大值, 
把这个最大值与余下的数组的最大值再比较, 问题转化成
求小一点的数组的最大值. 
以此类推, 直到最后一个.
*/

const findMax = (arr, l, r) => {
    if (l === r) {
        return arr[l]
    } else {
        let a = arr[l]
        let b = findMax(arr, l + 1, r)
        if (a > b) return a
        else return b
    }
}
var arr = [1, 3, 55, 1212, 4, 4, 5, 6]
console.log(findMax(arr, 0, arr.length - 1))





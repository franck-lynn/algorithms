/*
https://www.bilibili.com/video/av9873223?from=search&seid=8198835668380048214
有2个数字, 分别是 86 54, 求最大公约数
1, 86 / 54 =  1...12
2, 54 / 12 =  4...6
3, 12 / 6 = 2
所以6 就是最大公约数.
   a / b  = c ...x
   如果余数为 0, 那么 b 就是最大公约数
*/
function gcd(a, b) {
    let r = a % b
    if (r === 0) {
        return b
    } else {
        return gcd(b, r)
    }
}

console.log(gcd(86, 54))
console.log(gcd(12, 72))
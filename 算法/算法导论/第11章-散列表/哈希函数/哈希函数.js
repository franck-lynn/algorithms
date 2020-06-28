/*
https://www.bilibili.com/video/av34660129?from=search&seid=15378469945186961759
https://learning.nervos.org/crypto-block/3-hash.html
哈希函数的特点:
独一无二
完整性校验
Digest校验
checksum校验值
Fingerprint指纹 
哈希函数的分类:
普通哈希
加密哈希 Cryptographic Hash Function
CRC-32 32位的二进制数, 表示成16进制是8位, 例如L 84 fb 67 4c
Md5 32位16进制数, 做数值校验
SHA256 二进制256位, 表示成16进制就是64位
哈希算法:
加密算法(加密)和哈希算法(安全校验)
MD5, SHA-1
sHA-2(一些了算法的统称), SHA-256
实用例子
网站注册
区块链和加密货币
密码学
*/

/* 
https://www.bilibili.com/video/av17500428?from=search&seid=6170578859109385555
已知哈希函数: H(key) = key % 7
有冲突时. Hi = (H(key)+di) % 7, 其中, di = 1, 2, 3, 4, 5, 6
*/
const hash01 = function(a) {
    let r
    let h = []
    for (let i = 0; i < a.length; i++) {
        r = a[i] % 7
        let j = 1
        while (h.includes(r)) {
            r = (r + j) % 7
            j++
        }
        h.push(r)
    }

    return h
}
let key01 = [67, 84, 18, 26, 34, 28]

console.log("数组中的关键字转化成哈希表为: ", hash01(key01))

/*
除法散列法:h(k)=k mod m, 例如: m=12, k=100, 则h(k) = 4
console.log("除法散列法", 100 % 12)
https://www.phpfans.net/ask/MTA3ODc5MA.html
当应用除法散列是,要注意m的选择.例如, m不应是2的幂, 因为如果m = 2 ^ p, 
则h(k) 就是k的p个最低位数字。
红色标记的那句话看不懂， 为什么啊？
*/
const hash02 = function (key, p) {
    // let key = 54 // 二进制数字为: 110110
    // let p = 3 // 二进制数字为: 11
    /* 
    54/8 = 6 ... 6, 转换成二进制就是: 110110/1000 = 110 ... 110
    key = 110110, p = 1000,  取模后的结果就是 key=110110 的 p=3个最低位数字
    这个程序只是验证算法导论中的这句话, 并不是证明
    */
    let m =  (key % (2 ** p)).toString(2)
    console.log(`二进制: ${key.toString(2)} % ${(2**p).toString(2)} = ${m}; 十进制: ${key} % ${2**p} = ${parseInt(m, 2)}`)
}
hash02(54, 3)
hash02(23, 3)
// 乘法散列表
const hash03 = function (k, s, p) {
    // s值是Knuth建议的理想值
    console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸")
    let a = s/2**p 
    console.log(`01, 依据Knuth建议, 取a为形如s/2^32的分数: ${a}}`)
    let ks = k * s
    console.log(`02, 那么, k*s = ${k} * ${s} = ${ks}`)
    let r1 = Math.trunc(ks/2**32)
    let r0 = ks % 2**32
    console.log(`03, 这个值=${r1}*2**32+${r0} = ${r1 * 2**32 + r0}`)
    // r0的14个最高有效位, 先计算r0的位数长度, 14-(总长32-这个长度)
    // 是要获取的长度, 示例中14-32+25= 7, 取前7个有效位:1000011
    // 把r0的后面的位数移走, 剩下前面的14位, ", r0>>18
    let h = r0>>18
    console.log(`04, 得到的哈希函数值是: ${h}`)
    console.log("🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸🔸")
}

hash03(123456, 2654435769, 14)
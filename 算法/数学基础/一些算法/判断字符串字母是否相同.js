/* 
https://www.bilibili.com/video/av3862808
isAnagram
判断两个单词的字母是否相同
字母一样, 顺序可能不一样
S = "ten", T = "net" , 就是一样的
先开辟26个空间, 将每个字母出现的次数分别填入数组对应的位置.
再比较填入数组个数的数组是否相等
https://leetcode-cn.com/problemset/all/
 */
// 获取26个英文字母的小写数组
const getCharArr = () => {
    let charArr = []
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + parseInt("a".charCodeAt()))
        charArr.push(char)
    }
    return charArr
}

// 定义数组, 长度26, 默认为0
function getNArr(n) {
    let a = new Array(n)
    for (let i = 0; i < a.length; i++) {
        a[i] = 0
    }
    return a
}

function isAnagram(s, t) {
    let charArr = getCharArr()
    let sArr = getNArr(26)
    let tArr = getNArr(26)
    // 如果字符串长度不相等, 显然不一样
    if (s.length !== t.length) {
        return false
    } else {
        // 循环s和t字符串, 
        for (let i = 0; i < 26; i++) {
            // 如果第j个字母与字母表中第1个字母相等
            for (let j = 0; j < s.length; j++) {
                if (s[j] === charArr[i])
                    sArr[i]++
            }
        }
        console.log("s字符串:", sArr)
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < t.length; j++) {
                if (t[j] === charArr[i])
                    tArr[i]++
            }
        }
        console.log("t字符串:", tArr)
        // 比较两个数组相等
        for (let i = 0; i < 26; i++) {
            if (sArr[i] !== tArr[i]) {
                return false
            }
        }
        return true
    }
}

console.log(isAnagram("net", "ten"))
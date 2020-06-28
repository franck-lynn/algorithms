/*
https://www.bilibili.com/video/av61505246?from=search&seid=3422112539037533273
*/

const arr = ["haha", 'haha', '111', '222', '111', 111]

let obj = {}

for (let i = 0; i < arr.length; i++) {
    // obj[属性名]存在? 是的, ++1, 不存在, 数量是1
    obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1)
}

console.log(JSON.stringify(obj))

let map = new Map()
for (let i = 0; i < arr.length; i++) {
    let val = map.get(arr[i])
    map.set(arr[i], val ? ++val: 1)
}
console.log(map)


















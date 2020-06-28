// https://www.bilibili.com/video/av61505246?p=2
class MyHashSet {
    constructor() {
        this.data = {}
    }
    add(value) {
        // 向哈希集合中插入一个值
        if (!this.data[value]) this.data[value] = value
    }
    contains(value) {
        // 返回哈希集合中是都有这个值
        return !!this.data[value]
    }
    remove(value) {
        // 将给定值从哈希表中删除, 如果哈希集合中没有这个值, 什么也不做
        // if(this.data[value]) delete this.data[value]
        if (this.data[value])  Reflect.deleteProperty(this.data[value])
    }
}

let myHashSet = new MyHashSet()
myHashSet.add(1)
myHashSet.add(2)

console.log(myHashSet.data)




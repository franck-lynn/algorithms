/*
1,当存储记录时,通过散列函数计算出记录的散列地址
2,当查找记录时,我们通过同样的时散列函数计算记录的散列地址,并通过此散列地址访问该记录

都需要一个散列函数
 */
// 定义一个散列表的结构
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDictory = showDictory;
    this.put = put;
    // this.get = get;
}
function betterHash(str) {
    const H = 37;
    var total = 0;
    for(var i = 0; i < str.length; ++i){
        total += H * total + str.charCodeAt(i)
    }
    total = total % this.table.length;
    if(total < 0)
        total += this.table.length-1
    
    return parseInt(total)
}

function simpleHash(data) {
    var total = 0;
    for(var  i=0;i<data.length;++i){
        total += data.charCodeAt(i);
    }
    console.log("哈希值:"+data+"->"+total);
    return total % this.table.length;
}

function put(data) {
    // pos是经过hash计算的数组下标
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDictory() {
    for(var i=0;i<this.table.length;++i){
        // 取出的时候,数组的下标是指在计算的下标上面存储了相应的值.
        if(this.table[i])
            console.log((`${i}:${this.table[i]}  `))
    }
}
var someNames = ["David","Jennifer","Donnie","Raymond","Cynthia","Mike","Clayton","danny","Jonathan"]
var hashTable = new HashTable();
for(var i = 0; i < someNames.length; i++){
    hashTable.put(someNames[i]);
}

hashTable.showDictory();

// console.log(hashTable)










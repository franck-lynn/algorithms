/**
 * Created by franck.lynn on 2018/3/28 12:22.
 */

// 随机返回一个[a,b)直接的随机数
function uniformAB(a,b) {
    return a + Math.random()*(b-a)
}
console.log(`返回一个[a...b)之间的随机数:${uniformAB(0,1)}`);

// 返回一个[0,N)直接的整数
function uniformN(n) {
    return Math.floor(Math.random()*n)
}
console.log(`返回一个[0...n)之间的随机整数:${uniformN(6)}`);

// 返回一个[lo..hi)区间的随机整数
function uniformLoHi(lo,hi) {
    return Math.floor(lo + Math.random()*(hi-lo))
}
console.log(`返回一个[lo...hi)之间的随机整数:${uniformLoHi(2,6)}`);

// 根据离散概率随机返回int值,出现i的概率为a[i], discrete离散的
function discrete(a) {
    // [0,1)的随机数
    var r = Math.random();
    var sum = 0;
    for(var i=0;i<a.length;i++){
        // 数组求和,如果数组中前i项和 >r这个[0,1)随机数
        sum = sum +a[i];// a[i]是随机的
        // 由于r出现的概率是一样的i=0,,+a[i]=0.3后0出现概率就是>=30%
        // 再次i=1执行循环,+a[i]=0.2,sum=0.5,则1出现的概率是
        if(sum >= r) return i;
    }
    return -1;
}
console.log(`根据离散概率随机返回int值,出现i的概率为a[i]:${discrete([0.3,0.2,0.4,0.1])}`);

// 随机将数组中的元素排序
function shuffle(a) {
    var n = a.length
    for(var i=0;i<n;i++){
        // 返回一个[i...n)之间的随机数
        var r =i + Math.floor(Math.random()*(n-i));
        // 先把a[i]值保存下来.在把a[i]赋值i后面的任何一个元素
        var temp = a[i];
        a[i] =a[r];
        a[r] =temp;
    }
    return a;
}
module.exports = shuffle;
console.log(`打乱数组顺序[${shuffle([1,2,3,4,5])}]`)

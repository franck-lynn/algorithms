/*
1.1.34 过滤
以下哪些任务需要（在数组中，比如）保存标准输入中的所有值？哪些可
以被实现为一个过滤器且仅使用固定数量的变量和固定大小的数组（和N无关？
在每个问题中，输入都来自于标准输入且含有N个0到1的实数。
打印出最大和最小的数
打印出所有数的中位数
打印出第k小的数，k小于100
打印出所有数的平方和
打印出N个数的平均值
打印出大于平均值的数的百分比
将N个数按照升序打印
将N个数按照随机顺序打印
*/

// 生成随机数,生产[0,1)的随机数
// console.log(Math.random());
// 返回n个[0,1)的实数
function uniformN(n) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a[i] = Math.random();
    }
    return a
}

var b = uniformN(8);
// 求最小数.
/*
假设数组
               0  1  2  3   4   5  6   7
              [3, 7, 8, 9, 12, 14, 5, 18]                  [3]
分2组    lo       mid=3         mid+1=4      hi
        [3, 7, 8, 9]            [12, 14, 5, 18]           [3,5]
再分 lo  1         2  3      
    [3, 7]       [8, 9]      [12,14]       [5, 18]     [3,8,12,5]
分别求出这2组的最小值,
 */

// https://wenku.baidu.com/view/5f1d41d4360cba1aa811da6b.html
function binaryMin(a, lo, hi) {
    // var lo=0,hi=a.length-1;
    if (lo == hi) return [lo, hi, a[lo]];
    else {
        //划分子数组
        var mid = Math.floor((lo + hi) / 2);
        var left = binaryMin(a, lo, mid);
        var right = binaryMin(a, mid + 1, hi);
        if (left[2] <= right[2]) return left;
        else if (right[2] < left[2]) return right;
    }
}

//        0  1  2  3   4   5  6  7
var a = [3, 27, 2, 9, 12, 14, 5, 18];
console.log("分治算法求的最小值:", binaryMin(a, 0, a.length - 1, 0))

function min(a) {
    var min = a[0]
    for (var i = 1; i < a.length; i++) {
        if (min > a[i]) min = a[i];
    }
    return min;
}


console.log("最小值:" + min(a))
console.log(`原始数组:${a}`)

// 打印出所有数的中位数
function mid(a) {
    return Math.floor((a.length - 1) / 2)
}

console.log(`中位数:${min(a)}`);

// 同时找到最大和最小值
// https://www.oschina.net/code/snippet_567775_21867
// http://blog.sina.com.cn/s/blog_6d53ced50102va6b.html
function findMinMaxByBinary(a, lo, hi) {
    if (lo == hi - 1) {
        // 只有2个数组时的情况.
        //  直接判断大小返回
        if (a[lo] <= a[hi]) return [a[lo], a[hi]];
        else /*if(a[lo]>a[hi])*/ return [a[hi], a[lo]];
    } else {
        // 如果至少有三个数组元素
        var mid = Math.floor((lo + hi) / 2);

        // 求左半部分的数组最大最小值
        var l = findMinMaxByBinary(a, lo, mid);
        // 求右半部分最大最小值
        var r = findMinMaxByBinary(a, mid + 1, hi);

        // if(l[2]<=r[2] && l[3]>= r[3]) return [l[2]];
        // else/* (leftMinMax[2]>rightMinMax[3]) */return r;
        // 小在左,大在左
        if (l[0] <= r[0] && l[1] >= r[1]) return [l[0], l[1]];
        // 小在左,大在右
        else if (l[0] <= r[0] && l[1] <= r[1]) return [l[0], r[1]];
        //小在右,大在左
        else if (l[0] > r[0] && l[1] >= r[1]) return [r[0], l[1]];
        //都在右边
        else return [r[0], r[1]]
    }
}
//        0   1  2  3  4  5  6  7
var b = [12, 12, 8, 2, 3, 4, 4, 5];
console.log("同时求最大最小值:", findMinMaxByBinary(b, 0, b.length - 1))



// 打印出第k小的数,k<100
// https://blog.csdn.net/qq_18738333/article/details/51769327













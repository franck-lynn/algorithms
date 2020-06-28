/**
 * Created by franck.lynn on 2018/5/20 15:06.
 */
/*
https://www.cnblogs.com/star91/p/5615327.html
http://blog.51cto.com/mengliao/824079
假设有数组 var a = [1,2,3]
求所有排列
 */
/*
http://blog.51cto.com/mengliao/824079
1,递归实现

全排列（递归交换）算法  
   1)、将第一个位置分别放置各个不同的元素；  
   2)、对剩余的位置进行全排列（递归）；  
   3)、递归出口为只对一个元素进行全排列。*/
function swap(arr, i, j) {
    if (i != j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

var count = 0;

function show(arr) {
    console.log((count + ": " + arr));
}

function permulations(arr) {
    (function fn(n) { //为第n个位置选择元素  
        for (var i = n; i < arr.length; i++) {
            swap(arr, i, n);
            if (n + 1 < arr.length - 1) //判断数组中剩余的待全排列的元素是否大于1个  
                fn(n + 1); //从第n+1个下标进行全排列  
            else
                show(arr); //显示一组结果  
            swap(arr, i, n);
        }
    })(0)
}

var a = [1, 2, 3];
permulations(a)






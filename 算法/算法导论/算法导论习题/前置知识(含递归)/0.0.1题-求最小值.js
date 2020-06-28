/*
循环
找出数组中最小的元素
var a = [11,2,32,4,57,61]
*/
function min(arr) {
    // 定义一个变量,用来存储最小值,先假设第1个值最小
    var min =arr[0];
    for(var i =1; i<arr.length; i++){
        // 从1开始遍历数组,当第i个最小时,就把这个值重新赋给min
        if(a[i]<min)
            min = arr[i]
    }
    return min;
}

var a = [11,21,32,4,57,61]
console.log(min(a))









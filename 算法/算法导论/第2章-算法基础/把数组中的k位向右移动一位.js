/*
假设有一个数组
[8,2,4,9,3,6]
     k
把第k位向右移动一位
 */
function moveKthRight(a, k) {
    var n = a.length-1;
    // 把最后一位位先保存下来;
    var key = a[n];
    for (var i = n; i > 0; i--) {
        // 后一位=前一位
        a[i] = a[i - 1];
    }
    // 把第1位设置位最后一位
    a[0]= key;
    return a
}

var a = [8, 2, 4, 9, 3, 6];
console.log("没移动1位:",a)
console.log("右移动1位:",moveKthRight(a, 2));

function moveKthLeft(a, k) {
    var n = a.length-1;
    // 把第1位保存起来
    var key = a[0];
    for (var i = 1; i <= n; i++) {
        a[i - 1] = a[i]
    }
    //把最后一位设置位第1位
    a[n] = key;
    return a;
}

// var a = [8, 2, 4, 9, 3, 6];
console.log("左移动1位:",moveKthLeft(a, 2));















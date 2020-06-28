// 求第k小的元素.返回的是元素
//   2  3  4  6  1  5
// [ 3, 5, 6, 2, 9, 8 ]
//   kSmaller
//   j➡
function findKthElement02(arr,k) {
    for(var m = 0;m<arr.length;m++){
        var kSmaller = arr[m];
        var i = 1;
        // 用i来记录第k小的下标
        var j = 0;
        // 用j来循环数组
        while (j<arr.length){
            // 如果j<arr.length,就循环
            if(a[j]<kSmaller) i++;
            j++
        }
        if(i==k) console.log(`i=${i}是表示第${i}小,${k}表示输入的是第${k}小,这个元素是:${arr[m]}`)
    }
    // 本题用while循环来做,先还是从简单的情况开始便于理解
    // 先不考虑外循环情况
    // 假设第 k 小的就是第1个元素 arr[0]
    // var kSmaller = arr[0];
    // var i = 1;
    // // 用i来记录第k小的下标
    // var j = 0;
    // // 用j来循环数组
    // while (j<arr.length){ 
    //     // 如果j<arr.length,就循环
    //     if(a[j]<kSmaller) i++;
    //     j++
    // }
    // if (i==k)  
    //     console.log(i)
}
//        2  3  4  6  1  5
var a = [ 3, 5, 6, 2, 9, 8 ]
findKthElement02(a,1)
findKthElement02(a,2)
findKthElement02(a,3)
findKthElement02(a,4)
findKthElement02(a,5)
findKthElement02(a,6)



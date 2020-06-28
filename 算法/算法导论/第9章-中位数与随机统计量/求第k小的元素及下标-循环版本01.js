
//        2  3  4  6  1  5
var a = [ 3, 5, 6, 2, 9, 8 ]

// 求数组中某个元素的第几小的下标,返回的是下标
function findKth01(arr,k) { // k指第几个元素,从1 开始的
    // 假设求第k个元素是第几小
    var key = arr[k-1];  // k-1是说下标从0开始是第1个元素;
    var i = 1; // 最小就是1,第1小
    for(var j = 0; j < arr.length; j++){
        if (a[j]<key){
            i++
        }
    }
    console.log("第"+(k)+"个元素 第 "+i+" 小")
}
// findKth01(a,1)
// findKth01(a,2)
// findKth01(a,3)
// findKth01(a,4)
// findKth01(a,5)
// findKth01(a,6)

// 求第k小的元素.返回的是元素
//   2  3  4  6  1  5
// [ 3, 5, 6, 2, 9, 8 ]
//   kSmaller
//   j➡
function findKthElement01(arr,k) {
    for(var m = 0; m<arr.length; m++){
        // 当m=0时,判断,看看a[m]是不是第k小
        var kSmaller = arr[m];
        var i = 1;
        // 用i来表示实际第3小的下标,检查这个i是不是 = k=3
        for(var j = 0; j < arr.length; j++){
            if (a[j]<kSmaller){
                i++
            }
        }
        if(i==k) console.log(`i=${i}是表示第${i}小,${k}表示输入的是第${k}小,这个元素是:${arr[m]}`)
    }
    // 这里的 k 是指第 k 小,例如:k=3指第3小的元素,示例为5
    // 并不是指第3个元素
    // 假设第k小的就是第1个元素,求第3小的元素,
    // 假设第3小的就是第1个元素
    
    // var kSmaller = arr[0];
    // var i = 1;
    // // 用i来表示实际第3小的下标,检查这个i是不是 = k=3
    // for(var j = 0; j < arr.length; j++){
    //     if (a[j]<kSmaller){
    //         i++
    //     }
    // }
    // if(i==k) console.log("是的")
}
findKthElement01(a,1)
findKthElement01(a,2)
findKthElement01(a,3)
findKthElement01(a,4)
findKthElement01(a,5)
findKthElement01(a,6)


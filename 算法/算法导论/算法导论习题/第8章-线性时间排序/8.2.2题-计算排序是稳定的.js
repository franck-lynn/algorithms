/**
 * Created by franck.lynn on 2018/4/26 0:41.
 */

var a = [ 9, 8, 7, 6, 5, 4, 3 ]
var k = 10; // 10个基数
function countingSort(a, k) {
    // 临时数组
    var c = [];
    for(let i = 0; i < k; i++){
        c[i] = 0;
    }
    // 统计各基数出现的次数,这是数组a长度!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // a[i]的值即是数组c的下标,a[i]只能是0..9的基数
    for(let i = 0; i < a.length; i++){
        c[a[i]] = c[a[i]] + 1;
    }
    console.log(c)
    // 统计不大于i的次数,这里的i是基数!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(let i = 1; i < k; i++){ 
        c[i] = c[i] + c[i-1];
    }
    console.log(c)
    // 找个桶装起来
    var b = [];
    for(let i = a.length - 1; i >= 0; i--){
        // a[i]的值即是数组c的下标,a[i]只能是0..9的基数
        // c[a[i]]是不大于i出现的次数,
        b[c[a[i]]-1] = a[i];
        c[a[i]] = c[a[i]] - 1;
    }
    console.log("排序好的数组",b)
}

countingSort(a,10)









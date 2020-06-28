/*
虽然归并排序的最坏情况运行时间n*log2(n),
而插入排序最坏情况运行时间n*n
但在n较小时,在许多机器上时间运行更快.因此
在归并排序中,当子问题变得足够小时,采用插入
排序来使递归的叶变粗是有意义的.
考虑对归并排序的一种修改,其中使用插入排序来
排序长度为k的n/k个子表,然后使用标准的合并
机制来合并这些子表,这里的k是一个待定
的值
做实践中的题
 */
/*
思路:
1,设计出归并函数,归并2个有序数组
2,设计归并排序函数,进行归并排序.
3,在归并排序函数中,进行判断k值
 */
//       1  2  3  4  5  6  7  8   9  10  11                 17  18  19  20  21 
var a = [2, 4, 5, 6, 1, 2, 8, 11, 17, 4, 3, 64, 63, 62, 87, 70, 54, 43, 42, 41, 40, 39, 38, 37, 11, 9];
// var a = [2, 4, 5, 6, 1, 2, 8, 11, 17, 4, 3];
// console.log(_mergeSort(a, 0, a.length - 1));
// console.log(_insertSort(a,0,a.length-1));
console.log(_mixedSort(a,0,a.length-1).toString())
// 混合排序
function _mixedSort(a,lo,hi) {
    if(lo>=hi) return;
    if(hi-lo < 20) return _insertSort(a,lo,hi)
    else return _mergeSort(a,lo,hi)
}

// 归并排序函数
function _mergeSort(a, lo, hi) {
    if (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        _mergeSort(a, lo, mid);
        _mergeSort(a, mid + 1, hi);
        return _merge(a, lo, mid, hi)
    }
}
// 插入排序函数
function _insertSort(a,lo,hi) {
    for(var i = lo; i <= hi; i++){
        var key = a[i];
        while (a[i-1] > key && i>=lo){
            a[i]=a[i-1];
            i--;
        }
        a[i]=key;
    }
    return a;
}
// 原地归并函数
function _merge(a, lo, mid, hi) {
    // 把a复制到临时辅助数组aux.
    var i = lo; //数组左边起始位
    var j = mid + 1; //数组右边起始位
    var aux = [];
    for (var k = lo; k <= hi; k++) {
        aux[k] = a[k];
    }
    for (var k = lo; k <= hi; k++) {
        // i>mid,左边用完
        if (i > mid)              a[k] = aux[j++];
        else if (j > hi)          a[k] = aux[i++];
        // 左边<右边
        else if (aux[i] < aux[j]) a[k] = aux[i++];
        else                      a[k] = aux[j++];
    }
    return a;
}
















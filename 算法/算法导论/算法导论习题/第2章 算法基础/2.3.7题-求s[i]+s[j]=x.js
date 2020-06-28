// 给定一个整数的集合s
// 和另一个整数x,该算法能
// 确定s中是否存在两个其和
// 刚好为x的元素

function pairExists(s, x) {
    // 首先排序s,然后迭代每个元素i
    var a = mergeSort(s);
    // console.log(a)
    // 使用二分查找每个元素,如果 x-s[i]=ele
    for(var i =0;i< a.length;i++){
        // 二分查找法查找x-s[i]的元素
        // console.log(a[i]);
        // console.log(a[binarySearch(a,x-a[i])])
        if(binarySearch(a,x-a[i])!== "NIL")
            return true;
    }
    return false;
}

var s = [ 2, 5, 6, 3, 4, 7, 9, 1 ];
var x = 9;
console.log(pairExists(s, x))


// 二分查找科里化
function binarySearch(a,v) {
    var lo = 0;
    var hi = a.length-1 ;
    // return _binarySearch(a,v,lo,hi)
    while (lo <= hi){
        var mid = Math.floor((lo+hi)/2);
        if(a[mid]==v) return mid;
        else if(a[mid]<v) lo=mid+1; //在右边
        else hi=mid-1 //在左边
    }
    return "NIL"
}
// 测试二分查找科里化
// console.log(binarySearch([ 1, 2, 3, 4, 5, 5, 7, 9 ],3));
// 二分查找
function _binarySearch(a, v,lo,hi) {
    while (lo <= hi){
        var mid = Math.floor((lo+hi)/2);
        if(a[mid]==v) return mid;
        else if(a[mid]<v) lo=mid+1; //在右边
        else hi=mid-1 //在左边
    }
    return "NIL"
}
// 测试二分查找,应该是有序的数组
// console.log(_binarySearch([ 1, 2, 3, 4, 5, 5, 7, 9 ],7,0,7));

// 归并排序科里化
function mergeSort(a) {
    var lo = 0;
    var hi =  a.length-1;
    return _mergeSort(a,lo,hi)
}
// 测试归并排序科里化函数
// console.log("归并排序科里化:",mergeSort([2,4,5,6,7,3,1,2,9,0,45,89,12,5]));
// 归并排序
function _mergeSort(a,lo,hi) {
    if(lo < hi){
        var mid = Math.floor((lo+hi)/2);
        _mergeSort(a,lo,mid);
        _mergeSort(a,mid+1,hi);
        return _merge(a,lo,mid,hi);
    }
    // return a
}
// 测试归并排序
// console.log(_mergeSort([2,4,5,6,7,3,1,2,9,0,45,89,12,5],0,13));

// 归并函数
function _merge(a,lo,mid,hi) {
    var i = lo, j = mid + 1;
    var aux = [];
    for(var k = lo; k <= hi; k++){
        aux[k] = a[k];
    }
    for(var k = lo; k <= hi; k++){
        if(i > mid)            a[k] = aux[j++];
        else if(j > hi)        a[k] = aux[i++];
        else if(aux[i]<aux[j]) a[k] = aux[i++];
        else                   a[k] = aux[j++];
    }
    return a;
}
/*
function _merge(a,lo,mid,hi) {
    var m = mid -lo +1, n = hi-mid;
    var l = [], r = [];
    // 左右数组的下标是从0开始的,而a数组下标是从lo...hi
    for(var i = 0; i < m; i++){
        l[i] = a[lo+i]
    }
    for(var j = 0; j < n; j++){
        r[j] = a[mid+1+j]
    }
    //增加哨兵位
    l[i] = Number.POSITIVE_INFINITY;
    r[j] = Number.POSITIVE_INFINITY;
    // console.log(l,r)
    // 循环a数组
    var i=0,j=0;
    for(var k=lo;k<=hi;k++){
        if(l[i]<r[j])  a[k]=l[i++]
        else           a[k]=r[j++]
    }
    return a
}
*/
// 测试归并函数
// console.log(_merge([2,3,4,5,1,5,7,9],0,3,7));












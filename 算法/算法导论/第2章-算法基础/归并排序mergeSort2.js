
function _mergeSort(a,lo,hi) {
    if(lo<hi){
        var mid = Math.floor((lo+hi)/2);
        _mergeSort(a,lo,mid);
        _mergeSort(a,mid+1,hi);
        return _merge(a,lo,mid,hi)
    }
}

function _merge(a,lo,mid,hi) {
    // lo=0,mid=1,hi=0;i=0,j=2
    var i = lo, j = mid + 1; 
    var aux = [];
    for(var k = lo; k <= hi; k++){
        aux[k] = a[k];
    }
    for(var k = lo; k <= hi; k++){
        // 当只有一个数组时
        // 0>1 不执行
        if(i > mid)            a[k] = aux[j++];
        // 2>0 执行,说明只有左边有数据,a[0]=aux[0]
        else if(j > hi)        a[k] = aux[i++];
        // aux[0] < aux[0] 不执行
        else if(aux[i]<aux[j]) a[k] = aux[i++];
        // 不执行
        else                   a[k] = aux[j++];
    }
    return a;
}

/*
function _merge(a,lo,mid,hi) {
    var m = mid - lo + 1,
        n = hi - mid,
        l = [],
        r = [];
    // 这样分解数组时存在问题的,当采用递归,数组元素只有1个的时候
    // lo=0,mid=1,hi=1,m=2,n=1;
    for(var i = 0; i < m; i++){
        l[i] = a[lo+i];
    }
    for(var j = 0; j < n; j++){
        r[j] = a[mid+1+j]; // a[2]=undefined了
    }
    console.log(l,r);
    
    var i = 0, j = 0;
    for(var k = 0; k <= hi; k++){
        if(i >= m)          a[k] = r[j++];
        else if(j >= n)      a[k] = l[i++];
        else if(l[i] < r[j]) a[k] = l[i++];
        else                 a[k]=r[j++]
    }
    return a;
}
*/

var a = [2,4,5,6,1,2,3,4,5];
// console.log(_merge(a,3,3,4))
// console.log(_mergeSort(a,0,a.length-1))
// var b = [7,5];
// console.log(_mergeSort(b,0,1,0))

// 归并排序的科里化
function mergeSort(a) {
    var lo=0,
        hi=a.length-1;
    return _mergeSort(a,lo,hi)
}
console.log(mergeSort(a))





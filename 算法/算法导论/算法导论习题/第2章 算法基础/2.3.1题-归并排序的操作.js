
// 说明归并排序再数组 
// var a = [3,41,52,26,38,57,9,49]上的操作
function mergeSort(a,lo,hi) {
    // 按照二叉树递归
    if(lo<hi){
        var mid = Math.floor((lo+hi)/2);
        mergeSort(a,lo,mid);
        mergeSort(a,mid+1,hi);
        _merge(a,lo,mid,hi)
    }
    return a;
}

function _merge(a,lo,mid,hi) {
    // 部分有序的数组的合并排序
    // 先定义2个辅助数组,再把2个数组组合到一起
    var l=[],r=[];
    for(var i=0;i<mid-lo+1;i++){
        l[i]=a[lo+i];
    }
    for(var j=0;j<hi-mid;j++){
        r[j]=a[mid+1+j]
    }
    //增加哨兵位
    l[i]=Number.POSITIVE_INFINITY;
    r[i]=Number.POSITIVE_INFINITY;
    // 遍历a数组,把a数组元素进行重置
    var i=0,j=0;
    for(var k=lo;k<=hi;k++){
        if(l[i]<r[j]) a[k]=l[i++]
        else a[k]=r[j++]
    }
    console.log(l,r)
    return a
}

var a = [3,41,52,26,38,57,9,49]
console.log(mergeSort(a,0,a.length-1))













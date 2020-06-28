/*
注意到2.1节中的过程insert-sort的第5-7行用while循环,
反向扫描已排号的子数组,我们可以用二分查找(参见2.3.5)
把插入排序的最坏情况改进到 n*log2(n)
 */
//原始的插入排序算法
function insertSort(a) {
    for(var i=1;i<a.length;i++){
        var key =a[i];
        while (a[i-1]>key && i>0){
            a[i]=a[i-1];
            i--;
        }
        a[i]=key;
    }
    return a;
}
var a = [31,41,59,26,41,58];
console.log(insertSort(a))
// 二分查找法
function findV(a,v,lo,hi) {
    if(lo<hi){
        var mid = Math.floor((lo+hi)/2);
        if(a[mid]==v) return mid;
        else if(a[mid]<v) return findV(a,v,mid+1,hi)
        else if(a[mid]>v) return findV(a,v,lo,mid);
    }else{
        return "NIL"
    }
}
console.log(findV(a,41,0,a.length-1));

// 递归查找
function _find(a,i,v) {
    if(i==a.length) return "NIL"
    if(v === a[i]) return i;
    return _find(a,i+1,v)
}

// 把insertSort()while部分改递归
function insertSort2(a) {
    for(var i=1;i<a.length;i++){
        var key =a[i];
        /***************这部分要改掉***************/
        // 把已经排序好的数组先进行二分;
        // 如果a[i]<=mid,说明a[i]要往left移动,左边再折半,从这个位置开始所有元素右移动
        // 如果a[i]>mid,说明a[i]要往right移动,右边再折半,从这个位置开始所有元素右移动
        // 本题答案是不能,因为还需要执行等量的交换顺序,只是减少了比较的次数
        
        /***************这部分要改掉***************/
        a[i]=key;
    }
    return a;
}






/*
p数组开始下标,r数组结束下标
先划分数组
 */
function mergeSort(a,p,r) {
    // a,p=0,r=8;
    
    if(p < r){
        // 奇偶问题
        var q = Math.floor((p+r)/2);
        mergeSort(a,p,q) // 左边有序  
        mergeSort(a,q+1,r); // 右边有序
        return merge(a,p,q,r)
    }
    /*var q;
    if(r-p===1 || r===p){
        q=p;
        return merge(a,p,q,r)
    }else{
        var q = Math.floor((p+r)/2);
        mergeSort(a,p,q) // 左边有序  
        mergeSort(a,q+1,r); // 右边有序
        return merge(a,p,q,r)
    }*/
}
var a  = [2,4,5,6,7,3,1,2,9,0,45,89,12,5];
// mergeSort(a,0,a.length);
console.log(mergeSort(a,0,a.length-1))

/*
function merge(a,p,q,r) {
    var n1 = q-p; //第1个数组长度-1
    var n2 = r-q; // 第2个数组长度-1
    // 定义2个新数组
    var left = [];
    var right = [];
    for(let i=0;i<n1;i++){
        left[i] = a[p+i];
    }
    for(let j=0;j<n2;j++){
        right[j] = a[q+j];
    }
    left[n1]= Number.POSITIVE_INFINITY;
    right[n2]=Number.POSITIVE_INFINITY;
    
    // console.log(left)
    // console.log(right)
    
    let i = 0;
    let j = 0;
    for(let k=p;k<r-p;k++){
        if(left[i]<=right[j]){
            a[k]=left[i];
            i++;
        }else{
            a[k]=right[j]
            j++;
        }
    }
    return a;
}
*/


function merge(a,lo,mid,hi) {
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













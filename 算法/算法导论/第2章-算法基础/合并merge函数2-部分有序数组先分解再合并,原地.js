/*
a是一个数组
p,q,r是数组的下标,p<=q<=r.
假设a[p,...,q]和a[q+1,...,r]都已经排好序,
合并这2个数组,代替当前数组a[p,...,r]
假设数组如下:  
  1,2,3,4,5
 [2,4,5,7,infinite]
  1,2 3,4,5
 [1,2,3,5,infinite]
 [1,2,2,3,4,5,6,7]
  1,2,3,4,5,6,7,8
  p       q     r
  0       4     7
 */
// 可以对2列有序的数组进行合并,合并后的顺序就是要排列的顺序
function merge(a,lo,mid,hi) {
    // 先分解,确定左右两边数组的下标范围
    if(hi > a.length -1 || lo < 0) throw new Error("数组高位或低位越界!");
    
    var lRange = mid - lo + 1; // 2-0=2,实际3个元素,要+1
    var rRange = hi - mid; // 7-2=5 //实际就是5个元素,不需要+1
    // 定义2个新辅助数组
    var l = [], r = [];
    // 把数组a中的元素分解到 l,r中
    for(var i = 0; i < lRange; i++){
        l[i] = a[lo+i];
    }
    for(var j = 0; j < rRange; j++){
        r[j] = a[mid+1+j]
    }
    // console.log(l,r) // [ 2, 4, 5 ] [ 1, 2, 3, 6, 7 ]
    // 把得到的两个数组进行合并
    // return _merge(l,r)
    // 利用a数组重置元素进行排序
    // 定义2个变量反映l,r指针的变化
    // var i = lo, j = mid + 1; // lo = 0, j = 3
    var i=0,j=0;
    // 循环a数组,重置每个元素,只取lo,hi这一段
    for(var k = lo; k <= hi; k++){
        // 如果左边取完就取右边
        if(i >= lRange)           a[k] = r[j++];
        else if(j >= rRange)       a[k] = l[i++];
        else if(l[i] <= r[j]) a[k] = l[i++];
        else                  a[k] = r[j++];
    }
    return a
}
var a  = [2,4,5,1,2,3];
// 分解数组时必须要分段有序
// console.log(merge(a,0,2,7));
console.log(merge(a,0,2,5))

/*
function _merge(l,r) {
    // 创建一个新的数组,最后返回这个数组
    var a = [];
    // 定义2个计数变量,记录左右两边数组的指针变化
    var i = 0, j = 0;
    // 获取l,r数组的长度
    var m = l.length,n = r.length;
    // 定义a数组的长度
    var aLength = m + n;
    // 循环这个a数组,为a数组里添加元素
    for(var k = 0; k < aLength; k++){
        // 左边取完只取右边,=m是边界,所以要去掉
        if(i >= m)            a[k] = r[j++];
        else if(j >= n)       a[k] = l[i++];
        // 左边小于右边 取左边
        else if(l[i] <= r[j]) a[k] = l[i++];
        else                  a[k] = r[j++]
    }
    // 返回这个数组
    return a;
}
*/

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
    console.log(left,left.length-2)
    console.log(right,right.length-2)
    let i = 0;
    let j = 0;
    for(let k=p;k<r;k++){
        //   0  1  2  3   4
        // [ 2, 4, 5, 7, 'infinite' ] 
        // [ 1, 2, 3, 6, 'infinite' ] 
        // k=0;i=0;j=0 [2],[1];             a[0]=right[0]=1; i=0;j=1
        // k=1;i=0;j=1 [2],[2];             a[1]=left[0]=2; i=1;j=1
        // k=2;i=1;j=1 [4],[2];             a[2]=right[1]=2;i=1;j=2
        // k=3;i=1;j=2 [4],[3];             a[3]=right[2]=3;i=1;j=3
        // k=4;i=1;j=3 [4],[6];             a[4]=left[1]=4; i=2;j=3
        // k=5;i=2;j=3 [5],[6];             a[5]=left[2]=5; i=3;j=3
        // k=6;i=3;j=3 [7],[6];             a[6]=right[3]=6;i=3;j=4
        // 当k<8-1=7时,k=7时循环就结束了.k<r
        // k=7;i=3;j=4 [7],['infinite'];    a[7]=left[3]=7; i=4;j=4
        // k=8 时,循环结束
        // k=7 时,循环体内无法比较,原数组中a[7]本来就是6
        if(left[i]<=right[j]){
            a[k]=left[i];
            i++;
        }else{
            a[k]=right[j]
            j++;
        }
    }
    console.log(a)
}
*/


















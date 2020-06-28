/*
返回数组第i小的元素
1,首先是划分数组
2,再转成随机划分数组
3,返回第i小的元素
 */
// 划分数组
function partition(a,lo,hi) {
    /*
        [ 3, 5, 6, 9, 2, 8 ]
                         povit
        i
          j->                 hg
      */
    // 以数组的最后一个元素作为主元
    var pivot = a[hi];
    var i = lo-1; //循环不变量的起始下标
    for(let j = lo;j<=hi;j++){
        // 从数组的低位开始,到数组的高位进行循环
        if(a[j]<pivot){
            // 如果当前元素<主元,就把i指针指向的元素+1与当前元素交换
            // 因为前面如果有元素>主元,指针i是不动的,
            // 当遇到当前元素 < 主元时,意味着i指针后面的这个元素>主元,
            // 需要与当前循环的元素与前面大于主元的元素交换下位置
            i=i+1;
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
    // 循环结束时:
    // 还有把主元和当前i指针后面的一个元素调换下位置,
    // 把主元作为拦截坝
    temp = a[i+1];
    a[i+1] = a[hi];
    a[hi] = temp;
    return i+1;
}

// 随机划分数组
function randomizedPartition(a,lo,hi) {
    // i 是界于[lo,hi)之间的一个随机数
    var i = Math.floor(lo + (hi-lo)*Math.random());
    // console.log(a[i]);
    // 由于 partition是以最后一个元素作为主元划分
    // 故要把最后一个元素与a[i]交换一下,以便可以
    // 利用partition这个函数
    var temp = a[hi];
    a[hi] = a[i];
    a[i]= temp;
    return partition(a,lo,hi)
}

// 返回第k小的值
// 如果第k小的k恰好就是i值,
function randomizedSelect(a,lo,hi,i) {
    if(lo==hi) return a[lo];
    // 随机划分数组,左边每个元素都小于等于a[mid]
    // 右边每个元素都大于a[mid]
    var mid = randomizedPartition(a,lo,hi);
    // 计算子数组a[lo,mid内的元素个数,即处于划分的低区的元素个数加1,这个1指主元
    var k = mid-lo+1;
    // 检查a[mid]是否是第i小的元素,如果是第i小,下面这行就返回
    if(i==k) return a[mid];
    // 如果不是第 i 小?假设落在低区,就在低区找
    else if(i<k) return randomizedSelect(a,lo,mid-1,i);
    // 假设落在高区,就在高区找.
    // 因为我们已经制造了有k个值都比第i小,即a[lo..mid]内的元素都比 i小,
    // 所以,我们要找的元素必然是a[mid+1,hi]中的第i-k小的元素.
    else return randomizedSelect(a,mid+1,hi,i-k)
    /*
    The are two cases where it appears that RANDOMIZED-SELECT 
    can make a call to a 0-length array:
    1.Line 8 with k=1 . But for this to happen, 
      i  needs to be 0. And that cannot happen 
      since the initial call is supposed to pass 
      a nonzero i  and the recursive calls either 
      pass i  unmodified or pass i−k  where i>k .
    2.Line 9 with q=r . But for this to happen, 
      i  must be greater than k , that is i>q−p+1=r−p+1 , 
      that is, i  needs to be greater than the number of 
      elements in the array. Initially that is not true and 
      both recursive calls maintain an invariant that i  
      is less or equal to the number of elements in A[p..q] .
     */
}


var a =       [ 3, 5, 9, 6, 2, 8 ];
//              1  2  3  4  5  6
//            [ 3, 5, 6, 2, 8, 9 ]
// partition(a,0,a.length-1);
randomizedPartition(a,0,a.length-1);
console.log(a);

console.log(randomizedSelect(a,0,a.length-1,1));
console.log(randomizedSelect(a,0,a.length-1,2));
console.log(randomizedSelect(a,0,a.length-1,3));
console.log(randomizedSelect(a,0,a.length-1,4));
console.log(randomizedSelect(a,0,a.length-1,5));
console.log(randomizedSelect(a,0,a.length-1,6));








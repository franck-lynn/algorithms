/**
 * 分割算法的实现,始终使用第n-1个元素作为主元元素,
 *    [ 3, 5, 9, 6, 2, 8 ];
 *                      pivot 作为主元
 *    ⬆                       初始的指针i,起始索引 -1
 *      ▶                    指针 j 由数组下标从低到高扫描整个数组,小于主元时 i+1 与 j 交换
 *                                                                大于主元时i不动,只有 j 自增
 *     1, [ 3, 5, 9, 6, 2, 8 ] j=0时,i+1与j交换,注意是j,第1次是3和3本身交换
 *          ⬆
 *          ▶
 *     2, [ 3, 5, 9, 6, 2, 8 ] j=1时,i+1与j交换,注意是j,第2次是本身交换
 *             ⬆
 *             ▶
 *     3, [ 3, 5, 9, 6, 2, 8 ] j=2时,j只自增,不交换
 *             ⬆
 *                ▶
 *     4, [ 3, 5, 9, 6, 2, 8 ] j=3时,i+1与j交换,注意是j,9,6交换
 *             ⬆
 *                   ▶
 *     5, [ 3, 5, 6, 9, 2, 8 ] j=4时,i+1与j交换,注意是j,9,2交换
 *                ⬆
 *                      ▶
 *     6, [ 3, 5, 6, 2, 9, 8 ] j=5时,循环结束
 *                   ⬆
 *                         ▶
 */


function partition(a,lo,hi) {
    var pivot = a[hi];
    var i = lo - 1;
    for (var j=i+1;j<=hi;j++){
        // 如果a[j]<主元,就把i+1,把这个元素与j交换
        if (a[j]<pivot){
            i=i+1;
            var temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    // console.log("此时的i应该是指向元素2,下标是3",i==3)
    temp = a[i+1];
    a[i+1] = a[hi];
    a[hi] = temp;
    // console.log("返回的i=",i+1)
    return i+1; // 这时的下标 i+1 是4,也就是第4小的元素,因为前面的都比它小,后面的都比它大
}
//              2  3  6  4  1  5    第几小                 
var a =       [ 3, 5, 9, 6, 2, 8 ];
//              1  2  3  4  5  6
// after sort [ 2, 3, 5, 6, 8, 9 ]
partition(a,0,a.length-1);
console.log(a)
function findKthElement(arr, lo, hi, i) {
    // 主元所在的下标应有的位置
    var povitIndex = partition(a,lo,hi);
    var k =povitIndex - lo + 1; //k 表示数组中 第 k 小的元素(第1小的元素为最小元素)  
    if(i == k)
         return arr[povitIndex];
     else if(i < k)
         return findKthElement(arr, lo, povitIndex - 1, i);
     else
         return findKthElement(arr, povitIndex + 1, hi, i - k);//i-k  
}

console.log(findKthElement(a,0,a.length-1,5))




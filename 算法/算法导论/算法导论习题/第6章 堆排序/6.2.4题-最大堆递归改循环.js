/**
 * Created by franck.lynn on 2018/3/30 14:28.
 */
// 维护堆
function maxHeapify(a,i) {
    var left,right,largest,temp;
    while(true){
        // 左节点下标
        left = 2*i+1;
        // 右节点下标
        right = 2*i+2;
        // 如果左节点大,改最大为左节点
        if(left<a.length && a[left]>a[i]) largest = left;
        else largest = i;
        // 如果右节点大,改最大为右节点
        if(right<a.length && a[right]>a[largest]) largest =right;
        // 如果最大就在父节点,则返回
        if(largest===i) return ;
        // 最大不在父节点,就交换
        temp = a[i];
        a[i]=a[largest];
        a[largest]=temp;
        // 重值最大节点
        i=largest;
    }
}
// 创建最大堆
function buildMaxHeap(a) {
    var aHeapSize = a.length;
    for(var i=Math.floor(aHeapSize)/2;i>=0;i--){
        maxHeapify(a,i);
    }
    return a
}
//        0   1   2   3   4  5  6  7  8  9   10 11 12 13
//     [ 27, 17, 10, 16, 13, 9, 1, 5, 7, 12, 4, 8, 3, 0 ]
var a =[ 27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0] ;
console.log(buildMaxHeap(a));
//       0    1   2  3  4   5   6   7  8  9
//     [ 16, 14, 10, 8, 7,  9,  3,  2, 4, 1 ]
var b= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];
console.log(buildMaxHeap(b));



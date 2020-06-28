/**
 * Created by franck.lynn on 2018/3/30 14:28.
 */
// 维护堆
function maxHeapify(a,i) {
    // 定义左节点的下标,i是从0开始的
    var left = 2*i+1;
    // 定义右节点的下标
    var right =2*i+2;
    // 定义最大值的下标,假设只有3个元素的情况下.
    var largest = 0;
    // 如果左节点比父节点大,则把左节点下标保存
    if(left<a.length && a[left]>a[i]) largest=left;
    else largest = i;
    // 再判断右节点下标元素,如果右节点元素大,
    // 就再把最大值设置为右边的下标,说明是最大
    if(right<a.length && a[right]>a[largest]) largest=right;
    // 经过这些比较,说明largest不是i的时候,就需要交换了
    if(largest!==i){
        var temp = a[i];
        a[i]=a[largest];
        a[largest]=temp;
        // 交换完成后还要重新维护一下堆结构
        // largest变成左,或右节点中的一个,也就是说继续向下执行
        maxHeapify(a,largest)
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
//     [ 27, 17, 10, 16, 13, 9, 1, 5, 7, 12, 4, 8, 3, 0 ]
var a =[ 27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0] ;
console.log(buildMaxHeap(a));
//       0    1   2  3  4   5   6   7  8  9
//     [ 16, 14, 10, 8, 7,  9,  3,  2, 4, 1 ]
var b= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];
console.log(buildMaxHeap(b));

// 当i>heap-size/2时,调用maxHeapify(a,i)是什么结果
// 9/2=4,

function printMaxHeapify(a,i) {
    maxHeapify(a,i)
    return a[i]
}
console.log("当i>heap-size/2时,调用maxHeapify(a,i)是什么结果:",printMaxHeapify(a,5))


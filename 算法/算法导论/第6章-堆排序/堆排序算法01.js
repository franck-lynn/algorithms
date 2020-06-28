// 维护最大堆
function maxHeapify(a,i,len) {
    // 先定义左,右节点以及保存最大值的下标
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    var largest = 0;
    if(l<len && a[l]>a[i]) largest=l;
    else largest=i;
    if(r<len && a[r]>a[largest]) largest=r;
    if(largest!==i){
        // 交换数据
        var temp = a[i];
        a[i] =a[largest];
        a[largest] =temp;

        // 递归最大堆
        maxHeapify(a,largest,len);
    }
}

// 创建大堆
function buildMaxHeap(arr) {
    for(var i=Math.floor(a.length/2);i>=0;i--){
        maxHeapify(a,i,a.length-1);
    }
}

// 堆排序
function heapSort(a) {
    // 先建堆
    buildMaxHeap(a);
    console.log(a);
    // 把第0个元素与第i个元素交换.
    // 刚开始的a[i]时数组的最后一个元素
    // var aHeapSize=a.length-1;
    for (var i=a.length-1;i>=1;i--){
        var temp =a[0];
        a[0]=a[i];
        a[i]=temp;
        // 重新维护堆
        maxHeapify(a,0,i)
    }
    console.log(a)
}

//     [ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ]
var a= [ 4, 1,  3, 2, 16, 9, 10, 14, 8, 7 ];
heapSort(a);



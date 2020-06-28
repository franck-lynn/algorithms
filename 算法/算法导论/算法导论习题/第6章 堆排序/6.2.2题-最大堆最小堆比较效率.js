/**
 * Created by franck.lynn on 2018/3/30 20:29.
 */

// 最大堆和最小堆比较效率
/*
/*
            ①4
          /     \
       ②1        ③3
     /   \     /     \
   ④2    ⑤16   ⑥9   ⑦10
   /\     /
 ⑧10 ⑨8  ⑩7
*/

// 维护最大堆
function maxHeapify(a,i) {
    // 先定义左,右节点以及保存最大值的下标
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    var largest = 0;
    if(l<a.length && a[l]>a[i]) largest=l;
    else largest=i;
    if(r<a.length && a[r]>a[largest]) largest=r;
    if(largest!==i){
        // 交换数据
        var temp = a[i];
        a[i] =a[largest];
        a[largest] =temp;
        
        // 递归最大堆
        maxHeapify(a,largest);
    }
}
// 创建大堆
function buildMaxHeap(a) {
    for(var i=Math.floor(a.length/2);i>=0;i--){
        maxHeapify(a,i);
    }
    return a;
}

// 维护最小堆
function minHeapify(a,i) {
    // 定义左,右子树的下标以及最小值的下标
    var l = 2*i+1;
    var r = 2*i+2;
    var small = 0;
    // 先比较左边和父节点的大小,小的要跑到上面
    if (l<a.length && a[l]<a[i]) small=l;
    else small=i;
    // 如果r最小
    if(r<a.length && a[r]<a[small]) small =r;
    if(small!==i){
        var temp =a[i];
        a[i]=a[small];
        a[small]=temp;
        
        minHeapify(a,small);
    }
}
// 创建小堆
function buildMinHeap(a) {
    for(var i=Math.floor(a.length/2);i>=0;i--){
        minHeapify(a,i)
    }
    return a
}

// 利用循环实现大堆堆维护
function maxHeapifyByLoop(a,i) {
    // 定义堆左,右,最大值的下标
    var l,r,largest,temp;
    while(true){
        // 左子树
        l = 2*i+1;
        r = 2*i+2;
        if (l<a.length && a[l]>a[i]) largest=l;
        else largest = i;
        if(r<a.length && a[r]>a[largest]) largest =r;
        if(largest === i) return ;// 程序退出
        // 交换数据
        temp =a[i];
        a[i]=a[largest];
        a[largest] =temp;
        
        i = largest;
    }
}
// 构建大堆
function buildMaxHeapByLoop(a) {
    for(var i=Math.floor(a.length/2);i>=0;i--){
        maxHeapifyByLoop(a,i)
    }
    return a;
}
// 利用循环实现小堆的维护
function minHeapifyByLoop(a,i) {
    var l,r,small,temp;
    while (true){
        l = 2*i+1;
        r = 2*i+2;
        if(l<a.length && a[l]<a[i]) small=l;
        else small = i;
        if(r<a.length && a[r]<a[small]) small =r;
        if(small===i) return ;
        temp = a[i];
        a[i]= a[small];
        a[small]=temp;
        
        i = small;
    }
}
// 构建小堆用循环
function buildMinHeapByLoop(a) {
    for(var i=Math.floor(a.length/2);i>=0;i--){
        minHeapifyByLoop(a,i);
    }
    return a;
}

module.exports.buildMaxHeap=buildMaxHeap;
//       0    1   2  3  4   5   6   7  8  9
//     [ 16, 14, 10, 8, 7,  9,  3,  2, 4, 1 ]
var a= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];
var b= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];
var c= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];
var d= [ 4,   1,  3, 2, 16, 9, 10, 14, 8, 7 ];

var s1=new Date();
console.log("递归构建大堆:",buildMaxHeap(a));
var e1 =new Date();

var s2=new Date();
console.log("循环构建大堆:",buildMaxHeapByLoop(b));
var e2 =new Date();

var s3=new Date();
console.log("递归构建小堆:",buildMinHeap(c));
var e3 =new Date();

var s4=new Date();
console.log("循环构建小堆:",buildMinHeapByLoop(d));
var e4 =new Date();
console.log(`
         递归大堆:${e1-s1}ms;
         循环大堆:${e2-s2}ms;
         递归小堆:${e3-s3}ms;
         循环小堆:${e4-s4}ms;
         `);


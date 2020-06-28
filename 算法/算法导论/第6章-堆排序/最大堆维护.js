/**
 * Created by franck.lynn on 2018/3/29 23:56.
 * https://www.imooc.com/video/15740
 */

function buildMaxHeap(a){
    var aHeapSize = a.length;
    for(var i=Math.floor(aHeapSize)/2;i>=0;i--){
        maxHeapify(a,i)
    }
    return a
}
// 维护堆
/*
            ①4
          /     \
       ②1        ③3
     /   \     /     \
   ④2    ⑤16   ⑥9   ⑦10
   /\     /
 ⑧10 ⑨8  ⑩7
*/
function maxHeapify(a,i) {
    var l=left(i);
    var r=right(i)
    // 定义最大数的下标
    var largest=0;
    // 若左子节点>父节点
    if(l< a.length && a[l]>a[i]){
        // 就把最大值的的下标设置为l
        largest =l
    }else {
        largest=i;
    }
    // 如果右节点大,就是最大
    if(r<a.length && a[r]>a[largest]){
        largest=r;
    }
    if(largest!=i){
        var temp=a[i];
        a[i]=a[largest];
        a[largest]=temp;
        maxHeapify(a,largest)
    }
}
// 父节点的下标
function parent(i) {
    return Math.floor(i/2)
}
// 左节点的下标
function left(i) {
    return 2*i+1;
};
// 右节点下标
function right(i) {
    return 2*(i+1);
}
//    [ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ]
var a=[ 4, 1, 3, 2, 16, 9, 10, 14, 8, 7 ];
var b =[27,17,3,16,13,10,1,5,7,12,4,8,9,0];
console.log(buildMaxHeap(a))
console.log(buildMaxHeap(b))







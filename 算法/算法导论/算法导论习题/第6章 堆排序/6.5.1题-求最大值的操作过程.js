/**
 * Created by franck.lynn on 2018/4/1 15:27.
 *  试说明heapExtractMax在堆
 *  a = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1]上的操作过程.
 *  1,首先要构建一个堆
 *  2,构建堆要先维护一个堆
 */
/*
堆的结构如下类似
               〇16
           /        \
        ①14          ②10
     /     \       /   \
   ③8       ④7    ⑤9    ⑥3
/    \      /
⑦2    ⑧4   ⑨1
 */

/*
function maxHeapify(a,i,len) {
    // i表示从那个父元素开始维护,一般是从0开始
    var l,r,largest,temp;
    while(true){
        l=2*i+1;
        r=2*i+2;
        // 左子树>父节点
        if(l<=len&&a[l]>a[i]) largest=i;
        else largest=i;
        if(r<=len&&a[r]>a[largest]) largest=r;
        if(largest===i) return;
        temp=a[i];
        a[i]=a[largest];
        a[largest]=temp;
        i=largest; // 进一步向叶子节点循环
    }
}
*/

function maxHeapifyByRecursive(a,i,len) {
    var l=2*i+1;
    var r=2*i+2;
    var largest = 0;
    if(l<=len && a[l]>a[i]) largest=l;
    else largest=i;
    if(r<=len && a[r]>a[largest]) largest=r;
    if(largest!==i){
        // 交换元素
        var temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;
        maxHeapifyByRecursive(a,largest,len)
    }
}
// 创建大顶堆
function buildMaxHeap(a) {
    for(var i=Math.floor((a.length-1)/2);i>=0;i--){
        // 从0开始到数组长度的元素维护堆
        maxHeapifyByRecursive(a,i,a.length-1)
    }
}

//    [ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ]
var a=[ 4, 1, 3, 2, 16, 9, 10, 14, 8, 7 ];
buildMaxHeap(a);
console.log("维护堆后         :",a);  
// 取出堆中的最大值
function heapExtractMax(a) {
    // a是已经建好的堆
    var max;
    if(a.length<0) throw new Error("下标越界");
    max=a[0];
    // 把把最后一个值赋值给a[0],同时把数组长度-1
    a[0]=a[a.length-1];
    a.length=a.length-1;
    // 维护剩下的数组
    maxHeapifyByRecursive(a,0,a.length-1);
    return max;
}
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));
console.log("求最大值后剩下的堆:",a);
console.log("求堆a的最大值:",heapExtractMax(a));




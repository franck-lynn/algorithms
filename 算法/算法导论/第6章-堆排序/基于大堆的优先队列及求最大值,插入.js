/**
 * Created by franck.lynn on 2018/3/31 22:10.
 * 普通的队列是一种先进先出的数据结构，元素在队列
 * 尾追加，而从队列头删除。在优先队列中，元素被赋
 * 予优先级。当访问元素时，具有最高优先级的元素最
 * 先删除。优先队列具有最高级先出 
 * （first in, largest out）的行为特征。
 */

//    [ 16, 14, 10, 8, 7,  9,  3,  2, 4, 1 ] // 大堆构建好后的数组
// var a=[ 4,  1,  3,  2, 16, 9, 10, 14, 8, 7 ];
//       0   1   2    3  4   5   6   7  8  9
var a= [ 16, 14, 10,  8, 7,  9,  3,  2, 4, 1 ] ;// 大堆构建好后的数组
//     [ 16, 15, 10, 14, 7,  9,  3,  8, 4, 1 ]
// 建大堆后的数组
// buildMaxHeap(a);
// console.log("大堆构建好后的数组       :",a);
heapIncreaseKey(a,8,15);
console.log("修改堆键来改变优先级     :",a);
// 调用heapHeapInsert()方法
maxHeapInsert(a,13);
console.log("调用heapHeapInsert()方法:",a);

// console.log(b); // undefined
/*
console.log("创建大堆后      :",a);
console.log("获取最大值之后堆 1:",a,heapExtractMax(a));
console.log("获取最大值之后堆 2:",a,heapExtractMax(a));
console.log("获取最大值之后堆 3:",a,heapExtractMax(a));
console.log("获取最大值之后堆 4:",a,heapExtractMax(a));
console.log("获取最大值之后堆 5:",a,heapExtractMax(a));
console.log("获取最大值之后堆 6:",a,heapExtractMax(a));
console.log("获取最大值之后堆 7:",a,heapExtractMax(a));
console.log("获取最大值之后堆 8:",a,heapExtractMax(a));
console.log("获取最大值之后堆 9:",a,heapExtractMax(a));
console.log("获取最大值之后堆10:",a,heapExtractMax(a));
*/

// 增加堆的键,a是拥有大堆性质的数组
function heapIncreaseKey(a,i,key) {
    // key是键的优先级,现在要提高i的优先级,所以key的值要大于a[i],才能往上移动i=8
    if(key<a[i]) throw new Error("new key is smaller than current key");
    // 设置a[i]=15
    a[i]=key;
    // i>0,i最小为1, 0/2取整为0.可以到达最顶上的一个元素  (8-1)=7/2=3 (7-1)/2=3 
    while(i>0 && a[Math.floor((i-1)/2)]<a[i]){
        // a[4]<a[8]
        // 父元素与子元素交换
        var temp =a[i];
        a[i]=a[Math.floor((i-1)/2)];
        a[Math.floor((i-1)/2)]=temp;
        // i重置为父元素的下标
        i=Math.floor((i-1)/2)
    }
}
// 插入大堆
function maxHeapInsert(a,key) {
    // 把数组的长度增加1个,原来长度假设为10,现在为11.a.length=11;
    a.length = a.length+1;
    // 最后一个元素的下标为11-1=10,即a[10]=-infinity
    a[a.length-1]=Number.NEGATIVE_INFINITY;
    // 在数组的最后一个元素重置为key
    heapIncreaseKey(a,a.length-1,key)
}
/*
               〇16 max
           /        \
        ①14          ②10
     /     \       /   \
   ③8       ④7    ⑤9    ⑥3
/    \      /
⑦2    ⑧4*   ⑨1
1,现在需要把第8项变更为15
               〇16 max
           /        \
        ①14          ②10
     /     \       /   \
   ③8       ④7    ⑤9    ⑥3
/    \      /
⑦2    ⑧15* ⑨1
*/
// 获取最大值,输入一个堆,返回堆的最大值
function heapExtractMax(heap) {
    // a是已经建好的堆
    var max;
    // 当堆中没有元素时,返回错误
    if(heap.length<0) throw new Error("heap underflow");
    // 把堆中最大的元素保存下来.
    max =heap[0];
    /*
                   〇16 max
               /        \
            ①14          ②10
         /     \       /   \
       ③8      ④7    ⑤9    ⑥3
    /    \     /
   ⑦2    ⑧4   ⑨1
    */
    // 把数组中的最后一个元素复制到a[0]位置
    heap[0]=heap[heap.length-1];
    // 将数组的长度-1,也就是获取最大值后,
    // 把最后一个元素截掉
    a.length =a.length-1;
    // 剩下的数组重新维护堆
    maxHeapify(heap,0,heap.length-1);
    return max;
}






//    [ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ];
// 循环方式维护大堆
function maxHeapify(a,i,len) {
    // 这里从第i个元素开始维护
    var l,r,largest,temp;
    while(true){
        l=2*i+1;
        r=2*i+2;
        if(l<=len&&a[l]>a[i]) largest=l;
        else largest=i;
        if(r<=len&&a[r]>a[largest]) largest=r;
        if(largest===i) return;
        // 交换数组
        temp =a[i];
        a[i]=a[largest];
        a[largest]=temp;
        i=largest;// 接着往下循环,知道largest大于数组长度
    }
}
//创建大堆
function buildMaxHeap(a) {
    for(var i=Math.floor((a.length)/2);i>=0;i--){
        maxHeapify(a,i,a.length-1)
    }
}





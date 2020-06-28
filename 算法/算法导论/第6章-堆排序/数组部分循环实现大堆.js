/**
 * Created by franck.lynn on 2018/3/31 20:24.
 */
// 循环维护大堆(部分数组)
function maxHeapifyByLoop(a,i,len) {
    // 定义左子树,右子树,最大值下标和临时交换变量
    var l,r,largest,temp;
    while(true){
        // 左右子树
        l=2*i+1;r=2*i+2;
        // 如果左子树小于部分数组len长度且a[l]>a[i]
        if(l<len && a[l]>a[i]) largest=l;
        else largest=i;
        if(r<len && a[r]>a[largest]) largest = r;
        if(largest === i) return 
        //交换数组
        temp = a[i];
        a[i] = a[largest];
        a[largest]=temp;
        i=largest;
    }
}
/*
   重点理解:这里的i是从什么位置开始的.len是什么时候结束,len的长度是数组的长度
                   〇4
               /        \
            ①1           ②3
         /     \       /   \
       ③2      ④16   ⑤9    ⑥10
    /    \     /
   ⑦14   ⑧8  ⑨7
   // 循环维护大堆过程分析:
   大堆维护是从i=5开始的.
   i=5,l=11,r=12,这时候维护堆并没有执行,所以,并不需要从5开始,从i=4开始
   1.i=4,l=9,r=10,len=10,不执行交换
   2,i=3,l=7,r=8,len=10,交换
                   〇4
               /        \
            ①1           ②3
         /     \       /   \
       ③14*    ④16   ⑤9    ⑥10
    /    \     /
   ⑦2*   ⑧8  ⑨7
    i=largest=7,len=10不交换
   3,i=2,l=5,r=6,len=10,交换,后续无
                  〇4
               /        \
            ①1           ②10*
         /     \       /   \
       ③14     ④16   ⑤9    ⑥3*
    /    \     /
   ⑦2    ⑧8  ⑨7
    4,i=1,l=3,r=4,len=10,交换,largest=4,依次类推.
                   〇4
               /        \
            ①16*         ②10
         /     \       /   \
       ③14     ④1*    ⑤9    ⑥3
    /    \     /
   ⑦2    ⑧8  ⑨7
   ......
 */
// 构建大堆
function buildMaxHeapByLoop(a) {
    for(var i=Math.floor((a.length-1)/2);i>=0;i--){
        // 构建大堆是排除了len边界,所以是a.length
        maxHeapifyByLoop(a,i,a.length)
    }
}
// 大堆排序
function heapSort(a) {
    // 建堆
    buildMaxHeapByLoop(a);
    console.log("大堆建堆后的数组:",a)
    for(var i=a.length-1;i>=0;i--){
        var temp = a[0];
        a[0]=a[i];
        a[i]=temp;
        maxHeapifyByLoop(a,0,i)
    }
    console.log("大堆排序后的数组:",a)
}
/*

                   〇4
               /        \
            ①1           ②3
         /     \       /   \
       ③2      ④16   ⑤9    ⑥10
    /    \     /
   ⑦14   ⑧8   ⑨7
 1,首先建类大堆,建类大堆后的数组排序
                   〇16
               /        \
            ①14          ②10
         /     \       /   \
       ③8      ④7    ⑤9    ⑥3
    /    \     /
   ⑦2    ⑧4   ⑨1
 2,从数组的最后一位开始循环,i=9,交换a[9]与a[0],1与16交换
                    〇1*
               /        \
            ①14          ②10
         /     \       /   \
       ③8      ④7    ⑤9    ⑥3
    /    \     
   ⑦2    ⑧4   ⑨16*
   重新构建大堆[ , 14, 10, 8, 7, 9, 3, 2, 4, 1],元素16已经移到数组的末尾,并排除在大堆外
             〇14          
          /       \       
       ①10        ②8  
     /    \     /    \  
    ③7    ④9   ⑤3    ⑥2
  /   \
 ⑦4   ⑧1
 3,当i=8时,a[8]与a[0]交换,同理.
 4,重要的是理解循环维护大堆
 */
var a= [ 4, 1,  3, 2, 16, 9, 10, 14, 8, 7 ];
heapSort(a);








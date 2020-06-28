/**
 * Created by franck.lynn on 2018/3/30 15:23.
 */
// 维护最小堆
function minHeapify(a,i) {
    // 左子树的下标
    var l = 2*i+1;
    var r=  2*i+2;
    var smallest = 0;
    // 如果当前节点 < 左节点
    if(l<a.length && a[l]<a[i]) smallest=l;
    else smallest = i;
    if(r<a.length && a[r]<a[smallest]) smallest=r;
    if(smallest!=i){
        var temp =a[i];
        a[i] = a[smallest];
        a[smallest]=temp;
        minHeapify(a,smallest)
    }
}    
// 创建最小堆
function buildMixHeap(a) {
    for(var i = Math.floor(a.length/2);i>=0;i--){
        minHeapify(a,i)
    }
    return a;
}
//     [ 27, 17, 10, 16, 13, 9, 1, 5, 7, 12, 4, 8, 3, 0 ]
var a =[ 27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0] ;
console.log(buildMixHeap(a));
var b= [ 4, 1, 3, 2, 16, 9, 10, 14, 8, 7 ];
console.log(buildMixHeap(b));






/*
插入排序:
1,手上的牌是有序的,
2,抓到的牌往手上有序的牌里面插入.
  插入是从最后一张牌比较,小于就交换
 */

var a = [31,41,59,26,41,58];
//             i
for(var i = 1; i<a.length; i++){
    // 把第i个元素保存下来,都是和这个牌进行比较
    var key = a[i];
    // 前一个元素
    // var j =i-1;
    // 后一个元素 < 当前元素
    while (a[i-1] > key && (i-1) >= 0){
        // 交换这2个元素,后一个元素=当前元素
        a[i] = a[i-1];
        i--
    }
    a[i] = key
}
console.log(a)
















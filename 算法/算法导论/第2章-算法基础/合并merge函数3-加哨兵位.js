/*
a是一个数组
p,q,r是数组的下标,p<=q<=r.
假设a[p,...,q]和a[q+1,...,r]都已经排好序,
合并这2个数组,代替当前数组a[p,...,r]
假设数组如下:  
  1,2,3,4,5
 [2,4,5,7,infinite]
  1,2 3,4,5
 [1,2,3,5,infinite]
 [1,2,2,3,4,5,6,7]
  1,2,3,4,5,6,7,8
  p       q     r
  0       4     7
 */
// 可以对2列有序的数组进行合并,合并后的顺序就是要排列的顺序
// 加哨兵位
/*
思路:
先将a分解成2个数组按照高低位的下标分解
再将分解后的数组合并
步骤:
1.设置左右两边数组的长度,这个值左边从0开始,要+1,右边直接相减
2.把数组a分别拷贝到左右两边.
3,左右两边数组分别增加哨兵位
4,进行合并,
  4.1.设置2个变量分别代表左右两边数组的指针变化
  4.2.循环a数组,从指定的低位到高位
      ***左边取完只取右边,判断取完的标准是指针的下标 > 最后一个元素.***
      如果左<右,取左,左指针++
      否则,取右,右指针++
 */
function merge(a,lo,mid,hi) {
    var m = mid -lo +1, n = hi-mid;
    var l = [], r = [];
    // 左右数组的下标是从0开始的,而a数组下标是从lo...hi
    for(var i = 0; i < m; i++){
        l[i] = a[lo+i]
    }
    for(var j = 0; j < n; j++){
        r[j] = a[mid+1+j]
    }
    //增加哨兵位
    l[i] = Number.POSITIVE_INFINITY;
    r[j] = Number.POSITIVE_INFINITY;
    // console.log(l,r)
    // 循环a数组
    var i=0,j=0;
    for(var k=lo;k<=hi;k++){
        if(l[i]<r[j])  a[k]=l[i++]
        else           a[k]=r[j++] 
    }
    return a
}

var a  = [2,4,5,20,1,2,3,6];
// 分解数组时必须要分段有序
// console.log(merge(a,0,2,7));
// merge(a,0,2,7)
console.log(merge(a,0,3,a.length-1))
console.log(a.length)













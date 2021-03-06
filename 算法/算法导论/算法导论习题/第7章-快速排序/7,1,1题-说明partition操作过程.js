/**
 * Created by franck.lynn on 2018/4/1 23:39.
 */

/*
说明partition在数组
  0   1  2  3   4  5  6  7   8  9  10  11
[13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]上的操作过程
快速排序的原理:
分割数组:
首先选择一个主元,经过以下分析得知:i不应该从0开始,应该从-1开始,不然会漏掉第1个元素
  0   1  2  3   4  5  6  7   8  9  10  11
[13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]
  i  j                                x=pivot
  ⬆  ⬆
[13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]
 i       j                                
 ⬆       ⬆ 
[13, 9 , 19, 5, 12, 8, 7, 4, 21, 2, 6, 11]
     i      j                                
     ⬆      ⬆  
[13, 9 , 5,  19, 12, 8, 7, 4, 21, 2, 6, 11]
         i           j                                
         ⬆           ⬆ 
[13, 9 , 5,   8, 12, 19, 7, 4, 21, 2, 6, 11]
              i      j                                
              ⬆      ⬆ 
[13, 9 , 5,   8, 12, 19, 7, 4, 21, 2, 6, 11]
              i          j                                
              ⬆          ⬆ 
[13, 9 , 5,   8,  7, 19, 12, 4, 21, 2, 6, 11]
                  i          j                                
                  ⬆          ⬆               
[13, 9 , 5,   8,  7, 4, 12, 19, 21, 2, 6, 11]
                     i              j                                
                     ⬆              ⬆               
[13, 9 , 5,   8,  7, 4, 2, 19, 21,  12, 6, 11]
                        i          j                                
                        ⬆          ⬆ 
[13, 9 , 5,   8,  7, 4, 2, 19, 21,  12, 6, 11]
                        i               j                                
                        ⬆               ⬆ 
[13, 9 , 5,   8,  7, 4, 2, 6, 21,  12, 19, 11]
                           i               j                                
                           ⬆               ⬆  
再把21和11交换:
[13, 9 , 5,   8,  7, 4, 2, 6, 11,  12, 19, 21]
                              i            hi 
[ 13, 9 ,5, 8, 7, 4, 2, 6, 11, 12, 19, 21]                              
[ 13, 9, 5, 8, 7, 4, 2, 6, 11, 12, 19, 21 ]                              
 ⬆             ⬆                                                                                        
 */
function partition(a,lo,hi) {
    // 定义主元为数组的最后一个元素
    var pivot = a[hi];
    // 定义变量i是从lo开始的
    var i = lo-1;
    // 循环j变量,j是从1开始的
    for (var j=i+1;j<=hi;j++){
        // 如果a[j]<主元,就把i+1,把这个元素与j交换
        if (a[j]<pivot){
            i=i+1;
            var temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    // 把当前位置的下标与主元交换
    // 当所有元素相同时,拦截坝i一直没移动
    // 直到这里,i+1=-1+1=0.
    // 返回的时i+1=1+1=2
    var temp =a[i+1];
    a[i+1]=a[hi];
    a[hi]=temp;
    return i+1;
}
var a =[13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11];
// var a =[8, 8, 8, 8, 8, 8, 8];
partition(a,0,a.length-1);
console.log(a);
// 快速排序
function quickSort(a,lo,hi) {
    if(lo<hi){
        var pivotSubscript=partition(a,lo,hi);
        quickSort(a,lo,pivotSubscript-1);
        quickSort(a,pivotSubscript+1,hi);
    }
}
quickSort(a,0,a.length-1);
console.log(a);







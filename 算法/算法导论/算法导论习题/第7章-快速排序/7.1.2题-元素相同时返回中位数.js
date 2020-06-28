/**
 * Created by franck.lynn on 2018/4/2 9:29.
 * 当数组a[lo..hi]中的元素都相同时,partition返回中位数主元下标pivotSubscript
 */

/*
https://blog.csdn.net/u012889441/article/details/56675542
思路：让主元等于首位的元素；i等于p+1，j=r。i指向的元素向左替换，
     j指向的元素向右替换，最后i和主元替换
//       0  1  2  3  4  5  6  7
var a =  [8, 4, 4, 4, 4, 5, 6, 7];
         x=pivot
         ⬆   
                             ⬅ 小于主元,i++;
        [8, 4, 4, 4, 4, 5, 6, 7];
               ⬆                加完之后交换
                          ⬅    小于主元,i++
       [8, 4, 4, 4, 4, 5, 6, 7];
                 ⬆              加完之后交换               
                      ⬅ 
      [8, 4, 4, 4, 4, 5, 6, 7];
                    ⬆             
                    ⬅                                                  
 */
function partition(a,lo,hi) {
    // 将数组切分为a[lo..i-1],a[i],a[i+1..hi]
    var i = lo, j=hi+1; // 左右扫描指针
    var pivot = a[lo];
    
    while(true){
        while (a[++i]<pivot) if(i==hi) break;
        while (pivot<a[--j]) if(j==lo) break;
        if(i>=j) break;
        var temp =a[i];
        a[i]=a[j];
        a[j]=temp;
    }
    var temp =a[lo];
    a[lo]=a[j];
    a[j]=temp;
    return j;
}

//       0  1  2  3  4  5  6  7
var a = [2, 4, 7, 4, 4, 5, 6, 4];

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






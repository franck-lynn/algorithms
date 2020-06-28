/**
 * Created by franck.lynn on 2018/4/1 16:32.
 */
function quickSort(a,lo,hi){
    if(lo<hi){
        // 划分数组
        var mid = partition(a,lo,hi);
        quickSort(a,lo,mid-1);
        quickSort(a,mid+1,hi);
    }
}
// 划分数组

function partition(a,lo,hi) {
    // 定义x=a[7]=4作为主元
    var x = a[hi];
    var i = lo-1;
    for(var j=lo;j<=hi-1;j++){
        if(a[j]<=x){
            i = i+1;
            var temp = a[i];
            a[i]=a[j]; 
            a[j]=temp;
        }
    }
    // 交换
    temp =a[i+1];
    a[i+1]=a[hi];
    a[hi]=temp;
    return i+1;
}
//       0  1  2  3  4  5  6  7
var a = [2, 8, 7, 1, 3, 5, 6, 4];
quickSort(a,0,a.length-1);
console.log("排序后的数组:",a);







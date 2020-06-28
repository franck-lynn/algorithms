/**
 * Created by franck.lynn on 2018/4/3 23:39.
 */
// 按照递减的顺序排序,拦截坝左边大,右边小
function partition(a,lo,hi) {
    // 定义主元为数组的最后一个元素
    var pivot = a[hi];
    // 定义变量i是从lo开始的
    var i = lo-1;
    // 循环j变量,j是从1开始的
    for (var j=i+1;j<=hi;j++){
        // 如果a[j]<主元,就把i+1,把这个元素与j交换
        if (a[j]>pivot){
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








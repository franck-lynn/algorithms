/*
冒泡排序是一种留下但低效的排序算法,
是反复交换相邻的未按次序排列的元素
5__3__4__1
______________________________
5  5  5  1 | 1  1  1 | 1
3  3  1  5 | 5  3  3 | 3
4  1  3  3 | 3  5  5 | 4
1  4  4  4 | 4  4  4 | 5
 */
function bubbleSort(a) {
    // 外循环是总的循环次数,内循环包装每个元素都比一遍
    for(var i=0;i<a.length-1;i++){
        // 内循环,从最后一个元素开始看,与前面的每个元素都比一遍
        for(var j=a.length-1;j>0;j--){
            if(a[j]<a[j-1]){
                var tmp = a[j];
                a[j] =a[j-1];
                a[j-1]=tmp;
            }
        }
        
    }
    console.log(a)
    // return a;
}
var a = [5,3,4,1,2,5,6,7,9]
// console.log(bubbleSort(a))
bubbleSort(a)















/**
 * Created by franck.lynn on 2018/4/29 11:13.
 */
var arr = [5,3,6,2,10];
// 查找最小值的函数
function findSmallest(arr,lo=0,hi=arr.length) {
    var smallest = arr[0]; // 存储最小值
    var smallestIndex = 0; // 存储最小值的索引
    for(let i = lo; i < hi; i++){
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}
console.log("查找最小值元素下标:",findSmallest(arr),"元素是",arr[findSmallest(arr)])
// 对数组进行选择排序
function selectionSort(a) {
    var n = a.length;
    
    for(var i=0;i<n;i++){
        var min = i;
        var count = 1;
        for(var j = i+1;j<n;j++){
            
            if(a[j]<a[min]){
                // 交换数组中这2个元素a[i]和 a[min]
                var temp = a[min];
                a[min] = a[j];
                a[j] = temp;
                // 内循环交换次数
                // console.log("内循环交换第"+(count++)+"次,交换元素是:",min,j,a)
            }
        }
        // console.log("第"+(i+1)+"次:", a.toString())
    }
    return a;
}
console.log("选择排序1:",selectionSort(arr))
// 查找最小值,并将最小值移动到数组开头
function findSmallest2(arr,lo=0,hi=arr.length) {
    var smallest = lo; //0
    for (let i = lo+1;i<hi;i++){
        if(arr[i]<arr[smallest]){ //a[1]<a[smallest]=a[1]
            // smallest = i; // smallest = 1
            
            var temp = arr[i]; // temp = 5
            arr[i] = arr[smallest]; //a[1]=5
            arr[smallest] = temp; // a[1]=3
        }
        
    }
    return arr[smallest]
}
// 对数组进行排序
function selectionSort2(a) {
    var newArr = [];
    for(let i = 0;i < a.length;i++){
        var smallest = findSmallest2(a,i,a.length);
        newArr.push(smallest)
    }
    return newArr;
}
var arr = [5,3,6,2,10];
console.log("最小值:",findSmallest2(arr,0,arr.length))
console.log("最小值和索引使用后的数组:",arr)
console.log(selectionSort2(arr))




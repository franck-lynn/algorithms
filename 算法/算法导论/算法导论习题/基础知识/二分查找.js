/**
 * Created by franck.lynn on 2018/4/29 10:00.
 */
function binarySearch(list,item) {
    var low = 0; // (以下2行)low和high用于跟踪要在其中查找的列表部分
    var high = list.length -1;
    
    while(low<=high){ //只要范围没有缩小到只包含一个元素，
        var mid = Math.floor((low+high)/2); // 就检查中间元素的下标
        var guess  = list[mid]; //猜的数字,就是中间的元素
        
        if(guess == item) return mid;
        if(guess > item)  high = mid -1; // 猜的数字大了,在小的一边
        else low = mid + 1; // 否侧,猜的数字小了,在大的一边
    }
    return "None"
}
my_list = [1, 3, 5, 7, 9] // 来测试一下！
console.log(binarySearch(my_list,3))
// console.log(binarySearch(my_list,10))
// console.log(Math.log2(128*2))
// 简单查找,检查100个元素需要100毫秒
// time = 元素个数/检查速度
console.log(Math.ceil(Math.log2(100)))
console.log(Math.round(Math.log2(100)))
// 毫秒化成天数
function millisecond2day(ms) {
    var s = ms / 1000 // ms2s
    var m = s / 60
    var h = m / 60
    var  d = h / 24
    return Math.floor(d)
}
console.log("简单查找10亿元素需要时间",millisecond2day(1000000000),"天")
console.log("简单查找10亿元素需要时间",1000000000/1000/60/60/24,"天")
console.log("二分查找10亿元素需要的时间",Math.round(Math.log2(1000000000)),"毫秒")

function binarySearch(k,a) {
    // 数组必须是有序的.
    var lo = 0;
    var hi = a.length-1;
    while (lo<=hi){
        var mid = Math.floor((lo+hi)/2);
        if(k<a[mid]) hi = mid-1;
        else if(k>a[mid]) lo = mid+1;
        else return mid;
    }
    return -1;
}
// 命中23
//      lo                  mid                  hi
//      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 
//    [10,11,12,16,18,23,29,33,48,54,57,68,77,85,98]
// lo=0,hi=14,mid=7 23<33,在左边
//      lo      mid       hi
//      0  1  2  3  4  5  6 
//    [10,11,12,16,18,23,29]
// lo=0,hi=6,mid=3,23>16,在右边
//                 lo mid hi
//                 4  5  6 
//               [18,23,29]
// lo=4,hi=6,mid=5, 23=a[5] return mid = 5


// 未命中50
//      lo                  mid                  hi
//      0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 
//    [10,11,12,16,18,23,29,33,48,54,57,68,77,85,98]
// lo=0,hi=14,mid=7 50>33,在右边
//                              lo      mid      hi
//                              8  9 10 11 12 13 14 
//                            [48,54,57,68,77,85,98]
// lo=8,hi=14,mid=11,50<68,在左边
//                              lo mid hi
//                              8  9 10 
//                            [48,54,57]  
// lo=8,hi=10,mid=9,50<54在左边
//                              lo mid hi
//                              8 
//                            [48] 
// lo=8,hi=mid-1=8,mid=(8+8)/2=8.k=50>a[8],执行右边
// lo=9,hi=8,(mid=9+8)/2=8,lo<hi不满足, while循环结束,没有命中,返回-1
// else return mid;这里的mid已经没有机会返回了,所以程序是正确的

var a=[10,11,12,16,18,23,29,33,48,54,57,68,77,85,98];
console.log(binarySearch(23,a));

console.log(binarySearch(23,50));













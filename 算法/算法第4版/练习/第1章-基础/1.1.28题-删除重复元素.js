// 1.1.28.删除重复元素
// 修改binarySearch中的测试用例
// 来删除排序之后白名单中所有重复
// 元素
// https://zhangjia.tv/670.html
var b = [];
function binarySearch(k,a) {
    var lo = 0;
    var hi = a.length-1;
    while(lo<=hi){
        var mid = Math.floor((lo+hi)/2);
        if(k<a[mid]) hi = mid-1;
        else if(k>a[mid]) lo=mid+1;
        else {
            for (var i=lo;i<=hi;i++){
                if(a[i]==k && i!=mid){
                    b[i]=a[i];
                }
            }
            return mid
        }
    }
    return -1;
}

var a=[10,11,12,16,18,23,23,23,23,23,57,68,77,85,98];
console.log(binarySearch(23,a));
console.log(b)
// 查找排数组中的每一个元素,如果后面的元素与当前查找的相等,就删除这个元素

















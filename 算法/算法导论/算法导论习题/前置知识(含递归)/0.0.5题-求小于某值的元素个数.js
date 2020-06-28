// 返回一个数组,这个数组是double.求在某个区间的元素个数.
// 二分查找
function binarySearch(a,k) {
    var lo=0;
    var hi=a.length-1;
    var key = a[k];
    while(lo<=hi){
        var mid = Math.floor((lo+hi)/2);
        if(key<a[mid]) hi = mid-1;
        if(key>a[mid]) lo = mid+1;
        else return mid;
    }
    return -1;
}


// 返回n个l,r之间的值
function uniforms(n,l,r) {
    var a = [];
    for(var i=0;i<n;i++){
        a.push(uniform(l,r))
    }
    return a;
}

// 随机返回一个值l,r之间的值
function uniform(l,r) {
    return l+Math.random()*(r-l)
}

// 统计数组中在区间lo...hi内的元素个数
function countInRange(a,lo,hi) {
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i]<hi && a[i]>=lo) count++;
    }
    return count;
}
var a = uniforms(1000,1,6);
console.log(a);
console.log(countsInRange(a,5,1,6))
// 区间分组
function countsInRange(a,n,l,r) {
    var counts = [];
    for(var i=0;i< n;i++){
        var count=0;
        var min = (r-l)/n*(i+1);
        var max = (r-l)/n*(i+2);
        console.log("max,min",max,min);
        for(var j=0;j<a.length;j++){
            if(a[j]<max && a[j]>=min){
                count++;
            }
        }
        counts.push(count)
    }
    return counts;
}

// 数字k是否在lo,hi区间
function isInRange(k,lo,hi) {
    return k<hi && k>=lo;
}















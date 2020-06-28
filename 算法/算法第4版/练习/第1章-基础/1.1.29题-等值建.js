/*
为binarySearch添加rank(),它接收一个键和整型有序数组,(可能存在重复键).
作为参数返回数组中小于该键的元素数量.
以及一个类似的方法count()来返回数组中等于该键元素的数量.
注意:如果i,j分别是rank(key,a)和count(key,a)的返回值,那么a[i...i+j-1]
就是数组中所有和key相等的元素
 */
function rank(key,a) {
    var lo=0;
    var hi=a.length-1;
    var count = 0;
    // 这个键所代表的元素是 var k = a[key]
    var k = a[key];
    while(lo<=hi){
        var mid = Math.floor((lo+hi)/2);
        // 这部分是该键元素小
        if(k<a[mid]) hi=mid-1;
        // 这部分是该键元素大
        else if(k>a[mid]) lo=mid+1;
        // 这是等于该键元素的键
        else {
            for(var i=lo;i<=hi;i++){
                // 在lo,hi范围内查找重复元素
                if(k==a[i]){
                    count++
                }
            }
            return count;
        }
    }
    return -1;
}


/*
             0    1   2   3   4   5   6   7   8   9  10  11  12  13  14
            [10, 11, 12, 16, 18, 23, 23, 23, 48, 54, 57, 68, 77, 85, 98];
1,lo=0,hi=14,mid=7,lo<=hi,k=a[key]=a[7]=23,符合else分支,进入for循环.
  for(0;14;i++),整个等于23值的都会被遍历出来.程序返回.
分析k=2的情况
1.lo=0,hi=14,mid=7,lo<=hi,k=a[key]=a[2]=12<a[mid]=a[7]=23,符合第1分支,进入左递归.
             0    1   2   3   4   5   6  
            [10, 11, 12, 16, 18, 23, 23]
2,lo=0,hi=6,mid=3,lo<=hi,k=a[key]=a[2]=12<a[mid]=a[3]=16,符合第1分支,进入左递归.
             0    1   2 
            [10, 11, 12]
3,lo=0,hi=2,mid=1,lo<=hi,k=a[key]=a[2]=12>a[mid]=a[1]=11,符合第2分支,进入右递归.  
                      2 
                    [12]
4,lo=2,hi=2,mid=2,lo<=hi,k=a[key]=a[2]=12=a[mid]=a[2]=12,进入else分支,进入for循环
  for(2;2;i++)只循环一次,把i的数量输出了
分析b数组k=2的情况:
             0    1   2   3   4   5   6   7   8   9  10  11  12  13  14
            [10, 11, 11, 11, 18, 23, 23, 23, 48, 54, 57, 68, 77, 85, 98];
1.lo=0,hi=14,mid=7,lo<=hi,k=a[key]=a[2]=11<a[mid]=a[7]=23,符合第1分支,进入左递归.
             0    1   2   3   4   5   6  
            [10, 11, 11, 11, 18, 23, 23]
2,lo=0,hi=6,mid=3,lo<=hi,k=a[key]=a[2]=11=a[mid]=a[3]=11,符合else分支,,进入for循环  
  for(0;6;i++) 整个等于11值的都会被遍历出来.程序返回.
 */
var k=3
var a=[10, 11, 12, 16, 18, 23, 23, 23, 48, 54, 57, 68, 77, 85, 98];
var b=[10, 11, 11, 11, 18, 23, 23, 23, 48, 54, 57, 68, 77, 85, 98];
console.log(`a数组中${k}键的值${a[k]}重复元素个数:${rank(k,a)}`);
console.log(`b数组中${k}键的值${b[k]}重复元素个数:${rank(k,b)}`);
// console.log(count)
// 求小于key键值的元素数量
function count(key,a) {
    var lo=0;
    var hi=a.length-1;
    var k = a[key];
    while(lo<=hi){
        var mid= Math.floor((lo+hi)/2);
        if(k<a[mid]) hi=mid-1;
        else if(k>a[mid]) lo=mid+1;
        else {
            // 因为有重复元素,所以不能直接减,得把重复的元素个数去掉
            for(var i=lo;i<=hi;i++){
                if(a[i]==k) mid--
            }
            return mid+1
        }
    }
    return -1
}
/*
             0    1   2   3   4   5   6   7   8   9  10  11  12  13  14
            [10, 11, 11, 11, 11, 23, 23, 23, 48, 54, 57, 68, 77, 85, 98];
分析k=3,a[key]=11时的情况:
1.lo=0,hi=14,mid=7,进入左递归
             0    1   2   3   4   5   6 
            [10, 11, 11, 11, 11, 23, 23]
2,lo=0,hi=6,mid=3,进入第3分支,这个分支内有a[3]=11的情况 ,for(0,3,i++),有3个重复减掉.
  右边的重复不用考虑了,因为数组是有序的
             0    1   2   3 
            [10, 11, 11, 11]
 */
console.log(`b数组中 < ${k}键元素${b[k]}的个数:${count(k,b)}`);










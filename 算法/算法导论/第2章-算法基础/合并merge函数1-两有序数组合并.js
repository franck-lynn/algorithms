
// 单纯的moerge函数,merge2个有序数组
function _merge(l,r) {
    // 创建一个新的数组,最后返回这个数组
    var a = [];
    // 定义2个计数变量,记录左右两边数组的指针变化
    var i = 0, j = 0;
    // 获取l,r数组的长度
    var m = l.length,n = r.length;
    // 定义a数组的长度
    var aLength = m + n;
    // 循环这个a数组,为a数组里添加元素
    for(var k = 0; k < aLength; k++){
        // 左边取完只取右边,=m是边界,所以不要去掉
        if(i >= m)            a[k] = r[j++];
        else if(j >= n)       a[k] = l[i++];
        // 左边小于右边 取左边
        else if(l[i] <= r[j]) a[k] = l[i++];
        else                  a[k] = r[j++]
    }
    // 返回这个数组
    return a;
}

var a1=[2,3,5], a2=[1,3,4];
console.log(a1.concat(a2))
console.log(_merge(a1,a2))





















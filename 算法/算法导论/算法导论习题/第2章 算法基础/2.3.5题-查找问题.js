
/*
回顾查找问题,参见练习2.1-3,注意到,如果序列
a已排序,就可以将该序列的中点与v进行比较,根据
这个比较结果,原序列中有一半就可以不用再做进一
步的考虑了.写出这个查找过程
思路:
二分查找法
步骤:
1,获取数组的起始和结束下标
2,当低位<高位时
  中位=(lo+hi)/2
3,如果中位=所查 返回
  否则a[mid]<v,说明在右位,低位数=中位+1
  再次循环时,右边再折半
 */
function findV1(a,v) {
    var lo=0;
    var hi=a.length-1;
    while (lo<=hi){
        var mid = Math.floor((lo+hi)/2)
        if(a[mid]==v) return mid;
        else if(a[mid]<v) lo=mid+1 //在右边
        else hi=mid-1 //在左边
    }
    return "NIL"
}
// 用递归的办法查找
function findV2(a, v, lo, hi) {
    // 获取数组的起始和结束下标
    if (lo <= hi) {
        // 0,3
        // 2,3
        var mid = Math.floor((lo + hi) / 2);//mid=(0+3)/2=1  //mid=(2+3)/2=2
        if (a[mid] == v) return mid; // a[1]!="c" // a[2]=="c"
        // 需要返回函数
        else if (a[mid] < v) return findV2(a, v, mid + 1, hi); //a[1]="b"< "c" true  (a,v,2,3)
        else if (a[mid] > v) return findV2(a, v, lo, mid)
    } else {
        return "NIL"
    }
}

var a = ["a","b","c","d","f","g","h","i"];
var start = new Date();
console.log(findV1(a,"c"))
console.log("时间1:",new Date()-start);
start = new Date();
console.log(findV2(a,"c",0,a.length-1));
console.log("时间2:",new Date()-start);

















// 单纯的moerge函数,merge2个数组
function merge(l,r) {
    var i=0,j=0;
    var a =[];
    // l.length+r.length=3+3=6
    for(var k=0;k<l.length+r.length;k++){
        // 左边取完就只取右边,右边取完就指取左边
        // i>=a.length表示左边取完了
        if(i>l.length-1){
            a[k]=r[j++]
        }else if(j>r.length-1){
            a[k]=l[i++]
        }
        // k=0,i=0,j=0,2<=1为false,a[0]=1,i=0,j=1
        // k=1,i=0,j=1,2<=3为true ,a[1]=2,i=1,j=1
        // k=2,i=1,j=1,3<=3为true ,a[2]=3,i=2,j=1
        // k=3,i=2,j=1,5<=3为false,a[3]=3,i=2,j=2
        // k=4,i=2,j=2,5<=4为false,a[4]=4,i=2,j=3
        // k=5,此时j=3>r.length=2,说明右边取完了,执行 a[k]=l[i++],即a[5]=l[2],i变成3,k变成6
        // 此时k=6,i=3,j=3,循环结束    
        else if(l[i]<= r[j]){
            a[k]=l[i++];
        }else{
            a[k]=r[j++]
        }
        // console.log(k,i,j)
    }
    return a
}
var a1=[2,3,5], a2=[1,3,4];
console.log(a1,a2)
console.log(merge(a1,a2))

//数组的两部分归并
function _merge(a,lo,mid,hi) {
    // 定义一个辅助数组
    var aTemp = [];
    // 低位从lo=0开始,中位是mid=3,高位是hi=7
    //i=0,j=4
    var i=lo,j=mid+1; 
    // k=0,k<=7;k++
    for (var k = lo; k <= hi; k++) {
        // 把原始数组全部复制到aTemp辅助数组
        aTemp[k] = a[k];
    }
    // 打印结果:[ 2, 3, 5, 7, 1, 4, 3, 8 ]
    // console.log(aTemp)
    // k=0,k<=7;k++
    for (var k = lo; k <= hi; k++) {
        // 1,    0>3                   false不执行
        // 2,    0>3  跳过
        if      (i > mid)              a[k] = aTemp[j++];
        // 1,    4>7                   false不执行
        // 2,    5>7  跳过    
        else if (j > hi)               a[k] = aTemp[i++];
        // 1,    aTemp[4]=1 aTemp[0]=2 为true,取右边, j++,j=5 a[0]=1
        // 2,    aTemp[5]=4 aTemp[0]=2 为false,取左边,i++,i=1 a[1]=2
        else if (aTemp[j] <= aTemp[i]) a[k] = aTemp[j++];
        // 1,    不执行
        // 2,    执行    
        else                           a[k] = aTemp[i++];
    }
    return a;
}
//       lo    mid     hi
//       0     3       7
var a = [2,3,5,7,1,3,4,8] //首先是这个数组要定义的是部分有序
// _merge(a,0,3,7)
// console.log(_merge(a,0,3,7))











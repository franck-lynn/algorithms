// 随机分割数组
function randomizedPartition(a,lo,hi) {
    // i 是界于[lo,hi)之间的一个随机数
    var i = Math.floor(lo + (hi-lo)*Math.random());
    console.log(a[i]);
    // 由于 partition是以最后一个元素作为主元划分
    // 故要把最后一个元素与a[i]交换一下,比便可以
    // 利用partition这个函数
    var temp = a[hi];
    a[hi] = a[i];
    a[i]= temp;
    
    return partition(a,lo,hi)
}


// 划分数组
function partition(a,lo,hi) {
    var x = a[hi];
    var i = lo-1;
    for(var j = 0;j<hi;j++){
        if(a[j]<=x){
            i++;
            var temp = a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    temp =a[i+1];
    a[i+1]=a[hi];
    a[hi] = temp;
    return i+1;
}
//       0  1  2  3  4  5  6  7
var a = [2, 8, 7, 1, 3, 5, 6, 4];
// partition(a,0,a.length-1)
console.log(a);
randomizedPartition(a,0,a.length-1);
console.log(a);





/*
暴力求解最大子数组
分析:
-------------
 |-
  ---
  -----
  -------
  ---------
 
 */

function maxArray(a) {
    var max = Number.NEGATIVE_INFINITY;
    for(var i=0;i<a.length;i++){
        var sum = 0;
        // 对每个i后面的数组进行求和
        for(var j=i;j<a.length;j++){
            sum = sum +a[j];
            if(sum >  max){
                max =sum;
            }
        }
    }
    return max;
}
let a = [ 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ];
//       
let b = [1, -2, 3, 10, -4, 7, 2, -5];
console.log(maxArray(a))
console.log(maxArray(b))
















/*
https://blog.csdn.net/chenxun_2010/article/details/40764989
分析：子数组是指原数组中连续的一组数。求最大值，如果数组中元素都
小于0；则直接返回数组的最大值。对于一般的情况。我们只要遍历求数组，
同时对其求和，如果和数变得小于0，那就说明了此时这个子数组是不符合
题意的，如果和数为正且大于之前求和过程中记录的最大值，那就将这个数
赋值给MAX，这样遍历一趟就将其中的最大和给求出来了。
https://blog.csdn.net/cangchen/article/details/45045655
题目：
输入一个整形数组，数组里有正数也有负数。
数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
求所有子数组的和的最大值。
例如输入的数组为1, -2, 3, 10, -4, 7, 2, -5，和最大的子数组为3, 10, -4, 7, 2，
因此输出为该子数组的和18。
*/

/*
最大子数组问题
  0   1   2   3   4    5    6   7   8    9   10  11  12  13  14  15
[ 13, -3, 25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ]
 */
let a = [ 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 ];
//       
let b = [1, -2, 3, 10, -4, 7, 2, -5];
// 暴力求解
/*
第0个数与后面的第1个数字相加,,再与第2个数组相加,比较大小,
[1, -2, 3, 10, -4, 7, 2, -5]
1,外循环,每个数组元素都循环一遍,假设指针指到了-2
     |______________________
2,第2层循环是求出-2后面的所有子数组.
     |
     ___
     _____
     ________
3,对每层求和又用到一次循环
     -
     ---
     -----
     ------
     --------
     ___________
     ______________
     _________________
     ______________________
     
 */
function findMaxCrossingSubArrayByViolent(a) {
    // sum为子数组的和
    let sum = 0;
    // 最大子数组的和
    let max = Number.NEGATIVE_INFINITY; 
    for(let i=0;i<a.length;i++){
        // 取出i后面的每个子数列
        for(let j= 0;j<a.length;j++){
            sum = 0;
            // 对每个子数列进行求和,i开始时lo位,hi位是j位
            for(let k=i;k<=j;k++){
                sum += a[k]
            }
            if(sum>max)
                max = sum
        }
    }
    return max
}
/*
[1, -2, 3, 10, -4, 7, 2, -5]
    _______________________
    - 在这层循环中,把每次循环都加起来,如果大的话,sum就用这个大的和,不大就算了.
    ----- 
    ---------
    -------------
    ------------------
    -----------------------
 */
let s1=new Date();
console.log("暴力求解:",findMaxCrossingSubArrayByViolent(a));
let e1 = new Date();

function findMaxSubArray(a) {
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<a.length;i++){
        let sum = 0;
        for(let j=i;j<a.length;j++){
            // 内循环对每个长度的数组进行求和
            sum +=a[j];
            if(sum>max) max=sum;
        }
    }
    return max;
}
let s2=new Date();
console.log("暴力稍优化:",findMaxSubArray(a));
let e2 = new Date();

function maxArray(a) {
    let sum =0,max=Number.NEGATIVE_INFINITY;
    for(let i=0;i<a.length;i++){
        sum += a[i];
        
        if(sum>max) max=sum;
        // 如果之前相加的和<0,那么说明前面的都不要加了,肯定小.
        // 就从后面开始+,并把和置为0,并把每次相加后的最大值保存下来
        // 如果再加一个数变小了,最大值是不变的.    
        else  if(sum<0) sum=0;
    }
    return max
}
let s3=new Date();
console.log("优化:",maxArray(a));
let e3 = new Date();


console.log(`暴力:${e1-s1},暴力稍优化:${e2-s2},优化:${e3-s3}`);






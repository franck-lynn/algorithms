/*
当所有元素都为负数时,findMaximumSubArray返回什么?
 */
function findMaximum(a,lo,hi) {
    // 只有一个数组时当然最大,最小都是这个
    if(lo==hi) return [lo,hi,a[lo]];
    else{
        var mid = Math.floor((lo+hi)/2);
        // 如果lo!=hi,就递归把问题缩小
        var leftArray = findMaximum(a,lo,mid);
        var rightArray = findMaximum(a,mid+1,hi);
        
        var crossingArray =findMaxCrossingSubArray(a,lo,mid,hi);
        if(leftArray[2]>rightArray[2] && leftArray[2]>crossingArray[2]){
            return leftArray
        }else if(rightArray[2]>leftArray[2] && rightArray[2]>crossingArray[2]){
            return rightArray;
        }else {
            return crossingArray
        }
    }
}
var a  =[1, -2, 3, 10, -4, 7, 2, -5];
console.log(findMaximum(a,0,a.length));
// 求跨中点数组最大值
function findMaxCrossingSubArray(a,lo,mid,hi) {
    // 先看左边
    var leftSumMax = Number.NEGATIVE_INFINITY;
    var maxLeftPos = null;
    var sum = 0;
    // [1,  -2,  3,  10] 
    for(var i=mid;i>=lo;i--){
        sum = sum+a[i];
        // 如果左边和比最大值大,就用maxLeft保存起来
        if(sum > leftSumMax) {
            leftSumMax = sum;
            // 保存这个指针
            maxLeftPos = i; 
        }
    }
    // 再看右边.
    // 定义一个变量保存和的最大值
    var rightSumMax = Number.NEGATIVE_INFINITY;
    // 定义一个变量保存和
    sum = 0;
    // 保存指针
    var maxRightPos = null;
    for(var j=mid+1;j<=hi;j++){
        sum = sum+a[j];
        if(sum>rightSumMax){
            rightSumMax = sum;
            maxRightPos = j;
        }
    }
    return [maxLeftPos,maxRightPos,leftSumMax+rightSumMax]
}















var a = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];

var b = [1, -2, 3, 10, -4, 7, 2, -5];
var c = [-1, -2, -3, -10];
// 分治
function findMaximumSubArray(a, lo, hi) {
    // 只有一个元素的情况
    if (lo == hi) return [lo, hi, a[lo]];
    else {
        // 划分子数组,左子数组为a[lo..mid],右子数组a[mid+1,hi];
        // a[lo..hi]至少包含两个元素,则左右两个子数组至少包含一个
        // 元素.
        var mid = Math.floor((lo + hi) / 2);
        // 分别求出左右最大子数组,这2步是把一个大的问题缩小.
        var leftArray = findMaximumSubArray(a, lo, mid);
        var rightArray = findMaximumSubArray(a, mid + 1, hi);
        // 完成合并
        // 求跨越中点的最大子数组
        var crossArray = findMaxCrossingSubArray(a, lo, mid, hi);
        // 检测最大和子数组是不是在左子数组中
        if (leftArray[2] >= rightArray[2] && leftArray[2] > crossArray[2]) return leftArray;
        else if (rightArray[2] > leftArray[2] && rightArray[2] > crossArray[2]) return rightArray;
        else return crossArray;
    }
}
/*

              [1,  -2,  3,  10,  -4,  7,  2,  -5]


       [1,  -2,  3,  10]             [-4,  7,  2,  -5]


  [1,  -2]       [3,  10]       [-4,  7]       [2,  -5]


[1]    [-2]    [3]    [10]    [-4]    [7]    [2]    [-5]






下面分析递归方法的调用过程:
             0   1  2   3  
            [1, -2, 3, 10]      
         [1, -2]      [3, 10]       
      [1]    [-2]  [3]    [10]   

1,a,lo=0,hi=3; f(0,3)
              mid=1,进入左递归
2,a,lo=0,hi=1; f(0,1)
              mid=0 f(0,0)递归出,递出a[0]
  第1次递归结束.            
  右递归开始执行,上面的f(0,1)弹出执行
              
3,a,lo=0,hi=1;f(0,1),递出a[0,1]
              mid+1=1,hi=1;注意,这里执行的是右边递归,这里递出a[1]
              第2次递归结束
4,程序向下执行,这时左边的值为[1],右边为[-2],中间为1-2=-1,,执行第1个分支;此时的mid+1=2,hi=3
5,a,lo=2,hi=3; f(2,3)
               mid=2,进入左递归;
6,a,lo=2,mid=2,递归出,递出a[2];递归结束,
7.返回上级f(2,3);
8,执行右递归,f(2,3);
            mid=2;
9,执行左递归f(2,2),左递归结束
10,接着执行右递归,f(3,3),递归结束
   此时的左边的值为[3],右边为[10],中间为[13],返回                          
 */
// console.log(findMaximumSubArray(a,0,a.length-1))
console.log(findMaximumSubArray(b, 0, b.length - 1))
console.log(findMaximumSubArray(c, 0, c.length - 1))


function findMaxCrossingSubArray(a, lo, mid, hi) {
    var maxLeft, maxRight;
    // 先看左边数组.从右到左边
    var leftSum = Number.NEGATIVE_INFINITY;
    var sum = 0;
    for (var i = mid; i >= lo; i--) {
        // 把数组从右到左逐个相加
        sum = sum + a[i];
        if (sum > leftSum) {
            leftSum = sum;
            // 把指针保存起来
            maxLeft = i;
        }
    }

    var rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;
    for (var j = mid + 1; j <= hi; j++) {
        sum = sum + a[j];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = j;
        }
    }
    return [maxLeft, maxRight, leftSum + rightSum];
}
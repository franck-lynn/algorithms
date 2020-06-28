/**
 * 先假设第1个元素是最小值
 * 依次遍历集合中的每个元素,记录下当前的最小值
 * 返回这个最小值
 */
function minimum(a) {
    var min  = a[0];
    for(let i = 1; i < a.length; i++){
        if(min > a[i]) min = a[i];
    }
    return min;
}

var a = [3,2,8,4,3,9];
var min = minimum(a);
console.log(min);
// 最大值
function maximum(a) {
    var max = a[0];
    for(let i = 1; i<a.length; i++){
        if(max < a[i]) max = a[i];
    }
    return max;
}

var max = maximum(a);
console.log(max);





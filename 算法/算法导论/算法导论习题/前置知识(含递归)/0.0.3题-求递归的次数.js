/*
var count = 0;
function factorial(n) {
    count++
    if(n==1) return 1;
    return n*factorial(n-1)
}
*/
// 递归函数增加次数
function factorial(n,deep) {
    deep++;
    if(n==1) return 1
    return n*factorial(n-1,deep)
}
console.log(factorial(5,0))

















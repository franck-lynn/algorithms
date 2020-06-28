/* 
https://www.bilibili.com/video/av9855434
任何递归两部分组成
1, 递归关系
2, 递归出口
fabonacci() 数列
一般关系:
f(n) = f(n-1) + f(n-2)
还要有出口, 这个递归需要2个出口
f(1) = 1
f(2) = 1
*/
function fabonacci(n){
    if(n==1) return 1
    else if(n==2) return 1
    else return fabonacci(n - 1) + fabonacci(n - 2)
}

console.log(fabonacci(8))
/**
 * https://www.youtube.com/watch?v=OMkKWtSAF0c&index=3&list=PLqM7alHXFySGbXhWx7sBJEwY2DnhDjmxm
 * https://www.geeksforgeeks.org/solve-dynamic-programming-problem/
 */
// 创建一个表格
// function _initArray(n,element,a=[]) {
//     if(n==0) return a;
//     return _initArray(n-1,element,a.concat(element))
// }
// var f = _initArray(n,0);
var f = [];
var n = 100;

// console.log(f);
function fib(n) {
    f[0] = 0; f[1] = 1;
    for(let i = 2; i <= n; i++){
        f[i] = f[i-1] +f [i-2]
    }
    return f[n];
}

for(let k = 0; k < n; k++){
    if(k>0 && k%5==0 )
        console.log();
    process.stdout.write(fib(k)+" ")
}










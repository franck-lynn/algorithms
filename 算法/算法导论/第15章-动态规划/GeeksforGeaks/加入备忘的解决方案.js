/**
 * Created by franck.lynn on 2018/5/30 11:55.
 * https://www.youtube.com/watch?v=Taa9JDeakyU&index=2&list=PLqM7alHXFySGbXhWx7sBJEwY2DnhDjmxm
 */
var n = 100;
var matrix = new Array(n);
// console.log(matrix);


function fib(n) {
    if(matrix[n]==undefined){
        if(n<=1){
            matrix[n] = n;
        }else {
            matrix[n] = fib(n-1)+fib(n-2)
        }
    }
    return matrix[n];
}

for(let i = 0; i < n; i++){
    if(i>0 && i%5==0 )
        console.log();
    process.stdout.write(fib(i)+" ")
}









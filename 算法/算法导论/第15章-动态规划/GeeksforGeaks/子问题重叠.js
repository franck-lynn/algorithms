/**
 * Created by franck.lynn on 2018/5/30 11:51.
 * https://www.geeksforgeeks.org/solve-dynamic-programming-problem/
 */
/*
https://www.youtube.com/watch?v=Taa9JDeakyU&index=2&list=PLqM7alHXFySGbXhWx7sBJEwY2DnhDjmxm
                      f(5)
                /             \
              f(4)             f(3)
           /      \           /     \ 
         f(3)     f(2)       f(2)   f(1)
         /  \     /  \       /  \
      f(2) f(1) f(1) f(0)  f(1) f(0)  有很多的重复计算
      /  \
   f(1) f(0) 
   重叠子问题
   可以看出这里为了计算f(5),有许多的重复计算,而且子问题与原问题是类似的
 */
var n = 40;
function fib(n) {
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

for(let i = 0; i < n; i++){
    if(i>0 && i%5==0 )
        console.log();
    process.stdout.write(fib(i)+" ")
}










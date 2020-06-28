/*
p(x) = a[0] + a[1] x + a[2] x^2 +...+ a[n] x^n
     = a[0] + x(a[1] +x (a[2] +...+ x (a[n-1] +x a[n])...)
var y=0;
for(var i = n;i >= 0; i--){
    y = a[i] + x*y
}
递归函数
f(a,0,x) = a[0]
           ____
f(a,1,x) = x*(a[1])+a[0] 
             ______
f(a,2,x) = x*(x*a[2]+a[1])+a[0]
             _____________
f(a,3,x) =x*(x*(x*(a[3]+a[2])+a[1])+a[0]
            _______________________
f(a.n,x)  = x*f(a,n-1,x)+a[n-1]
f(a,n-1,x)= x*f(a,n-2,x)+a[n-2]
...
f(a,3,x)  = x*f(a,2,x)+a[2]
f(a,2,x)  = x*f(a,1,x)+a[1]
f(a,1,x)  = x*f(a,0,x)+a[0]
f(a,0,x)  = 0          
 */

function hornerRule(a,x) {
    var y=0;
    for(var i = a.length-1;i >= 0; i--){
        y=a[i]+x*y
    }
    return y;
}

function hornerRuleNaive(a,x) {
    var y = 0;
    var n =a.length
    for (var i = 0; i <n; i++) {
        var m = 1;
        for (var k = 0; k < i; k++) {
            m = m * x; //x^i
        }
        y = y + a[i] * m
    }
    return y;
}
var a =[2,4,1,4,15];
// var b =[3,2,4,1];
var x=3;
var s =new Date();
console.log(hornerRuleNaive(a,x));
console.log("原生:",new Date()-s)
// 用递归
/*
function f(a,x,n) { // x*f*2
    //                     a,x,2 |a,x,1 |a,x,0
    if(n==0) return 0;
    return x*f(a,x,n-1)+a[n-1]
    //     x*f(a,x,2)+a[2] // 3*f(a,x,2)+2 = 3*7+2=23
    //     x*f(a,x,1)+a[1] // 3*f(a,x,1)+4 = 3*1+4=7
    //     x*f(a,x,0)+a[0] // 3*f(a,x,0)+1 = 3*0+1=1  
    //       f(a,x,0)=0;
}
*/

/*
function f(a,x,n) { // x*f*2
    //                     a,x,2 |a,x,1 |a,x,0
    if(n==0) return 0;
    return x*f(a,x,n-1)+a[a.length-n]
}
*/
// 递归的尾部优化
function f1(a,x,n,t=0) {
    if(n==0) return t;
    return f1(a,x,n-1,x*t+a[n-1])
}


// console.log(f(b,x,b.length));
// var s =new Date();
// console.log(f(a,x,a.length));
// console.log("递归:",new Date()-s)

var s =new Date();
console.log(f1(a,x,a.length,0));
console.log("递归:",new Date()-s)
// y =a*x^2 + b*x + c
//   =2*3^2 + 4*3 + 1
//   =18+12+1=31
var s =new Date();
console.log(hornerRule(a,x)); // 31
console.log("循环:",new Date()-s)















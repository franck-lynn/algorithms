/*
运行时间比较,假设求解问题的算法需要f(n)毫秒,对于表中的每个函数f(n)和时间t,
确定可以再时间t内求解的问题的最大规模n
最大规模数 = n * 1000 * 1000
f(n)= Math.log2(n)/1000 = 1000
*/
/*
function log2N(t) {
    return Math.pow(2,t*1000)
}
console.log(log2N(1000));

function factorialN(t) {
    var n = 1;
    while (factorial(n,1) <=  1000 * t){
        n++
    }
    console.log(n-1)
}
factorialN(1000)


function factorial(n,t) {
    // if(n == 1) return t;
    // return factorial(n-1,n*t)
    return n == 1 ? t : factorial(n-1, n * t)
}
// console.log(factorial(5,1))

function pow2(t) {
    var n = 1;
    while(Math.pow(2,n) < 1000*t){
        n++;
    }
    console.log(n-1)
}
pow2(1000)

function squareN(time) {
    console.log(Math.floor(Math.sqrt(time*1000)))
}

function cubeN(time) {
    console.log(Math.floor(Math.pow(time*1000,1/3)))
}


cubeN(1000*60)

// n * log2(n) = 1000 

function nLog2N(t) {
    var n = 1;
    while (n*Math.log2(n) < 1000*t){
        n++
    }
    console.log(n-1)
}
nLog2N(1000*60)

function fn(f,t) {
    var n = 1;
    while (f(n) < 1000 * t){
        n ++
    }
    console.log(n-1)
}
function nLog2NFun() {
    return function (n) {
        return n*Math.log2(n)
    }
}
function nLog2NFunc(n) {
    return n*Math.log2(n)
}
fn(nLog2NFun(),1000*60)
fn(nLog2NFunc,1000*60)
*/

const log2N = n => Math.log2(n);
const sqrtN = n=>Math.sqrt(n);
const timeN = n => n;
function fn(f,t) {
    var n = 1;
    while (f(n) < 1000 * t){
        n ++
    }
    console.log(n-1)
}
fn(timeN,1000)

// 求阶乘的函数
// 原生的递归方式
var n = 20
function factorial01(n) {
    if(n==1) return 1
    return n*factorial01(n-1)
}
var s1 = new Date(); 
console.log(factorial01(n))
var e1 = new Date();
// 改循环
function factorial02(n) {
    var accumulate = 1;
    var i = 1;
    while(i<=n){
        accumulate = accumulate*i
        i++
    }
    return accumulate;
}
var s2 = new Date();
console.log(factorial02(n))
var e2 = new Date();

// 改数组
function factorial03(n) {
    // 设置一个数组
    var a = [];
    // 数组的第1个值为1
    a[0] = 1;
    for(var i = 1; i < n; i++){
        // 求从2开始的阶乘
        // a[1]=2*a[0]=2*1,a[1]保存的是2!
        // a[2]=3*a[2]=3*2*1,依次类推
        a[i]=(i+1)*a[i-1]
    }
    return a[i-1];
}
var s3 = new Date();
console.log(factorial03(n))
var e3 = new Date();

// 改while循环
function factorial04(n) {
    // 设置一个数组
    var a = [];
    // 数组的第1个值为1
    a[0] = 1;
    var i = 1;
    while(i<n){
        // i=1,是求2的阶乘a[1]=2*a[0], 这也说明i不能包含n
        a[i] = (i+1)*a[i-1]
        i++
    }
    return a[i-1];
}
var s4 = new Date();
console.log(factorial04(n))
var e4 = new Date();

console.log(`循环:${e2-s2},递归:${e1-s1},数组:${e3-s3},while:${e4-s4}`);

// fibonacci数列
// 1,递归实现
function fibonacci01(n) {
    if (n==1 || n==2) return 1;
    return fibonacci01(n-1)+fibonacci01(n-2);
}
var s5 = new Date();
console.log(fibonacci01(n))
var e5 = new Date();

// 2,参数实现
function fibonacci02(n) {
    if(n==1 || n==2) return 1;
    // 前一个参数,相当于:f(n-2)
    var previous = 0; 
    // 后一个参数,相当于:f(n-1)
    var next = 1;
    // Fibonacci数列值
    var sum = 0;
    for(var i = 2;i<=n;i++){
        // 相当于 f(n)=f(n-2)+f(n-1)
        // 当进行到下一项时n+1是:
        //     f(n+1)=f(n-1)+f(n)
        sum = previous+next;
        previous = next;
        next = sum;
    }
    return sum;
}
var s6 = new Date();
console.log(fibonacci02(n));
var e6 = new Date();
// 3,数组实现
function fibonacci03(n) {
    var a = [];
    a[0]=1; // 数列第1项
    a[1]=1;  // 数列第2项
    // 由于数组项比数列项低1项,所以 i<n
    for(var i = 2;i<n;i++){
        a[i]=a[i-1]+a[i-2];
        
    }
    return a[i-1]
}
var s7 = new Date();
console.log(fibonacci03(n));
var e7 = new Date();

console.log(`递归:${e5-s5},参数:${e6-s6},数组:${e7-s7}`)






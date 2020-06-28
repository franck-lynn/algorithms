'use strict'
// 1.1.1
console.log((0 + 15) / 2); //7.5
console.log(2.0e-6 * 10000000.1) //20.0000002
console.log(true && false || true && true) //true
// 1.1.2
console.log((1 + 2.236) / 2) // number
console.log(typeof ((1 + 2.236) / 2)) // number 要用括号括起来
console.log(typeof 1.168) //number

console.log(typeof 4.1 >= 4) //false
console.log(1 + 2 + "3")
console.log(typeof (1 + 2 + "3")) // string 要用括号括起来
// 1.1.3
function threeParams(a, b, c) {
    if (a === b && a === c)
        console.log("equal")
    else
        console.log("not equal")
}

threeParams(1, 2, 3)
threeParams(2, 2, 2)
threeParams("a", "a", "a")

// 1.1.5 
function rangeZeo2One(x, y) {
    if ((x > 0 && x < 1) && (y > 0 && y < 1))
        console.log(true)
    else
        console.log(false)
}

rangeZeo2One(0.5, 0.6)
rangeZeo2One(0.5, 1)

// 1.1.6
function whatWillPrint() {
    var f = 0, g = 1;
    var a = []
    for (var i = 0; i <= 15; i++) {
        a.push(f) // 0  1   1  2  3  5
        f = f + g;   //  1  1   2  3    
        g = f - g    //  0  1   1  2   
    }
    console.log(a)
}

whatWillPrint()

// 1.1.7
function printValue() {
    var t = 9.0
    while (Math.abs(t - 9.0) / t > 0.001) {
        t = (9.0 / t + t) / 2.0
    }
    console.log(t)
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        // 外循环1000-1=999次
        for (var j = 0; j < i; j++) {
            // 内循环次数0+1+2+3+...+999,也是总的循环次数 (0+999)(100)2=499500
            sum++
        }
    }
    console.log(sum);
    var sum = 0;
    for (var i = 1; i < 1000; i *= 2) {
        // 外循环次数:2^n=1000,n+1=9+1=10
        for (j = 0; j < 1000; j++) {
            // 内循环次数1000*10=10000
            sum++
        }
    }
    console.log(sum)
}

printValue();
// 1.1.8
console.log("b" + "c")

// 编写一段代码,将一个正整数n用二进制表示并转换为一个string类型的值
function toBinaryString(n) {
    console.log(n.toString(2))
}

toBinaryString(10)
// 1.1.11编写一段代码打印出一个二维布尔数组的内容,其中,使用*表示真,
// 空格表示假,打印出行号和列号
// [[true,true],[true,false],[true,true],[false,true],[true,false]]
function printArr() {
    //创建一个二维数组
    // var table = new Array(m) //表格中有m行
    // for(var i =0;i<table.length;i++){
    //     table[i]=new Array(n) //每行有n列
    // }
    // // 初始化数组:
    // for(var row=0;row<table.length;row++){
    //     for(col=0;col<table[row].length;col++){
    //         table[row][col]=row*col
    //     }
    // }
    var table = [[true, true], [true, false], [true, true], [false, true], [true, false]];
    for (var row = 0; row < table.length; row++) {
        printf("第" + row + "行:")
        for (var col = 0; col < table[row].length; col++) {
            if (table[row][col] == true) {
                if (col == table[row].length - 1) console.log(`*  `)
                else printf(`*  `)
            }
            else {
                if (col == table[row].length - 1) console.log(`-  `)
                else printf(`-  `)
            }
        }
    }
}
printArr();

//不换行打印的函数
function printf(s) {
    process.stdout.write(s)
}

// 1.1.13,写一段代码,打印出一个M行N列的二维数组转置.
// 1 1 1   ---> 1  a
// a a a        1  a
//              1  a
function matrixTranspose(m, n) {
    // 初始化二维数组,有m行,n列
    var matrix = initMatrixByLoop(m,n);
    
    // 进行转置,先要创建一个n行,m列矩阵
    //创建一个数组,这个数组有n行,
    var table = new Array(n);
    // 每一行有n列
    for (var i = 0; i < table.length; i++) {
        table[i] = new Array(m)
    }
    
    for (var row = 0; row < matrix[row].length; row++){
        for(var col = 0; col < matrix.length; col++){
            table[row][col] = matrix[col][row]
        }
    }
    return table;
}
console.log("转置前的矩阵:", initMatrixByLoop(3,2))
console.log("转置后的矩阵:", matrixTranspose(3,2))
function initMatrixByLoop(m, n) {
    //创建一个数组,这个数组有m行,
    var table = new Array(m);
    // 每一行有n列
    for (var i = 0; i < table.length; i++) {
        table[i] = new Array(n)
    }
    // 初始化二维数组
    for (var row = 0; row < table.length; row++) {
        for (var col = 0; col < table[col].length; col++) {
            if (col % 2 == 0)   table[row][col] = "1"
            else table[row][col] = "a"
        }
    }
    return table;
}

var num = 3;
var sLoop = new Date();
console.log("循环方式初始化数组:", initMatrixByLoop(num, 2))
var eLoop = new Date()
/*
function initMatrix(row,col,element) {
    // 初始化一个二维数组,col列是不需要的
    if(row==0 && col==0) return [[element,element]]
    return initMatrix(row-1,col-1,element).concat([[element,element]])
}
*/
/*
function initMatrix(row,element) {
    if(row==0) return [[element,element]]
    return initMatrix(row-1,element).concat([[element,element]])
}
*/

/*
function initMatrix(r,e1,e2) {
    // 改进为行列元素不同
    return r>0?initMatrix(r-1,e1,e2).concat([[e1,e2]]):[]
}
*/

/*
function initMatrix(r,e1,e2,a=[]) {
    // 尾递归调用优化
    if(r==0) return a;
    return initMatrix(r-1,e1,e2,a.concat([[e1,e2]]))
}
console.log(initMatrix(3,1,"a"));
*/
function initMatrix(r, e1, e2, a = []) {
    return (r > 0) ? initMatrix(r - 1, e1, e2, a.concat([[e1, e2]])) : a
}

// 即使采用尾调用优化,仍然会爆栈
var sTailRecurse = new Date();
console.log("递归recurse方式初始化数组:",initMatrix(num, 1, "a"));
var eTailRecurse = new Date();
console.log(`循环初始化二维数组时间: ${eLoop-sLoop}毫秒`);
console.log(`递归初始化二维数组时间: ${eTailRecurse - sTailRecurse}毫秒`);


function initArray(m, element) {
    // 初始化一维数组,m个元素,元素内容是element
    return m > 0 ? initArray(m - 1, element).concat(element) : [];
}

console.log(initArray(5, "a"));

// 1.1.14 编写一个静态方法lg(),接受一个整型参数n,
// 返回不大于log2n的最大整数.

// 1.1.15 编写一个静态方法histogram().接收一个整型数组a[]
// 和一个整数m为参数并返回一个大小为m的数组,其中第i个元素的值
// 在参数数组中出现的次数,如果a[]中的值均在0到m-1之间,返回
// 数组中所有元素之和应该和a.length相等
function histogram(a, m) {
    // 返回一个大小为m的数组
    var newArr = new Array(m)
    // 为数组的每个元素赋值
    var count = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < a.length; j++) {
            if (i == a[j]) {
                count++
            }
            newArr[i] = count;
        }
        // 需要将count再次置为 0 ;
        count = 0;
    }
    return newArr.reduce((x, y) => (x + y), 0) == a.length
}

var aHistogram = [1,2,4,6,2,1,4,3,3]
console.log(histogram(aHistogram,8));

function exR1(n) {
    if(n<=0) return "";
    return exR1(n-3)+n+exR1(n-2)+n;
    //exR1(3)               +6           +exR1(4)       +6
    //exR1(0)+3+exR1(1)+3                exR1(1)        +4         +exR1(2)+4
    //          exR1(-2)+1+exR1(-1)+1    exR1(-2)+1+exR1(-1)+1      exR1(-1)+2+exR1(0)+2
    // ""       ""         ""            ""         ""              ""         ""
}
console.log("exR1(6)值为:",exR1(6))

function mystery(a,b) {
    //           2,25
    //           4,12
    //           8,6
    //           16,3
    //           32,1
    if(b==0) return 0;
    if(b%2==0) return mystery(a+a,b/2);
    //     mystery(4,12)+2
    //     mystery(8,6)
    //     mystery(16,3)
    //     mystery(32,1)+16
    //     mystery(64,0)+32
    //         0
    //     0+32+16+2
    return mystery(a+a,Math.floor(b/2))+a;
    
}
console.log(mystery(2,25));

// 循环方式的fibonacci数量
function _fibonacci(n) {
   if(n==1 || n==2) return 1;
   var i = 1;
   var previous = 0;
   var next = 1;
   var fib = 0;
   while(i<n){
       fib = previous+next;
       previous = next;
       next = fib;
       i++;
   }
   return fib
}
function fibonacci(n) {
    var fibs = []
    for(let i = 1; i < n; i++){
        fibs.push(_fibonacci(i))
    }
    return fibs;
}
console.log(fibonacci(10))
// 1.1.20 编写一个递归的方法计算ln(n!)的值
function ln(n) {
    return Math.log(_factorial(n))
}
function _factorial(n,t=1) {
    return n>1? _factorial(n-1,n*t):t
}
console.log(ln(5));
// 1.1.21 编写一段程序,从标准输入行读取数据,其中每行都包含一个名字和两个整数,.然后
// 打印一张表格,每行若干列数据包含名字,两个整数和第一个整数除以第个整数的结果,
// 精确到小数点后三位.

// 1.1.22 使用1.1.6.4节中的rank()递归方法重新实现binarySearch
// 并跟踪该方法的调用,每当该方法被调用时,打印出它的参数lo,hi并按
// 递归的深度缩进.
function rank02(a,k,lo,hi,deep=0) {
    // 每执行依次递归的时候deep++
    deep++
    if(lo>hi) {
        console.log(`都找到lo>hi了,肯定时没有找到这个key啦,递归深度${deep}`);
    }
    var mid = Math.floor((lo+hi)/2);
    // 执行这里的时候,deep的值是上面的deep++后的值
    if(k<a[mid]) {
        console.log(`执行左边,递归深度${deep},[${lo},${mid-1}]`)
        return rank02(a,k,lo,mid-1,deep)
    }else if(k>a[mid]){
        console.log(`执行右边,递归深度${deep},[${mid+1},${hi}]`)
        return rank02(a,k,mid+1,hi,deep)
    }else {
        console.log(`找到这里就返回.递归深度:${deep},${mid}`)
        return mid;
    }
}
var a=[10,11,12,16,18,23,29,33,48,54,57,68,77,85,98];
console.log(rank02(a,23,0,a.length-1))
/*
function binarySearch(a,k,lo,hi) {
    while(lo<=hi){
        var mid = Math.floor((lo+hi)/2);
        if(k<a[mid]) hi=mid-1;
        else if(k>a[mid]) lo=mid+1;
        else return mid;
    }
    return -1
}

*/

/*
function rank01(a,k,lo,hi) {
    // 递归到lo>hi时,说明没有找到
    if(lo>hi) return -1;
    // 求中位数
    var mid = Math.floor((lo+hi)/2);
    // k<a[mid],说明k在左边
    if(k<a[mid]) return rank01(a,k,lo,mid-1);
    if(k>a[mid]) return rank01(a,k,mid+1,hi);
    else return mid;
}
console.log(rank01(a,23,0,a.length-1))
*/

// 1.1.23,未binarySearch的测试用例添加一个参数:+打印出标准输入中不在白名单上的值.
// -则打印出标准输入中的白名单的值
function binarySearch02(k,a) {
    var lo = 0;
    var hi = a.length - 1;
    while (lo <= hi){
        var mid = Math.floor((lo+hi)/2);
        if(k<a[mid]) hi = mid-1;
        if(k>a[mid]) lo = mid+1;
        else return mid
    }
    return -1
}
function testBinarySearch02(char,key,a) {
    if(char=="+" && binarySearch02(key,a)==-1){
       console.log(key) 
    }
    if(char=="-" && binarySearch02(key,a)!=-1){
        console.log(key)
    }
}
testBinarySearch02("-",23,a);
/*
习题1.1.24
给出使用欧几里得算法计算 105 和 24 的最大公约数
的过程中得到的一系列 p 和 q 的值。扩展该算法中的
代码得到一个程序Euclid，从命令行接受两个参数，计
算它们的最大公约数并打印出每次调用递归方法时的两个
参数。使用你的程序计算 1 111 111 和 1 234 567 
的最大公约数。
 */
function gcd(p,q) {
    if(q==0) return p;
    // console.log(`p=${p}, q=${q}`)
    var r = p % q;
    return gcd(q,r)
}
console.log("最大公约数:",gcd(24,105))

/*
 1.2.27 二项分布,估计用下面代码计算binomial(100,50)将会产生的递归调用次数
 
public static double binomial(int N, int k, double p) {
    if (N == 0 && k == 0) return 1.0;
    if (N < 0 || k < 0) return 0.0;
    return (1.0 - p) * binomial(N - 1, k, p) + p * binomial(N - 1, k - 1, p);
}
将已经计算过的值保存在数组中并给出一个更好的实现
https://zhangjia.tv/670.html
*/
var n =10,k=5,p=0.25
var count = 0;
function binomial(n,k,p) {
    count++;
    if(n==0 && k==0) return 1.0;
    if(n<0 ||k<0) return 0.0 
    return (1.0-p)*binomial(n-1,k,p)+p*binomial(n-1,k-1,p)
}
var sBinomial1=new Date();
console.log(binomial(n,k,p))
console.log(count);
var eBinomial1=new Date()

function binomial02(n,k,p) {
    var count = 0;
    // 数组实现需要一个二维数组
    var matrix = new Array(n+1) //数组有n行
    for (var i=0;i<matrix.length;i++){
        matrix[i] = new Array(k+1);
    }
    // 把数组填充满数字0,这个是需要的
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[col].length; col++) {
            matrix[row][col] = 0
        }
    }
    // 初始化数组,把第所有行的第1列赋值
    for(var row=0; row <= n;row++){
        matrix[row][0]=Math.pow(1.0-p,row);
    }
    
    for(var row=1;row <= n;row++){
        for(var col=1;col <= k;col++){
            matrix[row][col]=(1.0-p)*matrix[row-1][col]+p*matrix[row-1][col-1]
            count++;
        }
    }
    console.log(count)
    return matrix[n][k]
    /*
       得到的数组形式如下:
           0                ......        row-1
       [[0,...,col-1]...有row-1个子数组...[0,...,col-1]] 
      */
}
// binomial02(10,5,0.25)
var sBinomial2 = new Date();
console.log(binomial02(n,k,p));
var eBinomial2 =new Date();
console.log(`递归:${eBinomial1-sBinomial1},数组:${eBinomial2-sBinomial2}`)

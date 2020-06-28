var table = require("./辅助表");

function matrixChainOrder(p) {
    // p是表示矩阵链维度的一个一维数组.
    // 由于描述的是括号分割,所以,分割的括号数量
    // 是少于链表长度1的,所以 n = p.length -1;
    var n = p.length - 1;
    /*
     m 保存计算代价,这是一个2行n列的表,用于保存a(i..j)
     的矩阵计算代价,从i..j是j-i+1个矩阵相乘的计算代价
     这里是要包含n的,所以 < n+1
     下标[0..n]
     */
    var m = table(n + 1, n + 1);
    /*
     s 是记录最优值m[i.j]对应的分割点k,
     */
    var s = table(n + 1, n + 1);
    for (let i = 0; i <= n; i++) {
        m[i][i] = 0;
    }
    var q;
    /*
    首先,取p数组中的i..j项进行处理,即处理子问题.
    这里的k的取值有k=i,i+1,...,j-1种可能.
         for(let k=i; k<j-1;k++){
             q = m[i][k]+m[k+1][j]+p[i-1]*p[k]*p[j];
             if(q<m[i][j]){
                 m[i][j] = q;
                 s[i][j] = k;
             }
         }
     上面只是取了i..j一段,分析了k的取值范围,还需要考虑i..j是哪一段
         for(let i=1;i<n-t+1;i++){
            j = i+t-1
         }
     现在,是考虑原问题解的时候了,原问题并不是i..j,而是(1..n)
     而只有1个矩阵不用计算,2个及以上才计算
         for(let t = 2; t < n; t++){
             
         }
     */
    for (let t = 2; t <= n; t++) {
        for (let i = 1; i <= n - t + 1; i++) {
            j = i + t - 1;
            m[i][j] = Number.POSITIVE_INFINITY;
            for (let k = i; k <= j - 1; k++) {
                q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < m[i][j]) {
                    m[i][j] = q;
                    s[i][j] = k;
                }
            }
        }
    }
    return {m, s};
}

// var p = [5, 10, 3, 12, 5, 50, 6]
// var p = [5, 10, 3] 
var p = [30, 35, 15, 5, 10, 20, 25];
// matrixChainOrder(p)
console.log(matrixChainOrder(p));
/*
********保存的计算代价m**********
0 15750 7875 9375 11875 15125 
0 2625 4375 7125 10500 
0 750 2500 5375 
0 1000 3500 
0 5000 
0 
 */

function printOptimalParents(s,i,j) {
    if(i==j){
        process.stdout.write(`A${i}`);
    }else{
        process.stdout.write(` (`);
        printOptimalParents(s,i,s[i][j]);
        printOptimalParents(s,s[i][j]+1,j);
        process.stdout.write(`) `);
    }
}

var s1 = matrixChainOrder(p);
var s2 = s1.s;

var i = 1;
var j = p.length-1;
printOptimalParents(s2,i,j);

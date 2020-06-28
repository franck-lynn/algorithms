/**
 * https://www.cnblogs.com/Anker/archive/2013/03/10/2952475.html
 */
var table = require("./辅助表");

function matrixChainRecursive(p,m,s,i,j) {
    if(i==j){
        m[i][j] = 0;
    }else{
        var k, q;
        m[i][j] = Number.POSITIVE_INFINITY;
        for(k = i; k < j; k++){
            q =matrixChainRecursive(p,m,s,i,k) 
                + matrixChainRecursive(p,m,s,k+1,j)
                + p[i-1]*p[k]*p[j];
            if(q < m[i][j]){
                m[i][j] = q;
                s[i][j] = k;
            }
        }
    }
    return m[i][j]
}

var p = [30, 35, 15, 5, 10, 20, 25];
var n = p.length;
var m = table(n,n);
var s = table(n-1,n-1);

console.log("********保存的计算代价m**********")
for(let i=1;i<n;i++) {
    for (let j = 1; j < n; j++) {
        var num = matrixChainRecursive(p, m, s, i, j);
        if (num < Number.POSITIVE_INFINITY)
            process.stdout.write(num + " ")
    }
    console.log(); // 换行
}
console.log("********保存的分割点k**********")
console.log(s)






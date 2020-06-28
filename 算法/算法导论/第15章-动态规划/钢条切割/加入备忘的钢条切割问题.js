/**
 * Created by franck.lynn on 2018/5/18 23:15.
 */
function memoizedCutRodAux(p, n, r) {
    var q;
    
    if (r[n] >= 0)
        return r[n];
    if (n == 0) {
        q = 0;
    } else {
        q = Number.NEGATIVE_INFINITY;
        for (let i = 1; i <= n; i++) {
            q = Math.max(q, p[i - 1] + memoizedCutRodAux(p, n - i, r))
        }
    }
    r[n] = q;
    return q;
}


function memoizedCutRod(p,n) {
    let r = [];
    for(let i = 0;i <= n; i ++){
        // r[i] = Number.NEGATIVE_INFINITY;
        r[i] = Number.NEGATIVE_INFINITY;
    }
    // return memoizedCutRodAux(p.n,r);
    return memoizedCutRodAux(p,n,r)
}

var p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
for(let i = 1;i<10;i++){
    var result = memoizedCutRod(p,i)
    console.log(result)
}
/*
1
5
8
10
13
17
18
22
25
 */







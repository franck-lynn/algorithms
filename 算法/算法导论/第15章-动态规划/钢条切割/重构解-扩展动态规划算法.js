/**
 * Created by franck.lynn on 2018/5/19 21:33.
 */
function extendBottomUpCutRod(p, n) {
    var q;
    let r = [], s = [];
    r[0] = 0;
    for (let j = 1; j <= n; j++) {
        q = Number.NEGATIVE_INFINITY;
        for (let i = 1; i <= j; i++) {
            if (q < p[i - 1] + r[j - i]) {
                q = p[i - 1] + r[j - i];
                r[j] = q;
                s[j] = i;
            }
            s[0]=0
        }
    }
    return [r, s]
}

function printCutRodSolution(p,n) {
    var [r,s] = extendBottomUpCutRod(p,n);
    console.log(r)
    console.log(s)
    // console.log(s[n-1])
    while (n>0){
        process.stdout.write(s[n]+"  ");
        n = n - s[n];
    }
}
var p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
// var a = extendBottomUpCutRod(p,7)
// console.log(a)

printCutRodSolution(p,7)






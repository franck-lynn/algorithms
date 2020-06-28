/**
 * Created by franck.lynn on 2018/5/19 9:09.
 */
function buttomUpCutRod(p, n) {
    let q;
    let r = [];
    r[0] = 0;
    for (let j = 1; j <= n; j++) {
        q = Number.NEGATIVE_INFINITY;
        for (let i = 1; i <= j; i++) {
            q = Math.max(q, p[i - 1] + r[j - i]);
        }
        r[j] = q;
    }

    return r[n];
}

var p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

for(let i = 1;i<10;i++){
    var result = buttomUpCutRod(p,i)
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








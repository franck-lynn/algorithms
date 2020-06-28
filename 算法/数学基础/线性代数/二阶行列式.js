/**
 * Created by franck.lynn on 2018/5/20 14:16.
 */
/*
a00 a01
a10 a11
 */
// 用二维数组表示一个行列式
var d1 = [[3,-2],[2,1]]
var d2 = [[12,-2],[1,1]];
var d3 = [[3,12],[2,1]];
function sODet(d) {
    return d[0][0]*d[1][1] - d[0][1]*d[1][0]
}

console.log(sODet(d1))
console.log(sODet(d2))
console.log(sODet(d3))








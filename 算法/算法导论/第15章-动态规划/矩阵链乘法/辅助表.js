/**
 * Created by franck.lynn on 2018/5/28 0:24.
 */
function auxiliaryTable(m,n) {
    var t = new Array(m);
    for(let i = 0; i < m; i++){ // 遍历每一行
        t[i] = new Array(n); // 为每一行添加一个数组
    }
    // 初始化为undefined
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            // t[i][j] = Number.POSITIVE_INFINITY;
            t[i][j] = 0;
        }
    }
    return t;
}
/*
function auxiliaryTable(m,n){
    var t = [];
    t[0] = new Array(m); 
    t[1] = new Array(n); 
    
    for(let k = 0; k < m; k++){ // 包含m
        // for(let k = i; k <= m; k++){ // 包含m
        // for(let k = i; k < m; k++){
        t[0][k] = 0;
    }
    for(let k = 0; k < n; k++){ // 包含n
        // for(let k = i; k <= n; k++){ // 包含n
        // for(let k = i; k < n; k++){
        t[1][k] = 0;
    }
    return t;
}
*/
// console.log(auxiliaryTable(5,5))
module.exports = auxiliaryTable;








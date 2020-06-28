/**
 * Created by franck.lynn on 2018/5/20 0:40.
 */

// var a = [[1,0,3,-1],[2,1,0,2]];
// var b = [[4,1,0],[-1,1,3],[2,0,1],[1,3,4]];


var a = [[-2,4],[1,-2]];
var b = [[2,4],[-3,-6]];
function matrixMultiply(a,b) {
    var aRows = a.length, 
        aColumns = a[0].length;
    var bRows = b.length, 
        bColumns = b[0].length;
    
    if(aColumns!=bRows)
        throw new Error("不相容的维度!");
    else {
        let c = new initMatrix(aRows,bColumns);
        for(let i = 0; i < aRows; i++){
            for(let j = 0; j < bColumns; j++){
                c[i][j] = 0;
                for(let k = 0; k < aColumns; k++){
                    c[i][j] = c[i][j] + a[i][k] * b[k][j];
                }
            }
        }
        return c;
    }
}
// 建立一个空的多维数组.
function initMatrix(m,n) {
    var matrix = new Array(m);
    for(let i = 0; i < m; i++){ // 遍历每一行
        matrix[i] = new Array(n); // 为每一行添加一个数组
    }
    return matrix;
}
var r = matrixMultiply(a,b)
console.log(r);

console.log(matrixMultiply(b,a))


// var matrix01 = new Matrix(3,3)
// console.log(matrix01.matrix)
// var m = initMatrix(a)
// console.log(m)
// var n = initMatrix(b)
// console.log(n)






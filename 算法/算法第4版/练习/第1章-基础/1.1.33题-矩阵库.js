class Matrix{
    constructor(){};
    // 向量点乘
    dot(v1,v2){
        var dotProduct = [];
        for(var i=0;i<v1.length;i++){
            dotProduct.push(v1[i]*v2[i])
        }
        return dotProduct;
    }
    // 矩阵叉乘,m1,m2是二维数组
    cross(m1,m2){}
    // 矩阵转置
    transpose(m){}
    // 矩阵向量积
    matrixMVector(m,v){}
    // 向量矩阵积
    vectorMMatrix(v,m){}
}
// 定义一个向量,向量就是一个数组
var v1 = [1,2,3];
var v2 = [4,5,6];

var m =new Matrix();
console.log(m.dot(v1,v2));
















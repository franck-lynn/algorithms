/**
 * Created by franck.lynn on 2018/5/20 13:57.
 */
/*
 用多维数组表示行列式
 |a11 a12 a13|
 |a21 a22 a23|
 |a31 a32 a33|
 =a11*a22*a33+
  a12*a23*a31+
  a13*a21*a32-
  a11*a23*a32-
  a12*a21*a33-
  a13*a22*a31
  */
var d = [
    [ 1, 2, 4],
    [-2, 2, 1],
    [-3, 4.-2]
];

function determinant(a) {
    var r = 0;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < i; j++){
           r = a[i][j]
        }
    }
}











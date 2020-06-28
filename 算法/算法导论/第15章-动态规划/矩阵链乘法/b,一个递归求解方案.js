/*
对于矩阵链乘法问题,我们可以将所有
a,1<=i<=j<=n确定的a(i)*a(i+1)*...*a(j)
  最小括号化方案作为子问题.
  上面这句话的具体实现:以矩阵的维度来代表矩阵
  function matrixChainOrder(i,j){return minMultiplyTimes}
  
  令matrixChainOrder(i,j) 表示计算矩阵a(i..j)
  所需标量乘法次数的最小值,那么,原问题的最优解
  ---计算n确定所需最小代价就是matrixChainOrder(1,n)
  上面这句话的具体实现:
  function mmatrixChainOrder(1,n){return minMultiplyTimes}
  
  矩阵i的实现:用一个多维数组,m行n列来实现,m[i]
  function initMatrix(m,n) {
    var matrix = new Array(m);
        for(let i = 0; i < m; i++){ // 遍历每一行
            matrix[i] = new Array(n); // 为每一行添加一个数组
        }
        return matrix;
    }
b,递归定义如下.
  1). 矩阵i=矩阵j时,矩阵链中包含唯一的矩阵 matrixChainOrder(i,i) 
      因此不需要做任何标量的乘法运算
      matrixChainOrder(i,i){return 0}
  2). 矩阵i<矩阵时,矩阵链中的最小代价是:
      Math.min(matrixChainOrder(i,k)+matrixChainOrder(k+1,j)+p[i-1]*p[k]*p[j]
  3). 最优分割点k假设是已知的,但实际上并不是
  4). 所以,考虑k的所有可能取值,只有i..j-1种可能
 */












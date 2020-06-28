
/*
假设a[0...n-1]是一个有n个不同数的数组.
若i<j且a[i]>a[j],则对偶(i,j)称为a的一个
a,列出数组 [2,3,8,6,1]的5个逆序对.
  ⟨2,1⟩ , ⟨3,1⟩ , ⟨8,6⟩ , ⟨8,1⟩ , ⟨6,1⟩ .
思路:
把数组分成左右2部分.这2部分分别有序.
       [2,3,8,6,1]
    [1,2,3]     [6,8]
  [1,3]  [2]  [6]  [8]
[1] [3]
 */

function _merge(a, lo, mid, hi) {
    var m = mid - lo + 1;
    var n = hi - mid;
    var l = [], r = [];
    var inversions = 0;
    for (var i = 0; i < m; i++) {
        l[i] = a[lo + i];
    }
    for (var j = 0; j < n; j++) {
        r[j] = a[mid + 1 + j]
    }
    console.log(l, r)
    var i = 0, j = 0;
    for (var k = lo; k <= hi; k++) {
        if (i >= m) a[k] = r[j++];
        else if (j >= n) a[k] = l[i++];
        else if (l[i] <= r[j]) a[k] = l[i++];
        else{
            a[k] = r[j++]
            inversions += m -i + 1;
        }
    }
    return inversions
}
var a = [2,3,6,8,1]
console.log(_merge(a,0,3,a.length-1))













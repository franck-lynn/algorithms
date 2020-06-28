/**
 * Created by franck.lynn on 2018/5/9 21:14.
 */
// 以x为根的子树第 i 小的关键字
function osSelect(x, i) {
    var r = x.left.size + 1;
    if(i == r) return x;
    else if(i < r) return osSelect(x.left,i);
    else return osSelect(x.right, i-r);
}
module.exports = osSelect;









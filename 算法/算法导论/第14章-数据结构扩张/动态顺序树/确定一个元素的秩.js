/**
 * Created by franck.lynn on 2018/5/9 21:25.
 */
// 给定指向顺序统计树T中节点x的指针,
// 过程osRank返回对T中序遍历对应的线性序中x的位置
function osRank(t,x) {
    var r = x.left.size + 1;
    var y = x;
    while (y != t.root){
        if(y == y.p.right) r = r + y.p.left.size + 1;
        y = y.p;
    }
    return r;
}

module.exports = osRank;








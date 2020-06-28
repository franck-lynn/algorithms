/**
 * Created by franck.lynn on 2018/5/16 23:58.
 */

var isEmpty = require("./判断节点是否为空");

function rightRotate(t, y) {
    var x = y.left;
    y.left = x.right;
    // y的右旋是把y节点作为x的右节点,
    // x的最大值可能会发生改变,y的值也会变
    y.max = Math.max(y.int.high, y.left.max, y.right.max);
    // if(x.right!=null) 
    if (!isEmpty(x.right))
        x.right.p = y;
    x.p=y.p;
    // if(y.p==null) 
    if(isEmpty(y.p))
        t.root=x;
    else if(y==y.p.right) y.p.right=x;
    else y.p.left = x;
    x.right = y;
    y.p=x;

    x.max = Math.max(x.int.high, x.left.max, x.right.max);
}

module.exports = rightRotate;








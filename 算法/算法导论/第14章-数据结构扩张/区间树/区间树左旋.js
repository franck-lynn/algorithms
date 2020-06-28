/**
 * Created by franck.lynn on 2018/5/16 23:35.
 */
var isEmpty = require("./判断节点是否为空");

function leftRotate(t, x) {
    var y = x.right;
    x.right = y.left
    // x的左旋是把x节点作为y的左节点,
    // x的最大值可能会发生改变,但是y的值也会变
    x.max = Math.max(x.int.high, x.left.max, x.right.max);
    // if(y.left!=null) 
    if(!isEmpty(y.left))
        y.left.p = x;
    y.p = x.p;
    // if(x.p==null) 
    if(isEmpty(x.p))
        t.root = y;
    else if(x==x.p.left) x.p.left = y;
    else x.p.right = y;
    y.left= x;
    x.p = y;
    y.max = Math.max(y.int.high, y.left.max, y.right.max);
}
module.exports = leftRotate;










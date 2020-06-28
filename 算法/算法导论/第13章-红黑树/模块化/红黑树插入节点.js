/**
 * Created by franck.lynn on 2018/5/21 12:03.
 */
var isEmpty = require("./判断红黑树节点是否为空");
var rbInsertFixup = require("./红黑树插入节点维护");
function rbInsert(t,z) {
    var y = t.nil;
    var x = t.root;
    while (!isEmpty(x)){
        y = x;
        if (z.key < x.key)
            x = x.left;
        else
            x = x.right;
    }
    z.p = y;
    // if (y == t.nil) 
    if (isEmpty(y))
        t.root = z;
    else if (z.key < y.key)
        y.left = z;
    else
        y.right = z;

    z.left = t.nil;
    z.right = t.nil;
    z.color = "RED";

    rbInsertFixup(t, z);
}
module.exports = rbInsert;










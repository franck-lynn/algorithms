/**
 * Created by franck.lynn on 2018/5/21 12:43.
 */
var leftRotate = require("./红黑树左旋");
var rightRotate = require("./红黑树右旋");

var isEmpty = require("./判断红黑树节点是否为空");
var rbTransplant = require("./红黑树删除节点子过程");
var rbDeleteFixup = require("./红黑树删除节点维护");
var treeMinimum = require("./查找最小值");

function rbDelete(t,z) {
    var y = z;
    var yOriginalColor = y.color;
    var x;
    if (z.left == t.nil) {
        x = z.right;
        rbTransplant(t,z, z.right);
    } else if (z.right == t.nil) {
        x = z.left;
        rbTransplant(t,z, z.left)
    } else {
        y = treeMinimum(z.right);
        yOriginalColor = y.color;
        x = y.right;
        if (y.p == z)
            x.p = y;
        else /*if (x) */{ // 有修改 .这里的if(x)不能要
            rbTransplant(t,y, y.right);
            y.right = z.right;
            if(y.right) y.right.p = y;
        }
        rbTransplant(t,z, y);
        y.left = z.left;
        y.left.p = y;
        y.color = z.color;
    }
    if (yOriginalColor == "BLACK") rbDeleteFixup(t,x); //
}

module.exports = rbDelete;






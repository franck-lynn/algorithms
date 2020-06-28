/**
 * Created by franck.lynn on 2018/5/21 12:08.
 */

var leftRotate = require("./红黑树左旋");
var rightRotate = require("./红黑树右旋");

var isEmpty = require("./判断红黑树节点是否为空");

function rbInsertFixup(t,z) {
    while (z.p && z.p.color == "RED") {
        if (z.p == z.p.p.left) {
            y = z.p.p.right;
            if (y.color == "RED") {
                z.p.color = "BLACK";
                y.color = "BLACK";
                z.p.p.color = "RED";
                z = z.p.p;
            } else {
                if (z == z.p.right) {
                    z = z.p;
                    leftRotate(t, z);
                }
                z.p.color = "BLACK";
                z.p.p.color = "RED";
                rightRotate(t, z.p.p);
            }


        } else {
            y = z.p.p.left;
            if (y && y.color == "RED") {
                z.p.color = "BLACK";
                y.color = "BLACK";
                z.p.p.color = "RED";
                z = z.p.p;
            } else {
                if (z == z.p.left) {
                    z = z.p;
                    rightRotate(t, z);
                }
                z.p.color = "BLACK";
                z.p.p.color = "RED";
                leftRotate(t, z.p.p);
            }
        }
    }
    t.root.color = "BLACK";
}
/*
function rbInsertFixup(t, z) {
    while (z.p && z.p.color == "RED") {
        if (z.p == z.p.p.left) {
            y = z.p.p.right;
            if (y && y.color == "RED") {  //有修改
                z.p.color = "BLACK";
                y.color = "BLACK";
                z.p.p.color = "RED";
                z = z.p.p;
            } else {
                if (z == z.p.right) {
                    z = z.p;
                    leftRotate(t, z);
                }
                z.p.color = "BLACK";
                z.p.p.color = "RED";
                rightRotate(t, z.p.p);
            }
        } else {
            y = z.p.p.left;
            // if (y && y.color == "RED") {
            if (y.color == "RED") {
                z.p.color = "BLACK";
                y.color = "BLACK";
                z.p.p.color = "RED";
                z = z.p.p;
            } else {
                if (z == z.p.left) {
                    z = z.p;
                    rightRotate(t, z);
                }
                z.p.color = "BLACK";
                z.p.p.color = "RED";
                leftRotate(t, z.p.p);
            }
        }
    }
    t.root.color = "BLACK";
}
*/

module.exports = rbInsertFixup;










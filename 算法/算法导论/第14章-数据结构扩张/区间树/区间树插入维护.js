/**
 * Created by franck.lynn on 2018/5/16 17:38.
 */
var leftRotate = require("./区间树左旋")
var rightRotate = require("./区间树右旋")

function itInsertFixup(t, z) {
    while (z.p && z.p.color == "RED") {
        if (z.p == z.p.p.left) {
            y = z.p.p.right;
            if (y && y.color == "RED") { //有修改
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
module.exports = itInsertFixup;










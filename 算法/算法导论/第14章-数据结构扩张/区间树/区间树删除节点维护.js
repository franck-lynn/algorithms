/**
 * Created by franck.lynn on 2018/5/17 11:39.
 */
var leftRotate = require("./区间树左旋")
var rightRotate = require("./区间树右旋")

function itDeleteTixup(t,x) {
    while (x && x != t.root && x.color == "BLACK") {
        var w;
        if (x == x.p.left) {
            w = x.p.right;
            if (w.color == "RED") {
                w.color = "BLACK";
                x.p.color = "RED";
                leftRotate(t.x.p);
                w = x.p.right;
            }
            if (w.left.color == "BLACK" && w.right.color == "BLACK") {
                w.color = "RED";
                x = x.p;
            } else if (w.right.color == "BLACK") {
                w.left.color = "BLACK";
                w.color = "RED";
                rightRotate(t,w);
                w = x.p.right;
            }
            w.color = x.p.color;
            x.p.color = "BLACK";
            w.right.color = "BLACK";
            leftRotate(t,x.p);
            x = t.root;
        } else {
            w = x.p.left;
            if (w.color == "RED") {
                w.color = "BLACK";
                x.p.color = "RED";
                rightRotate(t,x.p);
                w = x.p.left;
            }
            if (w.right.color == "BLACK" && w.left.color == "BLACK") {
                w.color = "RED";
                x = x.p;
            } else if (w.left.color == "BLACK") {
                w.right.color = "BLACK";
                w.color = "RED";
                leftRotate(t,w);
                w = x.p.left;
            }
            w.color = x.p.color;
            x.p.color = "BLACK";
            w.left.color = "BLACK";
            rightRotate(t,x.p);
            x = t.root;
        }
    }
    if(x) x.color = "BLACK";
}
module.exports = itDeleteTixup;









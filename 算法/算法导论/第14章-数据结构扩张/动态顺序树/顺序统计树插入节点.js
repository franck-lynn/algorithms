/**
 * Created by franck.lynn on 2018/5/9 21:12.
 */
var leftRotate = require("./顺序统计树左旋")
var rightRotate = require("./顺序统计树右旋")

var isEmpty = require("./判断节点为空节点");

function ostInsert(t,z) {
    z.size = 1; //这里要设置节点的size=1
    var y = t.nil; 
    // 修改了nil节点,所以这里改变如下:
    // var y = t.nil; // y是节点,不能带取节点的值 y=t.nil.key是不对的
    var x = t.root;
    // while (x != t.nil) {
    while (!isEmpty(x)) {
        y = x;
        x.size += 1; // 增加的代码
        if (z.key < x.key) x = x.left;
        else x = x.right;
    }
    z.p = y;
    // if (y == t.nil) {
    if (isEmpty(y)) {
        t.root = z;
        t.root.size= 1;
    }
    else if (z.key < y.key) y.left = z;
    else y.right = z;
    z.left = t.nil;
    z.right = t.nil;
    z.color = "RED";
    ostInsertFixup(t, z);
}

function ostInsertFixup(t, z) {
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

module.exports = ostInsert;






/**
 * Created by franck.lynn on 2018/5/14 0:11.
 */

var leftRotate = require("./顺序统计树左旋");
var rightRotate = require("./顺序统计树右旋");
var osTransplant = require("./删除动态顺序统计树节点子过程");
var osDeleteFixup = require("./删除动态顺序统计树节点维护");
var treeMinimum = require("./查找ost最小值");

var isEmpty = require("./判断节点为空节点");

function osDelete(t,z) {
    var y = z; 
    var yOriginalColor = y.color; 
    var x;
    if (z.left == t.nil) { 
        x = z.right;
        osTransplant(t,z, z.right);
        // y.p.size -= 1;
    } else if (z.right == t.nil) { 
        x = z.left;
        osTransplant(t,z, z.left)
        // y.p.size -= 1;
    } else {
        y = treeMinimum(z.right); 
        yOriginalColor = y.color; 
        x = y.right; 
        if (y.p == z) 
            x.p = y; 
        else /*if (x) */{ // 有修改 .这里的if(x)不能要
            osTransplant(t,y, y.right); 
            y.right = z.right; 
            if(y.right) y.right.p = y;
            y.right.size -= 1;
        }
        osTransplant(t,z, y); 
        y.left = z.left; 
        y.left.p = y; 
        y.color = z.color;
        
        // y.size = y.left.size + y.right.size + 1;
        
        // y.size = y.left.size + y.right.size + 1;
    }
    while(!isEmpty(y)){
        y.size = y.left.size + y.right.size + 1;
        y = y.p;
    }
    if (yOriginalColor == "BLACK") osDeleteFixup(t,x); //
}

module.exports = osDelete;




/**
 * Created by franck.lynn on 2018/5/9 22:38.
 */
var isEmpty = require("./判断节点为空节点");
// 右旋
function rightRotate(t, y) {
    // var xLeft = 0;
    // var xRight = 0;
    
    var x = y.left;
    y.left = x.right;
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
    // x.size = y.size;
    // y.size = y.left.size + y.right.size + 1;
    x.size = y.size;

    // x.left ? xLeft = x.left.size : xLfet = 0;
    // x.right ? xRight = x.right.size : xRight = 0;
    // x.size =  x.left  + x.right + 1;
    /*if(x.left && x.right)*/  y.size = y.left.size + y.right.size + 1;
   
}

module.exports = rightRotate;











/**
 * Created by franck.lynn on 2018/5/9 22:28.
 */
var isEmpty = require("./判断节点为空节点");

// 左旋
function leftRotate(t, x) {
    // var yLeft = 0;
    // var yRight = 0;
    
    var y = x.right;
    x.right = y.left
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
    y.size = x.size; //更新相应结点值,与教材上不一致  
    
    // y.left ?  yLeft = y.left.size : yLfet = 0;
    // y.right ? yRight = y.right.size : yRight = 0;
    // y.size =  y.left  + y.right + 1;
    /*if(y.left && y.right)*/ x.size = x.left.size + x.right.size + 1;
    
}
module.exports = leftRotate;











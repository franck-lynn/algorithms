/**
 * Created by franck.lynn on 2018/5/8 13:43.
 */
var isEmpty = require("./判断红黑树节点是否为空");
function treeSearch(t, k) {
    var x = t.root;
    while(!isEmpty(x)){
        if(x.key == k) return x;
        else if(k<x.key)  x = x.left;
        else  x = x.right;
    }
    return null;
}

module.exports = treeSearch;








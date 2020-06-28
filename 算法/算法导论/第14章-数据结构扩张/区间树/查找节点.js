/**
 * Created by franck.lynn on 2018/5/17 16:59.
 */

var isEmpty = require("./判断节点是否为空");
/**
 * 
 * @param t
 * @param i i是一个区间
 * @returns {null}
 */
function treeSearch(t, i) {
    var x = t.root;
    while(!isEmpty(x)){
        if(x.int.low == i[0] && x.int.high == i[1]) return x;
        else if(i[0] < x.int.low)  x = x.left;
        else  x = x.right;
    }
    return null;
}

module.exports = treeSearch;











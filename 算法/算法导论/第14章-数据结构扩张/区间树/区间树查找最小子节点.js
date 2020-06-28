/**
 * Created by franck.lynn on 2018/5/17 11:57.
 */
var isEmpty = require("./判断节点是否为空");

function treeMinimun(x) {
    while(!isEmpty(x.left)){
        x = x.left;
    }
    return x;
}
module.exports = treeMinimun;










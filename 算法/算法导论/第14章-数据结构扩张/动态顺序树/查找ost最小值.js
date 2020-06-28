/**
 * Created by franck.lynn on 2018/5/8 23:29.
 */
var isEmpty = require("./判断节点为空节点");

function treeMinimum(x) {
    // while (x.left != null) {
    while (!isEmpty(x.left)) {
        x = x.left;
    }
    return x;
}
module.exports = treeMinimum;









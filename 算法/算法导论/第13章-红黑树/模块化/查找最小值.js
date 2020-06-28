/**
 * Created by franck.lynn on 2018/5/8 23:29.
 */
var isEmpty = require("./判断红黑树节点是否为空");
function treeMinimum(x) {
    while (!isEmpty(x.left)) {
        x = x.left;
    }
    return x;
}
module.exports = treeMinimum;









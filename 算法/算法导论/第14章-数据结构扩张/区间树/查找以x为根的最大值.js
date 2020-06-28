/**
 * Created by franck.lynn on 2018/5/16 9:23.
 */
/**
 * 
 * @param x 以x作为根节点
 * @param m 最大值
 */
var isEmpty = require("./判断节点是否为空")
function max(x) {
    return  Math.max(x.int.high, (!isEmpty(x.left) ? x.left.max : null) ,(!isEmpty(x.right) ? x.right.max : null))
}
module.exports = max;










/**
 * Created by franck.lynn on 2018/5/16 17:42.
 */
var isEmpty = require("./判断节点是否为空");
var isOverlap = require("./区间i与i'重叠");

// 
/**
 * 区间树查找与i重叠的那个节点.
 * @param t
 * @param i, i是一段区间,例如i = [22, 25]
 */
function intervalSearch(t, i) {
    // 从根节点开始循环
    var x = t.root;
    // x 是从根节点循环过来的节点,x是节点
    while(!isEmpty(x) && !isOverlap(x, x.int)){
        // 
        if(!isEmpty(x.left) && x.left.max >= i.low)
            x = x.left;
        else 
            x = x.right;
    }
    return x;
}









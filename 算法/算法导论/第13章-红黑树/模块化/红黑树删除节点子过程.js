/**
 * Created by franck.lynn on 2018/5/21 12:44.
 */

var isEmpty = require("./判断红黑树节点是否为空");

function rbTransplant(t,u,v) {
    // if (u.p == null) 
    if(isEmpty(u.p))
        t.root = v;
    else if (u == u.p.left)
        u.p.left = v;
    else
        u.p.right = v;
    if (v)
        v.p = u.p;
}
module.exports = rbTransplant;









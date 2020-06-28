/**
 * Created by franck.lynn on 2018/5/17 11:38.
 */
var isEmpty = require("./判断节点是否为空");
// 用v节点去替换u节点
function itTransplant(t,u,v) {
    if(isEmpty(u.p))
        t.root = v;
    else if(u == u.p.left)
        u.p.left = v;
    else 
        u.p.right = v;
    if(v)
        v.p = u.p
}
module.exports = itTransplant










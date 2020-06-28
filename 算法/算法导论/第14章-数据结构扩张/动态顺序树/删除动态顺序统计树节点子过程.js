/**
 * Created by franck.lynn on 2018/5/14 0:11.
 */
var isEmpty = require("./判断节点为空节点");
// 用v节点去替换u节点

function osTransplant(t,u,v) {
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
module.exports = osTransplant;










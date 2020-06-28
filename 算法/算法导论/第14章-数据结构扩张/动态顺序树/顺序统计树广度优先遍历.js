/**
 * Created by franck.lynn on 2018/5/12 23:30.
 */
function breadthFirstTraverse(node) {
    if(!node) throw new Error("空树");
    var queue = [];
    queue.push(node);
    while (queue.length!=0){
        node = queue.shift();
        if(node.key!=null)
            process.stdout.write(node.key+"-"+node.size+"-"+node.color+"   ");
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

// 输出函数
module.exports = breadthFirstTraverse;












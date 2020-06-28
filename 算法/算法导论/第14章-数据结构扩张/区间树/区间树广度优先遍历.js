/**
 * Created by franck.lynn on 2018/5/16 0:36.
 */

function breadthFirstTraverse(node) {
    
    if(!node) throw new Error("空树");
    var queue = [];
    queue.push(node);
    while (queue.length!=0){
        node = queue.shift();
        // console.log(node.int.low)
        if(node.int && node.int.low != null)
            process.stdout.write("["+node.int.low+","+node.int.high+"]:{"+node.max+"~"+node.color+"}, ");
            // process.stdout.write("["+node.int.low+","+node.int.high+"],   ");
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

// 输出函数
module.exports = breadthFirstTraverse;










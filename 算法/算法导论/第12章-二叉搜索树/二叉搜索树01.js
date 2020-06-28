/**
 * Created by franck.lynn on 2018/4/30 0:39.
 */

function BST() {
    var Node =function (key) {
        this.key =key;
        this.left=null;
        this.right=null;
        this.p = null;
    };
    
    var root = null;
    
    this.insert = function (key) {
        // 新的要插入的节点
        var newNode = new Node(key); 
        // 前驱节点
        var prodromal = null;
        // 当前节点为根节点
        var current = root; 
        while(current!= null){ // 说明已经存在根节点或节点
            prodromal = current;
            // 要插入的新节点<当前节点,当前节点的左指针赋给当前节点
            // 即左节点置为当前节点
            if(newNode.key<current.key) current = current.left;
            else current = current.right;
        }
        // 当前要插入的节点的前驱是当前指针所指向的节点
        newNode.p = prodromal;
        if(prodromal==null) root =newNode; // 是空树b  b        
        // 如果要插入的节点<前驱节点的值,就在前驱节点的左侧插入    
        else if(newNode.key<prodromal.key) prodromal.left =newNode;
        // 如果要插入的节点>前驱节点的值,就在前驱节点的右侧插入
        else prodromal.right = newNode;
    };
    
    // 中序遍历
    this.inorderTreeWalk = function (callback) {
        _inorderTreeWalk(root,callback);
    };
    function _inorderTreeWalk(node,callback) {
        if(node!=null){
            _inorderTreeWalk(node.left,callback);
            callback(node.key);
            _inorderTreeWalk(node.right,callback);
        }
    }
}


var a = [8,7,5,5,6,2];
var a = [2,9,5,12,18,15,13,17,19]
// var a = [23,45,16,37,3,99,22];
var bst = new BST();
a.forEach(function (key) {
    bst.insert(key);
});
bst.inorderTreeWalk(function (key) {
    process.stdout.write(key+",")
});





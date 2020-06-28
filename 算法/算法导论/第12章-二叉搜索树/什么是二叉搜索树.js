/**
 * Created by franck.lynn on 2018/4/27 13:14.
 */
/*
二叉树特性:
有根节点,子节点,
左子树,右子树
左子树上的元素比父元素小,右子树上的元素比父元素大
 */
// 定义一个二叉树
function BinaryTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null
    }
    
    var root = null;

    // 插入节点
    this.insert = function(key) {
        var newNode = new Node(key);
        if(root === null) root = newNode;
        else {
            insertNode(root,newNode);
        }
    }
    // 插入节点
    function insertNode(node,newNode) {
        // 如果要插入的新节点的值小于当前节点
        if(newNode.key<node.key){
            // 如果左节点为空
            if(node.left==null){
                node.left =newNode
            }else {
                // 如果左节点不为空,在执行插入左节点的左边部分
                insertNode(node.left,newNode)
            }
        }else{
            // 说明要插入的节点比根节点大,执行右边插入
            if(node.right===null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode)
            }
        }
    }
    // 中序遍历
    this.inorderTreeWalk = function (callback) {
        _inorderTreeWalk(root,callback);
    }
    function _inorderTreeWalk(node,callback) {
        if(node!=null){
            _inorderTreeWalk(node.left,callback);
            callback(node.key);
            _inorderTreeWalk(node.right,callback);
        }
    }
}


var nodes = [8,7,5,5,6,2];
var binaryTree = new BinaryTree();
// nodes.forEach(key => binaryTree.insert(key))
nodes.forEach(function (key) {
    binaryTree.insert(key)
});
binaryTree.inorderTreeWalk(function (key) {
    process.stdout.write(key+",")
});






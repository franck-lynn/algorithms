/**
 * Created by franck.lynn on 2018/3/30 9:36.
 * https://www.imooc.com/video/15742
 */

// 定义一个二叉树
function BinaryTree() {
    // 定义一个节点,这个节点有三个属性顶部节点,左节点,右节点
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null
    }
    // 定义一个根节点
    var root = null;
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
    //实现插入节点,
    this.insert=function (key) {
        // 准备一个节点对象node
        var newNode = new Node(key);
        // 如果根节点为空,就要把这个节点插入根节点
        if(root===null) {
            root = newNode;
        }else{
            // 要是根节点不为空,就要进行插入动作,用一个函数实现
            insertNode(root,newNode)
        }
    };
    // 中序遍历接口实现
    var inOrderTraverseNode = function (node,callback) {
        if(node!==null){
            // 访问左子树
            inOrderTraverseNode(node.left,callback);
            callback(node.key); //遍历了当前节点值
            inOrderTraverseNode(node.right,callback);
        }
    };
    // 定义中序遍历接口
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root,callback);
    };
}

var nodes =[8, 3, 10, 1, 6, 14, 4, 7, 13];

console.log(nodes);
// 构造二叉树对象
var binaryTree =new BinaryTree();
nodes.forEach(function (key) {
    binaryTree.insert(key)
});
var binaryTreeArray =[];

// 定义回调函数
var callback=function (key) {
    binaryTreeArray.push(key)
};
// 已经有了排序二叉树,下面是如何遍历二叉树的每个节点
// 中序遍历
binaryTree.inOrderTraverse(callback);
console.log(binaryTreeArray)






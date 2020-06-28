/**
 * Created by franck.lynn on 2018/5/21 11:59.
 */
var rbInsert = require("./红黑树插入节点");
var findRoot = require("./查找根节点");
var breadthFirstTraverse = require("./红黑树广度优先遍历");
var shuffle = require("./../../../基本函数/数组随机排序");
var treeSearch = require("./查找节点");
var rbDelete = require("./红黑树删除节点")
function Node(key) {
    this.color = null; // 颜色
    this.key = key; // 关键字
    this.left = null; // 左孩子
    this.right = null; // 右孩子
    this.p = null;  // 父节点  
}
function RedBlackTree() {
    this.root = new Node(null);
    this.nil = new Node(null);
}
// 测试用例
// var a = [9, 5, 4, 3, 18, 14, 19];
var a = [ 4, 5, 9, 14, 3, 19, 18 ]
a = shuffle(a);

console.log("随机化后的顺序:",a);
// 红黑树对象
var t = new RedBlackTree();
// 插入操作
a.forEach(function(key){
    var z = new Node(key);
    rbInsert(t,z)
})

// 查找根节点方法1
// var root = treeSearch(t,7)
// 查找根节点方法2
var root1 = findRoot(t);
// console.log(root1.key);

console.log("随机化后插入再广度优先遍历:");
breadthFirstTraverse(root1);
console.log(); //换行

// 查找要删除的节点
var deleteKey = a[0];
var deleteNode = treeSearch(t,deleteKey);
console.log(); //换行;
console.log("要删除的节点键值:",deleteNode.key);
rbDelete(t,deleteNode);

var root2 = findRoot(t);
console.log(`删除${deleteKey}节点后的广度优先遍历:`);
breadthFirstTraverse(root2);













/*
  Created by franck.lynn on 2018/5/9 16:42.
  https://www.cnblogs.com/alan-forever/p/3657086.html
  顺序统计树 orderStatisticTree 
 */
var shuffle = require("../../../基本函数/数组随机排序");
var ostInsert = require("./顺序统计树插入节点");
var breadthFirstTraverse = require("./顺序统计树广度优先遍历");
var findRoot = require("./查找顺序统计树根节点");

// 要删除节点,得先告诉是哪个节点
var treeSearch = require("./查找ost节点");
var osDelete = require("./删除动态顺序统计树节点");

// 附加了信息的红黑树节点

function Node(key) {
    this.color = null;
    this.key = key;
    this.left = null;
    this.right = null;
    this.p =null;
    this.size = 0;
}
function OrderSatisticTree() {
    // this.root = null;
    // this.nil = null;
    this.root = new Node(null);
    this.nil = new Node(null);
}

/*
设有一组数据
var  a = [26, 17, 41, 14, 21, 30, 47, 10, 16, 19, 21, 28, 38, 7, 12, 14, 20, 35, 39, 3]
 */
// var  a = [26, 17, 41, 14, 21, 30, 47, 10, 16, 19, 21, 28, 38, 7, 12, 14, 20, 35, 39, 3];
// a = shuffle(a);
// var  a = [26, 41, 14, 17, 21, 30, 47, 10, 16, 19, 21, 28, 38, 7, 12, 14, 20, 35, 39, 3];
var  a = [26, 41, 14, 17, 21, 30, 47];
// var  a = [41, 47, 21, 17, 14, 26, 30];
console.log("原始的数组顺序:",a);

// 26-7-BLACK   17-4-BLACK   41-3-BLACK   14-2-RED   21-1-RED   30-1-RED   47-1-RED   
// var  a = [26, 17, 41, 14, 21, 30, 47];
// 26-7-BLACK   17-3-BLACK   41-3-BLACK   14-1-RED   21-1-RED   30-1-RED   47-1-RED 
a = shuffle(a);
console.log("随机化后的顺序:",a);
// var  a = [ 17, 41, 30, 26, 14, 47, 21 ]; // 有问题.解决办法,
                                         // 左右旋加上判断语句
                                         // if(y.left && y.right) y.size = y.left.size + y.right.size + 1
// console.log(a);
// var  a = [ 17, 21, 30, 26, 41, 14, 47]; 
// var  a = [26, 17, 41, 14, 21, 30, 47];
var t = new OrderSatisticTree();

a.forEach(function (key) {
    var z = new Node(key);
    ostInsert(t,z)
});
// console.log(t)
var root1 = findRoot(t);
// console.log(root1.key+"-"+root1.size);

console.log("随机化后插入再广度优先遍历:");
breadthFirstTraverse(root1);

// 查找要删除的节点
var deleteKey = a[0];
var deleteNode = treeSearch(t,deleteKey);
console.log(); //换行;

console.log("要删除的节点键值:",deleteNode.key);
osDelete(t,deleteNode);

var root2 = findRoot(t);
console.log(`删除${deleteKey}节点后的广度优先遍历:`);
breadthFirstTraverse(root2);



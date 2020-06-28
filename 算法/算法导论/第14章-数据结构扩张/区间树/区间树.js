/**
 * Created by franck.lynn on 2018/5/15 23:14.
 */
var shuffle = require("../../../基本函数/数组随机排序");
var itInsert = require("./区间树插入节点");
var breadthFirstTraverse = require("./区间树广度优先遍历");
var findRoot = require("./查找根节点");
var itDelete = require("./区间树删除节点");
var treeSearch = require("./查找节点");

// 定义一段区间
function Interval(t1, t2) {
    this.low = t1;
    this.high = t2;
}

// 定义节点
function Node(int) {
    this.color = null;
    this.int = int
    this.left = null;
    this.right = null;
    this.p = null;
    this.max = null;
}
// 定义一棵区间树
function IntervalTree() {
    this.root = new Node(null);
    this.nil = new Node(null);
}
// var int = new Interval(6,10);
// var x = new Node(int);
// console.log(x.int)
// 假定有这样一组数组,代表不同的区间
// var a =[[16,21], [8,9], [25,30], [5,8], [15,23], [17,19], [26,26], [0,3], [6,10], [19,20]]
// var a =   [[16,21], [8,9], [25,30], [5,8], [15,23], [19,20], [26,26], [0,3], [6,10], [17,19]]
// var a = [[16,21],   [6,10],   [19,20],   [5,8],   [15,23],   [17,19],   [26,26],   [0,3],   [8,9],   [25,30]];
var a=[[15,23], [5,8], [19,20], [0,3], [8,9], [17,19], [26,26], [6,10], [16,21], [25,30]]
// 查找要删除的节点是: Interval { low: 8, high: 9 }
a = shuffle(a);

var t = new IntervalTree();
a.forEach(function (e) {
    var int = new Interval(...e);
    var z = new Node(int);
    itInsert(t,z);
});
var root1 = findRoot(t);

// console.log(t)
breadthFirstTraverse(root1)

// 查找要删除的节点
var deleteKey = a[0];
var deleteNode = treeSearch(t,deleteKey);
console.log(); // 换行
console.log("查找要删除的节点是:",deleteNode.int)
/*
15-23:30~BLACK   5-8:9~RED   17-19:30~RED   0-3:3~BLACK   8-9:9~BLACK   16-21:21~BLACK   25-30:30~BLACK   6-10:10~RED   19-20:20~RED   26-26:26~RED  
[[16,21],   [6,10],   [19,20],   [5,8],   [8,9],   [17,19],   [25,30],   [0,3],   [15,23],   [26,26]] 
查找要删除的节点是: Interval { low: 15, high: 23 }
这个组合遇到问题.TypeError: Cannot read property 'p' of undefined
if (y.p == z)
 */
// 调用删除程序
itDelete(t,deleteNode);

console.log(); //换行;
var root2 = findRoot(t);
console.log(`删除${deleteKey}节点后的广度优先遍历:`);
breadthFirstTraverse(root2);

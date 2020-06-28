/**
 * Created by franck.lynn on 2018/4/30 15:18.
 */

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.show = show;
}
function show() {
    return this.data;
}

function BinarySearchTree() {
    this.root = null;
    this.insert = insert; //插入
    this.inorderTreeWalk = inorderTreeWalk; //中序遍历
    this.find = find; // 查找给定值
    // this.iterativeTreeSearch = iterativeTreeSearch; // 迭代查找
}

function insert(data) {
    var n = new Node(data); // 要插入的节点
    if(this.root == null) this.root = n; //根节点为空,直接插入根节点
    else { // 根节点不为空的情况
        var current = this.root; // 当前节点为根节点
        var parent; // 父节点
        while(true){
            parent = current; // 父节点为当前根节点
            if(data<current.data){ // 要插入的小于当前节点值
                current = current.left; // 当前节点左边插入作为当前节点
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current==null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inorderTreeWalk(node) {
    if(!(node==null)){
        inorderTreeWalk(node.left);
        process.stdout.write(node.show()+"  ")
        inorderTreeWalk(node.right)
    }
}

function find(data) {
    var current = this.root;
    while(current!= null){
        if(current.data == data) return current;
        else if(data<current.data)  current = current.left;
        else  current = current.right;
    }
    return null;
}
/*
             23
        16        45
     3   22    37   99
 */


var binarySearchTree = new BinarySearchTree();
var a = [23,45,16,37,3,99,22];
// var a = [8,7,5,5,6,2];
// var a =[92,77,81,30,22,10,56]
a.forEach(function (key) {
    binarySearchTree.insert(key);
})

binarySearchTree.inorderTreeWalk(binarySearchTree.root)
// 中序遍历结果:3  16  22  23  37  45  99  
console.log()
var value = 23;
var found = binarySearchTree.find(value)
if(found !=null){
    console.log("发现"+value+"在二叉搜索树");
}else{
    console.log(value+"不在在二叉搜索树");
}
// 发现23在二叉搜索树
// 123不在在二叉搜索树
console.log(found)
/*
Node {
  data: 23,
  left: 
   Node {
     data: 16,
     left: Node { data: 3, left: null, right: null,...},
     right: Node { data: 22, left: null, right: null,... },
     ... },
  right: 
   Node {
     data: 45,
     left: Node { data: 37, left: null, right: null,...},
     right: Node { data: 99, left: null, right: null, ...},
     ...},
  ... }
 */

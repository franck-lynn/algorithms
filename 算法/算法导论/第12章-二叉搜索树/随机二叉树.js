/**
 * Created by franck.lynn on 2018/5/3 11:29.
 */

// 随机将数组中的元素排序
function shuffle(a) {
    var n = a.length
    for(var i=0;i<n;i++){
        // 返回一个[i...n)之间的随机数
        var r =i + Math.floor(Math.random()*(n-i));
        // 先把a[i]值保存下来.在把a[i]赋值i后面的任何一个元素
        var temp = a[i];
        a[i] =a[r];
        a[r] =temp;
    }
    return a;
}

function BinarySearchTree() {
    // 定义二叉树的节点
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.predecessor = null;//定义节点的前驱
    }

    var root = null;

    this.insert = function (key) {
        var newNode = new Node(key);
        var precedecessor = null;//节点的前驱设置为空
        var current = root;
        while (current != null) {
            precedecessor = current; // 相当于临时变量保存下慢半拍的指针
            if (newNode.key < current.key) current = current.left;
            else current = current.right;
        }
        newNode.predecessor = precedecessor;
        if (precedecessor == null) root = newNode;
        else if (newNode.key < precedecessor.key) precedecessor.left = newNode;
        else precedecessor.right = newNode;
    }
    this.inorderTreeWalk = function () {
        var stack = [],res = [];
        var current = root;
        console.log(current)
        while(true){
            while(current!=null){ // 当前节点不空空
                stack.push(current); // 当前节点入栈
                current =current.left; // 把当前节点的左孩子当成当前节点
            }
            if(stack.length==0) break;
            // 左边遍历完成后,开始弹栈
            var temp =stack.pop();
            // 弹栈的是节点,把值放进一个数组
            res.push(temp.key);
            current=temp.right;
        }
        console.log(res)
        return res;
    }
}

var a = [2,9,5,12,18,15,13,17,19]
var bst = new BinarySearchTree();
shuffle(a).forEach(function (key) {
    bst.insert(key);
});

process.stdout.write("中序遍历,非递归1: ")
bst.inorderTreeWalk()





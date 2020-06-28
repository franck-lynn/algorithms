/**
 * Created by franck.lynn on 2018/5/1 17:01.
 */
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

    /*
    https://blog.csdn.net/u012877472/article/details/49401751
    https://segmentfault.com/a/1190000011053277
    https://segmentfault.com/a/1190000004620352
     */
    this.inorderTreeWalk = function () {
        var stack = [], res = [];
        var current = root;
        while (true) {
            while (current != null) { // 当前节点不空空
                stack.push(current); // 当前节点入栈
                current = current.left; // 把当前节点的左孩子当成当前节点
            }
            if (stack.length == 0) break;
            // 左边遍历完成后,开始弹栈
            var temp = stack.pop();
            // 弹栈的是节点,把值放进一个数组
            res.push(temp.key);
            current = temp.right;
        }
        console.log(res)
        return res;
    }
    this.inorderTreeWalkUnrecurse = function () {
        var stack = [];
        var current = root;
        if (!current) throw new Error("栈为空!");
        while (stack.length != 0 || current) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                current = stack.pop();
                process.stdout.write(current.key + "  ")
                current = current.right;
            }
        }
    }
    // 前序遍历非递归
    this.preorderTreeWalkUnrecurse = function () {
        var node = root;
        if (!node) throw new Error("Empty tree");
        var stack = [];
        stack.push(node);
        while (stack.length !== 0) {
            node = stack.pop();
            process.stdout.write(node.key + "  ");
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    /*
     MorrisInOrder()：
     while 没有结束
        如果当前节点没有左后代
          访问该节点
          转向右节点
        否则
          找到左后代的最右节点，且使最右节点的右指针指向当前节点
          转向左后代节点
     */
    this.inorderTreeWalkMorris = function () {
        var head = root;
        if (!head) return
        var cur1 = head, cur2 = null
        while (cur1) {
            cur2 = cur1.left // cur2相当于cur1左孩子
            if (cur2) { // cur1有左孩子时
                // cur2.right有右孩子且右孩子!=cur1
                while (cur2.right && cur2.right !== cur1) {
                    cur2 = cur2.right // cur2设置成该cur1点左孩子的右孩子
                }
                if (!cur2.right) { // 只要cur2的右孩子为空
                    cur2.right = cur1 // 把cur1设置为cur2的右孩子
                    cur1 = cur1.left // cur1为当前节点左孩子
                    continue //转而执行下一次循环
                } else {
                    cur2.right = null
                }
            }
            process.stdout.write(cur1.key + ",  ")
            cur1 = cur1.right
        }
    }

    this.preorderTreeWalkMorris = function () {
        var head = root;
        if (!head) return
        var cur1 = head, cur2 = null
        while (cur1) {
            cur2 = cur1.left
            if (cur2) {
                while (cur2.right && cur2.right != cur1) {
                    cur2 = cur2.right
                }
                if (!cur2.right) {
                    cur2.right = cur1
                    process.stdout.write(cur1.key + "|  ")
                    cur1 = cur1.left
                    continue
                } else {
                    cur2.right = null
                }
            } else {
                process.stdout.write(cur1.key + "|  ")
            }
            cur1 = cur1.right
        }
    }

    this.postorderTreeWalkMoris = function () {
        var head = root;
        if (!head) return
        var cur1 = head, cur2 = null
        while (cur1) {
            cur2 = cur1.left
            if (cur2) {
                while (cur2.right && cur2.right !== cur1) {
                    cur2 = cur2.right
                }
                if (!cur2.right) {
                    cur2.right = cur1
                    cur1 = cur1.left
                    continue
                } else {
                    cur2.right = null
                    printEdge(cur1.left)
                }
            }
            cur1 = cur1.right
        }
        printEdge(head)
    }

    var printEdge = function (head) {
        var tail = reverseEdge(head)
        var cur = tail
        while (cur) {
            process.stdout.write(cur.key + "!  ")
            cur = cur.right
        }
        reverseEdge(tail)
    }

    var reverseEdge = function (head) {
        var pre = null,
            next = null
        while (head) {
            next = head.right
            head.right = pre
            pre = head
            head = next
        }
        return pre
    }
}

var a = [2, 9, 5, 12, 18, 15, 13, 17, 19]
// var a = [23,45,16,37,3,99,22];
var bst = new BinarySearchTree();
a.forEach(function (key) {
    bst.insert(key);
});
process.stdout.write("中序遍历,非递归1: ")
bst.inorderTreeWalk()
process.stdout.write("中序遍历,非递归2: ")
bst.inorderTreeWalkUnrecurse()
console.log()
process.stdout.write("中序遍历,非递归,非栈: ")
bst.inorderTreeWalkMorris()
console.log()
process.stdout.write("先序遍历,非递归,非栈MORIS: ")
bst.preorderTreeWalkMorris()

console.log()
process.stdout.write("后序遍历,非递归,非栈: ")
bst.postorderTreeWalkMoris()
console.log()
process.stdout.write("前序遍历,非递归: ")
bst.preorderTreeWalkUnrecurse()

/**
 * Created by franck.lynn on 2018/4/30 23:16.
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
        if(prodromal==null) root =newNode; // 是空树
        // 如果要插入的节点<前驱节点的值,就在前驱节点的左侧插入    
        else if(newNode.key<prodromal.key) prodromal.left =newNode;
        // 如果要插入的节点>前驱节点的值,就在前驱节点的右侧插入
        else prodromal.right = newNode;
    };

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
    
    // 为了在二叉搜索树内移动子树,定义一个子过程transplant,它是用另一棵子树
    // 替换一棵子树并成为其双亲的孩子节点.当transplant用一棵以v为根的子树来
    // 替换以u为根的子树时,节点u的双亲就变成节点v的双亲,并且最后v成为u的双亲
    // 的相应孩子
    // v是替换u的
    function transplant(u,v) {
        // 如果节点u的前驱为null,说明u是根节点,只有根节点的前驱是null
        if(u.p==null) root =v;
        // 否则,u是其双亲的左孩子或者右孩子,u.p是u的双亲,u=u.p指明u是其双亲的孩子
        // u.p.left是指u是双亲的左孩子    
        else if(u==u.p.left) u.p.left = v;
        else u.p.right = v;
        // u的双亲是v的双亲
        if(v!=null) v.p = u.p;
    }
    
    
    this.treeSearch = function (k) {
        return _treeSearch(root,k)
    }
    
    function _treeSearch(x,k) {
        if(x==null || k == x.key) return x;
        if(k<x.key) return _treeSearch(x.left,k);
        else return _treeSearch(x.right,k);
        
    }
    
    this.treeDelete = function (key) {
        // z是要删除的节点,先要在树中找到这个节点
        var z =this.treeSearch(key)
        
        if(z.left==null) transplant(z,z.right)
        else if(z.right==null) transplant(z,z.left);
        else{
            var y= treeMinimum(z.right);
            if(y.p!=z){
                transplant(y,y.right);
                y.right = z.right;
                y.right.p=y;
            }
            transplant(z,y);
            y.left = z.left;
            y.left.p=y;
        }
    }
    function treeMinimum(x) {
        while(x.left!=null){
            x=x.left;
        }
        return x;
    }
    
    
}

// var a = [12,5,18,2,9,15,19,13,17]
// var a = [23,45,16,37,3,99,22];
var a = [7, 4, 18, 11, 19, 9, 14]
var bst = new BST();
a.forEach(function (key) {
    bst.insert(key);
});
bst.inorderTreeWalk(function (key) {
    process.stdout.write(key+",")
});
console.log()
console.log("*******删除了2个节点*******")
// console.log(bst.treeSearch(18))
bst.treeDelete(7)
// bst.treeDelete(12)
bst.inorderTreeWalk(function (key) {
    process.stdout.write(key+",")
});






/**
 * Created by franck.lynn on 2018/5/15 23:58.
 */
var isEmpty = require("./判断节点是否为空");
// var max = require("./查找以x为根的最大值");
var itInsertFixup = require("./区间树插入维护");



function itInsert(t,z) {
    // y是一个指针,初始指向空节点,y是要插入节点的父节点
    var y = t.nil; 
    // x 是一个指针,初始指向根节点,x是要插入的位置
    // x 指针要慢半拍
    var x = t.root;
    // 循环x从根节点开始,一直找到空的位置为止,看关键字,
    // 关键字小的就放左边空位置,大的就放右边空位置.
    while(!isEmpty(x)){
        y = x;
        // 要插入的节点的前面一个节点x,在插入的时候,
        // 前面节点的最大值就会改变,这个位置进行维护
        // x.max = Math.max(x.int.high, (!isEmpty(x.left) ? x.left.max : null) ,(!isEmpty(x.right) ? x.right.max : null))
        // x.max = Math.max(x.int.high, x.left.max, x.right.max)
        if(z.int.low < x.int.low)
            x = x.left;
        else x= x.right;
    }
    // 要插入的节点z的父节点就是上面保存的空节点前面的一个节点y
    z.p = y;
    // 如果根节点为空,就将z插入到根节点
    if(isEmpty(y)){
        t.root = z;
    }else if(z.int.low < y.int.low){
        // 如果
        y.left = z;
    }else {
        y.right = z;
    }
    // 要插入节点z,因为后面都是空的,所以直接就是本身的最大值就可以了
    z.max = z.int.high;  
    
    z.left = t.nil;
    z.right = t.nil;
    z.color = "RED";
    while(!isEmpty(y)){
        y.max = Math.max(y.int.high, y.left.max, y.right.max);
        y = y.p;
    }
    // 把插入的节点维护成一个红黑二叉树
    itInsertFixup(t, z)
}

module.exports = itInsert;








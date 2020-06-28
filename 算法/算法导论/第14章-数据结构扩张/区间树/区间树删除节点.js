/**
 * Created by franck.lynn on 2018/5/17 0:19.
 */
var isEmpty = require("./判断节点是否为空");
var leftRotate = require("./区间树左旋")
var rightRotate = require("./区间树右旋")
var itTransplant = require("./区间树删除节点子过程");
var itDeleteFixup = require("./区间树删除节点维护");
// 查找红黑树上的最小子节点
var treeMinimun = require("./区间树查找最小子节点");

function itDelete(t,z) {
    var y = z;
    var yOriginalColor = y.color;
    var x;
    // 如果要删除的z节点左边是空子节点.
    // console.log("z的左孩子为空?",z.left == t.nil)
    // if(z.left == t.nil){
    if(isEmpty(z.left)) {
        /*
               A
              / \
             Z*  B
            / \
          nil  C  
          
               A
              / \
     y=z <---Z*  B
            / \
          nil  x --->x = z.right;  
                 
         */
        x = z.right;
        /*
        z用z.right直接替换了,这种情况区间的最大值并没有发生改变
         */
        itTransplant(t, z, z.right);
        // }else if(z.right == t.nil){
    }else if(isEmpty(z.right)){
        /*
                 A
                / \
       y=z <---Z*  B
              / \
 x=z.left<---C  nil 
            
         */
        x = z.left;
        /*
        z用z.left直接替换,这种情况区间的最大值也没有发生改变
         */
        itTransplant(t,z,z.left);
    }else{
        /*
        z既有左孩子,又有右孩子
                          A
                         / \
                y=z <---Z*  B
                       / \
                      C   D    
         */
        y = treeMinimun(z.right);
        // console.log("查找的最小值:",y.int)
        yOriginalColor = z.right;
        x = y.right;
        if (y.p == z){
            x.p = y;
            /*
                          A
                         / \
                y=z <---Z*  B
                       / \
                      C   D  y =  treeMinimum(z.right); 
                          \ 
                           x = y.right (nil)
                itTransplant(t,z, y);用y代替z节点
                          A
                         / \
          y=z <---Z*   D(y) B
                       / \
      y.left=z.left   C   x(nil)
           y.left.p = y;
           此时,y的节点左孩子添加了C,区间最大值的关键字有可能发生改变.
           在  y.color = z.color;语句下面设置
           y.max = ....                                       
             */
        }else{
            /*
                                 A
                                / \
                       y=z <---Z*  B
                              / \
                             C   D 
                                / \ 
  y =  treeMinimum(z.right);   E   F  
  
              itTransplant(t,y, y.right); 
                                 A
                                / \
                               Z*  B
                              / \
                             C   D 
                                / \ 
  y =  treeMinimum(z.right);   E   F 
                                \
                                nil 
                                
                                 A
                                / \
                               Z*  B
                              / \
                             C   D 
                                / \ 
                              nil  F 
 itTransplant(t,y, y.right); 把y=E干掉了,
 用nil替换,y=E,y仍然是E   
              y.right = z.right;  
                    E(y)
                     \
                      D   y.right.p = y;D的父原来是Z,现在要改为y
                     / \
                   nil  F 
              接下来就用这个y替换z.  
                                 A
                                / \
                              E(y) B
                                \
                                 D 
                                / \ 
                              nil  F  
              z的左孩子成为y的左孩子
                                 A
                                / \
                              E(y) B
                              / \
                             C   D 
                                / \ 
                              nil  F                                                                             
             */
            itTransplant(t,y,y.right);
            y.right = z.right;
            if(y.right) y.right.p = y;
            // y节点原来是E,没有左,右孩子,现在E取代了z.
            // D节点发生了变化,E(y)也随之发生了变化
            y.right.max = Math.max(y.right.int.high, y.right.left.max, y.right.right.max)
            // y.max = ...
        }
        
        itTransplant(t,z, y);
        y.left = z.left;
        y.left.p = y;
        y.color = z.color;
        
        while(!isEmpty(y)){
            // console.log(y.int)
            y.max =  Math.max(y.int.high, y.left.max, y.right.max);
            y = y.p
        }
    }
    // 节点颜色的维护
    if (yOriginalColor == "BLACK") itDeleteFixup(t,x);
}
module.exports = itDelete;










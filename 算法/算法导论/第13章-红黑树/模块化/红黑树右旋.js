/**
 * Created by franck.lynn on 2018/5/8 8:41.
 */
/*
        7                          7
       / \                        / \
      4   18(y)  ---右旋---->    4   11🔄(x)
         /  \                        /  \
       11(x) 19                     9   18(y)
       /  \                             /  \
      9    14                          14   19
    右旋是绕y旋转,x成为根节点,y成为x的右节点
    1,根据y求出x, x = y.left;
                7         
               / \                      
              4   18(y)  
                 /  \                     
               11(x) 19                    
               /  \                          
              9    14  
    2,把x的右孩子变成y的左孩子
                7         
               / \                      
              4   18(y)  
                 /  \                     
               14*  19 
      这就把x和y节点关系断开了,但是14的父节点11这层关系还存在的
      这就不合适了,要改变      
                   11(x)                    
                   /  \                          
                  9    14      
    3,现在是时候改变了,把14的父节点设置成y
      x.left.p = y
                   7         
                  / \                      
                 4   18(y)  
                    /  \                     
                  14*  19 
                     
                  11(x)                    
                  /  \                          
                 9    14*      
    4,现在,要把x的父节点设置成y的父节点,即y的父节点变成是x的父节点,这
      可以不移动节点,看起来还是一样的  x.p=y.p,相当于把x网上提升了.但
      图像不变动,还是保持原来的.
                   7         
                  / \                      
                 4   18(y)  
                    /  \                     
                  14*  19 
                     
                  11(x)                    
                  /  \                          
                 9    14*       
    5,y的父节点,可以根据y.p找到7,把y的父节点的右孩子设置成x,
      y.p.right = x;
                 7         
                / \                      
               4  11(x)                    
                 /  \                          
                9    14*     
      这样x节点就移动好了.
                 18(y)  
                 /  \                     
               14*  19        
    6,把x的右孩子设置成y, x.right = y;
                  7         
                / \                      
               4  11(x)                    
                 /  \                          
                9   18(y)  
                     /  \                     
                   14    19      
    7,把y的父节点设置成x,         y.p=x;  
                  7         
                / \                      
               4  11(x)                    
                 /  \                          
                9   18(y)  
                     /  \                     
                   14    19                           
 */

var isEmpty = require("./判断红黑树节点是否为空");
// 右旋
function rightRotate(t, y) {
    var x = y.left;
    y.left = x.right;
    // if(x.right!=null) 
    if (!isEmpty(x.right))
        x.right.p = y;
    x.p=y.p;
    // if(y.p==null) 
    if(isEmpty(y.p))
        t.root=x;
    else if(y==y.p.right) y.p.right=x;
    else y.p.left = x;
    x.right = y;
    y.p=x;
}
module.exports = rightRotate;










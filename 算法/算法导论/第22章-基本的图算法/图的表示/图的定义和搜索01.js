/*
https://www.imooc.com/video/12240

        A
       / \ 
      B   D
     / \ / \
    C--F G--H
    \ /
     E 
  
   A  B  C  D  E  F  G   H    
A     1     1                        
B  1     1        1                      
C     1        1  1                   
D  1                 1   1   
E        1        1
F     1  1     1
G           1            1
H           1        1

A  B  C  E  F  D  G  H  
A  B  D  C  F  G  H  E

 */
// 定义节点
function Node(element) {
    this.data = element;//当前节点的值
    this.isVisited = false; // 当前节点是否被访问
}
// 定义集合
function CMap(capacity) {
    this.iCapacity = capacity; // 图最多可容纳的顶点数
    this.iNodeCount = 0; // 已经添加的顶点(节点)个数
    this.pNodeArray = []; // 用来存放顶点数组
    this.pMarix = initArrayCurry(capacity*capacity,0); //用来存放邻接矩阵
    // 向图中增加节点
    // 重置顶点
    // 为有向图设置邻接矩阵
    // 为无向图设置邻接矩阵
    // 打印邻接矩阵
    // 深度优先遍历
    // 广度优先遍历
}
// 添加节点,
CMap.prototype.addNode = function (element) {
    if(element == null) return false;
    this.pNodeArray[this.iNodeCount] = new Node(element);
    this.iNodeCount++; // 表示当前图中有多少节点被放入了
    return true;
};
CMap.prototype.resetNode = function () {
    // 把所有的node节点中的isVisited设置为false
    for(let i = 0; i < this.iNodeCount; i++){
        this.pNodeArray[i].isVisited = false;
    }
};
// 为有向图设置邻接矩阵
CMap.prototype.setValueToMatrixForDirectedGraph = function (row,col,val=1) {
    //row表示行,this.iCapacity是周期,row*this.iCapacity+col是数组的下标
    if(row <0 || row >=this.iCapacity) return false;
    if(col <0 || col >=this.iCapacity) return false;
    this.pMarix[row*this.iCapacity+col] = val; 
    return true;
};
CMap.prototype.setValueToMatrixForUndirectedGraph = function (row,col,val=1) {
    if(row <0 || row >=this.iCapacity) return false;
    if(col <0 || col >=this.iCapacity) return false;
    this.pMarix[row*this.iCapacity+col] = val;
    this.pMarix[col*this.iCapacity+row] = val;
};
CMap.prototype.printMatrix = function () {
    // 按行列打印
    for(let i=0;i<this.iCapacity;i++){
        for(let k=0;k<this.iCapacity;k++){
            process.stdout.write(this.pMarix[i*this.iCapacity+k]+"  ")
        }
        console.log()
    }
    
};
// 从邻接矩阵中获取值
CMap.prototype.getValueFromMatrix = function (row,col) {
    if(row <0 || row >=this.iCapacity) return false;
    if(col <0 || col >=this.iCapacity) return false;
    return this.pMarix[row*this.iCapacity+col];
};
// 深度优先遍历
CMap.prototype.depthFirstTraverse = function (nodeIndex) {
    let value = 0;
    // 当前传入的节点
    process.stdout.write(this.pNodeArray[nodeIndex].data+"  ");
    // 设置已经访问过了
    this.pNodeArray[nodeIndex].isVisited = true;
    // 遍历整个pNodeArray数组长度
    for(let i = 0;i<this.iCapacity;i++){
        // 从邻接矩阵中获取值,i是col,获取的是弧的权值
        value = this.getValueFromMatrix(nodeIndex,i);
        if(value) {
            if(this.pNodeArray[i].isVisited) continue;
            // 递归
            else this.depthFirstTraverse(i)
        }else{
            continue;
        }
    }
};
// 广度优先遍历函数
/*
        A
       / \ 
      B   D
     / \ / \
    C--F G--H
    \ /
     E 
     
    A  B  C  D 
A   0  1  0  1  0  0  0  0  
B   1  0  1  0  0  1  0  0  
    0  1  0  0  1  0  0  0  
    1  0  0  0  0  0  1  1  
    0  0  1  0  0  1  0  0  
    0  1  0  0  1  0  0  0  
    0  0  0  1  0  0  0  1  
    0  0  0  1  0  0  1  0       
 */
CMap.prototype.breadthFirstTraverse = function (nodeIndex){
    let value = 0;
    let queue = [];
    // 打印第1个元素
    process.stdout.write(this.pNodeArray[nodeIndex].data+"  ");
    this.pNodeArray[nodeIndex].isVisited = true;
    queue.push(nodeIndex);
    
    let current;
    while (queue.length!=0){
        current = queue.shift(); // 弹出的是第1行A元素,current表示当前行
        // 遍历第1行所有与A相关的元素
        for(let i=0;i<this.iCapacity;i++){
            value = this.getValueFromMatrix(current,i);
            if(value!=0){
                if(!this.pNodeArray[i].isVisited) {
                    process.stdout.write(this.pNodeArray[i].data+"  ");
                    this.pNodeArray[i].isVisited = true;
                    // 这是入队的是B,D元素的下标[1,3],for循环结束
                    // 接着执行while循环
                    // 第1次弹出的是下标为1,即第2行元素B,找到与B相关的元素,同时C,F[2,5]下标入队
                    // 第2次弹出的是下标为3,即第4行元素D,找到与D相关的元素,同时G,H[6,7]下标入队
                    // 此时的队列为 [2,5,6,7]
                    // 第3次弹出的是下标为2,即第3行元素C,找到与C相关的元素,同时E[4]下标入队
                    // 此时的队列为 [5,6,7,4]
                    // 第4次弹出的是下标为5,即第6行元素F,此时要不是已访问,跳过
                    // 第6次弹出的是下标为6,即第7行元素G,跳过
                    // 第7次弹出的是下标为7,即第8行元素H,跳过
                    // 第8次弹出的是下标为4,第第5行元素E,与E相关的元素都已访问过了
                    // 队列清空,while循环结束.
                    queue.push(i);
                }
            }
        }
    }
};



function initArray(capacity,element,arr) {
    if(capacity == 0) return arr;
    return initArray(capacity-1,element,arr.concat(element))
}
// 科里化
function initArrayCurry(capacity,element) {
    return initArray(capacity,element,[])
}

var cMap = new CMap(8);
cMap.addNode("A");
cMap.addNode("B");
cMap.addNode("C");
cMap.addNode("D");
cMap.addNode("E");
cMap.addNode("F");
cMap.addNode("G");
cMap.addNode("H");

cMap.setValueToMatrixForUndirectedGraph(0,1);
cMap.setValueToMatrixForUndirectedGraph(0,3);
cMap.setValueToMatrixForUndirectedGraph(1,2);
cMap.setValueToMatrixForUndirectedGraph(1,5);
cMap.setValueToMatrixForUndirectedGraph(3,6);
cMap.setValueToMatrixForUndirectedGraph(3,7);
cMap.setValueToMatrixForUndirectedGraph(6,7);
cMap.setValueToMatrixForUndirectedGraph(2,4);
cMap.setValueToMatrixForUndirectedGraph(4,5);
// cMap.printMatrix();
// console.log();
cMap.depthFirstTraverse(0);
// console.log();
cMap.breadthFirstTraverse(0);

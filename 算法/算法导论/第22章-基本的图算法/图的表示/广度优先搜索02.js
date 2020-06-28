/*
  V1 ➖ ➡  V2
  ⬆ ↘   ↗  ↖
  ⬇    ❌      ↖V5
  ⬇  ↙  ↘
  V3↙     V4🔄
    V1  V2  V3  V4   V5  
V1  0   1   1    1   0 
V2  0   0   1    0   0   
V3  1   1   0    0   0
V4  0   0   0    1   0
V5  0   1   0    0   0
 */
// 初始化数组的函数
var initArray =(n,element,arr) => n==0 ? arr:initArray(n-1,element,arr.concat(element));
var initArrayCurry = (n,element) => initArray(n,element,[]);
// 定义节点
function Node(element) {
    this.data = element;
    this.isVisited = false;
}
// 定义图,图的要素包含可容纳的顶点数,已添加的顶点数,顶点的数组,邻接矩阵
function CMap(capacity) {
    this.capacity = capacity;
    this.nodeCount = 0;
    this.nodeArray = [];
    this.matrix = initArrayCurry(capacity*capacity,0)
}
// 往图中添加节点
CMap.prototype.addNode = function (element) {
    this.nodeArray[this.nodeCount++] = new Node(element)
}
// 设置邻接矩阵
CMap.prototype.setValueToMatrixForDirectedGraph=function (row,col,val=1) {
    this.matrix[row*this.capacity+col] =val;
}
// 无向图
CMap.prototype.setValueToMatrixForUndirectedGraph = function (row,col,val=1) {
    if(row <0 || row >=this.capacity) return false;
    if(col <0 || col >=this.capacity) return false;
    this.matrix[row*this.capacity+col] = val;
    this.matrix[col*this.capacity+row] = val;
};

// 打印矩阵
CMap.prototype.printMatrix = function () {
    for(let i=0;i<this.capacity;i++){
        for(let j=0;j<this.capacity;j++){
            process.stdout.write(this.matrix[i*this.capacity+j]+"  ")
        }
        console.log()
    }
}
// 邻接矩阵中获取值
CMap.prototype.getValueFromMatrix = function (row,col) {
    return this.matrix[row*this.capacity+col];
}

// 广度优先遍历
CMap.prototype.breadthFirstTraverse = function (nodeIndex) {
    let value = 0;
    let queue = [];
    let current;
    process.stdout.write(this.nodeArray[nodeIndex].data+"   ");
    this.nodeArray[nodeIndex].isVisited = true;
    queue.push(nodeIndex);
    while (queue.length!=0){
        current=queue.shift();
        for(let col=0;col<this.capacity;col++){
            value = this.getValueFromMatrix(current,col);
            if(value!=0){
                if(! this.nodeArray[col].isVisited){
                    process.stdout.write(this.nodeArray[col].data+"   ");
                    this.nodeArray[col].isVisited = true;
                    queue.push(col)
                }
            }
        }
    }
    
}




var cMap = new CMap(5);
cMap.addNode("V1");
cMap.addNode("V2");
cMap.addNode("V3");
cMap.addNode("V4");
cMap.addNode("V5");
cMap.setValueToMatrixForDirectedGraph(0,1);
cMap.setValueToMatrixForDirectedGraph(0,2);
cMap.setValueToMatrixForDirectedGraph(0,3);
cMap.setValueToMatrixForDirectedGraph(1,2);
cMap.setValueToMatrixForDirectedGraph(2,0);
cMap.setValueToMatrixForDirectedGraph(2,1);
cMap.setValueToMatrixForDirectedGraph(3,3);
cMap.setValueToMatrixForDirectedGraph(4,1);


// cMap.setValueToMatrixForUndirectedGraph(0,1);
// cMap.setValueToMatrixForUndirectedGraph(0,2);
// cMap.setValueToMatrixForUndirectedGraph(0,3);
// cMap.setValueToMatrixForUndirectedGraph(1,2);
// cMap.setValueToMatrixForUndirectedGraph(2,0);
// cMap.setValueToMatrixForUndirectedGraph(2,1);
// cMap.setValueToMatrixForUndirectedGraph(3,3);
// cMap.setValueToMatrixForUndirectedGraph(4,1);


cMap.printMatrix()
cMap.breadthFirstTraverse(4)
/*    0 1 2 3 4
   0 [0,1,1,1,0],
   1 [0,0,1,0,0],
   2 [1,1,0,0,0],
   3 [0,0,0,1,0],
   4 [0,1,0,0,0]
 */
/*
var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
]
*/










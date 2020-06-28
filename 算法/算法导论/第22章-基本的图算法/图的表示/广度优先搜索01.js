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
function bfs(graph,root) {
    // 定义节点输出对象
    var nodesLen = {};
    // 节点对象初始化为Infinity
    for(var i = 0; i < graph.length; i++){
        nodesLen[i] = Infinity;
    }
    // 节点第1个对象设置为0
    nodesLen[root] = 0;
    // 第1个元素的指针进入队列
    var queue =[root];
    var current;
    while(queue.length!=0){
        // 弹出的指针
        current=queue.shift();
        // 弹出的指针的元素为当前元素 
        var curConnected=graph[current];
        // 与当前元素相邻的元素
        var neighborInx = [];
        // 
        var idx = curConnected.indexOf(1);
        while(idx != -1){
            neighborInx.push(idx);
            idx = curConnected.indexOf(1,idx + 1)
        }
        for(var j=0;j<neighborInx.length;j++){
            if(nodesLen[neighborInx[j]]==Infinity){
                nodesLen[neighborInx[j]] = nodesLen[current]+1;
                queue.push(neighborInx[j]);
            }
        }
    }
    return nodesLen;
}
var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
]

console.log(bfs(exBFSGraph,1))









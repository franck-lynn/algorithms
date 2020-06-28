/*
  定义:图是由一组顶点和一组能够将两个顶点相连的边组成的,
  定义:在图中,路径是由边顺序连接的一系列顶点.
       简单路径:是一条没有重复顶点的路径.
       环:是一条至少含有一条边且起点和终点相同的路径.
       简单环:不含有重复顶点和边的环.
       路径或环的长度为其中所包含的边数
 */

function Node(data) {
    this.data = data;
}
function Graph(v) { // v表示顶点数
    this.v = v; //顶点数
    this.e = 0; // 边数
    // 向图中增加顶点
    this.addV = function (node) {
        
    }
    // 向图中添加一条边v-w
    this.addEdge = function (v,w) {
        
    } 
    // 和v相邻的所有顶点
    this.adj = function (v) {
        
    }
    // 对象的字符串表示
    this.toString = function () {
        
    }

}
// 计算v的度数
function degree(g,v) {

}
// 计算所有顶点的最大度数
function maxDegree(g) {

}
// 计算所有顶点的平均度数
function avgDegree() {
    
}
// 计算自环的个数
function numberOfSelfLppos(g) {
    
}
// 图的邻接表的字符串表示
function toString() {
    
}







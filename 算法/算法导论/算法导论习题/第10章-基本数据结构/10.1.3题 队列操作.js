/**
 * Created by franck.lynn on 2018/4/14 11:09.
 */

/*
仿照图10-2,画图表示依次指向操作enQueue(Q,4),enQueue(Q,1),enQueue(Q,3),enQueue(Q),
enQueue(Q,8),和deQueue(Q)每一步几个,队列初始为空,存储于数组Q[1..6]中 
Using figure 10.2 as a model, illustrate the result of each operation in the 
sequence ENQUEUE(Q, 4), ENQUEUE(Q, 1), ENQUEUE(Q, 3), DEQUEUE(Q), ENQUEUE(Q, 8), 
and DEQUEUE(Q) on an initially empty queue Q stored in array Q[1..6].
 */
function Queue(n) {
    this.dataStore = new Array(n);
    this.head = 0;
    this.tail = 0;
}
// 入列
Queue.prototype.enQueue = function (x) {
    if(this.isFull()) console.log("队列已经满了");
    else if(x==null || x==undefined) return ;
    else this.dataStore[this.tail++] = x;
};
// 出列
Queue.prototype.deQueue = function () {
    if(this.isEmpty()) console.log( "队列已经空了");
    else return this.dataStore[this.head++]
};
// 判空
Queue.prototype.isEmpty = function () {
    return this.head == this.tail;
};
// 判满
Queue.prototype.isFull = function () {
    return this.tail >=this.dataStore.length+1;
}
// 遍历队列
Queue.prototype.iterateQueue = function () {
    var all = [];
    for(let i = this.head; i<this.tail;i++){
        all.push(this.dataStore[i]);
    }
    return all;
};

var q = new Queue(3);
q.enQueue("a");
q.enQueue("b");
q.enQueue("c");
q.enQueue();
// q.enQueue("m");
// console.log(q.iterateQueue());
// console.log(q.isEmpty());
q.deQueue();
q.deQueue();
q.deQueue();
q.deQueue();
console.log(q.iterateQueue());
// console.log(q.isEmpty());
console.log(q.dataStore);

function f(x) {
    return x==undefined;
}
console.log(f())

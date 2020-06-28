/**
 * Created by franck.lynn on 2018/4/6 8:46.
 */
/*
 定义一个队列
 1,观察队列的图像,可以看出,队列可由一个数组构成
   数组里存的是队列的元素
 2,队列有队头和队尾
 3,入队:是从队尾加上的
 4,出队:是从队头出去的
*/
function Queue(n) {
    this.dataStore = new Array(n);
    this.head = 0;
    this.tail = 0;
}
// 判空
Queue.prototype.isEmpty = function () {
    return this.head == this.tail;
};
// 入队
Queue.prototype.enQueue = function (x) {
    // 如果队列满了,再插入就上溢了
    if (this.tail >= this.dataStore.length) throw new Error('队列慢了, queue overflow!')
    else this.dataStore[this.tail++] = x;
};
// 出队
Queue.prototype.deQueue = function () {
    var x = null;
    // 如果是空队列,删除就会出错
    if(this.isEmpty()) throw new Error("队列下溢!")
    else  {
        // 弹出的元素是x = x.head
        var x = this.dataStore[this.head++];
    }
    return x;
};
// 遍历队列
Queue.prototype.iterateQueue = function () {
    var all = [];
    for(let i = this.head; i<this.tail; i++){
        all.push(this.dataStore[i]);
    }
    return all;
};
var q = new Queue(3);
console.log("队列是否为空:",q.isEmpty());
q.enQueue("排队A");
q.enQueue("排队B");
q.enQueue("排队C");
console.log("队列是否为空:",q.isEmpty());

console.log("遍历队列:",q.iterateQueue());
console.log("***********************************************");
q.deQueue();
q.deQueue();
console.log("遍历队列:",q.iterateQueue());


/*
function Queue() {
    this.dataStore = [];
    // 如果是一个空队列,队列头和尾的下标都是0
    this.head=0;
    this.tail=0;
    // this.queueEmpty=queueEmpty;
    // this.enQueue = enQueue;
    // this.deQueue = deQueue;
}
/!*
function queueEmpty() {
    if(this.tail==0 || this.tail == null) return true;
    else return false;
};
*!/

Queue.prototype.queueEmpty=function (q) {
    if(this.tail==0 || this.tail == null) return true;
    else return false;
};
Queue.prototype.enqueue=function (x) {
    // 增加一个元素,由于队列的核心是数组.
    // 数组的下标从0开始,增加一个元素时,数组的下标变成1,也就是数组的长度为1
    // 实际队列的长度为1
    this.dataStore[this.tail++]=x;
};
Queue.prototype.deQueue=function () {
    // 获取队列的第1个元素
    var x = this.dataStore[this.head];
    if(this.head==this.dataStore.length)
        this.head=0;
    else this.head;
    return x
};

var q = new Queue();
q.enqueue("a");
console.log(q.queueEmpty());
console.log(q.dataStore.length);

console.log(q.deQueue());
console.log(q);

*/





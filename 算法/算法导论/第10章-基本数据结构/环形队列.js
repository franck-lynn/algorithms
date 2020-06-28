/**
 * Created by franck.lynn on 2018/4/10 11:51.
 */
// https://www.imooc.com/video/10290
/*
 环形队列是重点.
 队列用途:自动排号机
 创建队列 initQueue
 销毁队列 destroyQueue
 清空队列 clearQueue
 判空队列 queueEmpty
 判满队列 queueFull
 队列长度 queueLength
 新元素入列 enQueue
 首元素出队 deQueue
 遍历队列 queueTraverse
*/
function Queue(n) {
    // 用一个数组来实现一个最多容纳n-1个元素的队列
    // 创建一个环形队列,参数是用户传入的
    this.dataStore =new Array(n);
    // 初始容量是用户传入的
    this.queueCapacity = n;
    // 队头,队尾
    this.head = 0;
    this.tail = 0;
    // 队列长度
    this.length = 0;
}


// 遍历队列 queueTraverse
Queue.prototype.queueTraverse=function () {
    for(var i=this.head;i<this.length+this.head;i++){
        console.log("队列中现有的元素:",this.dataStore[i])
    }
};
// 首元素出队 deQueue
Queue.prototype.deQueue=function () {
    // 如果队列为空,没得谈
    if(this.queueEmpty()) return false;
    this.head++;
    this.head=this.head % this.queueCapacity;
    this.length--;
    // 每次删除的时候长度--
    return true;
};
// 新元素入列 enQueue
Queue.prototype.enQueue=function (e) {
    if(this.queueFull()){
        return false
    }
    this.dataStore[this.tail++] = e;
    // 对当前数组的容量取余操作
    this.tail = this.tail % this.queueCapacity;
    // 每次增加元素时长度+1
    this.length++;
    return true;
};

// 判满队列 queueFilled
Queue.prototype.queueFull=function () {
    // 队列的长度和队列的容量相同时队列就满了
    return this.queueCapacity == this.length ? true : false
};
// 获取队列长度
Queue.prototype.length =function () {
    return this.length;
};
// 判空队列 queueEmpty
Queue.prototype.queueEmpty=function () {
    return this.length ==  0 ? true: false
};
// 清空队列 
Queue.prototype.clearQueue=function () {
    this.head = 0;
    this.tail = 0;
    this.length=0;
};
// 销毁队列
Queue.prototype.destroyQueue=function () {
    this.head = 0;
    this.tail = 0;
    this.length=0;
    this.queueCapacity=0;
    this.dataStore = null;
};


var q = new Queue(4);
// console.log(q);
// 插入元素
console.log("是否真的入列了:",q.enQueue("插入1"));
console.log("是否真的入列了:",q.enQueue("插入2"));
console.log("是否真的入列了:",q.enQueue("插入3"));
console.log("是否真的入列了:",q.enQueue("插入4"));

// 满了插不进去了
console.log("是否真的入列了:",q.enQueue("插入5"));
console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶")
console.log("是否真的出列?",q.deQueue());
console.log("是否真的出列?",q.deQueue());

// 遍历队列
q.queueTraverse();
console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶")
console.log("是否真的出列?",q.deQueue());
console.log("是否真的出列?",q.deQueue());
console.log("是否真的出列?",q.deQueue());
console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶")
q.clearQueue();
console.log("是否清空了?",q);
// 再插入
console.log("再插入了吗:",q.enQueue("insert again 1"));
console.log("再插入",q);
q.queueTraverse();
console.log("🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶")
// 销毁队列
q.destroyQueue();
console.log("销毁后能插入吗:");
// q.enQueue("can insert after destroyed");
// console.log(q.enQueue("can insert after destroyed"));
console.log(q.length);

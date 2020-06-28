/**
 * Created by franck.lynn on 2018/4/14 17:21.
 * https://www.imooc.com/video/11238
 * https://www.youtube.com/watch?v=J2GqWRfYBSY
 * 
 Let the two stacks be A and B.
 ENQUEUE pushes elements on A. DEQUEUE 
 pops elements from B. If B is empty, 
 the contents of A are transfered to B 
 by popping them out of A and pushing 
 them to B. That way they appear in 
 reverse order and are popped in the 
 original.
 A DEQUEUE operation can perform in Θ(n)  
 time, but that will happen only when B 
 is empty. If many ENQUEUEs and DEQUEUEs 
 are performed, the total time will be 
 linear to the number of elements, not 
 to the largest length of the queue.

 */
// 用两个栈来实现一个队列，完成队列的Push和Pop操作
// 1,先实现一个栈
function Stack(n) {
    this.dataStore = new Array(n);
    this.top = 0;
}
// 栈判空.
Stack.prototype.isEmpty = function () {
    return this.top === 0;
}
// 栈判满
Stack.prototype.isFilled = function () {
    return this.top === this.dataStore.length;
}
// 入栈
Stack.prototype.push = function (x) {
    if(this.isFilled()) throw new Error("栈满了!")
    else this.dataStore[this.top++] = x;
}
// 弹栈
Stack.prototype.pop = function () {
    if(this.isEmpty()) throw new Error("栈空了!")
    return this.dataStore[--this.top];
}
// 遍历栈
Stack.prototype.print = function () {
    var all = [];
    for(let i = this.top-1;i>=0;i--){
        all.push(this.dataStore[i]);
    }
    return all;
}
// 现在用这个栈实现一个队列
function Queue(n) {
    this.stackA = new Stack(n);
    this.stackB = new Stack(n);
    this.head = 0;
    this.tail = 0;
    this.size = n;
}
// 遍历2个栈的数组
Queue.prototype.print = function () {
    var allA = [], allB = [];
    for(let i = this.tail-1;i>=0;i--){
        allA.push(this.stackA.dataStore[i]);
    }
    for(let j = this.head-1; j>=0;j--){
        allB.push(this.stackB.dataStore[j]);
    }
    console.log("A栈:",allA);
    console.log("B栈",allB);
}
// 判空,
Queue.prototype.isEmpty = function () {
    return this.head ===0  && this.tail === 0;
};
// 判满,如果栈A+栈B的长度>=n,说明队列满了
Queue.prototype.isFilled = function () {
    return this.head + this.tail >= this.size
}
// 入列
Queue.prototype.enqueue = function (x) {
    // 数据进入栈A
    if(this.isFilled()) throw new Error("栈A已经满了");
    else {
        this.stackA.push(x);
        this.tail++
    }
}
// 出列
Queue.prototype.dequeue = function () {
    if(this.isEmpty()) throw new Error("没有人排队了")
    // 栈B为空时,将栈A压入栈B,弹出栈B顶元素
    while (!this.stackA.isEmpty()){
        // 当栈A不为空时,就把栈A的数据倒入栈B
        this.stackB.push(this.stackA.pop())
        this.head++;
    }
    // 栈B的数据弹出
    var value  = this.stackB.pop()
    this.head--;
    while (! this.stackB.isEmpty()){
        this.stackA.push(this.stackB.pop())
        this.head--
    }
    return value
}
// 测试栈的工作是否正常
// var s = new Stack(4)
// s.push("A")
// s.push("B")
// s.push("C")
// console.log(s.print())
var q = new Queue(4);
// console.log(q.isEmpty());
// console.log(q.isFilled())
q.enqueue("A")
q.enqueue("B")
q.enqueue("C")

// q.enqueue("X")
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())

q.enqueue("1")
console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.isEmpty());
// console.log(q.isFilled())
q.print()

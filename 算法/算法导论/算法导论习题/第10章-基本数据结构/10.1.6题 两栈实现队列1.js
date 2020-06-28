/**
 * Created by franck.lynn on 2018/4/14 17:21.
 * https://www.imooc.com/video/11238
 * https://www.youtube.com/watch?v=J2GqWRfYBSY
 */
// 用两个栈来实现一个队列，完成队列的Push和Pop操作
function Queue() {
    this.innerStack =[];
    this.outerStack = [];
}
Queue.prototype.print = function () {
    console.log("INNER_STACK "+ this.innerStack);
    console.log("OUTER_STACK "+ this.outerStack);
};
Queue.prototype.enqueue = function (val) {
    this.innerStack.push(val)
};
Queue.prototype.isEmpty = function () {
    return this.innerStack.length === 0;
};
Queue.prototype.dequeue = function () {
    if(this.isEmpty()) return ;
    while(!this.isEmpty()){
        this.outerStack.push(this.innerStack.pop())
    }
    return this.outerStack.pop();
};
var q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.print();
q.dequeue()
q.enqueue(5)
q.enqueue(6)
q.print();

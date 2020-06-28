/**
 * Created by franck.lynn on 2018/4/14 13:15.
 */
/*
     NEXT(p, l)
1    if p = l
2        then ret <- 1
3        else ret <- p + 1
4    return ret PRE(p, l)
1    if p = 1
2        then ret <- l
3        else ret <- p - 1
4    return ret DEQUEUE-LEFT-INSERT(D, x)
1    l <- PRE([left[D], length[D])
2    if l = right[D]
3        then error "overflow"
4    if left[D] = right[D]
5        right[D] <- NEXT(right[D], length[D])
6   D[left[D]] <- x
7   left[D] <- l DEQUEUE-RIGHT-INSERT(D, x)
1    r <- NEXT([right[D], length[D])
2    if r = left[D]
3        then error "overflow"
4    if left[D] = right[D]
5        left[D] <- PRE(left[D], length[D])
6    D[right[D]] <- x
7   right[D] <- r  DEQUEUE-LEFT-DELETE(D)
1    if left[D] = right[D]
2        then error "underflow"
3    ret <- D[left[D]]
4    left[D] <- NEXT(left[D], length[D]) DEQUEUE-RIGHT-DELETE(D)
1    if left[D] = right[D]
2        then error "underflow"
3    ret <- D[right]
4    right[D] <- PRE(right[D], length[D])
 */
/*
http://www.xuebuyuan.com/990638.html
https://www.cnblogs.com/huangxincheng/archive/2013/03/20/2971671.html
双端队列可以实现两端插入和删除元素的操作
 */
function DoubleEndQueue(n) {
    this.dataStore = new Array(n);
    this.head = 0;
    this.tail = 0;
    // 这里有一个注意的细节就是“size字段“，
    // 它是为了方便统计队列是否为满或者队列是否为空。
    this.size = n;
    // 队列长度
    this.length = 0;
}
// 判满
DoubleEndQueue.prototype.isFilled = function () {
    return this.size == this.length ? true : false
};
// 判空
DoubleEndQueue.prototype.isEmpty = function () {
    return this.length ==  0 ? true: false
};
// 队尾入队
DoubleEndQueue.prototype.pushTail = function (x) {
    if(this.isFilled()) throw new Error("队列满了,请移除一些元素!");
    this.dataStore[this.tail++] = x;
    this.tail = this.tail % this.size;
    this.length++;
};
// 首元素出队
DoubleEndQueue.prototype.popHead = function () {
    if(this.isEmpty()) throw new Error("队列空了!");
    this.dataStore[this.head]= null; // 把数组中的出列元素设置为null
    this.head++;
    this.head = this.head % this.size;
    this.length--;
    
};
// 遍历队列 queueTraverse
DoubleEndQueue.prototype.queueTraverse=function () {
    var all = [];
    for(let i=this.head;i<this.length+this.head;i++){
        all.push(this.dataStore[i%this.size]);
    }
    return all;
};


var deq = new DoubleEndQueue(4);
deq.pushTail("尾入A");
deq.pushTail("尾入B");
deq.pushTail("尾入C");
deq.pushTail("尾入D");

deq.popHead();
deq.popHead();

deq.pushTail("尾入1");
deq.pushTail("尾入2");

// deq.popHead();
deq.popHead();
// deq.pushTail("尾入X");
deq.popHead();
// deq.popHead();


console.log("遍历队列:",deq.queueTraverse());
console.log("数组中元素:",deq.dataStore);




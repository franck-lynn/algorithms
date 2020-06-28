/**
 * Created by franck.lynn on 2018/4/4 17:06.
 */
/*
 定义一个栈:
 1,观察栈的图像,可以看出,栈由一个数组构成,
   数组里存的是栈的元素
 2,栈有栈顶指针.根据这2点就可以构造出一个栈了.
 3,栈的判空
   如果栈顶指针为0,就认为栈为空.
*/
function Stack(n) {
    // 创建一个长度为n的数组
    this.dataStore = new Array(n);
    this.top = 0;
}
Stack.prototype.isEmpty = function () {
    // 栈顶指针为0表示为空栈,不为0就不是空栈
    return this.top == 0 ? true : false;
};
// 压栈
Stack.prototype.push = function (x) {
    if(this.top >= this.dataStore.length) throw new Error("栈上溢, stack overflow.");
    else {
        this.dataStore[this.top++] = x;
    }
};
// 弹栈
Stack.prototype.pop = function () {
    // 如果是空栈,再弹的话就下溢了
    if (this.isEmpty()) throw new Error("stack underflow, 栈下溢!");
    else return this.dataStore[--this.top];
};
// 遍历栈内所有元素
Stack.prototype.iterateStack = function () {
    var all = [];
    for(let i = this.top-1; i >=0; i--){
        all.push(this.dataStore[i]);
    }
    return all;
}
var stack = new Stack(3);
console.log("判断栈是否为空:",stack.isEmpty());
stack.push("压栈A");
stack.push("压栈B");
stack.push("压栈C");
// stack.push("栈上溢");
// console.log("栈内所有元素都是在数组里面:",stack.dataStore)
console.log("遍历栈内元素:",stack.iterateStack());

stack.pop();
stack.pop();
// stack.pop();
console.log("遍历栈内元素:",stack.iterateStack());



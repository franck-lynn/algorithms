/**
 * Created by franck.lynn on 2018/4/14 0:54.
 */
/*
仿照图10-1,画图表示依次执行push(s,4).push(s,1),push(s,3),push(s),push(s,8),push()
push的每一步结果;
pop的每一步结果;
栈s初始为空,存储与数组s[0,5]中
 */
function Stack(n) {
    this.dataStore = new Array(n);
    this.top = 0;
}
Stack.prototype.isEmpty = function () {
    return this.top == 0
};
Stack.prototype.push = function (x) {
    console.log(this.top,this.dataStore.length);
    if(this.top >= this.dataStore.length) throw new Error("栈上溢");
    else {
        this.dataStore[this.top++] = x;
    }
};
Stack.prototype.iterateStack = function () {
    var all = [];
    for(let i = this.top-1; i>=0; i--){
        all.push(this.dataStore[i]);
    }
    return all;
};
Stack.prototype.pop = function () {
    if(this.top==0) throw new Error("栈已清空,再弹就下溢了");
    // 栈顶先弹出
    return  this.dataStore[--this.top];
};
let s = new Stack(3);
s.push("a");
s.push("b");
s.push("c");
// s.push("栈满");

// console.log(s.isEmpty());
console.log(s.iterateStack());
s.pop();
s.pop();
s.pop();
// s.pop();
console.log(s.iterateStack());





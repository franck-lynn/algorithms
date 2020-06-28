/*
https://www.imooc.com/video/11240
构造函数:
   栈的初始空间
判空
判满
清空
已有元素个数
入栈
出栈
遍历
 */
function Stack(size) {
    // 构造函数
    this.dataStore = new Array(size);
    this.top = 0;
    this.size = size;
}
Stack.prototype.isEmpty = function () {
    return this.top == 0;
}
Stack.prototype.isFull = function () {
    return this.top == this.size;
}
Stack.prototype.clear = function () {
    // 根据top是否有效
    this.top = 0
}
// 栈中有多少个元素
Stack.prototype.length = function () {
    return this.top;
}
Stack.prototype.push = function (x) {
    // 将元素放到栈顶
    if(this.isFull()) {
        return "入栈失败"
    }else{
        this.dataStore[this.top] = x;
        this.top++;
        return "入栈数据是:"+ x+" ,入栈成功!!!"
    }
    
}
Stack.prototype.pop = function () {
    if(this.isEmpty()){
        return "栈空,出栈失败."
    }else{
        // 先将栈顶元素--,指向有元素的位置
        this.top = this.top - 1;
        var x = this.dataStore[this.top];
        return "pop element is :"+x+"pop success"
    }
   
}
// 遍历栈
Stack.prototype.traverse = function (flag) {
    // 从栈顶开始遍历
    process.stdout.write("{")
    if(flag){
        for(let i = 0;i<this.top;i++){
            if(i < this.top-1)
                process.stdout.write(this.dataStore[i]+",")
            else
                process.stdout.write(this.dataStore[i])
        }
    }else {
        // 从栈底开始遍历
        for(let j = this.top-1;j>=0;j--){
            if(j>0)
                process.stdout.write(this.dataStore[j]+",")
            else
                process.stdout.write(this.dataStore[j])
            
        }
    }
    console.log("}")
};
var s = new Stack(4);
console.log("栈为空:",s.isEmpty())
s.push("A") //A先进来
s.push("B")
s.push("C")
s.push("D") // D要先出
// console.log(s.push("X"))
// console.log(s.isFull())
s.traverse()
s.pop()
s.pop()
s.pop()

s.traverse()

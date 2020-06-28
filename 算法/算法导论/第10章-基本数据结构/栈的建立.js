/**
 * Created by franck.lynn on 2018/4/8 23:35.
 */

function Stack(n) {
    // 用一个数组来建立一个栈的基本存储结构
    this.dataStore=new Array(n);
    // 栈有个属性是top,指向最新插入的元素
    this.top=0;
    this.stackEmpty=stackEmpty;
    // 压栈
    this.push = push;
    // 弹栈
    this.pop=pop;
    this.peek = peek;
    this.length = length;
}
function stackEmpty() {
    if(this.top == 0) return true;
    else return false;
}
function push(x) {
    // 压栈,把元素压入到栈时,指针要向后移动一位.
    // 数组的下标是0开始,所以先把数据放到0下标位置,在把指针后移一位
    // 这行不需要++
    // this.top++;
    // 数组的下标就是指针,下标移动一位后指向x
    this.dataStore[this.top++]=x;
}
function pop() {
    if(this.stackEmpty()) throw new Error("栈下溢");
    else{
        // this.top=this.top-1;
        // 弹出栈顶元素
        return this.dataStore[--this.top];
    }
}
// 返回栈顶元素
function peek() {
    // this.top--;
    return this.dataStore[this.top--]
}
function length() {
    return this.top;
}
// new 一个栈对象
var stack = new Stack(10);
// 检测是不是空栈
console.log("是不是空栈?是",stack.stackEmpty());
// 压栈
stack.push("这个字符串压入栈1");// [1,<9 empty items>]
stack.push("这个字符串压入栈2");// [1,2,<8 empty items>]
stack.push("这个字符串压入栈3");// [1,2,3,<7 empty items>]
console.log("这是的栈指针top指向3,即第3个元素:",stack.top);
console.log("********************压栈后不是空栈***************************");
console.log("是不是空栈?不是",stack.stackEmpty());

console.log("压栈后的数组:",stack.dataStore);
console.log("********************开始弹栈***************************");
console.log("弹栈1",stack.pop()); // 弹栈时this.top=3,--后为2,即数组的第3个元素
console.log("弹栈2",stack.pop()); // 弹栈时this.top=2,--后为1,即数组的第2个元素
// console.log("弹栈3",stack.pop()); // 弹栈时this.top=1,--后为0,即数组的第1个元素
console.log("********************弹栈后的数组***************************");
console.log("数组没有变化:",stack.dataStore); // 这里数组没有变化
// 因为判断的是this.top == 0,此时this.top已经归零,所以为真
console.log("是不是空栈?是",stack.stackEmpty());
console.log(stack.top); // this.top==0了
console.log("********************弹栈后的数组***************************");
// console.log("返回栈顶元素:",stack.peek()); // this.top=-1;这个下标是没有定义的

console.log("栈的长度:",stack.length());

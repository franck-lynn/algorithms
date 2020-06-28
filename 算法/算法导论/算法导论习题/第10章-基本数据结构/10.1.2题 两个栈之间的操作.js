/**
 * Created by franck.lynn on 2018/4/14 9:09.
 */
/*
说明如何再一个数组a[0..n-1]中实现两个栈,使得当两个栈的元素个数之和不为n时,两者都不会发生上溢,
要求push和pop操作的运行时间为O(1)
第1个栈从1增长到n,
第2个栈从n减少到1,
栈上溢发生当元素压入时两指针相遇
The first stack starts at 1  and grows up towards n , 
while the second starts form n  and grows down towards 1 . 
Stack overflow happens when an element is pushed when the 
two stack pointers are adjacent.
案一：将数组的下标为0的位置当做第一个栈的栈底，下标为1的位置当做第二个栈的栈底，将数组的偶数位
置看做第一个栈的存储空间，奇数位置看做第二个栈的存储空间。
方案二：从中间分别向两边压栈
将数组的中间位置看做两个栈的栈底，压栈时栈顶指针分别向两边移动，当任何一边到达数组的起始位置或
是数组尾部，则开始扩容。
方案三：从两边向中间压栈
将数组的起始位置看作是第一个栈的栈底，将数组的尾部看作第二个栈的栈底，压栈时，栈顶指针分别向中
间移动，直到两栈顶指针相遇，则扩容。
比较：方案二和方案一当两栈中元素不同时，比较浪费空间，方案三节省空间
 */
function TwoStack(n) {
    this.dataStore = new Array(n);
    this.left = 0;
    this.right = n-1;
    this.popLeft = popLeft;
    this.popRight = popRight;
    this.pushLeft = pushLeft;
    this.pushRight = pushRight;
}
// 左压栈
function pushLeft(x) {
    if(this.left == this.right+1) throw new Error("左栈上溢!");
    else this.dataStore[this.left++] = x;
}
// 右压栈
function pushRight(x) {
    if(this.left == this.right+1) throw new Error("右栈上溢!");
    else this.dataStore[this.right--] = x;
}
// 左弹栈
function popLeft() {
    if(this.left == 0) return "弹无可弹";
    else return this.dataStore[--this.left];
}
function popRight() {
    if(this.right == this.dataStore.length-1) return "已经到数组最大值边界";
    else return this.dataStore[++this.right]
}
let ts = new TwoStack(4);
ts.pushLeft("a");
ts.pushLeft("b");
// ts.pushLeft("c");
// ts.pushLeft("d");
// ts.pushLeft("e");
ts.pushRight(1);
ts.pushRight(2);
// ts.pushRight(3);

console.log("左弹栈:",ts.popLeft());
console.log("左弹栈:",ts.popLeft());
console.log("左弹栈:",ts.popLeft());

console.log("右弹栈:",ts.popRight());
console.log("右弹栈:",ts.popRight());
console.log("右弹栈:",ts.popRight());

console.log(ts.dataStore);






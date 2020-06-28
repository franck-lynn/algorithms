/**
 * Created by franck.lynn on 2018/4/13 20:47.
 */
// 下压堆栈(链表实现)
function Node(element) {
    this.element = element;
    this.next = null;
}
function Stack() {
    // this.head = new Node("head");
    this.head = null;
    this.n = 0;
    // 向栈顶添加元素
    this.push = function (item) {
        let newNode = new Node(item);
        // 保存旧的头节点
        let oldFirst = this.head;
        // 头节点改为新的
        this.head = newNode;
        // 新的指针指向旧的
        newNode.next = oldFirst;
        this.n++;
    };
    this.pop = function () {
        // 如果链表为空,弹出来的就是个null
        if(this.head == null) return -1;
        else {
            // 从栈顶删除元素
            let oldFirst = this.head;
            this.head = oldFirst.next;
            this.n--;
            return oldFirst.element;
        }
        
    };
    this.isEmpty = function () {
        // 如果首元素不存在的话肯定是空的链表
        // if(this.head == null) return true;
        // 如果首先构造了一个首元素,这样判断为空也是可以的,即首元素不算
        // else return this.head.next == null;
        return this.head == null;
    };
    this.size =function () {
        return this.n
    };
    // 遍历链表
    this.iterateList = function () {
        let all = [];
        // x为初始化链表的首节点,x.next为下一个节点,最后一个节点为null
        for(let x=this.head; x != null; x = x.next){
            all.push(x.element);
        }
        return all;
    };
}

let stack = new Stack();
console.log("堆栈是否为空?",stack.isEmpty());
stack.push("元素A");
stack.push("元素B");
stack.push("元素C");

console.log("堆栈是否为空?",stack.isEmpty());
console.log("堆栈大小:",stack.size());
console.log("遍历链表:",stack.iterateList(),",堆栈大小:",stack.size());
console.log("弹出元素:",stack.pop());
console.log("弹出元素后的遍历:",stack.iterateList(),",堆栈大小:",stack.size());
console.log("弹出元素:",stack.pop());
console.log("弹出元素:",stack.pop());
console.log("弹出元素:",stack.pop());
console.log("弹出元素:",stack.pop());
console.log("弹出元素:",stack.pop());
console.log("弹出元素后的遍历:",stack.iterateList(),",堆栈大小:",stack.size());
stack.push("元素A");
console.log("弹出元素后的遍历:",stack.iterateList(),",堆栈大小:",stack.size());


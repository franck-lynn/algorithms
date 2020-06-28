/**
 * Created by franck.lynn on 2018/4/12 12:14.
 */
function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList() {
    // 链表都有一个头部
    this.head = new Node("head");
    // 插入链表
    this.insert = insert;
}
// 遍历链表中的元素,并把这些元素放到一个数组里面
LinkedList.prototype.display = function () {
    var all = [];
    var currentNode = this.head;
    while (!(currentNode.next==null)){
        all.push(currentNode.next.element);
        currentNode = currentNode.next;
    }
    return all;
};
function insert(element) {
    // 将传入的值创建一个node项
    var newNode =new Node(element);
    var currentNode = null;
    if(this.head == null) this.head = new Node("head");
    else {
        // 当前元素是第1个元素
        currentNode = this.head;
        while(currentNode.next){
            // 这个当前元素不为空时,就指向下一个元素
            currentNode=currentNode.next;
        }
        currentNode.next=newNode
    }
}
// 新建一个链表对象
var linkedList = new LinkedList();
linkedList.insert("插入链表1");
linkedList.insert("插入链表2");
linkedList.insert("插入链表3");
console.log(linkedList.display());
console.log("🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩");
LinkedList.prototype.search=function (key) {
    // 查找链表的第一个关键字key,返回该元素的指针
    var x= this.head; //从链表的头部开始,x = 链表的第1个节点
    while (x != null && x.element != key){
        x = x.next;
    }
    return x;
};
// console.log("查找的链表:",linkedList.search("插入链表2"));
console.log("🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩");
// 查找前一个元素
LinkedList.prototype.findPrevious = function (key) {
    var currentNode = this.head;
    while(!(currentNode.next==null) && currentNode.next.element!=key){
        currentNode=currentNode.next;
    }
    return currentNode;
};
// 链表删除
LinkedList.prototype.delete = function (key) {
    // 把链表中得元素x(节点)从链表中移去,先要找到这个元素
    // 从链表的头部开始
    var previousNode = this.findPrevious(key);
    if( !(previousNode.next==null)){
        previousNode.next = previousNode.next.next;
    }
    return previousNode
};
linkedList.delete("插入链表2");
// console.log("删除的链表元素:",linkedList.delete("插入链表3"));
console.log("🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩");
console.log(linkedList.display());
console.log(linkedList.search("插入链表X"));

/**
 * Created by franck.lynn on 2018/4/13 14:58.
 */

function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList() {
    this.head = new Node("head");
}
// 在链表头部插入节点
LinkedList.prototype.insert = function (element) {
    var newNode = new Node(element);
    // 保存旧的头节点
    var oldFirst = this.head;
    // 头节点改为新的
    this.head = newNode;
    // 新的指针指向旧的
    newNode.next = oldFirst;
};
//从链表的头部删除节点
LinkedList.prototype.delete = function () {
    // 保存指向链表的连接
    var oldFirst = this.head;
    // 新的首节点为原来节点的下一个节点
    this.head = oldFirst.next
};
// 在链表的尾部插入节点
LinkedList.prototype.insertTail =function (element) {
    // 创建新的尾节点
    var newNode = new Node(element);
    // 设置当前节点
    var currentNode = this.head;
    while(currentNode.next){
        currentNode = currentNode.next
    }
    currentNode.next = newNode;
};
// 遍历链表
LinkedList.prototype.iterateList = function () {
    var all = [];
    // x为初始化链表的首节点,x.next为下一个节点,最后一个节点为null
    for(var x=this.head; x != null; x = x.next){
        all.push(x.element);
    }
    return all;
};


var linkedList = new LinkedList();
console.log("初始化的节点:",linkedList);
linkedList.insert("not");
console.log("增加节点后的链表:",linkedList);
linkedList.delete();
console.log("删除节点后的链表:",linkedList);
console.log("****************************************************************************");
linkedList.insertTail("newTail");
console.log("在链表的尾部插入节点:",linkedList);
console.log(linkedList.iterateList());


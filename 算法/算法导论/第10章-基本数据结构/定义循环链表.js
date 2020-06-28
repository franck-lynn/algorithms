/**
 * Created by franck.lynn on 2018/4/13 12:30.
 */
function Node(element) {
    this.element = element;
    this.next =null;
}
function LinkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
}
// 查找当前元素的前一个元素
LinkedList.prototype.findPrevious = function (element) {
    var currentNode = this.head;
    // 如果当前元素不为空且当前元素的下一个元素 != element
    // 假设当前元素为Node.element = "元素C",Node.next = 
    while(currentNode.next && !(currentNode.next=="head") && currentNode.next.element != element){
        // 接着查找
        currentNode = currentNode.next;
    }
    // 不然,返回当前元素
    return currentNode;
};

// 查找当前值=element的节点
LinkedList.prototype.find = function (element) {
    // 从链表的头部开始查找
    var currentNode = this.head;
    while(currentNode.next 
          && currentNode.next!=this.head  /*当前节点的不是指向头节点*/
          && currentNode.element!=element){
        currentNode = currentNode.next;
    }
    return currentNode;
};
// 查找下一个节点
LinkedList.prototype.findNextNode = function (element) {
    return this.find(element).next
};

LinkedList.prototype.insert = function (element) {
    // 建立一个待插入的节点
    var newNode = new Node(element);
    // 查找当前节点
    var currentNode = this.find(element);
    // 保存current.next
    var that = currentNode.next;
    currentNode.next = newNode;
    newNode.next = that;
};
// 显示链表中所有的元素
LinkedList.prototype.display = function () {
    var all = [];
    var currentNode = this.head;
    while(currentNode.next && !(currentNode.next.element =="head")){
        all.push(currentNode.next.element);
        currentNode = currentNode.next;
    }
    return all;
};
var linkedList = new LinkedList();
// 插入链表
linkedList.insert("元素A");
linkedList.insert("元素B");
linkedList.insert("元素C");
linkedList.insert("元素D");
console.log(linkedList.display());
// 获取当前节点的元素B
console.log("查找当前元素:",linkedList.find("元素X").element);
// 获取当前节点的元素的前一个元素
console.log("查找当前元素的前一个元素:",linkedList.findPrevious("元素C").element);
console.log("查看最后一个元素的指针是否指向头部:",(linkedList.find("元素D").next.next));






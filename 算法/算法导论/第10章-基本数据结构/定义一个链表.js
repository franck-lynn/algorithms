/**
 * Created by franck.lynn on 2018/4/11 23:08.
 * https://segmentfault.com/a/1190000008706650
 */
function Node(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
}
function LinkedList() {
    this.head = new Node("head");
    // 查找节点
    this.find = find;
    // 插入链表
    this.insert = insert;
}
// 根据元素查找节点
function find(item) {
    var currentNode = this.head;
    while(!(currentNode.next == null) && (currentNode.next.element!=item)){
        currentNode = currentNode.next;
    }
    return currentNode;
}
// 根据链表内容插入新元素
function insert(newElement,item) {
    // 创建新的节点
    var newNode = new Node(newElement);
    // 找到这个元素,返回当前元素的节点
    var currentNode = this.find(item);
    
    /*
      ++++++++++++++++++++     ++++++++++++++++++++
      + null +head+ null +     +prev +newNode+next+
      ++++++++++++++++++++     ++++++++++++++++++++
      
                                        当前的  
                     |-----------⬇          |------               -----⬇         
      ++++++++++++++++++++    ++++++++++++++++++++                ++++++++++++++++++++   
      + null + e1 + next +    + prev + e2 + next +                + prev + e3 + null +  
      ++++++++++++++++++++    ++++++++++++++++++++                ++++++++++++++++++++   
                     ⬆-----------|           ⬆-----               ------|  
                                       1.当前节点的prev指向前一个节点,前一个节点的next指向新插入的节点
                                                                            3,新节点的next指向当前节点
                                       currentNode.prev.next=newNode        newNode.next=currentNode
                                       2.新节点的prev指向前一个节点
                                                                            4,当前节点的prev指向新节点
                                       newNode.prev =currentNode.prev       currentNode.prev=newNode  
                                         当前的   
                                                              新的             
                     
                      |-----------⬇          |-----------⬇            |-------------⬇       
      ++++++++++++++++++++    ++++++++++++++++++++   ++++++++++++++++++++       ++++++++++++++++++++
      + null + e1 + next +      + prev + e2 +next+   +prev +newNode+next+       + prev + e3 + null + 
      ++++++++++++++++++++    ++++++++++++++++++++   ++++++++++++++++++++       ++++++++++++++++++++
                     ⬆-----------|           ⬆-----------|           ⬆-------------|
     */
    newNode.next =currentNode.next;
    currentNode.next=newNode;
    newNode.prev =currentNode
    currentNode.next=newNode
}

var linkedList = new LinkedList();
// console.log(linkedList)
linkedList.insert("aaa")
console.log(linkedList.find("aaa"))

/*
LinkedList {
  head: 
   Node {
     element: 'head',
     prev: Node { element: 'aaa', prev: [Circular], next: [Circular] },
     next: Node { element: 'aaa', prev: [Circular], next: [Circular] } },
  find: [Function: find],
  insert: [Function: insert] }
 */






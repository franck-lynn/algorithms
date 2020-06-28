/*
https://www.cnblogs.com/ECJTUACM-873284962/p/6935506.html
https://blog.csdn.net/ii1245712564/article/details/45869623
桶下标,好基友.(同基数)
计次数.(下标出现的次数).
再相加(不大于下标的数字出现的次数)
放回桶中,这时桶的序号也是和数组按序号排列的元素值是相同的
 */
var a = [48, 98, 2, 71, 25, 48, 53, 42, 50, 25]

function bucketSort(a) {
    var buckets = []; // 创建桶的数组
    const bucketNum = 10; //有10个桶
    // 初始化buckets,里面装了10个空数组
    for(let i = 0; i < bucketNum; i++){
        buckets[i] = [];
    }
    // console.log(buckets)
    // 遍历一遍输入容器
    var digit;
    for(let i = 0; i < a.length; i++){
        // 获取10位上的数字
        digit = Math.floor((a[i] /10) % 10);
        // 十位上的数字与数组按顺序排列时的顺序是相同的
        buckets[digit].push(a[i])
    }
    // console.log(buckets)
    // 对每个桶进行排序
    for(let i = 0; i < bucketNum; i++){
        insertionSort(buckets[i])
    }
    // console.log(buckets)
    // 从每个桶里取出数据
    for(let i = 0; i < bucketNum; i++){
        
        for(let j = 0; j < buckets[i].length; j++){
            process.stdout.write(buckets[i][j]+"  ")
        }
    }
}

bucketSort(a)

function insertionSort(a) {
    // j[1-a.length]为手中已排号序的牌
    for(var j = 1; j < a.length; j++){
        // 下标j表示正在被插入到手中的"当前牌"
        // 在内循环中.这个值是不能变的
        var key = a[j];
        // 手上最后一张牌
        var i = j-1;
        // 寻找条件插入.从手上最后一张牌开始查找,一直找到第1张牌
        // 如果手上排好序的牌最后一张牌 > 当前牌,说明当前牌小,需要插入
        // 因为j是从1开始,要使 j 与手上所有牌(0~j-1)都比较到,i=j-1的范围就是(0~j-1),所以要有i>=0的要求
        while (i >= 0 && a[i] > key){
            // 所谓插入,就是当前牌要去占位置,也就是说,最后一张牌要向右移动一位,i+1位由最后一张牌占用
            a[i+1] = a [i];
            // 接着再比较手上倒数第2张牌
            i = i-1;
        }
        // 此时i+1是上面i的排位,由当前牌占用
        a[i+1] = key;
    }
    return a
}








/*
function Node(element) {
    this.element = element;
    this.next = null;
}
function LinkedList() {
    this.head = new Node("head");
    this.insert = insert;
}

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
*/

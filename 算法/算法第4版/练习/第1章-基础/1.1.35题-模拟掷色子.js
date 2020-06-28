/**
 * Created by franck.lynn on 2018/3/28 0:40.
 */
/*
以下代码能够计算每种色子之和的准确概率分布
disk[i]的值就是两个色子之和为i的概率,用实验模拟N
次,并在计算两个1-6之间的随机整数之和时记录每次值出现的
频率以验证他们的概率,N要多大才能保证经验数据与准确数据
吻合
 */

class Counter{
    constructor(id){
        // this.id = id ? id : 1;
        this.id = id.split("").length;
    }
    increment(){
        return this.id++;
    }
    tally(){
        return this.id
    }
}

function shuffle() {
    // 色子有6个面
    var sides = 6;
    var dist = new Array(2*sides);
    // 遍历色子
    for(var i=0;i<sides.length;i++){
        for(var j=1;j<sides.length;j++){
            dist[i+j] +=1.0
        }
    }
    return dist;
}
// 模拟T次掷硬币
function flips(t) {
    var heads = new Counter("heads");
    var tails = new Counter("tails");
    
    for(var i=0;i<t;i++){
        if(bernoulli(0.5))
            heads.increment()
        else tails.increment()
    }
    console.log("头部数量:",heads.id);
    console.log("尾部数量:",tails.id);
    
    var d =heads.tally()-tails.tally();
    console.log("δ:",Math.abs(d))
}
flips(10);




// 返回为真的概率
function bernoulli(p) {
    if (!(p >= 0.0 && p <= 1.0))
        throw new new Error("probability p must be between 0.0 and 1.0: " + p);
    return Math.random() < p;
}

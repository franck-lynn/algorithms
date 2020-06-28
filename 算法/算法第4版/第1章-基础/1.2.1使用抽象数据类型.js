/**
 * Created by franck.lynn on 2018/3/28 13:44.
 */
class Counter{
    constructor(id){
        this.id = id ? id : 1;
    }
    increment(){
        return this.id++;
    }
    tally(){
        return this.id
    }
}


var c1 = new Counter(10);
console.log("执行一次累加c1:",c1.increment());
console.log("执行二次累加c1:",c1.increment());
console.log("执行三次累加c1:",c1.increment());
console.log("c1创建之后的累加次数:",c1.tally());
console.log("🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽🍽");
var c2 = new Counter(10);
console.log("执行一次累加c2:",c2.increment());
console.log("c2创建之后的累加次数:",c2.tally());
console.log("🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼");
// ES5 方式
function Counter02(id) {
    this.id = id;
}
Counter02.prototype.increment=function () {
    return this.id++;
};
Counter02.prototype.tally=function () {
    return this.id
};

var c3 = new Counter02(20);
console.log("执行一次累加c3:",c3.increment());
console.log("执行二次累加c3:",c3.increment());
console.log("执行三次累加c3:",c3.increment());
console.log("c3创建之后的累加次数:",c3.tally());
console.log("💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰");
var c4 = new Counter02(30);
console.log("执行一次累加c4:",c4.increment());
console.log("c2创建之后的累加次数:",c4.tally());

console.log("✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈");
var c5=new Counter();
console.log("执行1次累加c5:",c5.increment());
console.log("执行2次累加c5:",c5.increment());




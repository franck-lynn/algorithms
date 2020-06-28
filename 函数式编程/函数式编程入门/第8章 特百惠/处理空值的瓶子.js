/**
 * Created by franck.lynn on 2018/11/15.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'
class Maybe {
    constructor(x){
        this.$value = x;
    }
    static of(x){
        return new Maybe(x)
    }
    isNothing(){
        // 检测瓶子里装的值是不是为空
         return this.$value === null ||
             this.$value === undefined
    }
    
    map(f){
        return this.isNothing() 
            ? Maybe.of(null) 
            : Maybe.of(f(this.$value))
    }
}

// 使用瓶子
// 调用map方法
console.log(
    // 检查是否为空
    Maybe.of('Malkovich Malkovich')
        // 不区分大小写全局匹配 a
        // 输入的数九就是 of构造的 $value
        .map(R.match(/a/ig))
)

console.log(
    // 为空的情形,
    // 为空的时候函数map函数没有执行
    Maybe.of(null).map(R.match(/a/ig))
)

console.log(
    Maybe.of({name: "Boris"})
        .map(R.prop("age"))
        .map(age => age + 1)
)
console.log(
    Maybe.of({name: "Dinah", age: 14})
        .map(R.prop("age"))
        .map(age => age + 1)
)

console.log("*****************使用空值检测的瓶子*******************")

// 传入一个数组, 返回数组的第1项是装在瓶子里的.
// 返回的是一个可以使用map的瓶子
// safeHead:: [a] -> Maybe(a)
var safeHead = xs => Maybe.of(xs[0])

var streetName = R.compose(
    // 传入的是一个对象.
    // R.map对对象数组每一项进行处理,获取数组的street属性
    // 返回的是一个数组
    R.map(R.prop('street')),
    // 返回数组第1项,为空的时候后面就不执行了
    safeHead,
    R.prop('addresses')
)

console.log(streetName({addresses: []}))
console.log(
    streetName({
        addresses: [
            {street: 'Shady Ln', number: 3201}
        ]
    })
)

console.log("*****************返回一个空值表明失败*******************")

// 定义一个函数,进行科里化
// 使这个函数传入一个参数,返回一个瓶子
// 这个瓶子后面再传入一个参数时,参数就齐了
// 还是返回这个瓶子,
// 中间都是函数组合操作
/*
// 程序解释:
const withDraw = R.curry((amount, {balance: balance}) => 
    Maybe.of(
        // 账户余额>消费金额? 返回新的账户余额 : null
        // 进行解构赋值的时候,对象的属性名获取的是对象的值
        balance >= amount 
            ? {balance: balance - amount} 
        : null
    )
)
 */
const withDraw = R.curry((amount, {balance}) => 
    // 一个容易犯的错误是 加{}要return
    Maybe.of(
        // 账户余额>消费金额? 返回新的账户余额 : null
        balance >= amount 
            ? {balance: balance - amount} 
        : null
    )
)
var updateLedger = account => account;
var remainBalance = ({balance}) => `你的账户余额是:$${balance}`;

// 完成事务函数,组合remainBalance,updateLedger两个函数
// 作用,获取余额并显示
// finishTransaction :: account -> String
var finishTransaction = R.compose(
    // 格式化显示余额
    remainBalance, 
    // 获取余额
    updateLedger
)
var getTwenty = R.compose(
    R.map(
        // 对对象的属性进行操作,获取余额并显示
        finishTransaction 
    ),
    // 返回账户余额放回瓶子
    withDraw(20)
)

console.log(getTwenty({balance: 200.00}))
console.log(getTwenty({balance: 10.00}))


console.log("*****************让瓶子有一个出口*******************")
// maybe 函数就像瓶子上面开了一个口子,满足要求的会从一个口子流出
// 满足另外要求的从另外一个口子流出,这样就有了不同的输出
var maybe = R.curry(
    (x, f, m) => m.isNothing() ? x: f(m.$value)
)
/*
const maybe = R.curry((v, f, m) => {
    if (m.isNothing()) {
        return v;
    }
    return f(m.$value);
});
*/

var getTwenty2 = R.compose(
    // 瓶子里的数据再调用maybe函数,
    maybe(
        "You're broken", 
        finishTransaction, 
    ),
    // 返回消费后的余额函数,数据放回进瓶子Maybe
    withDraw(20)
)

console.log(getTwenty2({balance: 200.00}))
console.log(getTwenty2({balance: 10.00}))











/**
 * Created by franck.lynn on 2018/11/18.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'

class Maybe {
    constructor(x){
        this.$value = x
    }
    static of(x){
        return new Maybe(x)
    }
    isNothing(){
        return this.$value === null ||
            this.$value === undefined
    }
    map(f){
        return this.isNothing()
            ? Maybe.of(null)
            : Maybe.of(f(this.$value))
    }
}
// 格式化消费金额的函数
// This function is hypothetical, not implemented here... 
// nor anywhere else.
// 这个函数是假想的,不在这里实现,或者其他任何地方
// updateLedger :: Account -> Account 
const updateLedger = account => account;

// 显示余额
var remainingBalance = ({balance}) => `Your balance is $${balance}`;

// 消费函数,需要2个参数, 消费金额和账户余额
// 因为传过来的就是一个对象,所以balance用对象作为参数

/*
const foo = (amount, {balance}) => balance >= amount 
    ? {balance: balance - amount} 
    : null
*/

// finishTransaction :: Account -> String
const finishTransaction = R.compose(remainingBalance, updateLedger);

// 由于有2个参数,其中balance会统一给出的,所以要科里化下,让其接收一个参数
const withDraw = R.curry(
    (amount, {balance}) => Maybe.of(balance >= amount
        ? {balance: balance - amount}
        : null)
)

var map = R.curry((f, F) => F.map(f))
var maybe = R.curry(
    // (x, f, m) => m.isNothing() ? x: f(m.$value)
    (x, f, m) => m.isNothing() ? x: m.map(f)
)
// 消费20美元
const getTwenty = R.compose(
    // 由于流过来的是一个函子,所以,通过外界的map调用函子的map
    // map(finishTransaction),
    // 这里设置一个中断
    maybe("账户没钱了", finishTransaction), 
    // 消费函数, 这个函数会传过来一个账户余额的值,与这个值一起构成消费函数
    withDraw(20)
)

console.log(
    getTwenty({ balance: 200.00 })
)
console.log(
        getTwenty({ balance: 10.00 })
)














/**
 * Created by franck.lynn on 2018/11/18.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'
/*
试验场景:
输入一个生日日期对象,由函数判断能不能解析.
能--直接解析
不能--不能解析 
 */
// 定义一个函子(瓶子)
class Functor {
    constructor(x){
        this.$value = x
    }
    static of(x){
        return new Functor(x)
    }
    map(f){
        return f(this.$value)
    }
}


// 分支函数,继承这个函子
class Either extends Functor{
    constructor(left, right) {
        super()
        this.left = left
        this.right = right
    }
    static of(left, right){
        return new Either(left, right)
    }
    map(f){
        return this.right // 右值为真,存在吗?
            // 存在,处理函数调用右值
            ? Either.of(this.left, f(this.right))
            // ? Either.of(f(this.right))
            // 不存在,处理函数调用左值
            : Either.of(f(this.left), this.right)
    }
}

import moment from 'moment'

const getYears = R.curry(
    (now, user) => {
        const birthDate = moment(user.birthDate, 'YYYY-MM-DD');
        console.log(birthDate.isValid())
        return birthDate.isValid() 
            ? Either.of(null, now.diff(birthDate, 'years'))
            : Either.of("日期不能被解析", null)
    }
)


const getAge = R.compose(
    // 返回的是一个函子
    getYears(moment())
)

// 使用:
// console.log(
//     getAge(moment(), {birthDate: '2016-07-12'})
// )
// console.log(
//     getAge(moment(), {birthDate: 'july 4, 2001'})
// )

console.log(
    getAge({birthDate: '2016-07-12'})
)
console.log(
    getAge({birthDate: 'july 4, 2001'})
)












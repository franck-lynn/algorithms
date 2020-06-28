/**
 * Created by franck.lynn on 2018/11/21.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/
 * https://folktale.origamitower.com/api/v2.3.0/en/folktale.validation.html
 */
'use strict';

// const Validation = require('folktale/validation');
import Validation from 'folktale/validation'
const {Success, Failure} = Validation

const Result = require('folktale/result');

const isPasswordLongEnough = password => 
    password.length > 6 ? Success(password)
        : Failure(["密码要大于6位字符"])



const isPasswordStrongEnough = password => 
    /[\W]/.test(password) ? Success(password)
        : Failure(['密码要包含特殊字符'])


// 验证密码;
const isPasswordValid = password =>
    Success().concat(isPasswordLongEnough(password))
        .concat(isPasswordStrongEnough(password))
        .map(_ => password);


console.log(
    isPasswordValid('foo')
)

console.log(
    isPasswordValid('rosesarered').getOrElse(null)
)

console.log(
    isPasswordValid('rosesarered$andstuff').getOrElse()
)


// console.log(Validation.Success(1))
// console.log(Validation.Failure(2))

/*
console.log(
    Validation.Success(1).matchWith(
        {
            Success: x => x.value + 1,
            Failure: x => x.value - 1
        }
        
    )
)
*/














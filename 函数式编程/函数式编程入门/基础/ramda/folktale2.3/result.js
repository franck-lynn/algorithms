/**
 * Created by franck.lynn on 2018/11/26.
 * franck_lynn@live.cn
 */
'use strict';
import Result from 'folktale/result'
import {union, derivations} from 'folktale/adt/union'

// Result处理错误
const isValidName = name => name.trim() !== ''; // 名字只要不等于 '' 就通过
const isValidEmail = email => /(.+)@(.+)/.test(email); // 符合正则规则的为真
const isValidPhone = phone => /^\d+$/.test(phone); // 符合正则规则的为真


// 定义错误信息
const ValidationErrors = union('validation-errors', {
    Required(field) { return {field} },
    InvalidEmail(email) { return {email} },
    InvalidPhone(phone) { return {phone} },
    InvalidType(type) { return {type} },
    Optional(error) { return {error} }
}).derive(derivations.equality)
// 为错误消息赋值
const {Required, InvalidEmail, InvalidPhone, InvalidType, Optional} = ValidationErrors

// 检查名称
const checkName = name => isValidName(name)
    ? Result.Ok(name) : Result.Error(Required('name'))
// 检查邮件
const checkEmail = email => isValidEmail(email)
    ? Result.Ok(email) : Result.Error(InvalidEmail(email))
// 检查电话号码
const checkPhone = phone => isValidPhone(phone)
    ? Result.Ok(phone) : Result.Error(InvalidPhone(phone))
/*
检查错误
// 传入一个check函数.返回一个函数,保留了check函数.
function optional(check){
    return function(value){
    // 如果value存在,检查函数检查value,如果有错误返回错误,没有就返回正确的值
        return value ? check(value).mapError(Optional) : Result.Ok(value)
    }
}
 */
const optional = check => value => value
    ? check(value).mapError(Optional) : Result.Ok(value)
// 检查email,用checkEmail函数, 待输入email后就可以进行链式调用进行检查
const maybeCheckEmail = optional(checkEmail);
const maybeCheckPhone = optional(checkPhone);

const validateResult = ({name, type, email, phone}) =>
    // 解构赋值传入需要的对象进行检查. 先检查name.
    checkName(name).chain(_ =>
        // 再检查email.如果type===email,再检查phone.
        type === 'email' ? checkEmail(email).chain(_ =>
                maybeCheckPhone(phone).map(_ => ({
                    name, type, email, phone
                }))
            )
            // 如果类型是phone,再检查email, 后面这个3元运算符是一个整体
            : type === 'phone' ? checkPhone(phone).chain(_ =>
                maybeCheckEmail(email).map(_ => ({
                    name, type, email, phone
                }))
            )
            // 如果有错误,返回错误
            : Result.Error(InvalidType(type))
    );

console.log(
    validateResult({
        name: 'Max',
        type: 'email',
        phone: '11234456'
    })
)

console.log(
    validateResult({
        name: 'Alissa',
        type: 'email',
        email: 'alissa@somedomain'
    })
)

console.log(
    validateResult({
        name: '',
        type: 'email',
        email: 'alissa@somedomain'
    })
)
/*
const DivisionErrors = union('division-error', {
    DivisionByZero(dividend){
        return {dividend}
    }
}).derive(
    derivations.equality,
    derivations.debugRepresentation
)
const { DivisionByZero } = DivisionErrors;

const divideBy = (dividend, divisor) =>
    divisor === 0 ? Result.Error(DivisionByZero(dividend))
        : /!* otherwise *!/ Result.Ok(Math.floor(dividend / divisor));

console.log(
    divideBy(4, 2)
)
console.log(
    divideBy(4, 0)
)
*/

console.log("***************顺序组合*******************")

const isDigit = character => '0123456789'.split('').includes(character)

const digit = input => {
    const character = input.slice(0, 1)
    const rest = input.slice(1)
    return isDigit(character) 
        ? Result.Ok([character, rest]) 
        : Result.Error(`预期是(0..9)的数字,但是获取的是${character}`)
    
}

// 递归的方法判断数字
const digits = input => input === ''
    ? Result.Error(`预期是(0..9)的数字,但是获取的是nothing`)
    // 递归
    : digit(input)
        .chain(([character, rest]) => 
            rest === '' 
                ? Result.Ok(character) 
                : digits(rest) 
                    .chain(characters => Result.Ok(character + characters)))


console.log(
    digits('012')
)
console.log(
    digits('a12')
)
console.log(
    digits('01a')
)





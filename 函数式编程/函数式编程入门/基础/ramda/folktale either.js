/**
 * Created by franck.lynn on 2018/11/21.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/docs/v2.3.0/migrating/from-data.either/
 */

import Result from 'folktale/result'
import {union, derivations} from 'folktale/adt/union'

// 分离错误
// 'division-errors' 对象的名称属性
const DivisionErrors = union('division-errors', {
    // dividend 被除数
    // 对象里有这个属性 DivisionByZero
    DivisionByZero(dividend){
        return {dividend}
    }
    // derive 得出,提取
}).derive(  
    derivations.equality,
    derivations.debugRepresentation
)


const {DivisionByZero} = DivisionErrors;

// dividend 被除数, divisor 因子,除数
const divideBy = (dividend, divisor) =>
    divisor === 0 // 除数是0吗?
        // 如果除数为0,错误的结果
        ? Result.Error(DivisionByZero / divisor)
        // 如果除数不为0, 计算结果取整,返回Ok的结果并把值放进瓶子
        : Result.Ok(Math.floor(dividend / divisor))

console.log(
    divideBy(4, 2)
)
console.log(
    divideBy(4, 0)
)

/*
// Constructing
console.log(
    Result.Error(1),
    Result.Ok(2)
)

// Pattern matching
console.log(
    Result.Error(1).matchWith({
        Error: x => x.value + 1,
        Ok: x => x.value - 1
    })
)
// Testing instances
const x = Result.Error(1);
const y = Result.Ok(2);

console.log(
    Result.Error.hasInstance(x),
    Result.Error.hasInstance(y),
    Result.Ok.hasInstance(x),
    Result.Ok.hasInstance(y)
)

function divide(x, y) {
    if (y === 0) {
        throw new Error('division by zero');
    } else {
        return x / y;
    }
}

console.log(
    Result.try(
        _ => divide(4, 2)
    )
)
*/









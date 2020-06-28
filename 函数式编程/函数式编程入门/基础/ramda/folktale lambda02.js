/**
 * Created by franck.lynn on 2018/11/23.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/api/v2.3.0/en/folktale.core.lambda.html
 */
'use strict';
/*
Core.Lambda provides you tools for 
transforming and combining functions.
lambda提供给你一些转换和组合函数得工具
Programming by Combining Functions
Functional programming places a heavy 
emphasis on writing programs by combining 
lots of small, focused functions. 
函数式编程得重点式组合一些小的专门的函数
JavaScript doesn't really have a good 
support for this out of the box, 
so you're left with composing these 
functions manually, by defining a new function.
js并没有很好的支持这些的手段,你的手动定义他们以组成
一个新函数
This is not so bad in ECMAScript 2015, 
thanks to the new arrow function syntax:
ES2015不算太差,感谢有了箭头函数
*/
const people = [
    {name: 'Alisa'}, {name: 'Max'}, {name: 'Talib'}
]

console.log(
    people.map(person => person.name)
)

/*
But there are times in which arrow functions don't 
quite cut it. For example, if one wants to evaluate 
something eagerly, a constant combinator makes more sense:
但是,箭头函数并不能总是正确地处理它,而这时,常量组合器能适应
更多的场合
 */
const counter = {
    value: 0,
    next(){ return ++this.value },
    reset(){ this.value = 0 }
}
console.log(
    // 调用数组map方法,使其每个值单独 + 1
    // map 调用这个函数时, 实际上是采用的是value值,而
    // 不是数组里的值,故达不到要求
    [0, 0, 0].map(_ => counter.next())
)
import constant from 'folktale/core/lambda/constant'

counter.reset();

console.log(
    /* 
    相当于保存了数组中的每个元素值,
    function(x){
        // 返回一个函数,再执行这个函数,值是 immutable,
        // 再调用这个值 ++1
        return function(){
            return x
        }
    }
     */
    [0, 0, 0].map(constant(counter.next()))
)

counter.reset();
console.log(
    // 上述过程类比如下过程
    [0, 0, 0].map((x => _ => x)(counter.next()))
)
/*
什么是 Core.Lambda?
Core.Lambda 提供了转换签名函数的组合器和操作
.组合
.组合器
.科里化和偏函数
 */
/*
properties属性
1,函数组合
2,函数组合器
  .常函数组合器
   总是返回第1个参数
  .identity组合器
   总是返回所给参数
3,偏函数和科里化
  函数所需的参数个数。来自于单词 unary, binary, ternary 
  等等。这个单词是由 -ary 与 -ity 两个后缀组成。例如，
  一个带有两个参数的函数被称为二元函数或者它的 arity
  是2。它也被那些更喜欢希腊词根而非拉丁词根的人称为 dyadic。
  同样地，带有可变数量参数的函数被称为 variadic，而二元函数
  必须给出两个且只有两个参数
 */





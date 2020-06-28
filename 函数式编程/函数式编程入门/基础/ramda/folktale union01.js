/**
 * Created by franck.lynn on 2018/11/22.
 * franck_lynn@live.cn
 * https://folktale.origamitower.com/api/v2.1.0/en/folktale.adt.union.html
 */
/*
Documentation
Provides utilities to define tagged unions.
提供实用工具标记unions
Programming with Tagged Unions

Modelling data is important for a range of reasons. 
From performance to correctness to safety. 
Tagged unions give you a way of modelling choices 
that forces the correct handling of them, unlike 
predicate-based branching, such as the one used 
by if statements and other common control flow structures.
建模数据有一系列重要的原因, 从性能正确到安全.unions标记给你一个
强制正确处理他们.与谓词正确分支不同.诸如if控制语句或流程控制语句

Most of the structures provided by Folktale are tagged 
unions. But Folktale also gives you a primitive for 
constructing new ones in an easy way. The union 
function provided by this module achieves that goal:
folktale提供了大部分的unions标签.而且还提供了简单的构造方式
达成这一目标
 */
import {union, derivations} from 'folktale/adt/union'

const {Id} = union('Id', {
    Id(value){ return {value} }
}).derive(derivations.debugRepresentation)

Object.prototype.toString.call(Id(1))

console.log(Id(1).toString())
console.log(Id(1).inspect())












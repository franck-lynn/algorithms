/**
 * Created by franck.lynn on 2018/12/5.
 * franck_lynn@live.cn
 */

'use strict';
import {Map, List} from 'immutable-ext'
import {Sum} from "./manoid";

const resList = List([Sum(1), Sum(2), Sum(3)])
    .fold(Sum.empty())
console.log(resList.inspect())

const resMap = Map({brian: 3, sara: 5})
    // 对每个元素,使用Sum,当传入一个属性时,
    // 属性的值给了 y
    .map(Sum)
    .fold(Sum.empty())
console.log(resMap.inspect())

const resListOf = List.of(1, 2, 3)
    .foldMap(Sum, Sum.empty())
console.log(resListOf.inspect())







/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';

import {Map, List} from 'immutable'

const map1 = Map({a: 1, b: 2, c: 3})
const map2 = map1.set("b", 50)

console.log(
    "map1并没有被改变:",
    map1.get("b") + " vs. " + map2.get("b")
)

const mapCopy = map1

mapCopy.set('b', 50)

console.log(
    "拷贝只是引用:", 
    map1.get("b") + " vs. " + mapCopy.get("b")
)

const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
console.log(list4.get(3))











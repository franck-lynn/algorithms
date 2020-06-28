/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-list-comprehensions-with-applicative-functors
 */
// 嵌套
import {List} from 'immutable-ext'

const merch = _ => 
    List.of(x => y => z => `${x} - ${y} - ${z}`)
        .ap(List(["CNMG120408N-MU", "TPGT080204L-W"]))
        .ap(List(['T3000Z', 'T1500A', 'AC820P']))
        .ap(List(['black', 'white', 'green']))
const res = merch()

console.log(res.toJS())















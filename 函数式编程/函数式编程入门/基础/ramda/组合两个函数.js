/**
 * Created by franck.lynn on 2018/11/17.
 * franck_lynn@live.cn
 */
'use strict';
import R from 'ramda'

const fx = x => 2 * x + 1 
const gx = x => x * x // 先算这个函数
// fx(gx(3)) = 2 g(x) +1
//           = 2 x^2 +1

console.log(fx(gx(3)))
// 用 R.compose() 组合两个函数
const fgx = R.compose(fx, gx)
// console.log(fgx.toString())
console.log(fgx(3))















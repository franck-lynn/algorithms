/**
 * Created by franck.lynn on 2018/11/19.
 * franck_lynn@live.cn
 */
'use strict';

import constant from 'folktale/core/lambda/constant'

/*
function constant(value) {
  return function (_) {
    return value;
  };
}
 */

const counter = {
    value: 0, 
    next(){ return ++this.value },
    reset(){ this.value = 0 }
}

counter.reset()

console.log(
    /* 
    counter.next()函数传进constant.返回一个函数
    function (_) {
        return value;
    };
    map调用的是上面这个函数,但是值已经保存在这个闭包里,
    返回的就是这个值+1
     */
    [0, 0, 0].map(constant(counter.next()))
)

counter.reset()

console.log(
    /*
    而原生的map,当0进入函数处理时,value=1, 当第2个0进入时,
    value=2,因为value值已经改变了,调用的时value,而不是数组
    中的元素, 与上面的不同,上面的是元素进入闭包保存下来了元素的值
     */
    [0, 0, 0].map(
        () => counter.next()
    )
)














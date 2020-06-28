/**
 * Created by franck.lynn on 2018/11/17.
 * franck_lynn@live.cn
 */
'use strict';
import R from "ramda"

/*
函子定义好后,可以像一个数据类型一样使用了
// map :: Functor f => (a -> b) -> f a -> f b
var f_map = R.curry(
    // F是函子,f是函数,科里化这个函数.
    (f, F) => Fa.map(f)
)
// Q:这是什么意思?
// A:在pointFree风格中,F是从管道流过来的Functor
//   下一步准备用函数f处理这个值,但是包装在函子里,直接不好处理,
//   要想处理,就要调用函子的map方法,再应用这个函数f
//   函数f涉及到2个参数,但是我只有一个参数,另外一个参数是管道
//   流过来的,所以,科里化一下.
// Q:那么,这怎么用呢?
// 1, 先建立一个普通函子
// 2, 实例化一个函子.
// 3, 对数据进行管道加工.
//    再这个管道中,中间用到了瓶子,瓶子调用map函数时
//    用到了多参数函数,这时候就适合用科里化进行处理,
//    用这个f_map函数进行处理流过来的数据,就如同普通组合
//    函数一样.

// 类比:
上面的过程翻译如下:
const f_map = (f, F) => F.map(f)
const f_map = function("输入一个已知的函子F"){
    // 返回的是一个函数,这个函数等待输入f函数
    return function("返回一个等待输入的f函数"){
        // 而这个函数F.map(f)返回的其实就是处理后的数据
        return F.map(f)
    }
}
*/











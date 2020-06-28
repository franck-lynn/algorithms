/**
 * Created by franck.lynn on 2019-03-25.
 * franck_lynn@live.cn
 */


/**
 * 根据起始角, 结束角, 数量, 返回一个角度数组, 
 * 数组要包含起始角, 结束角, |--|--|--|
 * @param {*} s 起始角
 * @param {*} e 结束角
 * @param {*} n 数量
 * @returns a 角度数组
 */

import fail from 'gardenia/es/error'

// 判断是不是数组
// var isNumber = n => n === +n;

function angles(n, s = 0, e = 360) {
    // 判断 n, s, e 是不是数字, 
    // if (!isNumber(n) || !isNumber(s) || !isNumber(e)) fail("要输入数字")
    // e-s 是否大于360°, 本函数只取一个周期就可以了.
    if(e < s) fail("start angle must less than end angle")
    if(Math.abs(e - s) > 360 || e-s === 0) fail("angle must in one period")
    let a = [],
        angle = 0;
    // 如果是首位相接的话(是360的整数倍), 尾部要去掉一个,
    // 首位不相接, 尾部增加一个
    let step = ((e - 360) % 360) === 0 ? (e - s) / n : (e - s) / (n - 1);
    
    for (let i = 0; i < n; i++) {
        angle = s + i * step;
        a.push(angle)
    }
    return a;
}


console.log(angles(3))

console.log(angles(3, -90, "90"))
// console.log(angles(3, 90, 90))








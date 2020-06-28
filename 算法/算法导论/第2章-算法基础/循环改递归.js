// https://www.cnblogs.com/zhujudah/p/4104599.html
// 如果编写一个1到n的求和函数.
// 循环
var start = new Date();

function calculate1(m) {
    var count = 0;
    for (var i = 0; i <= m; i++) {
        count += i;
    }
    return count;
}
console.log(calculate1(100 * 100));
console.log("循环计算时间:", new Date() - start);
// 递归
var start = new Date();

function calculate2(m) {
    if (m == 0) return 0;
    return calculate2(m - 1) + m
}
console.log(calculate2(100 * 100));
console.log("递归计算时间:", new Date() - start);

var start = new Date();

function calculate3(m, total) {
    if (m == 0) return m + total;
    return calculate3(m - 1, m + total)
}
console.log(calculate3(100 * 100, 0));
console.log("递归计算时间:", new Date() - start);

function find(a, value) {
    for (var i = 0; i < a.length; i++) {
        if (value == a[i])
            return i
    }
    return "NIL"
}
var a = [3, 1, 4, 2, 5, 6];
var start = new Date();
console.log(find(a, 4));
console.log("循环查找时间:", new Date() - start);
// 递归查找
function _find(a, i, v) {
    // 如果i>=a.length了,说明遍历了整个数组也没找到
    if (i >= a.length) return "NIL";
    // 如果找到了就返回这个i
    if (v === a[i]) return i;
    // 如果没有继续找
    return _find(a, i + 1, v)
}
var a = [3, 1, 4, 2, 5, 6, 3, 4, 4, 5, 5, 6, 6, 6, 66, 7];
var start = new Date();
console.log(_find(a, 0, "a"));
console.log("递归查找时间:", new Date() - start);
// 递归插入
function insertRecurse(a, n) {
    if (n > 0) {
        insertRecurse(a, n - 1);
        insert(a, n);
    } else return;
    return a
}
var a = [3, 1, 4, 2, 5, 6];
console.log(insertRecurse(a, 5))
// 把n插入前面已经排好的数组
function insert(a, n) {
    var i = n - 1;
    var key = a[n];
    while (i >= 0 && key < a[i]) {
        a[i + 1] = a[i];
        i--;
    }
    a[i + 1] = key;
}
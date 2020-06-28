var start1 = new Date();

function multipleX1(x, n) {
    if (n == 2) return x * x;
    // 这种不是尾调用优化
    return multipleX1(x, n / 2) * multipleX1(x, n / 2)
}

console.log(multipleX1(2, 32))
console.log("尾部未优化时间:", new Date() - start1)

var start2 = new Date();

function multipleX2(x, n, t) {
    if (n == 1) return x * t;
    return multipleX2(x, n - 1, x * t)
}
console.log(multipleX2(2, 64, 1))
console.log("尾部优化时间:", new Date() - start2)

var start3 = new Date();

function fibonacci1(n) {
    if (n == 0 || n == 1) return 1
    return fibonacci1(n - 1) + fibonacci1(n - 2)
}
console.log("fibonacci1:", fibonacci1(40))
console.log("fibonacci尾部未优化时间:", new Date() - start3)

var start4 = new Date();

function fibonacci2(n, ac1 = 1, ac2 = 1) {
    // 后面的这个参数是结果
    if (n <= 1) { return ac2 };
    // 分治的结果是上次的结果
    return fibonacci2(n - 1, ac2, ac1 + ac2);
}
console.log("fibonacci1:", fibonacci2(40, 1, 1))
console.log("fibonacci尾部优化时间:", new Date() - start4)

// 返回[0,1)之间的整数
/*
function uniform(n) {
    if(n<0) throw new Error("参数必须是为正数"+n);
    return Math.floor(Math.random()*n);
}
console.log(uniform(2))
*/
// 返回一个[0,1)之间的随机数
function uniform() {
    return Math.random()
}
console.log(uniform());

function bernoulli(p) {
    if (!(p >= 0.0 && p <= 1.0))
        throw new Error("概率p必须在[0,1)之间 " + p);
    return uniform() < p;
}
console.log(bernoulli(0.6))













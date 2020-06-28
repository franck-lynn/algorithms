// 求最大公约数
function gcd(p,q) {
    if(q===0) return p;
    var r=p%q;
    return gcd(q,r)
}
console.log(gcd(24,12))

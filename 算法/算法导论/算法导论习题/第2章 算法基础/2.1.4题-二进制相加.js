
// 定义2个数组
var a = [1,0,1];
var b = [1,1,1];
var c = new Array(a.length+1)
// console.log(c.length)
var carry = 0;
for(var i = c.length-1;i>0;i--){
    c[i]= (a[i-1]+b[i-1]+carry) % 2;
    carry = Math.floor((a[i-1]+b[i-1]+carry) / 2);
}
c[i] = carry
console.log(c)

















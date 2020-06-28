/*
不需要交换的插入排序
内循环中将较大的元素向右移动而不总是交换两个元素
https://github.com/jimmysuncpt/Algorithms/blob/master/src/com/jimmysun/algorithms/chapter2_1/Ex25.java
*/
function sortByInsert2(a) {
    var n = a.length;
    for(var i = 1; i < n; i++){
        // 保存住当前正在抓的这张牌
        var tmp = a[i];
        for(var j = i; j > 0 && tmp < a[j-1] ; j--){
            // 把牌摊在桌上,手上正在抓的这张牌作为影子牌.是不变的
            // 例如:现在有三张牌ESA.
            // 第1次:i=1,影子牌是a[1]=S;
            //       j=1;j>0 && S<E为假,不循环
            // 第2次:i=2,影子牌是a[2]=A,已被tmp保存
            //      j=2;j>0 && a[2]=A<S,为真,循环.a[j]=a[2]=a[j-1]=a[1]=S,即a[2]=S了,也就是说S向右移动了一位
            //      j=1;j>0 && a[2]=A<E,为真,循环.a[j]=a[1]=a[j-1]=a[0]=E,即a[1]=E,a[1]赋值E,也就是E向右移动了一位
            // ESA 
            // EAS  实际上仅仅将S向右移动 j位是2
            // AES  实际上仅仅将E向右移动 j位是1
            // 第3次:j=0,退出循环
            a[j] = a[j-1];
            console.log(`内循环${a[j]} ${j}右移,${a},影子牌是${tmp}`)
        }
        // 这时j是第1位,都比较过了,是最小的了
        a[j]=tmp;
        console.log(`外循环第${i}次:此时j值为${j} ,${a},  影子牌${a[j]}赋值给a[${j}]`)
    }
    // return a
}
var a = "ESAYQUESTION".split("");
// var a = "ESA".split("");
// console.log(sortByInsert2(a).toString())
sortByInsert2(a)
// A,E,E,I,N,O,Q,S,S,T,U,Y
// A,E,E,I,N,O,Q,S,S,T,U,Y
// A,E,E,I,N,O,Q,S,S,T,U,Y









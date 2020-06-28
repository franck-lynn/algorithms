/*
插入排序
2.1.4 按照算法2.2所示轨迹给出选择排序是如何将数组 E S A Y Q U E S T I O N 排序的

*/
function sortByInsert(a) {
    var n = a.length;
    // 外循环是正在抓的这张牌
    for(var i = 1; i < n; i++){
        // 内循环是将已抓到的牌在已拍好序的牌中插入
        // 1,i=1,j=1,j>0&&a[1]<a[0],为假,不执行,j--=0,退出循环
        // 2,i=2,j=2,j>0&&a[2]<a[1],交换数据[E A S],j--=1,再循环
        //       j=1,j>0$$a[1]<a[0],交换数据[A E S],j--=0,退出循环
        for(var j = i; j > 0 && (a[j] < a[j-1]);j--){
            //交换这2个j,j-1数据
            var temp = a[j-1];
            a[j-1] = a[j];
            a[j] = temp
            console.log(`内循环${a[j-1]}与${a[j]}交换`)
        }
        console.log(`第${i}次:${a}`)
    }
    // return a
}
var a = "ESAYQUESTION".split("");
// console.log(sortByInsert(a).toString())
sortByInsert(a)
// A,E,E,I,N,O,Q,S,S,T,U,Y
// A,E,E,I,N,O,Q,S,S,T,U,Y








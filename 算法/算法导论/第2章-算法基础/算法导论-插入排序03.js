//按照从大到小的顺序排列,而不是从小到大的顺序排列
/*
设有一数组无序:
var a = [45,32,4,12,4,8,2]

*/

function insertSort(a) {
    for (var i = 1; i < a.length ; i++) {
        var key = a[i];
        while (a[i - 1] < key && i > 0) {
            //如果前面一张牌小,就把后面这张牌改成小的
            a[i] = a[i-1];
            // 再往前翻牌
            i--;
        }
        a[i] = key;
    }
    console.log(a)
}

var a = [45,32,4,12,4,8,2]
insertSort(a)















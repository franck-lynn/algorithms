/**
 * Created by franck.lynn on 2018/4/27 11:55.
 */
/*
参照图8-4的方法,说明bucketSort在数组
var a = [ 0.79, 0.13, 0.16, 0.64, 0.39, 0.20, 0.89, 0.53, 0.71. 0.42 ]
上的操作过程
 */
var a = [ 0.79, 0.13, 0.16, 0.64, 0.39, 0.20, 0.89, 0.53, 0.71, 0.42 ]

function bucketSort(a) {
    var bucket = new Array(10); // 创建桶的数组,只有10个桶就可以了,因为基数只有10个
    for(let i = 0; i < bucket.length; i++){
        bucket[i] = []; // 子桶也是数组,用数组代替队列
    }
    // 获取10分位上的数字
    var digit;
    for(let i = 0; i < a.length; i++){
        digit = parseInt(a[i] * 10 % 10);
        bucket[digit].push(a[i]);
    }
    // 在每个桶内再进行排序
    for(let i = 0; i < bucket[i].length; i++){
        insertionSort(bucket[i]);
    }
    // 从每个桶内取出数据
    for(let i = 0; i < bucket.length; i++){
        // 再在每个子桶去数据
        for(let j = 0; j < bucket[i].length; i++){
            process.stdout.write(bucket[i][j]+"  ")
        }
    }
}
bucketSort(a);



function insertionSort(a) {
    // j[1-a.length]为手中已排号序的牌
    for(var j = 1; j < a.length; j++){
        // 下标j表示正在被插入到手中的"当前牌"
        // 在内循环中.这个值是不能变的
        var key = a[j];
        // 手上最后一张牌
        var i = j-1;
        // 寻找条件插入.从手上最后一张牌开始查找,一直找到第1张牌
        // 如果手上排好序的牌最后一张牌 > 当前牌,说明当前牌小,需要插入
        // 因为j是从1开始,要使 j 与手上所有牌(0~j-1)都比较到,i=j-1的范围就是(0~j-1),所以要有i>=0的要求
        while (i >= 0 && a[i] > key){
            // 所谓插入,就是当前牌要去占位置,也就是说,最后一张牌要向右移动一位,i+1位由最后一张牌占用
            a[i+1] = a [i];
            // 接着再比较手上倒数第2张牌
            i = i-1;
        }
        // 此时i+1是上面i的排位,由当前牌占用
        a[i+1] = key;
    }
    return a
}



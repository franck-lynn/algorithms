/*
说明countingSort在数组
var a = [6,0,2,0,1,3,4,6,1,3,2]上的操作过程
题目说是计数排序:
计数排序需要一个临时数组,统计下这些数字出现的次数
临时数组的下标与数字相同,
然后有几次就打印几次
 */

function countingSort(a) {
    var c = [];
    // 初始化数组全部为0
    for(let  i = 0; i < 10; i++){
        c[i] = 0;
    }
    // console.log(c);
    // 统计a数组中数字出现的次数
    for(let i = 0; i < a.length; i++){
        // c[6] = 0 + 1
        c[a[i]] =  c[a[i]] + 1; //c下标就是a元素的值,c的值就是a元素出现的次数
    }
    console.log(c);
    // [ 2, 2, 2, 2, 1, 0, 2, 0, 0, 0, 0 ]
    for(let i = 0; i < c.length; i++){
        for(let j = 0; j < c[i]; j++){ //c[i]=多少就打几次
            process.stdout.write(i+"  ");
        }
    }
}

// var a = [ 6, 0, 2, 0, 1, 3, 4, 6, 1, 3, 2 ]
var a = [9, 8, 7, 6, 5, 4, 3, 2, 1 ]
countingSort(a)







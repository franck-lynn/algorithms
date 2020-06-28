/**
 * Created by franck.lynn on 2018/4/25 14:26.
 * It will work properly, but they are not stable. 
 * Equal elements will appear in reverse order in 
 * the sorted array.
 */
var a = [9,8, 7, 6, 5, 4, 3 ]
// var a = [6,0,2,0,1,3,4,6,1,3,2]
function countingSort(a) {
    // 1,let c[0..k] to be a new array
    let c = [];
    // 2,for i = to k
    // 3,   c[i] = 0
    for (let i = 0; i < 10; i++){
        c[i] = 0;
    }
    console.log("10个数组初始化:",c)
    // 4,for j = 1 to a.length
    // 5,   c[a[j]] = c[a[j]] + 1
    // 6, c[i] now contains the number of elements equal to i.
    // 各元素出现的次数,c桶的下标就是元素的值
    for (let i = 0; i < a.length; i++){
        c[a[i]] = c[a[i]] + 1
    }
    console.log("10个数组放置10个基数,出现次数:",c)
    // 7, for i = 1 to k
    // 8,    c[i]=c[i] + c[i-1]
    // 9, c[i] now contains the number of elements less than or equal to i
    // 统计a中各元素不大于i出现的次数
    for(let i = 1; i < 10; i++){
        c[i] = c[i]+c[i-1];
    }
    console.log("不大于i出现的次数:",c)
    // [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
    // 找一个桶,桶上贴的标签是a元素不大于i的值出现的次数减1
    var b = [];
    for (let i = a.length-1 ; i >= 0; i--){
        b[c[a[i]]-1] = a[i];
        c[a[i]] = c[a[i]] - 1;
    }
    // for (let i = 0; i < a.length; i++){
    //     b[c[a[i]]-1] = a[i];
    //     c[a[i]] = c[a[i]] - 1;
    // }
    // 10, for j=a.length downto 1
    // 11,    b[c[a[j]]-1] = a[j]
    // 12,    c[a[j]] = c[a[j]] - 1
    console.log(b) // 0  0  1  1  2  2  3  3  4  6  6
    //              [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 6, 6 ]
}
countingSort(a)








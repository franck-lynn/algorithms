
/*
伪代码
HIRE-ASSISTANT(n)
    best = 0
    for i = 1 to n 
        interview candidate i
        if candidate i is better than candidate best
            best = i
            hire candidate i
 */

/*
function permuteBySorting01(arr) {
    var n = arr.length;
    for(let i = 0; i < n; i++){
        var r = i + uniform(n-i);
        var temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
    }
    return arr
}
*/

function permuteBySorting02(arr) {
    var n = arr.length;
    let p = []; // 根据产生的随机数确定的优先级排列数组
    for(let i = 0; i < n; i++){
        p[i] = uniform(n * n * n);
    }
    sort(arr,p);
    return arr;
}

/**
 * 思路:获取p数组的下标排列序号,也就是每个元素排第几号
 * 根据p对arr重排
 * @param arr 待重排数组
 * @param p 随机数组
 */
function sort(arr,p) {
    for(let j =0;j<p.length;j++){
        // 数组p的第1个下标排第几,
        // arr的第1个元素就是第几下标
        var key = p[j];
        var i = j - 1;
        while (i >= 0 && p[i] > key) {
            p[i + 1] = p[i];
            i--;
        }
        p[i + 1] = key;
        // 交换
        var temp = arr[j];
        arr[j] = arr[i + 1];
        arr[i + 1] = temp;

    }
    return arr
}


// 返回一个[0,n)之间的整数
function uniform(n) {
    return Math.floor(Math.random() * n)
}
// console.log(permuteBySorting([2,4,1,3]));
console.log(sort([1,2,3,4],[36,3,62,19]))



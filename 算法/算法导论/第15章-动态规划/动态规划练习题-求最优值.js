// https://www.bilibili.com/video/av16544031
// https://www.bilibili.com/video/av18512769/?spm_id_from=333.788.videocard.0

let arr = [1, 2, 4, 1, 7, 8, 3]
arr = [4, 1, 1, 9, 1]
// 递归最优解
function rec_opt(arr, i) {
    if (i === 0) {
        return arr[0]
    } else if (i === 1) {
        return Math.max(arr[0], arr[1])
    } else {
        let a = rec_opt(arr, i - 2) + arr[i]
        let b = rec_opt(arr, i - 1)
        return Math.max(a, b)
    }
}

console.log(rec_opt(arr, arr.length-1))

function dp_opt(arr) {
    let opt = new Array(arr.length)
    opt[0] = arr[0]
    opt[1] = Math.max(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        let a = opt[i - 2] + arr[i]
        let b = opt[i - 1]
        opt[i] = Math.max(a, b)
    }
    return opt[arr.length - 1]
}

console.log(dp_opt(arr))
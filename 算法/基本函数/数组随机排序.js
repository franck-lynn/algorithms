/**
 * Created by franck.lynn on 2018/5/13 22:20.
 */
function shuffle(a) {
    var n = a.length
    for(var i=0;i<n;i++){
        // 返回一个[i...n)之间的随机数
        var r =i + Math.floor(Math.random()*(n-i));
        // 先把a[i]值保存下来.在把a[i]赋值i后面的任何一个元素
        var temp = a[i];
        a[i] =a[r];
        a[r] =temp;
    }
    return a;
}
module.exports = shuffle;











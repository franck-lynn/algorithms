/**
 * 
 * @param x 这个参数应该是一个节点
 * @param iPrime下这个参数是是一段区间,用对象表示
 * @returns {boolean}
 */
function isOverlap(x,iPrime) {
    return x.int.low <= iPrime.high && iPrime.low <= x.int.high;
}
module.exports = isOverlap;










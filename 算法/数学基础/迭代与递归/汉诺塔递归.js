/* 
hanoi tower 
https://www.bilibili.com/video/av9830115/?spm_id_from=333.788.videocard.1
关键点, 三块时将最上面的2块看成一个整体, 这样, 就变成了2块的小问题了
*/
/**
 * 
 * @param {*} n n个盘子
 * @param {*} A 柱子
 * @param {*} B 
 * @param {*} C 
 * hanoi()将A全部移动到C
 */
function move(A, B){
    console.log(A + "---> " + B)
}

function hanoi(n, A, B, C){
    if(n==1){
        // 只有1块时直接将A移动到C
        move(A, C)
    }else {
        // 当有n-1块时.
        // 为便于理解, 当有2块时, A移动到B, A剩下一块大的, 
        // 再将A移动到C, 完成.
        // 当有3块时, 将上面的看成一个整体, 这个整体是一个小问题的汉诺塔
        // 这个小汉诺塔是 hanoi(n-1),
        // 还是先将 A小汉诺塔 移动到 B, 再A移动到C, 
        // 现在, 还要考虑移动到B的小汉诺塔, 作为一个整体, 绕过A再移动到C的
        // 所以, 最后一步是 B->A->C
        hanoi(n-1, A, C, B)
        move(A, C)
        hanoi(n-1, B, A, C)
    }
}
hanoi(2, "A", "B", "C")
console.log("💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢")
// hanoi(3, "A", "B", "C")
// console.log("💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢💢")
// hanoi(6, "A", "B", "C")
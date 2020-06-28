
/*
请描述random(a,b)过程的一种实现,它只调用random(0,1),作为(a,b)的函数,你的过程期望运行时间是多少?
 */
function randomAB(a, b) {
    return Math.floor(a + Math.random() * (b-a))
}
console.log(randomAB(0,2))






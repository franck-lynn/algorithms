let n = 4;
/*
打印如下图形
♣♣♣♣
♣♣♣
♣♣
♣
分析:
1,总共4行,外循环的边界时[0,4),需要的是4次换行.
2,内循环是4,3,2,1,每次都减少1个,第1次循环4次,开始多的时候是从i到n
 */
function printStar01() {
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            print("♣")
        }
        console.log()//打印换行
    }
}
printStar01();
console.log("**********************1**********************");
/*
打印如下图形
♦
♦♦
♦♦♦
♦♦♦♦
分析:
1,总共4行,外循环4次
2,内循环由少到多,说明到右边界再增长
 */
function printStar02() {
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            print("♦")
        }
        console.log()
    }
}
printStar02();
console.log("**********************2**********************");
/*
打印如下图形
   ♠
  ♠♠♠
 ♠♠♠♠♠
♠♠♠♠♠♠♠
分析:
---♠
--♠♠♠
-♠♠♠♠♠
♠♠♠♠♠♠♠
1,先看空格部分,空格每次减少,开始是3,倒减少,控制左边界[i,n)
2,再看黑桃部分,每次增加2个,为正增加,控制右边界
 */
function printStar03() {
    for(let i=0;i<n;i++){
        for(let j=i;j<n-1;j++){
            print(" ");
        }
        for(let j=0;j<2*i+1;j++){
            print("♠")
        }
        console.log()
    }
}
printStar03();
console.log("**********************3**********************");
/*
打印如下图形:
♥♥♥♥♥♥♥
 ♥♥♥♥♥
  ♥♥♥
   ♥
分析:
♥♥♥♥♥♥♥
_♥♥♥♥♥
--♥♥♥
---♥
1,先看左边空格,逐行增加,左边界不变,右边界增加
2,再看红桃,每次减少2个
 */
function printStar04() {
    for(let i=0;i<n;i++){
        for(let j=0;j<i;j++){
            print("-");
        }
        for(let j=2*i+1;j<2*n;j++){
            print("♥")
        }
        console.log()
    }
}
printStar04();

console.log("**********************4**********************");

/*
打印如下图形
♣♣♣♣
♣♣♣-
♣♣--
♣---
分析:
1,总共4行,外循环的边界时[0,4),需要的是4次换行.
2,内循环是4,3,2,1,每次都减少1个,左边界不变,有边界随i的变大做减少运动;j--
 */

function printStar05() {
    for(let i=0;i<n;i++){
        for(let j=n;j>i;j--){
            print("♣")
        }
        console.log()//打印换行
    }
}
printStar05();
console.log("**********************5**********************");

/*
打印如下图形
♦
♦♦
♦♦♦
♦♦♦♦
分析:
1,总共4行,外循环4次
2,内循环由少到多,如何左边界不动,右边界随i的增加间距拉大,所有j要向0方向运动
 */
function printStar06() {
    for(let i=0;i<n;i++){
        for(let j=n;j>=n-i;j--){
            print("♦")
        }
        console.log()
    }
}
printStar06();
console.log("**********************6**********************");

/*
打印如下图形:
👍👍👍😁
👍👍😁😁
👍😁😁😁
😁😁😁😁
 */
function printStar07() {
    
    // 右直角星星
    for(let i=0;i<n;i++){
        //左边空格
        for(let j=i;j<n-1;j++){
            print("👍")
        }
        for(let j=0;j<=i;j++){
            print("😁")
        }
        console.log()
    }
}
printStar07();
console.log("**********************7**********************");
/*
打印如下图形:
😁😁😁😁
👍😁😁😁
👍👍😁😁
👍👍👍😁
*/
function printStar08() {
    for(let row=0;row<n;row++){
        for(let col=0;col<row;col++){
            print("👍")
        }
        for(let col=row;col<n;col++){
            print("😁")
        }
        console.log()
    }
    
}
printStar08();
console.log("**********************8**********************");
/*
打印如下图形:
🌹🌹🌹🌹🌹🌹🌹
-🌹🌹🌹🌹🌹
---🌹🌹🌹
-----🌹 
 */
function printStar09() {
    for (let i=0;i<n;i++){
        for(let j=0;j<2*i-1;j++){
            print("-")
        }
        for(let j=2*n;j>2*i+1;j--){
            print("🌹")
        }
        console.log()
    }
}
printStar09();

console.log("**********************9**********************");
/*
打印如下图形:

-----🌷
---🌷🌷🌷
-🌷🌷🌷🌷🌷
🌷🌷🌷🌷🌷🌷🌷
1,左边-随i增加而减少,每次步长2
2,右边随i增加而增加,步长为2
 */
function printStar10() {
    for (let i=0;i<n;i++){
        for(let j=2*i+1;j<2*n-2;j++){
            print("-")
        }
        for(let j=0;j<2*i+1;j++){
            print("🌹")
        }
        console.log()
    }
}
printStar10();
console.log("**********************10**********************");
//不换行打印的函数
function print(s) {
    process.stdout.write(s)
}

console.log("**********************11**********************");
// 递归方式初始化多维数组
function initMatrix(row,col,element) {
    // row == 0 || col == 0  是空的数组
    if(row == 1 && col == 1) return [initArray(col,element)]
    return initMatrix(row-1,col-1,element).concat([initArray(col,element)])
}
console.log(initMatrix(4,4,"A"))


function _initArray(n,element,a=[]) {
    if(n==0) return a;
    return _initArray(n-1,element,a.concat(element))
}
// 尾调用优化的柯里化版本
function initArray(n,element) {
    return _initArray(n,element,[])
}






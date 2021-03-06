/*
把数组的下标先递后归
[ 0, 1, 2, 2, 3, 4, 5, 5, 10, 20 ]
  0  1  2  3  4  5  6  7  8   9
        lo      mid          hi
     <9+2/2>=5.5=5
     <9-2>/2=3.5=3
[ 0, 1, 2, 2, 3, 4, 5, 5, 10, 20 ]
  0  1  2  3  4  5  6  7  8   9     
           lo      mid       hi  
     <9+3/2>=6
     <9-3>/2=3 
所以,应该是(lo+hi)/2,而不应该是(hi-lo)/2
(hi-lo)/2+lo=(hi+lo)/2    
 */

var count1 = 1;
var count2 = 1;
function divide(lo,hi) {
    //           0,3
    //           0,1
    //           2,3
    if(lo < hi){
        //1,lo=0,hi=3,mid=1
        //2,divide(0,1)
        //3,lo=0,hi=1,mid=0 这句第1次递归就结束了
        //4,执行console.log, ------------第1次---------- [ 0, 0 ]
        //5,mid+1=1,hi=1,不执行递归
        //6,执行下一句console.log **No. 1** [ 1, 1 ]
        //函数弹栈后,栈下面的函数开始一个一个的执行
        //7,弹栈后第2序开始执行lo=0,mid=0,hi=1,
        //8,执行console.log,------------第2次---------- [ 0, 1 ]
        //9,执行divide(2,3),
        //10,第1行递归结束
        //11,执行console.log,------------第3次---------- [2,2]
        //12,不执行divide(3,3)
        //13,打印 **No. 2** [ 3, 3 ]
        //14,返回递归函数执行打印 **No. 3** [ 2, 3 ]
        var mid = Math.floor((lo+hi)/2);
        divide(lo,mid); 
        
        divide(mid+1,hi)
        console.log("------------第"+(count1++)+"次----------",[lo,mid]);
        console.log("**No. "+(count2++)+"**",[mid+1,hi])
    }
}

divide(0,7);
/*
0   1   2   3
2,  4,  5,  7
_____________
[0    1][2  3]
|____|  |___|  
  |       |
[0,0][1,1]|[2,2][3,3]
2     4  
 console.log()[0,0] 递归结束,返回


------------第1次---------- [ 0, 0 ] 左边的底部
**No. 1** [ 1, 1 ]                   右边的底部
------------第2次---------- [ 0, 1 ]  左边的倒数第2步
------------第3次---------- [ 2, 2 ] 右边的底部
**No. 2** [ 3, 3 ]                   左边的底部
**No. 3** [ 2, 3 ]                   右边的倒数第2步
 */


















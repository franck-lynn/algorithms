
function divide(a,p,r) {
    // 1,p=0,q=?,r=4,进入函数
    if(p < r){
        var q = Math.floor((p+r)/2);
        // console.log("p="+p+",q="+q+",r="+r)
        // 1,p=0,q=2,r=4,进入函数
        // 2,p=0,q=1,r=2,进入函数
        // 3,p=0,q=0,r=1,进入函数
        //                       4,p=0,q=0,r=0,不调用函数
        
        // 1,p=3,q=3,r=4,进入函数
        //                       2,p=3,q=3,r=3,不调用函数
        divide(a,p,q) 
        // 逆序打印
        // 3,[0,0,1]
        // 2,[0,1,2]
        // 1.[0,0,4]
        
        // 第2次逆序打印
        // 1,[3,3,4]
        console.log("----------",[p,q,q+1,r])
        
        //如果再增加下面的递归函数,是在上面递归结束后,
        // 递归返回时在执行下面的程序
        //         p  q  r
        // 1,    [ 0, 0, 1 ]
        // 2,    [ 0, 1, 2 ]
        // 3,    [ 0, 2, 4 ]
        // 1,p=q+1=1,r=1 // 第1个递归第1次返回时下面的递归不执行
        // 2,p=q+1=2,r=2 // 第1个递归第2次返回时下面的递归不执行
        // 3,p=q+1=3,r=4 // 第1个递归第3次返回时下面的递归执行
        
        // 执行divide(3,4)这个递归了.返回上面执行
        
        // 第3次递归返回时又运行到这个地方
        // 1,p=q+1=4,r=4 //不执行
        divide(a,q+1,r);
        // console.log("**",[q+1,r])
        console.log(printArr(a,p,q),printArr(a,q+1,r))
        // printArr(a,p,q)
        // printArr(a,q+1,r)
        /*
        所以执行函数的下标分别是:
          p  q  q+1  r
        [ 5, 1   6  undefined]  
          0  1   2  3
        [ 0, 0,  1, 1 ]  [5]   [1] 
        [ 0, 1,  2, 2 ]  [5,1] [6]
        [ 0, 2,  3, 4 ]  [5,1,6]  [undefined,undefined],下面递归回来后执行,这步是最后输出的
        [ 3, 3,  4, 4 ]  [undefined,undefined] 这步先与上面一步执行
        */
    }
}
var a =[5,1,6,4]
divide(a,0,a.length)

// 打印数组
function printArr(a,p,q) {
    var arr= [];
    var n1=q-p;
    for(var i=0;i<=n1;i++){
        arr[i]=a[p+i];
    }
    return (arr)
}

















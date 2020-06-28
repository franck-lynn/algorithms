/*
编写一段程序,创建一个n*n的布尔数组a[][],其中当i,j互质时,a[i][j]=true,
否则为false
 */
function initArray(n) {
    //创建二维数组
    var matrix = new Array(n);
    for(var row = 0; row < n; row++){
        matrix[row] = new Array(n);
    }
    // 给数组赋值
    for(var row= 0; row < n; row++){
        for(var col = 0; col < n; col++){
            // console.log(isPrime(row,col));
            if(isPrime(row,col)) {
                // console.log(row,col)
                matrix[row][col]=1;
            }else {
                matrix[row][col]=0;
            }
        }
    }
    return matrix
}
// 判断互质
function isPrime(x,y) {
    if(x==1 && y ==1) return true; //1和1互质  
    else if(x<=0 || y<=0) return false;
    else if(x==1 || y==1) return true; //1和任何正整数都互质  
    else {
        var tmp=0;
        //使用求商判断法，如果输入的x<y，第一次循环会交换x和y的位置  
        while(true){
            tmp = x%y
            if(tmp==0) break;
            else {
                x=y;
                y=tmp;
            }
        }
        if(y==1) return true;  //最大公约数为1,所以互质  
        else return false; //最大公约数大于1，所以不互质  
    }
}
var n = 3
console.log(initArray(n))


















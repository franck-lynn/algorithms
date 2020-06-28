
/*
function rank(k, a, lo, hi) {
    if (lo > hi) return -1;
    var mid = Math.floor((lo + hi) / 2);
    if (k < a[mid]) return rank(k, a, lo, mid - 1);
    else if (k > a[mid]) return rank(k, a, mid + 1, hi);
    else return mid;
}
*/

/*
命中23
      lo                         mid                         hi
      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14 
    [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 85, 98]
lo=0,hi=14,mid=7,lo<hi,执行程序主体,k=23<a[7]=33,左边递归执行
rank(k,a,0,6)
      lo         mid          hi
      0   1   2   3   4   5   6 
    [10, 11, 12, 16, 18, 23, 29]   
lo=0,hi=6,mid=3,lo<hi,执行程序主体,k=23>a[3]=16,右边递归执行
rank(k,a,4,6)  
                     lo  mid  hi
                      4   5   6 
                    [18, 23, 29] 
lo=4,hi=6,mid=5,lo<hi,执行程序主体,k=23=a[3]=23,return mid 程序结束                                        
 */

/*
未命中50
      lo                         mid                         hi
      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14 
    [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 85, 98]
lo=0,hi=14,mid=7,lo<hi,执行程序主体,k=50>a[7]=33,右边递归执行
                                      lo         mid         hi
                                      8   9  10  11  12  13  14 
                                    [48, 54, 57, 68, 77, 85, 98]
lo=8,hi=14,mid=11,lo<hi,执行程序主体,k=50<a[11]=68,左边递归执行      
                                      lo mid  hi
                                      8   9  10 
                                    [48, 54, 57]    
lo=8,hi=10,mid=9,lo<hi,执行程序主体,k=50<a[9]=54,左边递归执行
                                      lo mid  hi
                                      8  
                                    [48]  
lo=8,hi=8,mid=8,lo<hi,执行程序主体,k=50<a[9]=48,左边递归执行
lo=8,hi=7,lo>hi, 返回-1,                             
 */

// 递归的深度参数
/*
function rank(k, a, lo, hi,deep) {
    deep++;
    if (lo > hi) return [-1,`递归深度${deep}`];
    var mid = Math.floor((lo + hi) / 2);
    if (k < a[mid]) return rank(k, a, lo, mid - 1, deep);
    else if (k > a[mid]) return rank(k, a, mid + 1, hi, deep);
    else return [mid,`递归深度${deep}`];
}
*/

/*
命中23
1,第1次执行,deep++=1,
2,左递归执行lo=0,hi=6,mid=3
3,第2次执行,deep++=2
4,右递归执行 lo=4,hi=6,mid=5
5,第2次执行,deep++=3
      lo                         mid                         hi
      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14 
    [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 85, 98]
lo=0,hi=14,mid=7,lo<hi,执行程序主体,k=23<a[7]=33,左边递归执行
rank(k,a,0,6)
      lo         mid          hi
      0   1   2   3   4   5   6 
    [10, 11, 12, 16, 18, 23, 29]   
lo=0,hi=6,mid=3,lo<hi,执行程序主体,k=23>a[3]=16,右边递归执行
rank(k,a,4,6)  
                     lo  mid  hi
                      4   5   6 
                    [18, 23, 29] 
lo=4,hi=6,mid=5,lo<hi,执行程序主体,k=23=a[3]=23,return mid 程序结束 


未命中50
0,执行函数:lo=0,hi=14,mid=7
1,第1次执行,deep++=1,
2,右递归执行lo=8,hi=14,mid=11
3,第2次执行,deep++=2
4,左递归执行 lo=8,hi=10,mid=9
5,第3次执行,deep++=3
6,左递归执行,lo=8,hi=8,mid=8,
7,第4次执行,deep++=4
8,左递归执行,lo=8,hi=7,lo>hi
9,5次执行,程序退出
未命中50
      lo                         mid                         hi
      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14 
    [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 85, 98]
lo=0,hi=14,mid=7,lo<hi,执行程序主体,k=50>a[7]=33,右边递归执行
                                      lo         mid         hi
                                      8   9  10  11  12  13  14 
                                    [48, 54, 57, 68, 77, 85, 98]
lo=8,hi=14,mid=11,lo<hi,执行程序主体,k=50<a[11]=68,左边递归执行      
                                      lo mid  hi
                                      8   9  10 
                                    [48, 54, 57]    
lo=8,hi=10,mid=9,lo<hi,执行程序主体,k=50<a[9]=54,左边递归执行
                                      lo mid  hi
                                      8  
                                    [48]  
lo=8,hi=8,mid=8,lo<hi,执行程序主体,k=50<a[9]=48,左边递归执行
lo=8,hi=7,lo>hi, 返回-1, 
 */
var a=[10,11,12,16,18,23,29,33,48,54,57,68,77,85,98];
console.log(rank(23,a,0,a.length-1,0));
console.log(rank(50,a,0,a.length-1,0));

// 打印出lo,hi并保存递归深度
function rank(k,a,lo,hi,deep) {
    deep++;
    if(lo>hi) {
        console.log("执行了没有找到",deep)
        return [-1,deep];
    }
    var mid = Math.floor((lo+hi)/2);
    // 在左边
    if(k<a[mid]) {
        console.log("执行了左边LLL---"+deep+"---",lo,mid)
        return rank(k,a,lo,mid-1,deep)
    }
    // 在右边
    else if(k>a[mid]) {
        console.log("执行了右边RRR***"+deep+"***",lo,mid)
        return rank(k,a,mid+1,hi,deep);
    }
    else {
        console.log("mid~~~~",mid,deep)
        return [mid,deep]
    }
}
















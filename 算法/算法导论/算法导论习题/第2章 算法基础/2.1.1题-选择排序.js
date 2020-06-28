/*
选择排序
2.1.1 按照算法2.1所示轨迹给出选择排序是如何将数组 E S A Y Q U E S T I O N 排序的
i    min   0 1 2 3 4 5 6 7 8 9 10 11
0          E S A Y Q U E S T I O  N
1    3     A S E Y Q U E S T I O  N    A,S,E,Y,Q,U,E,S,T,I,O,N
2    2     A E S Y Q U E S T I O  N    A,E,S,Y,Q,U,E,S,T,I,O,N
3    6     A E E Y Q U S S T I O  N    A,E,E,Y,S,U,Q,S,T,I,O,N
4    9     A E E I Q U S S T Y O  N
5    11    A E E I N U S S T Y O  Q
6    10    A E E I N O S S T Y U  Q
7    11    A E E I N O Q S T Y U  S
8    10    A E E I N O Q S S U Y  T
9    11    A E E I N O Q S S T Y  U
10   11    A E E I N O Q S S T U  Y
*/
function sortBySelect(a) {
    var n = a.length;
    for(var i=0;i<n;i++){
        var min = i;
        var count = 1;
        for(var j = i+1;j<n;j++){
            
            if(a[j]<a[min]){
                // 交换数组中这2个元素a[i]和 a[min]
                var temp = a[min];
                a[min] = a[j];
                a[j] = temp;
                // 内循环交换次数
                console.log("内循环交换第"+(count++)+"次,交换元素是:",min,j,a)
            }
        }
        console.log("第"+(i+1)+"次:", a.toString())
    }
}
// var a = "ESAYQUESTION".split("")
var a = "YUTSSQONIEEA".split("")
console.log(a)
// console.log(sortBySelect(a))
sortBySelect(a)
/*
  i     0 1 2 3 4 5 6 7 8 9 10 11
        E S A Y Q U E S T I O N        0 1 2 3 4 5 6 7 8 9 10 11
第1次:  A,S,E,Y,Q,U,E,S,T,I,O,N  第1次  A,S,E,Y,Q,U,E,S,T,I,O,N  找出A   0 2 交换
第2次:  A,E,S,Y,Q,U,E,S,T,I,O,N  第2次    E,S,Y,Q,U,E,S,T,I,O,N  找出E   1 2交换   0 1 2 3 4 5 6 7 8 9 10 11              0 1 2 3 4 5 6 7 8 9 10 11
第3次:  A,E,E,Y,S,U,Q,S,T,I,O,N  第3次:     E,Y,S,U,Q,S,T,I,O,N  找出E   2 4交换后 A,E,Q,Y,S,U,E,S,T,I,O,N   -> 2 6 交换  A,E,E,Y,S,U,Q,S,T,I,O,N
第4次:  A,E,E,I,Y,U,S,S,T,Q,O,N  第4次:       I,Y,U,S,S,T,Q,O,N  找出I
第5次:  A,E,E,I,N,Y,U,S,T,S,Q,O  第5次:         N,Y,U,S,T,S,Q,O  找出N
第6次:  A,E,E,I,N,O,Y,U,T,S,S,Q  第6次:           O,Y,U,T,S,S,Q  找出O  
第7次:  A,E,E,I,N,O,Q,Y,U,T,S,S  第7次:             Q,Y,U,T,S,S  找出Q
第8次:  A,E,E,I,N,O,Q,S,Y,U,T,S  第8次:               S,Y,U,T,S  找出S
第9次:  A,E,E,I,N,O,Q,S,S,Y,U,T  第9次:                 S,Y,U,T  找出S
第10次: A,E,E,I,N,O,Q,S,S,T,Y,U  第10次:                  T,Y,U  找出T
第11次: A,E,E,I,N,O,Q,S,S,T,U,Y  第11次:                    U,Y  找出U
第12次: A,E,E,I,N,O,Q,S,S,T,U,Y  第12次:                      Y  找出Y

内循环交换第1次,交换元素是: 0 2
第1次: A,S,E,Y,Q,U,E,S,T,I,O,N
内循环交换第1次,交换元素是: 1 2
第2次: A,E,S,Y,Q,U,E,S,T,I,O,N
内循环交换第1次,交换元素是: 2 4
内循环交换第2次,交换元素是: 2 6
第3次: A,E,E,Y,S,U,Q,S,T,I,O,N
内循环交换第1次,交换元素是: 3 4
内循环交换第2次,交换元素是: 3 6
内循环交换第3次,交换元素是: 3 9
第4次: A,E,E,I,Y,U,S,S,T,Q,O,N
内循环交换第1次,交换元素是: 4 5
内循环交换第2次,交换元素是: 4 6
内循环交换第3次,交换元素是: 4 9
内循环交换第4次,交换元素是: 4 10
内循环交换第5次,交换元素是: 4 11
第5次: A,E,E,I,N,Y,U,S,T,S,Q,O
内循环交换第1次,交换元素是: 5 6
内循环交换第2次,交换元素是: 5 7
内循环交换第3次,交换元素是: 5 10
内循环交换第4次,交换元素是: 5 11
第6次: A,E,E,I,N,O,Y,U,T,S,S,Q
内循环交换第1次,交换元素是: 6 7
内循环交换第2次,交换元素是: 6 8
内循环交换第3次,交换元素是: 6 9
内循环交换第4次,交换元素是: 6 11
第7次: A,E,E,I,N,O,Q,Y,U,T,S,S
内循环交换第1次,交换元素是: 7 8
内循环交换第2次,交换元素是: 7 9
内循环交换第3次,交换元素是: 7 10
第8次: A,E,E,I,N,O,Q,S,Y,U,T,S
内循环交换第1次,交换元素是: 8 9
内循环交换第2次,交换元素是: 8 10
内循环交换第3次,交换元素是: 8 11
第9次: A,E,E,I,N,O,Q,S,S,Y,U,T
内循环交换第1次,交换元素是: 9 10
内循环交换第2次,交换元素是: 9 11
第10次: A,E,E,I,N,O,Q,S,S,T,Y,U
内循环交换第1次,交换元素是: 10 11
第11次: A,E,E,I,N,O,Q,S,S,T,U,Y
第12次: A,E,E,I,N,O,Q,S,S,T,U,Y
 */

// console.log("AEEINOQSSTUY".split("").reverse().join(""))





/*
https://www.cnblogs.com/ECJTUACM-873284962/p/6935506.html
   假设有数组:
   [ 5, 2, 9, 7, 18, 17, 52 ]
   有口袋:
   1,先按个位进行分配: 
   2,分配好后再按十位进行分配
            个位     |     十位
   B0                |     02  05  07  09
   B1                |     17  18
   B2      2   52    |
   B3                |
   B4                |
   B5      5         |     52
   B6                |
   B7      7   17    |
   B8      18        |
   B9      9         |
   3,分配好后也就排好序了.
 */

function radixSort(a) {
    var maxVal = 0, bucket=[], digitPosition = 1;
    // 求出数组a中的最大值
    for(let i = 0; i < a.length; i++){
        if(a[i] > maxVal) maxVal = a[i];
    }
    
    
    // Math.floor(maxVal / digitPosition) 用最大值计算后得到几次就循环几次
    while (Math.floor(maxVal / digitPosition) > 0){
        let digitCount = initArray(10,0); // 这个数组放置基数位的数字,数字十进制只有10个数字 0..9
        for(let i = 0; i < a.length; i++){
            // process.stdout.write(Math.floor(a[i]/digitPosition) %10 +"  ")
            /*
            这里的for循环得到的数组如下:
            0  5  5  0  2  4  2  6  
            7  4  7  9  0  2  0  6  
            1  0  0  0  0  0  8  0 
             */
            // 求出数组a中元素的个,十,百...位,
            // 就个位和第1个数组看,0有2个,digitCount[0]=2,1有0个,digitCount[1]=0...
            digitCount[Math.floor(a[i]/digitPosition) % 10]++
            // 计算基数位上的数字出现的次数.
        }
        /*
        1,基数位上的数字出现的次数: [ 2, 0, 2, 0, 1, 2, 1, 0, 0, 0 ]
        2,基数位上的数字出现的次数: [ 2, 0, 1, 0, 1, 0, 1, 2, 0, 1 ]
        3,基数位上的数字出现的次数: [ 6, 1, 0, 0, 0, 0, 0, 0, 1, 0 ]
         */
        // console.log("基数位上的数字出现的次数:",digitCount);
        // 计算次数
        for(let i = 1; i < 10; i++){
            digitCount[i] += digitCount[i-1];
            /*
            看上面的第1个数组(个位):
            1),不大于0的数字有2个,
            2),不大于1的数字有2+0=2个,
            3),不大于2的数字有2+0+2=4个,
            4),不大于3的数字有2+0+2+0=4个,
            5),不大于4的数字有2+0+2+0+1=5个
              0  1  2  3  4  5  6  7  8  9
            [ 2, 2, 4, 4, 5, 7, 8, 8, 8, 8 ]
            [ 2, 2, 3, 3, 4, 4, 5, 7, 7, 8 ]
            [ 6, 7, 7, 7, 7, 7, 7, 7, 8, 8 ]
             */
        }
        
        for(let i = a.length-1; i >= 0; i--){
            let digit= Math.floor(a[i] / digitPosition % 10); // 基数位
            // process.stdout.write(digit+", "); // 6, 2, 4, 2, 0, 5, 5, 0
            // digit = 6
            // digitCount[6]=8, 表示不大于6的数字出现了8次
            // digit = 2,digitCount[2]=4,不大于2的数字出现了4次
            // process.stdout.write(--digitCount[digit]+"   ");
            --digitCount[digit]; //不大于i的数字用掉一次就减1
            // bucket[--digitCount[digit]] = a[i]
            bucket[digitCount[digit]] = a[i];
            // digitCount[digit]这个不大于个位digital的数字出现的次数作为下标,
            // digit是个位上的数字,digitCount[digit]是不大于i的个数
            // process.stdout.write("'"+a[i]+" '  ");
            
            // 不大于i 越大,元素值越大,对应下标也越大,
            // 桶和数组a的大小是一致的,桶的下标与出现的次数一样(-1),也就是
            // 进行排序了
            console.log(`不大于${digit}个位数字出现了${digitCount[digit]+1}次, b桶bucket[${digitCount[digit]}]=a[${i}]=${a[i]}`)
        }
        console.log("桶中的数字:",bucket);
        
        for(let i = 0; i < a.length; i++){
            a[i] = bucket[i]
        }
        digitPosition *= 10;
    }
    
    console.log(a)
}
// var a = [ 5, 2, 9, 7, 18, 17, 52 ];
// var a = [70, 45, 75, 90, 2, 24, 2, 66];
var a = [3,2,3,2,4]
radixSort(a);


















function _initArray(n,element,a=[]) {
    if(n==0) return a;
    return _initArray(n-1,element,a.concat(element));
}
function initArray(n,element) {
    return _initArray(n,element);
}


function initMatrix(row, col,element=0) {
    var matrix = new Array(row);
    for(let i = 0; i < row; i++){ // 遍历每一行
        matrix[i] = new Array(col); // 为每一行添加一个数组
    }
    // 初始化二维数组
    for(let i = 0; i < row; i++){ //遍历所有行
        for(let j = 0; j < col; j++){ // 遍历所有列
            matrix[i][j] = element // 第i行的第j列
        }
    }
    return matrix;
}







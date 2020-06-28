/**
 * Created by franck.lynn on 2018/4/26 8:06.
 */
var words = ["COW", "DOG", "SEA", "BUG", 
    "ROW", "MOD", "BOX", "TAB", "BAR", 
    "TAR", "EAR", "DIG", "BIG", "TEA", 
    "NOW", "FOX"];

// var words = ["AD", "DE","BC", "AB","BB","AC"];
var letters = ["A","B","C","D","E","F","G",
    "H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"]; // 26个英文序列
// var letters = ["A","B","C","D","E"]; // 部分英文序列;


function radixSort(a) {
    var maxLength = 0; // 字符串的最大长度
    
    for(let i = 0; i < a.length; i++){
        if(a[i].length > maxLength) maxLength = a[i].length;
    }
    
    while(maxLength > 0){
        // 设置一个临时辅助数组,下标是26个英文字母,并且初始值设置为0
        let c = [];
        var charPosition = maxLength -1; // 设置a数组中字符串是第几位
        var chars = [];
        var bucket=[];
        // 初始化数组,数组的每项都是为0,数组的下标是26个字母
        for(let i = 0; i < letters.length; i++){
            c[letters[i]] = 0;
            // process.stdout.write(c[letters[i]]+"  ") // 打印初始化后的数组
        }
        // console.log() // 打印换行
        // 统计a数组中各字符串出现的次数
        for(let i = 0; i < a.length; i++){
            chars = a[i].split(""); // 将数组a中的每个元素字符串分离成字符数组
            c[chars[charPosition]]++;
            // process.stdout.write(`${chars[charPosition]}字母出现${c[chars[charPosition]]}次  `)
        }
        // console.log() // 打印换行
        // 统计不大于某字符的数量
        for(let i = 1;i < letters.length; i++){
            c[letters[i]] = c[letters[i]] + c[letters[i-1]]
            // process.stdout.write(`不大于字母${letters[i]}的次数是${c[letters[i]]}  `)
        }
        // console.log()
        
        // console.log("****************") // 打印换行
        for(let i = a.length-1; i>=0; i--){
            var chars = a[i].split("");
            let digit = chars[charPosition]; // 基数位
            // process.stdout.write(c[digit] + "  ")
            // 桶的下标是26个英文字母中有的字母,不小于某字母越大,字母顺序越往后
            // 用了一次后字母的次数就要减1
            // 以最大次数减1的字母作为下标
            -- c[digit];
            // process.stdout.write(c[letters[i]] +"   ")
            // 假设最后一个元素出现了2次,说明是第2小,
            // 就把这个值赋值给第2个桶中.
            bucket[c[digit]] = a[i];
            
            
        }
        // 需要再倒回a数组,这样顺序就对了
        for(let i = 0; i < a.length; i++){
            a[i] = bucket[i];
        }
        // console.log("第",charPosition,"次:",bucket);
        // console.log()
        maxLength --;
    }
    console.log("最终输出:",bucket.toString());
}
radixSort(words);








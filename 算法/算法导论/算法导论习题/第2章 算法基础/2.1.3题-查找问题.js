
function findV(a,v) {
    for(var i=0;i<a.length;i++){
        if(a[i]===v){
            // return i;  
            console.log(a[i])
            return;
        }
    }
    // return "NIL"
    console.log("NIL")
}

//        0   1   2   3   4   5  6    7  
var a = ["a","b","c","d","f","g","h","i"];

// console.log(findV(a,"c"))
findV(a,"a")

// 递归版本
function findVRecurse(a,v,hi) {
    if(0<=hi){
        if(a[hi]==v) return hi;
        else return findVRecurse(a,v,hi-1)
    }
    return "NIL"
}

console.log(findVRecurse(a,"a",a.length-1))










function findN() {
    // insert and merge
    var a = [];
    for(var n=0;n<50;n++){
        if((8*n*n) < (64*n*Math.log2(n))){
            a.push(n)
        }
    }
    console.log(a[a.length-1])
}
findN()
















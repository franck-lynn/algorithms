
function divideArray(a,p,r) {
    var x = a[r];
    var i = p - 1;
    //p 右边的数组
    for(var j = p; j < r-1; j++){
        // a[i]是右边的数组,如果小于 x,就要放到左边去
        if(a[j]<=x){
            i++;
            // 交换
            a[i]=a[j]
        }
        
    }
}



















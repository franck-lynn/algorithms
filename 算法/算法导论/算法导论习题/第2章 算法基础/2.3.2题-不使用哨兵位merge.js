function _merge(a,lo,mid,hi) {
    var lRange = mid-lo+1,
        rRange = hi-mid,
        l=[],
        r=[];
    for(var i=0;i<lRange;i++){
        l[i]=a[lo+i];
    }
    for(var j=0;j<rRange;j++){
        r[j]=a[mid+1+j];
    }
    console.log(l,r)
    var i=0,j=0;
    for(var k=lo;k<=hi;k++){
        if(i>mid)           a[k]=r[j++];
        else if(j>hi)       a[k]=l[i++];
        else if(l[i]<=r[j]) a[k]=l[i++];
        else                a[k]=r[j++]
    }
    return a
}

var a  = [2,4,5,1,2,3,6,7];
// 分解数组时必须要分段有序
console.log(_merge(a,0,2,a.length-1))

















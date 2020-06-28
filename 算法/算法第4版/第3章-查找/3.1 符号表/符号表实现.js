/**
 * Created by franck.lynn on 2018/5/20 17:04.
 */

function SymbolTable() {
    this.table = [];
}

function put(t,k,v) {
    // t.table[k] = v;
    t.table.push({k,v})
}
function get(t,k) {
    // return t.table[k];
    for(let i = 0; i<t.table.length;i++){
        if(t.table[i].k== k)
            return t.table[i].k
    }
    return -1
}

function deleteElement(t,k) {
    // delete t.table[k];
    for(let i = 0; i<t.table.length;i++){
        if(t.table[i].k==k) t.table.splice(i,1)
    }
}

var st = new SymbolTable();
put(st,"l",11)
put(st,"p",10)
put(st,"m",9)
put(st,"x",7)
put(st,"h",5)
// put(st,"c",4)
// put(st,"r",3)
// put(st,"a",8)
// put(st,"e",12)
// put(st,"s",0)
console.log(st.table);
// 不是数组的下标不能维护数组的长度
console.log("数组长度:",st.table.length)
console.log("获取:",get(st,"m"))
deleteElement(st,"m");
console.log(st.table)


/*
// 采用一个集合保存符号表的数据
function STMap(k,v) {
    this.k = k;
    this.v = v;
}
// 符号表
function SymbolTable() {
    // 用一个空数组保存这个符号表的集合
    this.stMapArr = [];
    this.put = function (stMap) {
        this.stMapArr.push(stMap);
    }
}

var l = new STMap("l",11);
var p = new STMap("p",10);
var m = new STMap("m",9);
var x = new STMap("x",7);
var h = new STMap("h",5);
var c = new STMap("c",4);
var r = new STMap("r",3);
var a = new STMap("a",8);
var e = new STMap("e",12);
var s = new STMap("s",0);
var symbolTable = new SymbolTable();
symbolTable.put(l);
symbolTable.put(p);
symbolTable.put(m);
symbolTable.put(x);
symbolTable.put(h);
symbolTable.put(c);
symbolTable.put(r);
symbolTable.put(a);
symbolTable.put(e);
symbolTable.put(s);
console.log(symbolTable)
*/







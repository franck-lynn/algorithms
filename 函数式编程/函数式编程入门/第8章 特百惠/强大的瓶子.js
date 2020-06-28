class Container {
    constructor(x) {
        this.$value = x;
    }
    // of()方法创建对象的实例
    // 把数据装进这个瓶子,经过of()调用,
    // 瓶子里的$value就有值了
    static of(x){
        return new Container(x)
    }
    // 为了别的函数能操作这个瓶子里的值,定义函子
    map(f){
        // 现在别的函数f也可以操作瓶子里的$value,
        // 操作完成后,返回的数据还是放在瓶子里,但是
        // 瓶子里的值就变成了新值
        return Container.of(f(this.$value));
    }
}

// 检验这个瓶子
console.log("瓶子可以装数字:", Container.of(3))
console.log("瓶子可以装字符串:", Container.of("hotdogs"))
console.log(
    "瓶子里面套了个瓶子:", 
    // 瓶子里面套了个瓶子
    Container.of(
        Container.of({name: "yoda"})
))

console.log(
    // 改变函数调用顺序则不行
    "处理瓶子里包装的值1:", 
    Container.of(2).map(x => x + 2)
)

console.log(
    // 改变函数调用顺序则不行
    "map连续调用:",
    Container.of(2).map(x => x + 2).map(x => x * x)
)

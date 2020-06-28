/**
 * Created by franck.lynn on 2018/3/28 22:15.
 */

class StdDraw {
    // 静态初始化方法设置画布
    static init(canvasName){
        var canvas =document.getElementById(canvasName);
        var ctx = canvas.getContext('2d');
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;

        var rem = width/2
    }
    // 设置画圆
    /*drawArc(){
        ctx.arc();
    }*/
    /*
    drawArc(x, y, radius, angle1, angle2) {
        this.init();
        ctx.arc(this.getX(),this.getY(),r,2*Math.PI,false);
        draw();
    }
    */
}

class Point2D {
    constructor(x,y){
        if(!isFinite(x) || !isFinite(y))
            throw new TypeError("坐标系是有限的");
        if (isNaN(x) || isNaN(y))
            throw new TypeError("坐标系不能是非数字")
        this.x = x;
        this.y = y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    // 极坐标的半径
    getR(){
        return Math.sqrt(x*x+y*y);
    }
    // 返回的是弧度,范围在[-π,π]之间
    theta(){
        return Math.atan2(y,x)
    }
    // 返回两点的角度,that参数是点的数据
    angleTo(that){
        var dx = that.x -this.x;
        var dy = that.y -this.y;
        
        return Math.atan2(dy,dx);
    }
    // 判断是不是逆时针方向,3个点分别是Point2D a,b,c
    ccw(a,b,c){
        var area2 = (b.x-a.x)*(c.y-a.y) - (b.y-a.y)*(c.x-a.x);
        if      (area2 < 0) return -1;
        else if (area2 > 0) return +1;
        else                return  0;
    }
    
    // 返回三角形的面积:
    area2(a,b,c){
        return (b.x-a.x)*(c.y-a.y) - (b.y-a.y)*(c.x-a.x);
    }
    // 两点间的距离
    distanceTo(that){
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
    /**
     * Returns the square of the Euclidean distance between this point and that point.
     * @param that the other point
     * @return the square of the Euclidean distance between this point and that point
     */
    distanceSquaredTo(that) {
        var dx = this.x - that.x;
        var dy = this.y - that.y;
        return dx * dx + dy * dy;
    }
    /**
     * Compares two points by y-coordinate, breaking ties by x-coordinate.
     * Formally, the invoking point (x0, y0) is less than the argument point (x1, y1)
     * if and only if either {@code y0 < y1} or if {@code y0 == y1} and {@code x0 < x1}.
     *
     * @param  that the other point
     * @return the value {@code 0} if this string is equal to the argument
     *         string (precisely when {@code equals()} returns {@code true});
     *         a negative integer if this point is less than the argument
     *         point; and a positive integer if this point is greater than the
     *         argument point
     */
    compareTo( that) {
        if (this.y < that.y) return -1;
        if (this.y > that.y) return +1;
        if (this.x < that.x) return -1;
        if (this.x > that.x) return +1;
        return 0;
    }
    
    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(this.getX(),this.getY(),r,2*Math.PI,false);
        ctx.fill();
        
    }
}










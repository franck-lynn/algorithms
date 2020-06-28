/**
 * Created by franck.lynn on 2018/4/27 12:00.
 */

var pi = 3.1415926535898;
var d;
for (let i = 0; i < 14; i++) {
    d = parseInt(pi * Math.pow(10, i) % 10)
    process.stdout.write(d+",")
}











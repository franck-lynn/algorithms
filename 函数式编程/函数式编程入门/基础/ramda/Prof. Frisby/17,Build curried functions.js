/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 */

const modulo = dvr => dvd => dvd % dvr
const isOdd = modulo(2)
console.log(isOdd(2))

const filter = pred => xs => xs.filter(pred)
const getAllOdds = filter(isOdd)

console.log(
    getAllOdds([1, 2, 3, 4])
)















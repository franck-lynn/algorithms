/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-principled-type-conversions-with-natural-transformations
 */

const Right = x =>
    ({
        chain: f => f(x),
        ap: other => other.map(x),
        traverse: ( of , f) => f(x).map(Right),
        map: f => Right(f(x)),
        fold: (f, g) => g(x),
        concat: o =>
            o.fold(_ => Right(x),
                y => Right(x.concat(y))),
        inspect: () => `Right(${x})`
    })

const Left = x =>
    ({
        chain: f => Left(x),
        ap: other => Left(x),
        traverse: ( of , f) => of (Left(x)),
        map: f => Left(x),
        fold: (f, g) => f(x),
        concat: o =>
            o.fold(_ => Left(x),
                y => o),
        inspect: () => `Left(${x})`
    })

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

const Box = x => ({
    x,
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x})`
})

import { task, of } from 'folktale/concurrency/task'
import { rejected } from 'folktale/concurrency/future'

const boxToEither = b => b.fold(Right)
const res = boxToEither(Box(100))
console.log(res.inspect())

const eitherToTask = e => e.fold(rejected, of )

eitherToTask(Right('nightingale')).run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: v => console.log(v)
})
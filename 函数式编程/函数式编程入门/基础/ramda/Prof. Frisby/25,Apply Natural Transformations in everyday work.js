/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-applying-natural-transformations-in-everyday-work
 */

const Right = x =>
    ({
        chain: f => f(x),
        ap: other => other.map(x),
        traverse: (of, f) => f(x).map(Right),
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
        traverse: (of, f) => of(Left(x)),
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
    } catch(e) {
        return Left(e)
    }
}

const Box = x => ({
    x,
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: _ => `Box(${x})`
})

import {task, of} from 'folktale/concurrency/task'
import {rejected} from 'folktale/concurrency/future'
import {List} from 'immutable-ext'

const res = List(['hello', 'world'])
    .chain(x => List(x.split('')))

// console.log(res)

const first = xs => fromNullable(xs[0])

const largeNumbers = xs => xs.filter(x => x > 100)

const larger = x => x * 2

const app = xs => first(largeNumbers(xs).map(larger))

// console.log(app([2, 400, 5, 1000]).inspect())



const fake = id => ({id: id, name: 'user1', best_friend_id: id + 1})

const Db = ({
    find: id => task(resolver => resolver.resolve(id > 2 ? Right(fake(id)): Left('Not found')))
})

const eitherToTask = e => e.fold(rejected, of)

Db.find(4)
    .chain(eitherToTask)
    .chain(user => Db.find(user.best_friend_id))
    .chain(eitherToTask)
    .run().listen({
            onCancelled: () => '任务取消',
            onRejected: reason => 'task was rejected',
            onResolved: v => console.log(v)
        })

/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
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

module.exports = { Right, Left, fromNullable, tryCatch, of: Right }



















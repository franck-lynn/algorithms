/**
 * Created by franck.lynn on 2018/12/3.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-applying-applicatives-exhibit-a
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



const Either = x => ({
    
})

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy)

const $ = selector => Either.of({selector, height: 10})

// const getScreenSize = (screen, head, foot) => 
//     screen - (head.height + foot.height)

const getScreenSize = screen => head => foot => screen - (head.height + foot.height)

// const res = Either.of(
//     getScreenSize(800)
//         .ap($('header'))
//         .ap($('footer'))
// )

const res = liftA2(getScreenSize(800), $('header'), $('footer'))

console.log(res)

// $('header').chain(head => $('footer').map(footer => getScreenSize(800, head, footer)))













/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-real-world-example-pt1
 */

// "https://api.spotify.com/v1/search?q=${query}&type=artist" // artists: {items: []}
// "https://api.spotify.com/v1/search/artists/${id}/related-artists" // artists: []

import {task, of} from 'folktale/concurrency/task'
const {findArtist, relatedArtist} = require('./28,Retrieve and use data from an api with pure functional constructs')


const argv = task(resolver => resolver.resolve(process.argv))
// argv.run().listen({
//     onResolved: v => console.log(v)
// })

// 从argv中从2位置返回一个子数组
const names = argv.map(args => args.slice(2))
// names.run().listen({
//     onResolved: v => console.log(v)
// })

const related = name =>
    findArtist(name)
        .map(artist => artist.id)
        .chain(relatedArtist)

const main = ([name1, name2]) =>
        of(rels1 => rels2 => ([rels1, rels2])
            .ap(related(name1))
            .ap(related(name2)))
    
;names.ap(main).run().listen({
    onCancelled: () => '任务取消',
    onRejected: reason => 'task was rejected',
    onResolved: v => console.log("ssdcds", v())
})










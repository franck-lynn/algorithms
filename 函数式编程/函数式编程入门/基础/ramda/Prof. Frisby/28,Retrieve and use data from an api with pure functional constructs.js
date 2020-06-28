/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-real-world-example-pt2
 */

import request from 'request'
import {task, of} from 'folktale/concurrency/task'
import Either from './Either'
import {rejected} from 'folktale/concurrency/future'

const httpGet = url => 
    task(resolver => request(
        url, (err, response, body) => 
            err ? resolver.rejected(err) : resolver.resolve(body))
    )

const first = xs => Either.fromNullable(Either[0]);

const eitherToTask = e => e.fold(rejected, of)

const findArtist = name => 
    httpGet(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
        .map(
            result => {
                console.log(result)
                return result.artists.items
            }
        )
        .map(first)
        .chain(eitherToTask)

const relatedArtist = id =>
    httpGet(`https://api.spotify.com/v1/search/artists/${id}/related-artists`)
        .map(result => result.artists)

module.exports = {findArtist, relatedArtist}










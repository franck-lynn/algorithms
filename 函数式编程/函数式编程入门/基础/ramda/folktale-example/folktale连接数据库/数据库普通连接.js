/**
 * Created by franck.lynn on 2018/11/27.
 * franck_lynn@live.cn
 */
'use strict';
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const dbName = 'test'
const options = { useNewUrlParser: true };

(async _ => {
    let client;
    try {
        client = await mongoClient.connect(url, {useNewUrlParser: true});
        // console.log(client)
        const db = client.db(dbName)
        // console.log(db)
        const col = db.collection('users')
        const r = await col.find()
        console.log(await r.toArray())
    } catch (e) {
        console.log(e)
    }finally {
        client.close()
    }
    /*
    MongoClient {
        domain: null,
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        ......
     }
     */
})()

















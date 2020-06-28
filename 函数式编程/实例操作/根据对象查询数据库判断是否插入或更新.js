/**
 * Created by franck.lynn on 2018/11/14.
 * franck_lynn@live.cn
 */
'use strict';

import R from 'ramda'
import mongo from 'mongodb'

const mongoClient = mongo.MongoClient;


/*
用查询的数组对象在数据库中查找,如果找到就不插入,如果没找到就插入
1, 先用arrObj查询数据库, 用判断对象相等的办法
2, 数据库里有没有这个对象,
       |--没有,就保存,
       |--有
          |--是否相等
              |---不相等--更新
              |---相等--不管
*/

var arrObj = [
    {p_type: 'p', v0: 'peter', v1: 'data1', v2: 'write'},
    {p_type: 'p', v0: 'franck', v1: 'data1', v2: 'read'}
]

// 获取对象的 v0 属性
/*
var getProp = R.pipe(
    R.map(R.prop('v0'))
)
*/

var getTheProp = theProp => R.pipe(
    // 处理数组对象,获取单个对象的 theProp 指定的属性
    R.map(R.prop(theProp)),
    // 对该属性进行数据库查询
    
)

console.log(getTheProp('v0')(arrObj));

(async () => {
    let client;
    try {
        client = await mongoClient
            .connect("mongodb://localhost:27017",
            {useNewUrlParser: true})
        const db = client.db('test');
        const col = db.collection('casbin');
        const r = await col.findOne({v0: 'franck'})
        console.log(r)
    } catch (e) {
        console.log(e.stack)
    } finally {
        client.close()
    }
})()











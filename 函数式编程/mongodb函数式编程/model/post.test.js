/**
 * Created by franck.lynn on 2018/11/14.
 * franck_lynn@live.cn
 */
'use strict';
const Post = require('./post')

var p = Post.findOne({soID: '503093'})

p.then(function (data) {
    console.log(data)
})
















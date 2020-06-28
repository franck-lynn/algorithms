/**
 * Created by franck.lynn on 2018/11/14.
 * franck_lynn@live.cn
 * https://github.com/pxr13/mongoDB-functional-programming
 */
'use strict';

import express from 'express'
import bodyParser from 'body-parser'
import R from 'ramda'

import findSoID from '../utils/find'


const server = express()

server.use(bodyParser.json())

// get请求
server.get('/accepted-answer/:soID', async (req, res, next) => {
// server.get('/accepted-answer/:soID', async ({ params }, res) => {
    // console.log(req.params) // { soID: '503093' }
    const params = req.params;
    
    const a = await findSoID(params.soID);
    
    console.log("查询到的数据:", a)
    
    // const [idErr, originalPost] = await findSoID(params.soID)
    // console.log(idErr, originalPost)
})

export {server}

















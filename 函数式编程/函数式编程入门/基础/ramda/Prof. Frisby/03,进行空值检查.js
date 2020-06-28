/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */
'use strict';
import {Maybe} from './Maybe'

const obj = {
    red: '#ff4444', 
    blue: '#3b5998', 
    yellow: '#fff68f'
}

console.log(
    Maybe(obj['green']).inspect()
)

console.log(
    Maybe(obj['blue']).inspect()
)
















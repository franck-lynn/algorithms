/**
 * Created by franck.lynn on 2018/12/4.
 * franck_lynn@live.cn
 */

'use strict';

import {Either} from "./Either2";

const TryCatch = f => {
    try{
        return Either(f())
    }catch(e){
        // catch时要把null传给Either
        return Either(null)
    }
}

export {TryCatch}
















/**
 * Created by franck.lynn on 2018/11/28.
 * franck_lynn@live.cn
 * https://egghead.io/lessons/javascript-a-collection-of-either-examples-compared-to-imperative-code
 */
'use strict';
// Either集合与命令式比较示例
const openSite = () => {
    if(current_user){
        return renderPage(current_user)
    }else{
        return showLogin()
    }
}

const openSite = () => 
    fromNullable(current_user)
        .fold(showLogin, renderPage)


const getPrefs = user => {
    if(user.premium){
        loadPrefs(user.preferences)
    }else{
        return defaultPrefs
    }
}

const getPrefs = user => 
    (user.premium ? Right(user) : Left('Not premium'))
        .map(u => u.preferences)
        .fold(_ => defaultPrefs, prefs => loadPrefs(prefs))


const streetName = user => {
    const address = user.address
    
    if(address){
        const street = address.street
        if(street){
            return street.name
        }
    }else{
        return "no street"
    }
}

const streetName = user => 
    fromNullable(user.address)
        .chain(a => fromNullable(a.street))
        .map(s => s.name)
        .fold(e => 'No street', n => n)


const concatUniq =(x, ys) => {
    const found = ys.filter(y => y === x)[0]
    return found ? ys : ys.concat(x)
}

const concatUniq = (x, ys) => {
    const found = fromNullable(ys.filter(y => y === x)[0])
        .fold(_ => ys.concat(x), y => ys)
}

const wrapExample = example => {
    if(example.previewPath){
        try{
            example.preview = fs.readFileSync(example.previewPath)
        }catch(e){
            return example
        }
    }
}

const readFile = x => tryCatch(_ => fs._readFile(x))

const wrapExample = example => 
    fromNullable(example.previewPath)
        .chain(readFile)
        .fold(_ => example, ex => Object.assign({preview: p}, ex))


const parseDbUrl = cfg => {
    try{
        const c = JSON.parse(cfg)
        if(c.url){
            return c.url.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
        }
    }catch(e){
        return null
    }
}

const parseDbUrl = cfg => 
    tryCatch(_ => JSON.parse(cfg))
        .chain(c => fromNullable(c.url))
        .fold(e => null, u => u.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/))

























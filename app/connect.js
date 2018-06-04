// 数据引入
var processPreview = require('./mock/process__preview.js')
var pop = require('./mock/pop.js')
var clisData = require('./mock/else.js')


var allData = Object.assign(processPreview,pop,clisData)
// 映射
var typeObj = {// 数据和key值对应
    whh:processPreview,
    pops:pop,
    all:allData
}

module.exports = function(type){// 发送返回数据
    var data = typeObj[type]
    if(data){
        console.log(`mock: ${type}数据`)
    }
    return data
}

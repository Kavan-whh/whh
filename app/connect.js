// 数据引入
var processPreview = require('./mock/process__preview.js')
var pop = require('./mock/pop.js')


// 映射
var typeObj = {// 数据和key值对应
    whh:processPreview,
    pops:pop
}

module.exports = function(type){// 发送返回数据
    var data = typeObj[type]
    return data
}

// 数据引入
var processPreview = require('./mock/process__preview.js')


// 映射
var typeObj = {// 数据和key值对应
    whh:processPreview
}

module.exports = function(type){// 发送返回数据
    var data = {data:typeObj[type]};
    return data
}

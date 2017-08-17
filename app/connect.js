// 数据引入
var processPreview = require('')


// 映射
var typeObj = {// 数据和key值对应
    process__preview:process__preview
}

module.exports = function(type){
    return{
        typeObj[type]
    }
}

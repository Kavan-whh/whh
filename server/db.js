var path = require('path')
// var connect = require('')

// exports default
module.exports=function(){
    var data;
    var i = process.argv.length
    console.log(process.argv)
    var type = process.argv[i-1]
    if(type == 3003){
         data= {// 默认数据
             else:{
                 "id":3,
                 "else":'fsdf'
             }
         }
    }else {
         data = connect(type)
    }

    return data
}

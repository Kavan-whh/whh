var path = require('path')
var connect = require('../app/connect.js')

// exports default
module.exports=function(){
    var data;
    var i = process.argv.length
    var type = process.argv[i-1]

    if(type == 3003){
         data= {// 默认数据
             else:{
                 "id":3,
                 "else":'fsdf'
             }
         }
    }else {
        console.log('执行connect');
         data = connect(type)
    }

    return data
}

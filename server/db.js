var path = require('path')
var connect = require('../app/connect.js')

// exports default
module.exports=function(){
    var data;
    var i = process.argv.length
    var type = process.argv[i-1]

    if(type == 3000){
         data = connect('whh')
    }else {
         data = connect(type)
    }

    return data
}

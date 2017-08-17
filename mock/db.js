// exports default
module.exports=function(){
    var i = process.argv.length
    var type = process.argv[i-1]
    var data;
    if(type === 'whh'){
        data= {
            whh:{
                "id": 3,
                "whh": "whh"
            }
        }
    }else {
        data= {
            else:{
                "id":3,
                "else":'fsdf'
            }
        }
    }
    return data
}

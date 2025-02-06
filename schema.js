const mongoose = require('mongoose')

const model = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    }

})


module.exports=mongoose.model("model",model)
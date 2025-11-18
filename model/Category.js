const mongoose=require('mongoose')
const categoryschema=new mongoose.Schema({
    name:{type:String,required:true},
    Image:{
        data:{type:String},// base64
        contentType:{type:String}
    }
})

module.exports=mongoose.model('Kissancategory',categoryschema)
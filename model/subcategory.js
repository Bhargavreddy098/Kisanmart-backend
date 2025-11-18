const mongoose=require('mongoose')
const Category = require('./Category')
const subcategoryschema=new mongoose.Schema({
    name:{type:String,required:true},
    Image:{
        data:{type:String},
        contentType:{type:String},
},
Category:{type:mongoose.Schema.Types.ObjectId, ref:'Kissancategory',required:true}
},{timestamps:true})
module.exports=mongoose.model('Kissansubcategory',subcategoryschema)
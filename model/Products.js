const mongoose=require('mongoose')
const subcategory = require('./subcategory')
const Category = require('./Category')
const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    CategoryName:{type:mongoose.Schema.Types.ObjectId,ref:"Kissancategory",required:true},
    rating:{type:Number,required:true},
    discount:{type:Number, default:0},
    size:{
        unit:{type:String,enum:["kg","g"],required:true},
        value:{type:Number,required:true}
    },
    quantity:{type:Number, default:1},
    Price:{type:Number,required:true},
    Image:{
        data:{type:String},
        contentType:{type:String}
    },
    subcategory:{type:mongoose.Schema.Types.ObjectId, ref:'Kissansubcategory',required:true}
},{timestamps:true})
module.exports=mongoose.model('KissanProduct',ProductSchema)     
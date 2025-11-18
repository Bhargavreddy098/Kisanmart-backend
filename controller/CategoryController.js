const Category = require('../model/Category')
// const category=require('../model/Category'/)

exports.addcategory=async(req,res)=>{
  try {
    const{name,Image,contentType}=req.body
    const category=new Category({
        name,
        Image:{
            data:Image.data,
            contentType:Image.contentType || 'image/png'
        }
    })
    await category.save()
    res.status(201).json({message:'category careated successfully',category})
  } catch (error) {
    res.status(500).json({message:'Error creating category',error:error.message})
  }
}

exports.getAllCategories=async(req,res)=>{
    try {  
        const categories=await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message:'Error fetching categories',error:error.message})
    }
}
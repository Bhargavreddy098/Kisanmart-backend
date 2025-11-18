const express=require('express')
const router=express.Router()
const {addSubCategory,getAllSubCategories}= require('../controller/SubCategoryController')
router.post('/addSubCategory/:categoryId',addSubCategory)
router.get('/getAllSubCategories',getAllSubCategories)

module.exports=router
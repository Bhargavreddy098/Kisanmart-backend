const express=require('express')
const router=express.Router()
const {addcategory,getAllCategories}=require('../controller/CategoryController')
router.post('/addcategory',addcategory)
router.get('/getAllCategories',getAllCategories)
module.exports=router
const express=require('express')
const router=express.Router()
const {addProduct,getAllProducts,getProductById}=require('../controller/ProductController')
const upload = require('../middleware/multer')

router.post('/addProduct/:subcategoryId', upload.single('image'), addProduct)
router.get('/getAllProducts',getAllProducts)
router.get('/getProductById/:productId',getProductById)
module.exports=router
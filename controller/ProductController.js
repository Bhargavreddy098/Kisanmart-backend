const subcategory = require("../model/subcategory")
const Product= require('../model/Products');
const { cloudinary } = require("../cloudinary");
exports.addProduct = async (req, res) => {
  try {
    const { name, description, Price,CategoryName,rating,discount,size,quantity } = req.body;
    const {subcategoryId}=req.params

    // Check if subcategory exists
    const subcat = await subcategory.findById(subcategoryId);
    if (!subcat) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
    let imageurl='';
    let contentType='';

    //upload image if provided
    if(req.file){
      const uploadResult=await cloudinary.uploader.upload(req.file.path,{
        folder:'Images',
      })
      imageurl=uploadResult.secure_url;
      contentType=req.file.mimetype
    }

    // Create product
    const newProduct = new Product({
      name,
      description,
      Price,
      CategoryName,
      rating,
      discount,
      size,
      quantity,
      Image: {
        data: imageurl,
        contentType:contentType || 'image/png'
      },
      subcategory: subcategoryId
    });

    await newProduct.save();

    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct
    });

  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};


exports.getAllProducts=async(req,res)=>{
    try {
        const products=await Product.find().populate('subcategory')
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:'Error fetching products',error:error.message})
    }
}

exports.getProductById=async(req,res)=>{
  try {
    const {productId}=req.params
    
    const product=await Product.findById(productId)
      
    if (!product) {
      return res.status(404).json({message:"Product not found"})
    }
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message:"Error fetching product details",error:error.message})
  }
}
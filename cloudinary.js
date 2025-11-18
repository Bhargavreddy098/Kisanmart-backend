const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage}=require('multer-storage-cloudinary');
const multer=require('multer');

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})


//storage for multer

const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'',
        allowed_formats:[],
    }
})

// multer upload middleware

const upload=multer({storage})
module.exports={cloudinary,upload}
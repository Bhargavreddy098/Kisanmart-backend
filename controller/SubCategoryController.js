const Category = require('../model/Category')
const SubCategory = require('../model/subcategory')
exports.addSubCategory = async (req, res) => {
    try {
        const { name, Image } = req.body;
        const {categoryId}=req.params

        const cat = await Category.findById(categoryId);
        if (!cat) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const subcat = new SubCategory({
            name,
            Image: {
                data: Image.data,                     
                contentType: Image.contentType || 'image/png'
            },
            Category: categoryId
        });


        await subcat.save();

        res.status(201).json({message: 'Subcategory created successfully',subcategory: subcat});

    } catch (error) {
        res.status(500).json({message: 'Error creating subcategory',error: error.message});
    }
};

exports.getAllSubCategories = async (req, res) => {
    try {
        const subcategories = await SubCategory.find().populate('Category')
        res.status(200).json(subcategories)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subcategories', error: error.message })
    }
}
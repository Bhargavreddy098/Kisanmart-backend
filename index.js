const express=require('express')
const cors=require('cors')
const db=require('./db')
const dotenv = require('dotenv')

const categoryroutes=require('./routes/CategoryRoutes')
const subcategoryroutes=require('./routes/SubCategoryRoutes')
const ProductRoutes=require('./routes/ProductRoutes')
const app=express()

app.use(express.json())
app.use(cors())

dotenv.config()

db()
app.use('/',categoryroutes)
app.use('/',subcategoryroutes)
app.use('/',ProductRoutes)

const port=4000
app.listen(port,()=>{
    console.log(`server running successfully on port ${port}`)
})
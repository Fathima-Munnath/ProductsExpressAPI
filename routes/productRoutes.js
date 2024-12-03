const express = require('express')
const router = express.Router()
const products = require('../products')

// /products
router.get('/',(req,res)=>{
    try{
        res.status(200).json(products)

    } catch (error){
        res.status(404).json ({error:error.message})
    }

})
//get product by id
router.get('/:id',(req,res)=>{
    try{
        const productID = parseInt(req.params.id)
        const product = products.find(prod=>prod.id===productID)
        if(!product)
            res.status(404).json ({error:"Product not found"})
        res.status(200).json(product)
     

    } catch (error){
        res.status(404).json ({error:error.message})
    }

})







module.exports = router
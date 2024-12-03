const express = require ('express')
const path = require('path')
const app= express()
const productRouter = require('./routes/productRoutes')

app.use('/products',productRouter)


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get('/home',(req,res)=>{
    //console.log(__dirname)
    res.sendFile(path.join(__dirname,"/index.html"))
})


app.listen(3000,()=>{
    console.log ("Server started")
})
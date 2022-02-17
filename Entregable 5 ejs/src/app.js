const express=require('express');
const productsRouter=require('./routes/products.js')
const path=require('path');
const app= express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use('/',productsRouter);



app.set('views',path.resolve(__dirname,'./views'));

app.set("view engine", "ejs");


const PORT=8080;

const server=app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`);
})
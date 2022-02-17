const express=require('express');
const handlebars=require('express-handlebars');
const productsRouter=require('./routes/products.js')
const path=require('path');
const app= express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use('/',productsRouter);


app.engine('handlebars',handlebars.engine());
app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','handlebars');




app.listen(8080,(req,res)=>{
    console.log('Listening on 8080');
})
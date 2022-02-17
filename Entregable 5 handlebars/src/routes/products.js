const express=require('express');
const router = express.Router();
const productContainer=require('../container/productContainer');


const productService= new productContainer();

router.get('/products',(req,res)=>{
  ///desestructurar la wea destructuring hace que solo reciba las prpiedad es denu obj o un array y los saca a una variable
    productService.get().then(({products})=>res.render("products",{products}))
})

router.get("/", (req, res) => {
    res.render("form");
  });

router.post('/',(req,res)=>{
    let product = req.body;
     productService.add(product).then((result)=>console.log(result));
console.log(product);
     res.redirect("/");
    
})

module.exports=router;
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var cors=require('cors');
const path = require("path");
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
const publicPathDirectory = path.join(__dirname, "/public");
app.use("/public", express.static(publicPathDirectory));
app.listen(3008, () => {
    console.log("run port 3008")
})
//import Brand router
const BrandRouter=require('./Routers/BrandRouter')
app.use('/brand',BrandRouter);
//import Type router
const TypeRouter=require('./Routers/TypeRouter')
app.use('/type',TypeRouter);
//import Wood router
const WoodRouter=require('./Routers/WoodRouter')
app.use('/wood',WoodRouter);
//import Designs router
const DesignsRouter=require('./Routers/DesignsRouter')
app.use('/designs',DesignsRouter);
//import Product router
const ProductRouter=require('./Routers/ProductRouter')
app.use('/product',ProductRouter);
//import User router
const UserRouter=require('./Routers/UserRouter')
app.use('/user',UserRouter);
//import Account router
const AccountRouter=require('./Routers/AccountRouter')
app.use('/account',AccountRouter);
//import Cart router
const CartRouter=require('./Routers/CartRouter')
app.use('/cart',CartRouter);
//import Comment router
const CommentRouter=require('./Routers/CommentRouter')
app.use('/comment',CommentRouter);
//import Invoice router
const InvoiceRouter=require('./Routers/InvoiceRouter')
app.use('/invoice',InvoiceRouter);
//import InvoiceDetail router
const InvoiceDetailRouter=require('./Routers/InvoiceDetailRouter')
app.use('/invoiceDetail',InvoiceDetailRouter);

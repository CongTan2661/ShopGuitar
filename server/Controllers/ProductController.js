
const ProductModel=require('../Models/ProductModel');
//get all Product
exports.GetAllList= async(req, res)=> {
    ProductModel.Get().then(result =>{
        console.log(result);
        res.send(result);
    })
}
//get one Product
exports.GetOneRecord= (req, res)=>{
    const ID=req.params.id;
    ProductModel.GetById(ID).then(result =>{
        console.log(result);
        res.json(result[0]);
    })
}
// create new Product
exports.createNewRecord = (req, res) =>{
    let ProductReqData=req.body;
    console.log(ProductReqData);
    ProductModel.Create(ProductReqData).then(result => {
        console.log(result);
        res.send(result);
    })
}

//update Product
exports.updateRecord=(req, res)=>{
    let ProductReqData=req.body
    const ID=req.params.id;
    ProductModel.Update(ID, ProductReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Product
exports.deleteRecord=(req, res)=>{
    const ID=req.params.id;
    ProductModel.Delete(ID).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
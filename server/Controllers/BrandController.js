
const BrandModel=require('../Models/BrandModel');

//get all Brand
exports.GetAllList= (req, res)=> {
    BrandModel.Get().then(result =>{
        console.log(result);
        res.json(result[0]);
    })
}
//get one Brand
exports.GetOneRecord= (req, res)=>{
    const IDBrand=req.params.IDBrand;
    console.log(IDBrand);
    BrandModel.GetById(IDBrand).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Brand
exports.createNewRecord = (req, res) =>{
    let BrandReqData=req.body;
    console.log(BrandReqData);
    BrandModel.Create(BrandReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Brand
exports.updateRecord=(req, res)=>{
    let BrandReqData=req.body
    console.log(BrandReqData);
    BrandModel.Update(BrandReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Brand
exports.deleteRecord=(req, res)=>{
    const IDBrand=req.params.IDBrand;
    console.log(IDBrand);
    BrandModel.Delete(IDBrand).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
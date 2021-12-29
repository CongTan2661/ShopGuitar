
const TypeModel=require('../Models/TypeModel');

//get all Type
exports.GetAllList= (req, res)=> {
    TypeModel.Get().then(result =>{
        console.log(result);
        res.json(result[0]);
    })
}
//get one Type
exports.GetOneRecord= (req, res)=>{
    const IDType=req.params.IDType;
    console.log(IDType);
    TypeModel.GetById(IDType).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Type
exports.createNewRecord = (req, res) =>{
    let TypeReqData=req.body;
    console.log(TypeReqData);
    TypeModel.Create(TypeReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Type
exports.updateRecord=(req, res)=>{
    let TypeReqData=req.body
    console.log(TypeReqData);
    TypeModel.Update(TypeReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Type
exports.deleteRecord=(req, res)=>{
    const IDType=req.params.IDType;
    console.log(IDType);
    TypeModel.Delete(IDType).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
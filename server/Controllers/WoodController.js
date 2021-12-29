
const WoodModel=require('../Models/WoodModel');

//get all Wood
exports.GetAllList= (req, res)=> {
    WoodModel.Get().then(result =>{
        console.log(result);
        res.json(result[0]);
    })
}
//get one Wood
exports.GetOneRecord= (req, res)=>{
    const IDWood=req.params.IDWood;
    console.log(IDWood);
    WoodModel.GetById(IDWood).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Wood
exports.createNewRecord = (req, res) =>{
    let WoodReqData=req.body;
    console.log(WoodReqData);
    WoodModel.Create(WoodReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Wood
exports.updateRecord=(req, res)=>{
    let WoodReqData=req.body
    console.log(WoodReqData);
    WoodModel.Update(WoodReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Wood
exports.deleteRecord=(req, res)=>{
    const IDWood=req.params.IDWood;
    console.log(IDWood);
    WoodModel.Delete(IDWood).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
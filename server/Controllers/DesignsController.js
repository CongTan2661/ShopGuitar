
const DesignsModel=require('../Models/DesignsModel');

//get all Designs
exports.GetAllList= (req, res)=> {
    DesignsModel.Get().then(result =>{
        console.log(result);
        res.json(result[0]);
    })
}
//get one Designs
exports.GetOneRecord= (req, res)=>{
    const IDDesigns=req.params.IDDesigns;
    console.log(IDDesigns);
    DesignsModel.GetById(IDDesigns).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Designs
exports.createNewRecord = (req, res) =>{
    let DesignsReqData=req.body;
    console.log(DesignsReqData);
    DesignsModel.Create(DesignsReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Designs
exports.updateRecord=(req, res)=>{
    let DesignsReqData=req.body
    console.log(DesignsReqData);
    DesignsModel.Update(DesignsReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Designs
exports.deleteRecord=(req, res)=>{
    const IDDesigns=req.params.IDDesigns;
    console.log(IDDesigns);
    DesignsModel.Delete(IDDesigns).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
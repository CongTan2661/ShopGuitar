
const CommentModel=require('../Models/CommentModel');

//get all Comment
exports.GetAllList= (req, res)=> {
    CommentModel.Get().then(result =>{
        console.log(result);
        res.json(result);
    })
}
//get one Comment
exports.GetOneRecord= (req, res)=>{
    const UserID=req.params.UserID;
    console.log(UserID);
    CommentModel.GetById(UserID).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Comment
exports.createNewRecord = (req, res) =>{
    let CommentReqData=req.body;
    console.log(CommentReqData);
    CommentModel.Create(CommentReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Comment
exports.updateRecord=(req, res)=>{
    let CommentReqData=req.body
    console.log(CommentReqData);
    CommentModel.Update(CommentReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Comment
exports.deleteRecord=(req, res)=>{
    const UserID=req.params.UserID;
    const ProductID=req.params.ProductID;
    console.log(UserID, ProductID);
    CommentModel.Delete(UserID,ProductID).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
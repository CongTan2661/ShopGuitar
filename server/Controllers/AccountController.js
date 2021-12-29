
const AccountModel=require('../Models/AccountModel');

//get all Account
exports.GetAllList= (req, res)=> {
    AccountModel.Get().then(result =>{
        console.log(result);
        res.json(result);
    })
}
//get one Account
exports.GetOneRecord= (req, res)=>{
    const UserID=req.params.UserID;
    console.log(UserID);
    AccountModel.GetById(UserID).then(result =>{
        console.log(result);
        res.json(result[0]);
    });
}
// create new Account
exports.createNewRecord = (req, res) =>{
    let AccountReqData=req.body;
    console.log(AccountReqData);
    AccountModel.Create(AccountReqData).then(result =>{
        console.log(result);
        res.json(result);
    })
}

//update Account
exports.updateRecord=(req, res)=>{
    let AccountReqData=req.body
    console.log(AccountReqData);
    AccountModel.Update(AccountReqData).then(result =>{
        res.status(200).json(result);
    })
}

//Delete Account
exports.deleteRecord=(req, res)=>{
    const UserID=req.params.UserID;
    const ProductID=req.params.ProductID;
    console.log(UserID, ProductID);
    AccountModel.Delete(UserID,ProductID).then(result =>{
        console.log(result);
        res.status(200).json(result);
    })
}
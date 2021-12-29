const {config} = require('../connect');
const sql=require('mssql');

//get all 
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from CommentProduct")
    return Records.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// get by ID for Search Data by ID 
async function GetById(ID)
{
  try{
    let pool=await config;
    let Record=await pool.request()
    .input('ProductID',sql.VARCHAR(10),ID)
    .execute("sp_GetOne_Comment");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(CommentData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('UserID',sql.VARCHAR(10),CommentData.UserID)
    .input('ProductID', sql.VARCHAR(10),CommentData.ProductID)
    .input('Comment',sql.NVARCHAR(100),CommentData.Comment)
    .input('RateStar',sql.INT,CommentData.RateStar)
    .execute('sp_Insert_Comment')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(CommentData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),CommentData.UserID)
        .input('ProductID', sql.VARCHAR(10),CommentData.ProductID)
        .input('Comment',sql.NVARCHAR(100),CommentData.Comment)
        .input('RateStar',sql.INT,CommentData.RateStar)
        .execute('sp_Update_Comment')
        return updaterecord.recordsets;
      }
      catch(error){
        console.log(error);
      }
}
//delete TypeOfProduct
async function Delete(UserID,ProductID){
    try{
        let pool=await config;
        let deleterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),UserID)
        .input('ProductID', sql.VARCHAR(10),ProductID)
        .execute('sp_Delete_Comment')
        return deleterecord.recordsets;
      }
      catch(error){
        console.log(error);
      }
}
module.exports={
  Get:Get,
  GetById:GetById,
  Create:Create,
  Update:Update,
  Delete:Delete
}
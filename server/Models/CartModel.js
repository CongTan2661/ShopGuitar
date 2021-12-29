const {config} = require('../connect');
const sql=require('mssql');

//get all 
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from ShoppingCart")
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
    .input('UserID',sql.VARCHAR(10),ID)
    .execute("sp_GetOne_Cart");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(CartData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('UserID',sql.VARCHAR(10),CartData.UserID)
    .input('ProductID', sql.VARCHAR(10),CartData.ProductID)
    .input('Quantity',sql.INT,CartData.Quantity)
    .execute('sp_Insert_Cart')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(CartData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),CartData.UserID)
        .input('ProductID', sql.VARCHAR(10),CartData.ProductID)
        .input('Quantity',sql.INT,CartData.Quantity)
        .execute('sp_Update_Cart')
        return updaterecord.recordsets;
      }
      catch(error){
        console.log(error);
      }
}
//delete TypeOfProduct
async function Delete(UserID, ProductID){
    try{
        let pool=await config;
        let deleterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),UserID)
        .input('ProductID', sql.VARCHAR(10),ProductID)
        .execute('sp_Delete_Cart')
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
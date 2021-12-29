const {config} = require('../connect');
const sql=require('mssql');


//get all TypeOfProduct
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from InvoiceDetail")
    return Records.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// get TypeOfProduct by ID for Search Data by ID 
async function GetById(ID)
{
  try{
    let pool=await config;
    let Record=await pool.request()
    .input('Invoice_ID',sql.VARCHAR(15),ID)
    .execute("sp_GetOne_InvoiceDetail");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(Data)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('Invoice_ID',sql.VARCHAR(15),Data.Invoice_ID)
    .input('Product_ID',sql.VARCHAR(10),Data.Product_ID)
    .input('Quantity',sql.INT,Data.Quantity)
    .input('Status',sql.NVARCHAR(50),Data.Status)
    .execute('sp_Insert_InvoiceDetail')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}
async function Update(Data){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('Invoice_ID',sql.VARCHAR(15),Data.Invoice_ID)
        .input('Product_ID',sql.VARCHAR(10),Data.Product_ID)
        .input('Quantity',sql.INT,Data.Quantity)
        .input('Status',sql.NVARCHAR(50),Data.Status)
        .execute('sp_Update_InvoiceDetail')
        return updaterecord.recordsets;
      }
      catch(error){
        console.log(error);
      }
}
//delete TypeOfProduct
async function Delete(Invoice_ID,Product_ID){
    try{
        let pool=await config;
        let deleterecord=await pool.request()
        .input('Invoice_ID',sql.VARCHAR(15),Invoice_ID)
        .input('Product_ID',sql.VARCHAR(10),Product_ID)
        .execute('sp_Delete_InvoiceDetail')
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
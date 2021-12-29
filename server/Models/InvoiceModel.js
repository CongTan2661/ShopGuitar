const {config} = require('../connect');
const sql=require('mssql');

//get all TypeOfProduct
async function Get(ID)
{
  try{
    let pool=await config;
    let Records=await pool.request()
    .input('UserID',sql.VARCHAR(10),ID)
    .execute("sp_GetOne_Invoice")
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
    .input('UserID',sql.VARCHAR(10),ID)
    .execute("sp_GetOne_Invoice");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(InvoiceData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('UserID',sql.VARCHAR(10),InvoiceData.UserID)
    .input('Name',sql.NVARCHAR(50),InvoiceData.Name)
    .input('Address',sql.NVARCHAR(100),InvoiceData.Address)
    .input('Email',sql.VARCHAR(50),InvoiceData.Email)
    .input('PhoneNumber',sql.VARCHAR(15),InvoiceData.PhoneNumber)
    .input('Charge',sql.INT,InvoiceData.Charge)
    .input('TotalMoney',sql.INT,InvoiceData.TotalMoney)
    .execute('sp_Insert_Invoice')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

async function Update(InvoiceData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('ID',sql.VARCHAR(15),InvoiceData.ID)
    .input('UserID',sql.VARCHAR(10),InvoiceData.UserID)
    .input('Name',sql.NVARCHAR(50),InvoiceData.Name)
    .input('Address',sql.NVARCHAR(100),InvoiceData.Address)
    .input('Email',sql.VARCHAR(50),InvoiceData.Email)
    .input('PhoneNumber',sql.VARCHAR(15),InvoiceData.PhoneNumber)
    .input('Charge',sql.INT,InvoiceData.Charge)
    .input('TotalMoney',sql.INT,InvoiceData.TotalMoney)
    .execute('sp_Update_Invoice')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//delete TypeOfProduct
async function Delete(ID){
    try{
        let pool=await config;
        let deleterecord=await pool.request()
        .input('ID',sql.VARCHAR(15),ID)
        .execute('sp_Delete_Invoice')
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
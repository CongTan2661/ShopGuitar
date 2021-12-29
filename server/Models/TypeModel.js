const {config} = require('../connect');
const sql=require('mssql');

//get all 
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from TypeProduct")
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
    .input('input_parameter',sql.VARCHAR(10),ID)
    .query("SELECT * from TypeProduct where ID_Type = @input_parameter;");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new Type
async function Create(TypeData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('Name', sql.NVARCHAR(50),TypeData.Name)
    .execute('sp_Insert_Type')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(TypeData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('ID',sql.VARCHAR(10),TypeData.ID)
        .input('Name', sql.NVARCHAR(50),TypeData.Name)
        .execute('sp_Update_Type')
        return updaterecord.recordsets;
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
        .input('ID',sql.VARCHAR(10),ID)
        .execute('sp_Delete_Type')
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
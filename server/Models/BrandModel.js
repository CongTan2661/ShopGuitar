const {config} = require('../connect');
const sql=require('mssql');

//get all 
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from BrandProduct")
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
    .query("SELECT * from BrandProduct where ID_Brand = @input_parameter;");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new Brand
async function Create(BrandData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('Name', sql.NVARCHAR(50),BrandData.Name)
    .execute('sp_Insert_Brand')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(BrandData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('ID',sql.VARCHAR(10),BrandData.ID)
        .input('Name', sql.NVARCHAR(50),BrandData.Name)
        .execute('sp_Update_Brand')
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
        .execute('sp_Delete_Brand')
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
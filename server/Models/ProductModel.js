const {config} = require('../connect');
const sql=require('mssql');

//get all TypeOfProduct
async function Get()
{
  try{
    let pool = await config;
    return await (await pool.request().query("SELECT * FROM View_Product")).recordset;
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
    .input('ID',sql.VARCHAR(10),ID)
    .execute(`sp_GetOne_Product`);
    return await Record.recordset;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(ProductData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('Name',sql.NVARCHAR(50),ProductData.Name)
    .input('IDBrand', sql.INT,ProductData.IDBrand)
    .input('IDType', sql.INT,ProductData.IDType)
    .input('IDWood', sql.INT,ProductData.IDWood)
    .input('IDDesigns', sql.INT,ProductData.IDDesigns)
    .input('Price',sql.INT,ProductData.Price)
    .input('QuantityInventory',sql.INT,ProductData.QuantityInventory)
    .input('Discount',sql.INT,ProductData.Discount)
    .input('Photo',sql.NVARCHAR(100), ProductData.Photo)
    .input('ListPhoto',sql.NVARCHAR(1000), ProductData.ListPhoto)
    .execute('sp_Insert_Product')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(ID,ProductData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('ID',sql.VARCHAR(10),ID)
        .input('Name',sql.NVARCHAR(50),ProductData.Name)
        .input('IDBrand', sql.INT,ProductData.IDBrand)
        .input('IDType', sql.INT,ProductData.IDType)
        .input('IDWood', sql.INT,ProductData.IDWood)
        .input('IDDesigns', sql.INT,ProductData.IDDesigns)
        .input('Price',sql.INT,ProductData.Price)
        .input('QuantityInventory',sql.INT,ProductData.QuantityInventory)
        .input('Discount',sql.INT,ProductData.Discount)
        .input('Photo',sql.NVARCHAR(100), ProductData.Photo)
        .input('ListPhoto',sql.NVARCHAR(1000), ProductData.ListPhoto)
        .execute('sp_Update_Product')
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
        .execute('sp_Delete_Product')
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
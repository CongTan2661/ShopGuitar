const {config} = require('../connect');
const sql=require('mssql');

//get all 
async function Get()
{
  try{
    let pool=await config;
    let Records=await pool.request().query("SELECT * from Account")
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
    .input('id',sql.VARCHAR(10),ID)
    .execute("sp_GetOne_Account");
    return Record.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

// create new TypeOfProduct
async function Create(AccountData)
{
  try{
    let pool=await config;
    let insertrecord=await pool.request()
    .input('UserID',sql.VARCHAR(10),AccountData.UserID)
    .input('UserName', sql.VARCHAR(28),AccountData.UserName)
    .input('Password',sql.VARCHAR(28),AccountData.Password)
    .input('Role',sql.VARCHAR(20),AccountData.Role)
    .execute('sp_Insert_Account')
    return insertrecord.recordsets;
  }
  catch(error){
    console.log(error);
  }
}

//update TypeOfProduct
async function Update(AccountData){
    try{
        let pool=await config;
        let updaterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),AccountData.UserID)
        .input('Password',sql.VARCHAR(28),AccountData.Password)
        .input('Role',sql.VARCHAR(20),AccountData.Role)
        .execute('sp_Update_Account')
        return updaterecord.recordsets;
      }
      catch(error){
        console.log(error);
      }
}
//delete TypeOfProduct
async function Delete(UserID){
    try{
        let pool=await config;
        let deleterecord=await pool.request()
        .input('UserID',sql.VARCHAR(10),UserID)
        .execute('sp_Delete_Account')
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
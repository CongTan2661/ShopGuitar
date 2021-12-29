var sql = require("mssql");
require("dotenv").config();
// console.log(process.env.passMssql);
const config = new sql.ConnectionPool({
  server: "localhost",
  user: "sa",
  password: process.env.passMssql,
  database: process.env.databaseName,
  driver: "mssql",
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
})
  .connect()
  .then((pool) => {
    return pool;
  });
module.exports = {
  config: config,
};

const express = require("express")
const router = express.Router()

const BrandController1=require('../Controllers/BrandController');

router.get('/',BrandController1.GetAllList);

router.get('/:IDBrand',BrandController1.GetOneRecord);

router.post('/',BrandController1.createNewRecord);

router.put('/',BrandController1.updateRecord);

router.delete('/:IDBrand',BrandController1.deleteRecord);

module.exports = router;
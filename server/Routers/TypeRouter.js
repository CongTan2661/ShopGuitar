const express = require("express")
const router = express.Router()

const TypeController1=require('../Controllers/TypeController');

router.get('/',TypeController1.GetAllList);

router.get('/:IDType',TypeController1.GetOneRecord);

router.post('/',TypeController1.createNewRecord);

router.put('/',TypeController1.updateRecord);

router.delete('/:IDType',TypeController1.deleteRecord);

module.exports = router;
const express = require("express")
const router = express.Router()

const ProductController1=require('../Controllers/ProductController');

router.get('/', ProductController1.GetAllList);

router.get('/:id',ProductController1.GetOneRecord);

router.post('/', ProductController1.createNewRecord);

router.put('/:id', ProductController1.updateRecord); 

router.delete('/:id',ProductController1.deleteRecord);

module.exports = router;    
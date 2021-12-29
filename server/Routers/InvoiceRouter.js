const express = require("express")
const router = express.Router()

const InvoiceController1=require('../Controllers/InvoiceController');

router.get('/',InvoiceController1.GetAllList);

router.get('/:UserID',InvoiceController1.GetOneRecord);

router.post('/',InvoiceController1.createNewRecord);

router.put('/',InvoiceController1.updateRecord);

router.delete('/:id',InvoiceController1.deleteRecord);

module.exports = router;
const express = require("express")
const router = express.Router()

const InvoiceDetailController1=require('../Controllers/InvoiceDetailController');

router.get('/',InvoiceDetailController1.GetAllList);

router.get('/:InvoiceID',InvoiceDetailController1.GetOneRecord);

router.post('/',InvoiceDetailController1.createNewRecord);

router.put('/',InvoiceDetailController1.updateRecord);

router.delete('/:InvoiceID/:ProductID',InvoiceDetailController1.deleteRecord);

module.exports = router;
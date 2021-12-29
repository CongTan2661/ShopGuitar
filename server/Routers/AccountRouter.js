const express = require("express")
const router = express.Router()

const AccountController1=require('../Controllers/AccountController');

router.get('/',AccountController1.GetAllList);

router.get('/:UserID',AccountController1.GetOneRecord);

router.post('/',AccountController1.createNewRecord);

router.put('/',AccountController1.updateRecord);

router.delete('/:UserID',AccountController1.deleteRecord);

module.exports = router;
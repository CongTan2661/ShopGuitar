const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken");

const UserController=require('../Controllers/UserController');

router.get('/',UserController.GetAllList);

router.get('/:id',UserController.GetOneRecord);

router.post('/',UserController.createNewRecord);

router.put('/:id',UserController.updateRecord);

router.delete('/:id',UserController.deleteRecord);

module.exports = router;
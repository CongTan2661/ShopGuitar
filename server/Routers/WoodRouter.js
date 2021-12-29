const express = require("express")
const router = express.Router()

const WoodController1=require('../Controllers/WoodController');

router.get('/',WoodController1.GetAllList);

router.get('/:IDWood',WoodController1.GetOneRecord);

router.post('/',WoodController1.createNewRecord);

router.put('/',WoodController1.updateRecord);

router.delete('/:IDWood',WoodController1.deleteRecord);

module.exports = router;
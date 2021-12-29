const express = require("express")
const router = express.Router()

const DesignsController1=require('../Controllers/DesignsController');

router.get('/',DesignsController1.GetAllList);

router.get('/:IDDesigns',DesignsController1.GetOneRecord);

router.post('/',DesignsController1.createNewRecord);

router.put('/',DesignsController1.updateRecord);

router.delete('/:IDDesigns',DesignsController1.deleteRecord);

module.exports = router;
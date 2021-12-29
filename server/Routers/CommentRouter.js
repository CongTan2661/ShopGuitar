const express = require("express")
const router = express.Router()

const CommentController1=require('../Controllers/CommentController');

router.get('/', CommentController1.GetAllList);

router.get('/:ProductID',CommentController1.GetOneRecord);

router.post('/', CommentController1.createNewRecord);

router.put('/', CommentController1.updateRecord); 

router.delete('/:UserID/:ProductID',CommentController1.deleteRecord);

module.exports = router;    
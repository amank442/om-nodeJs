const express = require('express');
const router = express.Router();
const {addItem,updateItem,deleteItem,getItems}= require('../controllers/Itemcontroller')
const auth= require('../middleware/Auth')

//protected routes before it reach target source

router.post('/additem/:userid',auth,addItem)

router.patch('/updateitem',auth,updateItem)

router.delete('/deleteitem/:itemid',auth,deleteItem)

router.get('/getitems/:userid',auth,getItems)

module.exports = router;

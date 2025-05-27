const express = require('express');
const router = express.Router();
const {createUser,loginuser, getAllitems} = require('../controllers/Usercontroller');
const auth = require('../middleware/Auth');
const limit = require('../middleware/RateLimiting')



router.post('/createuser', limit,createUser);
router.post('/loginuser',limit, loginuser);
router.get('/userallitems/:userid',auth,getAllitems)

module.exports = router;

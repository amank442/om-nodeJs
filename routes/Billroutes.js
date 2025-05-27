const express = require("express");
const router = express.Router();
const {
  createBill,
  getmonthlyTransaction,
} = require("../controllers/Billcontroller");

const auth = require("../middleware/Auth");

//protected routes before it reach target source

router.post("/createbill/:userid", auth, createBill);

router.get("/monthly-sales-report/:userid", auth, getmonthlyTransaction);

module.exports = router;

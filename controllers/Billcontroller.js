const {
  createbillService,
  getmonthlytransactionService,
} = require("../services/billService");

//************************************************CREATING A BILL********************************** */
const createBill = async (req, res) => {
  console.log("Incoming request:", req.body);
  const { userid } = req.params;
  console.log(userid);

  const result = await createbillService(userid, req.body);

  return res.status(result.status).json({ data: result.data });
};

//************************************************MONTHLY SALES REPORT********************************** */
const getmonthlyTransaction = async (req, res) => {
  const { userid } = req.params;
  console.log(userid);
  const { month, year, page, size } = req.query;

  const result = await getmonthlytransactionService(
    userid,
    month,
    year,
    page,
    size
  );
  console.log("inside sales",page)

  return res.status(result.status).json({ data: result.data });
};
module.exports = { createBill, getmonthlyTransaction };

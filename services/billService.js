const axios = require("axios");

//loads all env variables from.env to process.env
require("dotenv").config()

//create a bill
const createbillService = async (userid, billdetails) => {
  const url = `${process.env.SPRING_BASE_URL}/createBill/${userid}`;

  const headers = { "Content-Type": "application/json" };

  try {
    const response = await axios.post(url, billdetails, { headers });

    return { status: response.data.statuscode, data: response.data };

  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

//get monthly sales report
const getmonthlytransactionService = async (
  userid,
  month,
  year,
  page,
  size
) => {
  const url = `${process.env.SPRING_BASE_URL}/monthly-sales-report/user/${userid}?month=${month}&year=${year}&page=${page}&size=${size}`;

  try {
    const response = await axios.get(url);

    return { status: response.data.statuscode, data: response.data };
    
  } catch (error) {
    if (!error.response) {
      console.log("hello");
      return { status: 503, data: "Network error" };
    }

    const { statuscode } = error.response.data;

    const { data } = error.response;

    return { status: statuscode, data };
  }
};

module.exports = { createbillService, getmonthlytransactionService };

const {
  createUserService,
  loginUserService,
  userItemsService,
} = require("../services/userService");

//*******************************************create a user account*******************************************
const createUser = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const result = await createUserService(req.body);

  return res.status(result.status).json({ data: result.data });
};

//***********************************User login***************************************
const loginuser = async (req, res) => {
  console.log("Incoming login request:", req.body);

  const result = await loginUserService(req.body);

  if (result.token) {
    return res.status(result.status).json({
      data: result.data,
      token: result.token,
    });
  }

  return res.status(result.status).json({ data: result.data });
};

//***********************************User all items***************************************
const getAllitems = async (req, res) => {
  console.log("Incoming userid:", req.params);

   const {userid}= req.params
   console.log("inside getallitems")
   console.log(userid)

  const result = await userItemsService(userid);


  return res.status(result.status).json({ data: result.data });
};

module.exports = { createUser, loginuser,getAllitems };

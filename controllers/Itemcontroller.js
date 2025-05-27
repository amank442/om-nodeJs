const {
  additemService,
  updateitemService,
  deleteService,
  getitemsService,
} = require("../services/itemService");

//**************************************USER ADDING ITEM***************************************** */
const addItem = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const { userid } = req.params;

  console.log(userid);

  const result = await additemService(req.body, userid);
  console.log(result);
  return res.status(result.status).json({ data: result.data });
};

//************************************** UPDATING ITEM ***************************************** */
const updateItem = async (req, res) => {
  console.log("Incoming request body:", req.body);

  const result = await updateitemService(req.body);

  console.log(result);

  return res.status(result.status).json({ data: result.data });
};

//************************************** DELETE ITEM ***************************************** */
const deleteItem = async (req, res) => {
  console.log("Incoming request param:", req.params);

  const { itemid } = req.params;

  const result = await deleteService(itemid);

  console.log(result);

  return res.status(result.status).json({ data: result.data });
};

//************************************** LIST OF ITEM ***************************************** */
const getItems = async (req, res) => {
  console.log("Incoming request param:", req.params);

  const { userid } = req.params;
  const { page, size } = req.query;
  console.log(userid);
  console.log(page);
  console.log(size);

  const result = await getitemsService(userid, page, size);

  console.log(result);

  return res.status(result.status).json({ data: result.data });
};

module.exports = { addItem, updateItem, deleteItem, getItems };

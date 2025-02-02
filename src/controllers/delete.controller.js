const deleteFaq = require("../services/deleteFaq.service");
const verifyUuid = require("../validators/uuid.validator");

const deleteFaqController = async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({
      error: "id not present",
    });
  }

  if (!verifyUuid(id)) {
    return res.status(400).json({
      error: "id maybe incorrect",
    });
  }
  let result;
  try {
    result = await deleteFaq(id);
    res.status(200).json({
      message: "deleted faq",
    });
  } catch (error) {
    console.log("error in deleteFaq controller ", error);
    return res.status(500).json({
      error: "internal server error",
    });
  }
};

module.exports = deleteFaqController;

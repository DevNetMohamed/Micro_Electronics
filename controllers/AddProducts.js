const AddProdact = require("../models/AddProdacts");

const AddAllProdact = async (req, res) => {
  try {
    const AllProduct = await AddProdact.find().populate("userID");
    res.status(200).json({
      status: "Success",
      data: AllProduct,
    });
  } catch (err) {
    res.status(500).json({
      status: "Fial",
      mass: error.message,
    });
  }
};

const GatAllProduct = async (req, res) => {
  try {
    const GetAll = await AddProdact.findById('userID');
    res.status(200).json({
      status: "Success",
      data: GetAll,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fial",
      mass: error.message,
    });
  }
};

module.exports = { AddAllProdact, GatAllProduct };

const mongoose = require('mongoose');

const AddNewProduct = new mongoose.Schema({

    NameOfProduct:{
        type: String,
        require: [true, "The product is required"],
        trim: true
    },
    Price:{
        type: Number,
        require:[true, "The price is required"]
    },
    A_stock:{
        type: String,
        require: [true, "The Stock must be Calculate"]
    },

},{timestamps:true});


const AddProdacts = mongoose.model("AddProdact", AddNewProduct, );

module.exports = AddProdacts;
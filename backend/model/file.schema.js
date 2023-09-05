const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: String,
    path: String,
});

module.exports = { fileSchema };

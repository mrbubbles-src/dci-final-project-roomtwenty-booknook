const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    description: { type: String },
    cover: { type: String },
    published: { type: Number, required: true },
    olid: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Book", bookSchema);

const mongoose = require("mongoose");
const isbnSchema = new mongoose.Schema({
    isbn_10: {
        type: String,
        required: true,
    },
    isbn_13: {
        type: String,
        required: true,
    },
});

const searchInfoSchema = new mongoose.Schema({
    textSnippet: { type: String },
});

const imageLinksSchema = new mongoose.Schema({
    smallThumbnail: { type: String },
    thumbnail: { type: String },
    small: { type: String },
    medium: { type: String },
    large: { type: String },
    extraLarge: { type: String },
});

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: [{ type: String, required: true }],
    publisher: { type: String, required: true },
    publisheddate: { type: String, required: true },
    descriptions: { type: String },
    searchInfo: { searchInfoSchema },
    averageRating: { type: Number },
    ratingsCount: { type: Number },
    language: { type: String },
    previewLink: { type: String },
    infoLink: { type: String },
    industryIdentifiers: [isbnSchema],
    /* aus selflink */
    categories: [{ type: String }],
    pageCount: { type: Number },
    imageLinks: { imageLinksSchema },
});

module.exports = mongoose.model("Book", bookSchema);

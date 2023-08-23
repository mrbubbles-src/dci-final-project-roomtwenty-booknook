const mongoose = require("mongoose");

const isbnSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    identifiers: { type: String },
});

const imageLinksSchema = new mongoose.Schema({
    smallThumbnail: { type: String },
    thumbnail: { type: String },
    small: { type: String },
    medium: { type: String },
    large: { type: String },
    extraLarge: { type: String },
});

const volumeInfoSchema = new mongoose.Schema({
    title: { type: String },
    subtitle: { type: String },
    authors: [{ type: String }],
    publisher: { type: String },
    publisheddate: { type: String },
    descriptions: { type: String },
    averageRating: { type: Number },
    ratingsCount: { type: Number },
    language: { type: String },
    canonicalVolumeLink: { type: String },
    infoLink: { type: String },
    industryIdentifiers: [isbnSchema],
    /* aus selflink */
    categories: [{ type: String }],
    pageCount: { type: Number },
    imageLinks: { imageLinksSchema },
});
const accessInfoSchema = new mongoose.Schema({
    webReaderLink: { type: String },
});

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    volumeInfo: {
        volumeInfoSchema,
    },
    accessInfo: {
        accessInfoSchema,
    },
});

module.exports = mongoose.model("Book", bookSchema);

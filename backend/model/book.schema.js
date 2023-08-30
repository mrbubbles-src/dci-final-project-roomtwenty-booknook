const mongoose = require("mongoose");

const isbnSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    identifier: { type: String },
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
    publishedDate: { type: String },
    description: { type: String },
    averageRating: { type: Number },
    ratingsCount: { type: Number },
    language: { type: String },
    canonicalVolumeLink: { type: String },
    industryIdentifiers: [isbnSchema],
    categories: [{ type: String }],
    pageCount: { type: Number },
    imageLinks: imageLinksSchema,
});
const accessInfoSchema = new mongoose.Schema({
    webReaderLink: { type: String },
});

const bookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    volumeInfo: volumeInfoSchema,

    accessInfo: accessInfoSchema,
});

module.exports = mongoose.model("Book", bookSchema);

const Book = require("../model/book.schema");
const fetch = require("node-fetch");
require("dotenv").config();

const apiKey = process.env.GOOGLE_API_KEY;
const url = " https://www.googleapis.com/books/v1/volumes";
//fetch von der Google Book API
async function GoogleBooksAPI(searchQuery) {
    try {
        const searchURL = `${url}?q=${encodeURIComponent(
            searchQuery
        )}&key=${apiKey}&maxResults=40`;

        const responseSearchURL = await fetch(searchURL);

        const dataSearchURL = await responseSearchURL.json();
        return dataSearchURL;
    } catch (err) {
        console.error(err);
    }
}

async function SingleGoogleBookURLWithID(id) {
    try {
        const existingBook = await Book.findOne({ id: id });
        if (!existingBook) {
            try {
                const singleURL = `${url}/${id}`;
                const response = await fetch(singleURL);
                const data = await response.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        }
        return existingBook;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { GoogleBooksAPI, SingleGoogleBookURLWithID };

//volumeId

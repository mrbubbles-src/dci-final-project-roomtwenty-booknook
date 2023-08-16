const fetch = require("node-fetch");
const util = require("util");
require("dotenv").config();

const apiKey = process.env.GOOGLE_API_KEY;

//fetch von der Google Book API
async function searchBooksOnGoogleAPI(searchQuery) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchQuery
    )}&key=${apiKey}&maxResults=40`;
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(
                util.inspect(data, {
                    showHidden: false,
                    depth: null,
                    colors: true,
                })
            );
            return data;
        })
        .catch((error) => {
            console.error(error);
        });
}

module.exports = { searchBooksOnGoogleAPI };

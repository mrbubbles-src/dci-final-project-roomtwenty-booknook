const fetch = require("node-fetch");
const util = require("util");
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
        // console.log(
        //     util.inspect(dataSearchURL, {
        //         showHidden: false,
        //         depth: null,
        //         colors: true,
        //     })
        // );
        return dataSearchURL;
    } catch (err) {
        console.error(err);
    }
}

async function SingleGoogleBookURLWithID(id) {
    try {
        const singleURL = `${url}/${id}`;
        const response = await fetch(singleURL);
        const data = await response.json();
        console.log(data, "dsb");
        return data;
    } catch (err) {
        console.error(err);
    }
}

module.exports = { GoogleBooksAPI, SingleGoogleBookURLWithID };

//volumeId

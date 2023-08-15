const fetch = require("node-fetch");
const util = require("util");

async function getAllBooksAPI(searchQuery) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchQuery
    )}&key=AIzaSyBs5nj0QSOS5mYDn0xA83t5eAlW7LQ-Ytg`;
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

module.exports = getAllBooksAPI;

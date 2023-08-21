const mongoose = require("mongoose");
const Book = require("./book.schema");
const User = require("./user.schema");
const { GoogleBooksAPI } = require("./google.book.api");

//Volumens(Bücher/Bände) in Google Datenbank suchen
async function searchBooksOnGoogle(searchQuery) {
    try {
        return await GoogleBooksAPI(searchQuery);
    } catch (error) {
        throw new Error();
    }
}
// alle Bücher in Datenbank finden
async function getSingleBook() {
    try {
        return await GoogleBooksAPI();
    } catch (error) {
        throw new Error(error);
    }
}

// alle Bücher in Datenbank finden
async function getAllBooks() {
    try {
        return await GoogleBooksAPI();
    } catch (error) {
        throw new Error(error);
    }
}

// einzelnes Buch mit Buchdaten speichern
async function saveBook(bookData) {
    try {
        return await Book.create(bookData);
    } catch (error) {
        throw error;
    }
}

// Admin löscht Buch aus Datenbank
async function adminDeleteBookFromDb(id) {
    try {
        const book = await Book.findByIdAndRemove(id);
        return book;
    } catch (error) {
        throw new Error(error);
    }
}

// User löscht Buch aus Readlist
async function deleteBookFromReadlist(userID, bookID) {
    try {
        const user = await User.findOne({ _id: userID });
        const userReadlist = user.readList;
        if (userReadlist.length === 0) {
            console.log("Keine Bücher auf der leseliste vorhanden.");
        } else {
            const updatedReadlist = userReadlist.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );
            user.readList = updatedReadlist;
            await user.save();
        }
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = {
    searchBooksOnGoogle,
    saveBook,
    getAllBooks,
    adminDeleteBookFromDb,
    deleteBookFromReadlist,
    getSingleBook,
};

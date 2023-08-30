const mongoose = require("mongoose");
const Book = require("./book.schema");
const User = require("./user.schema");
const {
    GoogleBooksAPI,
    SingleGoogleBookURLWithID,
} = require("./google.book.api");

//Volumens(Bücher/Bände) in Google Datenbank suchen
async function searchBooksOnGoogle(searchQuery) {
    try {
        return await GoogleBooksAPI(searchQuery);
    } catch (error) {
        throw new Error();
    }
}

// alle Bücher in Datenbank finden (nur Admins)
async function getAllBooks() {
    try {
        return await GoogleBooksAPI();
    } catch (error) {
        throw new Error(error);
    }
}

// einzelnes Buch mit Buchdaten speichern
async function saveBook(bookData) {
    console.log("seebook:", bookData);
    try {
        const book = new Book(bookData);
        const response = await book.save();
        console.log("response:", response);
        return response;
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
async function removeBookFromLists(userID, bookID) {
    console.log("userID", userID);
    console.log("bookID", bookID);
    try {
        const user = await User.findOne({ _id: userID });
        let userWantToReadList = user.wantToRead;
        let userCurrentlyReadingList = user.currentlyReading;
        let userAlreadyReadList = user.alreadyRead;
        if (
            userWantToReadList.length === 0 &&
            userCurrentlyReadingList.length === 0 &&
            userAlreadyReadList.length === 0
        ) {
            console.log("Du hast nichts auf deinen Listen");
        }
        // buch auf den listen suchen
        // wenn buch nicht gefunden wurde meldung rausgeben
        // wenn buch gefunden wurde das hier was in der else steht ausführen
        else {
            const updatedWantToReadList = userWantToReadList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );
            const updatedCurrentlyReadingList = userCurrentlyReadingList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );
            const updatedAlreadyReadingList = userAlreadyReadList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );
            const res = await User.findByIdAndUpdate(userID, {
                currentlyReading: updatedCurrentlyReadingList,
                wantToRead: updatedWantToReadList,
                alreadyRead: updatedAlreadyReadingList,
            });
            return res;
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
    removeBookFromLists,
};

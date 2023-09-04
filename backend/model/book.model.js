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
            userWantToReadList.lenght === 0 &&
            userCurrentlyReadingList.lenght === 0 &&
            userAlreadyReadList.length === 0
        ) {
            console.log("Du hast nichts auf deinen Listen");
        } else {
            const updatedWantToReadList = userWantToReadList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );

            const updatedCurrentlyReadingList = userCurrentlyReadingList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );

            const updatedAlreadyReadingList = userAlreadyReadList.filter(
                (bookInList) => bookInList.book.toString() !== bookID
            );
            userWantToReadList = updatedWantToReadList;
            userCurrentlyReadingList = updatedCurrentlyReadingList;
            userAlreadyReadList = updatedAlreadyReadingList;

            await user.save();

            console.log("Das Buch wurde aus deinen Listen gelöscht");
        }
        // if (userReadlist.length === 0) {
        //     console.log("Keine Bücher auf der leseliste vorhanden.");
        // } else {
        //     const updatedReadlist = userReadlist.filter(
        //         (bookInList) => bookInList.book.toString() !== bookID
        //     );
        //     user.readList = updatedReadlist;
        //     await user.save();
        // }
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

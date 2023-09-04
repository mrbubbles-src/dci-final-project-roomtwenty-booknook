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

// alle Bücher in Datenbank finden (nur Admins)
async function getAllBooks() {
    try {
        return await GoogleBooksAPI();
    } catch (error) {
        throw new Error(error);
    }
}

// buch auf listen des users suchen
async function findBookOnUserLists(user, bookID) {
    try {
        const wantToRead = user.wantToRead;
        const currentlyReading = user.currentlyReading;
        const alreadyRead = user.alreadyRead;

        const isOnWantToRead = wantToRead.find((book) =>
            book.book.equals(bookID)
        );
        const isOnCurrentlyReading = currentlyReading.find((book) =>
            book.book.equals(bookID)
        );
        const isOnAlreadyRead = alreadyRead.find((book) =>
            book.book.equals(bookID)
        );

        const response = {
            wantToRead: !!isOnWantToRead,
            currentlyReading: !!isOnCurrentlyReading,
            alreadyRead: !!isOnAlreadyRead,
        };
        return response;
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
async function removeBookFromLists(user, bookID) {
    try {
        let res = {};
        let userWantToReadList = user.wantToRead;
        let userCurrentlyReadingList = user.currentlyReading;
        let userAlreadyReadList = user.alreadyRead;
        let isBookOnLists;
        if (
            userWantToReadList.length === 0 &&
            userCurrentlyReadingList.length === 0 &&
            userAlreadyReadList.length === 0
        ) {
            console.log("Du hast nichts auf deinen Listen");
            return { message: "Du hast nichts auf deinen Listen" };
        } else {
            isBookOnLists = await findBookOnUserLists(user, bookID);
            if (
                !isBookOnLists.wantToRead &&
                !isBookOnLists.currentlyReading &&
                !isBookOnLists.alreadyRead
            ) {
                return (res = {
                    message:
                        "Das Buch konnte nicht auf deinen Listen gefunden werden.",
                });
            } else {
                const updatedWantToReadList = userWantToReadList.filter(
                    (bookInList) => bookInList.book.toString() !== bookID
                );
                const updatedCurrentlyReadingList =
                    userCurrentlyReadingList.filter(
                        (bookInList) => bookInList.book.toString() !== bookID
                    );
                const updatedAlreadyReadingList = userAlreadyReadList.filter(
                    (bookInList) => bookInList.book.toString() !== bookID
                );
                await User.findByIdAndUpdate(user._id, {
                    currentlyReading: updatedCurrentlyReadingList,
                    wantToRead: updatedWantToReadList,
                    alreadyRead: updatedAlreadyReadingList,
                });
                res = { message: "Das Buch wurde aus deinen Listen gelöscht." };
                return res;
            }
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
    findBookOnUserLists,
};

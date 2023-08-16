const Book = require("../model/book.schema");
const {
    searchBooksOnGoogle,
    saveBook,
    getAllBooks,
    adminDeleteBookFromDb,
    deleteBookFromReadlist,
} = require("../model/book.model");
const User = require("../model/user.schema");
const { showReadlist } = require("../model/user.model");

//Volumens(Bücher)suchen -> zugriffs Art
async function httpSearchBooksOnGoogle(req, res, next) {
    try {
        //auf url zugreifen auf encodeURL...
        const searchQuery = req.query.q;
        //suchegriff in q Url finden und suchen
        const searchBooks = await searchBooksOnGoogle(searchQuery);
        //suchergebniss anzeigen
        res.json(searchBooks);
    } catch (error) {
        next(error);
    }
}

// alle Bücher in database anzeigen
async function httpGetAllBooks(req, res) {
    try {
        const books = await getAllBooks();
        res.status(200).json({
            title: "List of all books in the database:",
            booksInDb: books,
        });
    } catch (error) {
        res.status(200).json([]);
    }
}

// Buch in Datenbank/ Readlist speichern
async function httpSaveBook(req, res, next) {
    try {
        // buch daten
        const book = req.body;
        // userID aus dem token
        const { userID: _userID } = req;

        // überprüfung ob buch anhand olid n DB vorhanden ist
        const existingBook = await Book.findOne({ olid: book.olid });

        // variable zum einspeichern der Buch ID
        let bookID;

        // abfrage ob buch bereits in buch collection ist
        if (existingBook) {
            // wenn buch vorhanden ist, wird dessen mongoDB_id in bookID abgespeichert
            bookID = existingBook._id;
            console.log("Das Buch ist bereits in der Datenbank vorhanden.");
        } else {
            // wenn buch nicht vorhanden ist, wird es erstellt
            const newBook = await saveBook(book);
            // mongoDB_id vom neuerstelltem buch wir in bookID abgespeichert
            bookID = newBook._id;
            console.log(
                "Das Buch wurde erfolgreich in der Datenbank gespeichert."
            );
        }

        // user anhand von _id aus dem token finden
        const user = await User.findOne({ _id: _userID });

        // abfrage ob bookID bereits in readList vorhanden ist
        if (
            user.readList.some(
                (item) => item.book.toString() === bookID.toString()
            )
        ) {
            // wenn ja rückmeldung geben dass es der fall ist
            console.log("Buch ist bereits auf ihrer Readlist");
        } else {
            // ansonsten bookID in readList array pushen
            user.readList.push({ book: bookID });
            // user speichern
            await user.save();
            console.log("Buch wurde der Readlist hinzugefügt");
        }
        // readlist des users erhalten
        const readList = await showReadlist(_userID);
        // response
        res.status(200).json({
            title: `${user.username}'s Leseliste:`,
            readlist: readList,
        });
    } catch (error) {
        next(error);
    }
}

// Buchdaten zu ausgewähltem Buch aus der Datenbank löschen
async function httpAdminDeleteBookFromDb(req, res, next) {
    const { id } = req.params;
    try {
        const deletedBook = await adminDeleteBookFromDb(id);
        res.status(204).json({
            message: "Buchdaten wurden aus der Datenbank gelöscht.",
            bookDeleted: deletedBook,
        });
    } catch (error) {
        res.status(404).json({
            message: "Buch konnte nicht in der Datenbank gefunden werden",
        });
    }
}

// Buchdaten aus der Buchliste eines bestimmten users löschen (vom user selbst)
async function httpDeleteBookFromReadlist(req, res, next) {
    const { userID: _userID } = req;
    const { bookID } = req.params;

    try {
        const deletedBook = await deleteBookFromReadlist(_userID, bookID);
        res.status(204).json({
            message: "Buch wurde aus der Leseliste gelöscht.",
            bookDeleted: deletedBook,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: "Buch konnte nicht in der Leseliste gefunden werden.",
        });
    }
}

module.exports = {
    httpSearchBooksOnGoogle,
    httpSaveBook,
    httpGetAllBooks,
    httpAdminDeleteBookFromDb,
    httpDeleteBookFromReadlist,
};

const express = require("express");
const {
    httpGetAllBooks,
    httpSearchBooksOnGoogle,
} = require("../controller/book.controller");
const {
    authenticateToken,
    adminCheck,
} = require("../middleware/userValidation");
const {
    httpSaveBook,
    httpAdminDeleteBookFromDb,
} = require("../controller/book.controller");

const { SingleGoogleBookURLWithID } = require("../model/google.book.api");
const router = express.Router();

//ONLY ADMIN -> Alle Bücher anzeigen
router.get("/", authenticateToken, adminCheck, httpGetAllBooks);

//EVERYONE -> Bücher Suchen
router.get("/searchbooks", httpSearchBooksOnGoogle);

//EVERYONE -> click auf buch = informationen vom selfLink (für jedes einzelne Buch)
router.get("/singleBook/:id");

//USER -> Buch speichern
router.post("/addBooks", authenticateToken, httpSaveBook);

//ADMIN -> buch löschen
router.delete(
    "/deleteBookFromDb/:id",
    authenticateToken,
    adminCheck,
    httpAdminDeleteBookFromDb
);

module.exports = router;

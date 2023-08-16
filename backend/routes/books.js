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

const router = express.Router();

//ONLY ADMIN -> Alle Bücher anzeigen
router.get("/", authenticateToken, adminCheck, httpGetAllBooks);

//EVERYONE -> Bücher Suchen
router.get("/searchbooks", httpSearchBooksOnGoogle);

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

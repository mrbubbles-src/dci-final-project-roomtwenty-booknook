const express = require("express");
const {
    httpGetAllBooks,
    httpSearchBooksOnGoogle,
    httpGetSingleBook,
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

//EVERYONE -> click auf buch = informationen vom selfLink (für jedes einzelne Buch)
router.get("/singleBook/:id", httpGetSingleBook);

//USER -> Buch speichern
router.post("/addBooks/:listname", authenticateToken, httpSaveBook);

//ADMIN -> buch löschen
router.delete(
    "/deleteBookFromDb/:id",
    authenticateToken,
    adminCheck,
    httpAdminDeleteBookFromDb
);
router.post("/expLevel");
module.exports = router;

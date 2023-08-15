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

router.get("/searchbooks", httpSearchBooksOnGoogle);

router.get("/", authenticateToken, adminCheck, httpGetAllBooks);

router.post("/addBooks", authenticateToken, httpSaveBook);

router.delete(
    "/deleteBookFromDb/:id",
    authenticateToken,
    adminCheck,
    httpAdminDeleteBookFromDb
);

module.exports = router;

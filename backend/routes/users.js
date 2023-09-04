const express = require("express");
const {
    httpCreateUser,
    httpAuthenticateUser,
    httpAdminGetAllUsers,
    httpUpdateUser,
    httpAdminDeleteUser,
    httpUserDeleteSelf,
    httpShowReadList,
} = require("../controller/user.controller");

const {
    httpRemoveBookFromLists,
    httpIsBookOnLists,
} = require("../controller/book.controller");

const { userValidationRules } = require("../lib/inputValidation/userRules");

const { validateInputs } = require("../middleware/inputValidation");

const {
    authenticateToken,
    adminCheck,
} = require("../middleware/userValidation");
const { httpFeedback } = require("../controller/nodemailer.controller");

const router = express.Router();

router.get("/", authenticateToken, function (req, res, next) {
    res.send("Welcome to the booknook server");
});

router.post(
    "/signup",
    validateInputs(userValidationRules.signup),
    httpCreateUser
);
router.post(
    "/login",
    validateInputs(userValidationRules.login),
    httpAuthenticateUser
);

router.put("/updateUser", authenticateToken, httpUpdateUser);

router.delete("/userDeleteSelf", authenticateToken, httpUserDeleteSelf);

router.get("/getReadlist", authenticateToken, httpShowReadList);

router.get("/isBookOnLists", authenticateToken, httpIsBookOnLists);

//USER -> Buch auch Listen löschen
router.delete(
    "/removeBookFromLists",
    authenticateToken,
    httpRemoveBookFromLists
);

router.get(
    "/adminGetAllUsers",
    authenticateToken,
    adminCheck,
    httpAdminGetAllUsers
);

router.delete(
    "/adminDeleteUser/:id",
    authenticateToken,
    adminCheck,
    httpAdminDeleteUser
);

// router.post("/feedback", httpFeedback);
module.exports = router;

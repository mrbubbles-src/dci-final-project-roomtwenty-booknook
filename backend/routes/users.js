const express = require("express");
// neue Importe
const { upload } = require("../middleware/upload");
const mongoose = require("mongoose");
const {
    httpCreateUser,
    httpAuthenticateUser,
    httpAdminGetAllUsers,
    httpUpdateUser,
    httpAdminDeleteUser,
    httpUserDeleteSelf,
    httpShowReadList,
} = require("../controller/user.controller");
const { httpDeleteBookFromReadlist } = require("../controller/book.controller");

const { userValidationRules } = require("../lib/inputValidation/userRules");

const { validateInputs } = require("../middleware/inputValidation");

const {
    authenticateToken,
    adminCheck,
} = require("../middleware/userValidation");
const { httpFeedback } = require("../controller/nodemailer.controller");
const { fileSchema } = require("../model/file.schema");

const router = express.Router();
const File = mongoose.model("File", fileSchema);

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
// Upload router
router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        // Aus dem Fronten
        const { originalname, path } = req.file;
        const file = new File({ name: originalname, path });
        await file.save();

        res.status(200).json({ message: "Datei erfolgreich hochgeladen!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Fehler beim Upload!?" });
    }
});

router.put("/updateUser", authenticateToken, httpUpdateUser);

router.delete("/userDeleteSelf", authenticateToken, httpUserDeleteSelf);

router.get("/getReadlist", authenticateToken, httpShowReadList);

router.delete(
    "/deleteBookFromReadlist/:bookID",
    authenticateToken,
    httpDeleteBookFromReadlist
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

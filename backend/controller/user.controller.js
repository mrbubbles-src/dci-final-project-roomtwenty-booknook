const mongoose = require("mongoose");
require("dotenv").config();
const { fileSchema } = require("../model/file.schema");
const File = mongoose.model("File", fileSchema);
const { upload } = require("../middleware/upload");
const {
    createUser,
    authenticateUser,
    adminGetAllUsers,
    updateUser,
    adminDeleteUser,
    userDeleteSelf,
    showReadlist,
} = require("../model/user.model");
const { createSecurityToken } = require("../lib/security/token");
const { findUserInDb } = require("../middleware/errorHandler");
const User = require("../model/user.schema");

const secretTokenPW = process.env.TOKEN_SECRET;

// User erstellen/ neu registrieren

async function httpCreateUser(req, res, next) {
    try {
        const userData = req.body;
        const newUser = await createUser(userData);
        res.json({
            message: "Willkommen bei booknook! Auf gutes lesen!",
            registeredUser: newUser,
        });
    } catch (error) {
        next(error);
    }
}

// User authentifizieren
async function httpAuthenticateUser(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await authenticateUser(username, password);
        if (!user) {
            const error = new Error("Falsches Passwort oder Benutzername");
            error.statusCode = 400;
            throw error;
        }
        const securityToken = await createSecurityToken(
            {
                _id: user._id,
                username: user.username,
                password: user.password,
                role: user.role,
            },
            secretTokenPW
        );
        res.json({ user, securityToken });
    } catch (error) {
        next(error);
    }
}
// alle nutzer aus der db anzeigen
async function httpAdminGetAllUsers(req, res, next) {
    const users = await adminGetAllUsers();
    res.json(users);
}
// User updaten
async function httpUpdateUser(req, res, next) {
    try {
        const { userID: id } = req;
        const updatedUser = await updateUser(id, req.body);
        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
}

// Benutzer löschen
async function httpUserDeleteSelf(req, res, next) {
    try {
        const { userID: id } = req;
        console.log(id);
        await userDeleteSelf(id);
        res.status(200).json({ message: "Benutzer gelöscht" });
    } catch (error) {
        next(error);
    }
}

// Admin löscht User
async function httpAdminDeleteUser(req, res, next) {
    try {
        const { id } = req.params;
        const user = await adminDeleteUser(id);
        res.status(200).json({
            message: "Benutzer gelöscht",
            deletedUser: user,
        });
    } catch (error) {
        return next(error);
    }
}

// Lesenliste anzeigen lassen
async function httpShowReadList(req, res, next) {
    try {
        const { userID: _userID } = req;
        const readList = await showReadlist(_userID);
        res.status(200).json(readList);
    } catch (error) {
        next(error);
    }
}

async function httpUploadUserAvatar(req, res, next) {
    const { userID: _userID } = req;
    upload.single("file")(req, res, async (error) => {
        if (error) {
            // Handle the error
            res.status(400).json({ message: error.message });
        } else {
            try {
                // Aus dem Frontend
                const { originalname, path } = req.file;
                const user = await findUserInDb(User, _userID);

                // Aktualisieren Sie das profileImage-Feld des Benutzers
                user.profileImage = path.replace("public", "");
                await user.save();

                res.status(200).json({
                    message: "Datei erfolgreich hochgeladen!",
                    profileImage: path, // Send the updated profileImage URL back
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: "Fehler beim Upload!?" });
            }
        }
    });
}
async function httpGetSingleUserData(req, res, next) {
    try {
        const { userID: _userID } = req;
        const user = await findUserInDb(User, _userID);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
module.exports = {
    httpCreateUser,
    httpAuthenticateUser,
    httpAdminGetAllUsers,
    httpUpdateUser,
    httpUserDeleteSelf,
    httpAdminDeleteUser,
    httpShowReadList,
    httpUploadUserAvatar,
    httpGetSingleUserData,
};

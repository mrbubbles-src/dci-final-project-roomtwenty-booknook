const mongoose = require("mongoose");
const { UserRoles } = require("../lib/security/roles");
const { findUserInDb } = require("../middleware/errorHandler");
const User = require("./user.schema");

// user erstellen
async function createUser(userData) {
    try {
        return await User.create(userData);
    } catch (error) {
        throw error;
    }
}

// User authentifizieren
async function authenticateUser(username, password) {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return null;
        }

        const isPasswordValid = await user.authenticate(password);

        if (!isPasswordValid) {
            return null;
        }

        return user;
    } catch (error) {
        throw error;
    }
}

// alle user anzeigen
async function adminGetAllUsers() {
    return await User.find({});
}

// User updaten
async function updateUser(id, data) {
    try {
        console.log("data", data);
        await findUserInDb(User, id);
        if (data.type === "currentlyReading") {
            // Extract the book ID and currentPage from the data
            const { book, currentPage } = data;
            console.log("currentPage", currentPage);
            console.log("bookId", book);
            // Update the currentlyReading array using the $ positional operator
            const updatedUser = await User.findOneAndUpdate(
                { _id: id, "currentlyReading.book": book },
                { $set: { "currentlyReading.$.currentPage": currentPage } }
            );
            // Remove the currentlyReading field from the data object
            delete data.currentlyReading;
            return updatedUser;
        }
        // Update the rest of the user data
        else {
            return await User.findOneAndUpdate({ _id: id }, data, {
                new: true,
            });
        }
    } catch (error) {
        throw error;
    }
}
// user löscht sich
async function userDeleteSelf(id) {
    try {
        await findUserInDb(User, id);
        await User.findOneAndDelete({ _id: id });
    } catch (error) {
        throw error;
    }
}

// Admin löscht User
async function adminDeleteUser(id) {
    try {
        const user = await findUserInDb(User, id);
        await User.findOneAndDelete({ _id: id });
        return user;
    } catch (error) {
        throw error;
    }
}

// Leseliste anzeigen lassen (User)
async function showReadlist(userID) {
    try {
        const user = await User.findOne({ _id: userID })
            .select(
                "username profileImage currentlyReading alreadyRead wantToRead"
            )
            .populate(
                "currentlyReading alreadyRead wantToRead",
                "title author published"
            );
        return {
            title: `Hier sind deine Listen, ${user.username}:`,
            currentlyReading: user.currentlyReading,
            alreadyRead: user.alreadyRead,
            wantToRead: user.wantToRead,
            profilePicture: user.profileImage,
        };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    User,
    createUser,
    authenticateUser,
    adminGetAllUsers,
    updateUser,
    adminDeleteUser,
    userDeleteSelf,
    showReadlist,
};

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { UserRoles } = require("../lib/security/roles");

// const readListSchema = new mongoose.Schema({
//  [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
// });

const userSchema = new mongoose.Schema({
    profileImage: {
        type: String,
        default: "/images/default_profile_picture.jpg",
    },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    readingLevel: { type: Number, default: 0 },
    readingRank: { type: String, default: "Lesewurm" },
    role: {
        type: String,
        enum: Object.values(UserRoles),
        default: UserRoles.USER,
    },
    readingChallenge: { type: Number, default: 0 },
    currentlyReading: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
            bookdetails: { type: Object, default: {} },
            currentPage: { type: Number, default: 0 },
        },
    ],
    alreadyRead: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
            bookdetails: { type: Object, default: {} },
        },
    ],
    wantToRead: [
        {
            book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
            bookdetails: { type: Object, default: {} },
        },
    ],
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 10);
    }

    next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();
    if (update.password) {
        try {
            const hashedPassword = await bcrypt.hash(update.password, 10);
            this.setUpdate({ password: hashedPassword });
        } catch (error) {
            return next(error);
        }
    }

    next();
});

userSchema.methods.authenticate = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    delete user.email;
    return user;
};

module.exports = mongoose.model("User", userSchema);

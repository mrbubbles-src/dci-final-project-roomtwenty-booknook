const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const { errorHandler } = require("./middleware/errorHandler");

const app = express();

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoCluster = process.env.MONGO_CLUSTER;
const mongoDatabase = process.env.MONGO_DATABASE;

mongoose
    .connect(
        `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}/${mongoDatabase}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to BooktDB");
    })
    .catch((error) => {
        console.error("BooktDB connection error:", error);
    });
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.use(errorHandler);

module.exports = app;

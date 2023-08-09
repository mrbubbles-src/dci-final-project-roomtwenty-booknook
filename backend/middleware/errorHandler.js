async function findUserInDb(Model, id) {
    const user = await Model.findOne({ _id: id });
    if (!user) {
        const error = new Error("Benutzer konnte nicht gefunden werden");
        error.statusCode = 404;
        throw error;
    }
    return user;
}

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        statusCode: statusCode,
        message: err.message,
    });
}

module.exports = { findUserInDb, errorHandler };

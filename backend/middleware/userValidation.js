const { validateToken } = require("../lib/security/token");
const { UserRoles } = require("../lib/security/roles");
require("dotenv").config();

const secretTokenPW = process.env.TOKEN_SECRET;

async function authenticateToken(req, res, next) {
    const token = req.headers.authorization.replace("Bearer ", "");
    if (!token) {
        const error = new Error("Invalid token");
        error.statusCode = 401;
        return next(error);
    }
    try {
        const decodedToken = await validateToken(token, secretTokenPW);
        req.userID = decodedToken._id;
        req.user = decodedToken;
        next();
    } catch (error) {
        error.statusCode = 403;
        return next(error);
    }
}

function adminCheck(req, res, next) {
    const user = req.user;
    if (user.role === UserRoles.ADMIN) {
        next();
    } else {
        const error = new Error("Sie haben keine Administrationsrechte");
        error.statusCode = 403;
        return next(error);
    }
}

module.exports = { authenticateToken, adminCheck };

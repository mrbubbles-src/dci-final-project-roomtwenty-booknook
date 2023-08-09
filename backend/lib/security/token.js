const { promisify } = require("util");

const jwt = require("jsonwebtoken");

const sign = promisify(jwt.sign);

const createSecurityToken = async (payload, secret) => {
    try {
        const token = await sign(payload, secret);
        return token;
    } catch (error) {
        throw new Error("Token could not be created", error);
    }
};

const verify = promisify(jwt.verify);

const validateToken = async (token, secret) => {
    try {
        const decoded = await verify(token, secret);
        return decoded;
    } catch (error) {
        throw new Error("Invalid token");
    }
};

module.exports = { createSecurityToken, validateToken };

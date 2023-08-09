const { validationResult } = require("express-validator");
const createError = require("http-errors");

function validateInputs(inputsToValidate) {
    return [
        ...inputsToValidate,
        (req, res, next) => {
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            const validationErrors = errors.array().map((error) => error.msg);
            const error = createError(422, validationErrors.join(", "));
            return next(error);
        },
    ];
}
module.exports = { validateInputs };

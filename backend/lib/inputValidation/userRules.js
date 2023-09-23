const { check } = require("express-validator");

exports.userValidationRules = {
    signup: [
        check("email")
            .escape()
            .normalizeEmail()
            .isEmail()
            .trim()
            .withMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
        check("username")
            .escape()
            .trim()
            .notEmpty()
            .withMessage("Benutzername ist erforderlich")
            // .isLength({ min: 3, max: 8 })
            // .withMessage(
            //     "Der Benutzername muss mindestens 3 Zeichen lang sein und darf maximal 8 Zeichen lang sein."
            // ),
            .isLength({ min: 3 })
            .withMessage("Der Benutzername muss mindestens 3 Zeichen lang."),
        check("password")
            .escape()
            .trim()
            .isLength({ min: 8 })
            .withMessage("Das Passwort muss mindestens 8 Zeichen lang sein")
            .notEmpty()
            .withMessage("Passwort ist erforderlich"),
    ],

    login: [
        check("username")
            .escape()
            .trim()
            .notEmpty()
            .withMessage("Benutzername ist erforderlich")
            // .isLength({ min: 3, max: 8 })
            // .withMessage(
            //     "Der Benutzername muss mindestens 3 Zeichen lang sein und darf maximal 8 Zeichen lang sein."
            // ),
            .isLength({ min: 3 })
            .withMessage(
                "Der Benutzername muss mindestens 3 Zeichen lang sein"
            ),
        check("password")
            .escape()
            .trim()
            .isLength({ min: 8 })
            .withMessage("Das Passwort muss mindestens 8 Zeichen lang sein")
            .notEmpty()
            .withMessage("Passwort ist erforderlich"),
    ],
};

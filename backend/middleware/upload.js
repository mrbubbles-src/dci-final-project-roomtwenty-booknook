const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const { userID: _userID } = req;
        const dir = `public/uploads/${_userID}`;

        fs.readdirSync(dir).forEach((fileName) => {
            if (fileName.includes("avatar")) {
                fs.unlinkSync(`${dir}/${fileName}`);
            }
        });
        fs.mkdirSync(dir, { recursive: true });

        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const dateiEndung = file.originalname.split(".").pop();
        cb(null, `${Date.now()}-avatar.${dateiEndung}`);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Only allow image files
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Nur Bilder sind erlaubt!"));
        }
    },
});

module.exports = { upload };

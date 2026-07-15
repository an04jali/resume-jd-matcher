const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("✅ destination");
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        console.log("✅ filename", file.originalname);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    console.log("✅ fileFilter", file.mimetype);

    cb(null, true);
};

module.exports = multer({ storage, fileFilter });
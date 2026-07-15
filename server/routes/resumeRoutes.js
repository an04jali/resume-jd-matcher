const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const {
    uploadResume,
    getHistory,
} = require("../controllers/resumeController");

const router = express.Router();

// Upload Resume
router.post("/upload", upload.single("resume"), uploadResume);

router.get("/history", getHistory);

module.exports = router;
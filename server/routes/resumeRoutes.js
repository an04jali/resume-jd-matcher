const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");
const {
    uploadResume,
    getHistory,
} = require("../controllers/resumeController");

const router = express.Router();

// Upload Resume
router.post("/upload", protect, upload.single("resume"), uploadResume);

router.get("/history", protect, getHistory);

module.exports = router;
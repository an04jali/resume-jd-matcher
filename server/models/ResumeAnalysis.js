const mongoose = require("mongoose");
//Stores every resume check.
const resumeAnalysisSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resumeText: {
      type: String,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    matchScore: {
      type: Number,
      required: true,
    },

    missingKeywords: [
      {
        type: String,
      },
    ],

    suggestions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);
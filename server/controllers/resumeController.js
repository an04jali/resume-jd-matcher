const ResumeAnalysis = require("../models/ResumeAnalysis");
const { analyzeResumeWithJD } = require("../services/analysisService");
const { extractTextFromPDF } = require("../services/pdfParser");

const uploadResume = async (req, res) => {

    try {

        const { jobDescription } = req.body;

      

        const resumeText = await extractTextFromPDF(req.file.path);
       console.log(resumeText);
       
        const result = await analyzeResumeWithJD(
            resumeText,
            jobDescription
        );

        const analysis = await ResumeAnalysis.create({
            resumeText,
            jobDescription,
            matchScore: result.matchScore,
            missingKeywords: result.missingKeywords,
            suggestions: result.suggestions,
        });

        res.status(200).json({
            success: true,
            message: "Resume analyzed successfully",
            analysis,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const getHistory = async (req, res) => {

    try {

        const history = await ResumeAnalysis.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            history,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    uploadResume,
    getHistory,
};
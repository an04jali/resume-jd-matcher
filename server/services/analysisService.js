const { analyzeResume } = require("./llmService");

const analyzeResumeWithJD = async (
    resumeText,
    jobDescription
) => {

    const result = await analyzeResume(
        resumeText,
        jobDescription
    );

    return JSON.parse(result);

};

module.exports = {
    analyzeResumeWithJD,
};